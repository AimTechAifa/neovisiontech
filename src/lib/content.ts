import { unstable_cache } from "next/cache";
import { and, asc, eq } from "drizzle-orm";
import { contactFaqs } from "@/content/faqs";
import { CONTENT_UPDATED_AT } from "@/content/revision";
import { fallbackSeoPages } from "@/content/seo-pages";
import { team } from "@/content/team";
import { technologyCatalog } from "@/content/technology-catalog";
import { servicesData } from "@/content/legacy/servicesData.js";
import { projectsData } from "@/content/legacy/projectsData.js";
import { trainingPrograms } from "@/content/legacy/trainingsData.js";
import {
  parseInrAmount,
  type Author,
  type Faq,
  type Project,
  type SeoPage,
  type Service,
  type Technology,
  type Training,
  type TrainingModule,
} from "@/content/types";
import { getDb } from "@/db";
import {
  authors,
  faqs,
  projects,
  seoPages,
  services,
  technologies,
  trainingModules,
  trainings,
} from "@/db/schema";

type RawTraining = {
  id: string;
  slug: string;
  title: string;
  category: string;
  level: string;
  duration: string;
  price: string;
  rating: number;
  students: string;
  heroImage: string;
  shortDescription: string;
  fullDescription: string;
  metaTitle: string;
  metaDescription: string;
  topics: string[];
  outcomes: string[];
  technologies: string[];
  updatedAt?: string;
};

function modulesFromTopics(topics: string[]): TrainingModule[] {
  return topics.map((title, sortOrder) => ({
    title,
    description: null,
    sortOrder,
  }));
}

function normalizeTraining(raw: RawTraining, modules?: TrainingModule[]): Training {
  const topics = raw.topics ?? [];
  return {
    ...raw,
    priceAmount: parseInrAmount(raw.price),
    topics,
    modules: modules && modules.length > 0 ? modules : modulesFromTopics(topics),
    updatedAt: raw.updatedAt ?? CONTENT_UPDATED_AT,
  };
}

const fallbackServices: Service[] = (servicesData as Omit<Service, "updatedAt">[]).map((service) => ({
  ...service,
  faqs: service.faqs ?? [],
  updatedAt: CONTENT_UPDATED_AT,
}));

const fallbackProjects: Project[] = (projectsData as Omit<Project, "updatedAt">[]).map((project) => ({
  ...project,
  storeLink: project.storeLink || null,
  testimonial: project.testimonial ?? null,
  updatedAt: CONTENT_UPDATED_AT,
}));

const fallbackTrainings: Training[] = (trainingPrograms as RawTraining[]).map((training) =>
  normalizeTraining(training),
);

function groupFaqs(rows: Faq[]) {
  const map = new Map<string, Faq[]>();
  for (const row of rows) {
    const key = `${row.entityType}:${row.entitySlug}`;
    const list = map.get(key) ?? [];
    list.push({ question: row.question, answer: row.answer });
    map.set(key, list);
  }
  return map;
}

async function loadServices(): Promise<Service[]> {
  const db = getDb();
  if (!db) return fallbackServices;

  const [rows, faqRows] = await Promise.all([
    db
      .select({
        slug: services.slug,
        title: services.title,
        metaTitle: services.metaTitle,
        metaDescription: services.metaDescription,
        heroImage: services.heroImage,
        category: services.category,
        shortDescription: services.shortDescription,
        fullDescription: services.fullDescription,
        benefits: services.benefits,
        useCases: services.useCases,
        technologies: services.technologies,
        process: services.process,
        updatedAt: services.updatedAt,
      })
      .from(services)
      .orderBy(asc(services.title)),
    db
      .select({
        entityType: faqs.entityType,
        entitySlug: faqs.entitySlug,
        question: faqs.question,
        answer: faqs.answer,
      })
      .from(faqs)
      .where(eq(faqs.entityType, "service"))
      .orderBy(asc(faqs.sortOrder)),
  ]);

  const faqMap = groupFaqs(faqRows);
  return rows.map((row) => ({
    ...row,
    updatedAt: row.updatedAt.toISOString(),
    faqs: faqMap.get(`service:${row.slug}`) ?? [],
  }));
}

async function loadProjects(): Promise<Project[]> {
  const db = getDb();
  if (!db) return fallbackProjects;
  return db
    .select({
      slug: projects.slug,
      title: projects.title,
      metaTitle: projects.metaTitle,
      metaDescription: projects.metaDescription,
      heroImage: projects.heroImage,
      category: projects.category,
      platform: projects.platform,
      industry: projects.industry,
      duration: projects.duration,
      year: projects.year,
      storeLink: projects.storeLink,
      storeType: projects.storeType,
      shortDescription: projects.shortDescription,
      challenge: projects.challenge,
      solution: projects.solution,
      results: projects.results,
      features: projects.features,
      technologies: projects.technologies,
      testimonial: projects.testimonial,
      updatedAt: projects.updatedAt,
    })
    .from(projects)
    .orderBy(asc(projects.title))
    .then((rows) => rows.map((row) => ({ ...row, updatedAt: row.updatedAt.toISOString() })));
}

async function loadTrainings(): Promise<Training[]> {
  const db = getDb();
  if (!db) return fallbackTrainings;

  const [rows, moduleRows] = await Promise.all([
    db
      .select({
        id: trainings.externalId,
        slug: trainings.slug,
        title: trainings.title,
        category: trainings.category,
        level: trainings.level,
        duration: trainings.duration,
        price: trainings.price,
        priceAmount: trainings.priceAmount,
        rating: trainings.rating,
        students: trainings.students,
        heroImage: trainings.heroImage,
        shortDescription: trainings.shortDescription,
        fullDescription: trainings.fullDescription,
        metaTitle: trainings.metaTitle,
        metaDescription: trainings.metaDescription,
        topics: trainings.topics,
        outcomes: trainings.outcomes,
        technologies: trainings.technologies,
        updatedAt: trainings.updatedAt,
      })
      .from(trainings)
      .orderBy(asc(trainings.title)),
    db
      .select({
        trainingSlug: trainingModules.trainingSlug,
        title: trainingModules.title,
        description: trainingModules.description,
        sortOrder: trainingModules.sortOrder,
      })
      .from(trainingModules)
      .orderBy(asc(trainingModules.sortOrder)),
  ]);

  const modulesBySlug = new Map<string, TrainingModule[]>();
  for (const row of moduleRows) {
    const list = modulesBySlug.get(row.trainingSlug) ?? [];
    list.push({ title: row.title, description: row.description, sortOrder: row.sortOrder });
    modulesBySlug.set(row.trainingSlug, list);
  }

  return rows.map((row) =>
    normalizeTraining(
      {
        id: row.id,
        slug: row.slug,
        title: row.title,
        category: row.category,
        level: row.level,
        duration: row.duration,
        price: row.price,
        rating: row.rating,
        students: row.students,
        heroImage: row.heroImage,
        shortDescription: row.shortDescription,
        fullDescription: row.fullDescription,
        metaTitle: row.metaTitle,
        metaDescription: row.metaDescription,
        topics: row.topics,
        outcomes: row.outcomes,
        technologies: row.technologies,
        updatedAt: row.updatedAt.toISOString(),
      },
      modulesBySlug.get(row.slug),
    ),
  );
}

async function loadTechnologies(): Promise<Technology[]> {
  const db = getDb();
  if (!db) return technologyCatalog;
  return db
    .select({
      slug: technologies.slug,
      name: technologies.name,
      color: technologies.color,
      category: technologies.category,
      type: technologies.type,
      description: technologies.description,
      iconKey: technologies.iconKey,
      sortOrder: technologies.sortOrder,
    })
    .from(technologies)
    .orderBy(asc(technologies.sortOrder));
}

async function loadAuthors(): Promise<Author[]> {
  const db = getDb();
  if (!db) return team;
  return db
    .select({
      slug: authors.slug,
      name: authors.name,
      role: authors.role,
      image: authors.image,
      bio: authors.bio,
      sortOrder: authors.sortOrder,
    })
    .from(authors)
    .orderBy(asc(authors.sortOrder));
}

async function loadFaqs(entityType: string, entitySlug: string): Promise<Faq[]> {
  const db = getDb();
  if (!db) {
    if (entityType === "page" && entitySlug === "contact") return contactFaqs;
    if (entityType === "service") {
      return fallbackServices.find((service) => service.slug === entitySlug)?.faqs ?? [];
    }
    return [];
  }
  const rows = await db
    .select({
      question: faqs.question,
      answer: faqs.answer,
    })
    .from(faqs)
    .where(and(eq(faqs.entityType, entityType), eq(faqs.entitySlug, entitySlug)))
    .orderBy(asc(faqs.sortOrder));
  return rows.filter((row) => row.question).map((row) => ({
    question: row.question,
    answer: row.answer,
  }));
}

async function loadSeoPages(): Promise<SeoPage[]> {
  const db = getDb();
  if (!db) return fallbackSeoPages;
  const rows = await db
    .select({
      slug: seoPages.slug,
      template: seoPages.template,
      params: seoPages.params,
      title: seoPages.title,
      description: seoPages.description,
      body: seoPages.body,
      canonical: seoPages.canonical,
      locale: seoPages.locale,
      noindex: seoPages.noindex,
      updatedAt: seoPages.updatedAt,
    })
    .from(seoPages)
    .orderBy(asc(seoPages.template), asc(seoPages.slug));

  return rows.map((row) => ({
    ...row,
    updatedAt: row.updatedAt.toISOString(),
  }));
}

const cached = {
  services: unstable_cache(loadServices, ["services"], { revalidate: 3600, tags: ["services"] }),
  projects: unstable_cache(loadProjects, ["projects"], { revalidate: 3600, tags: ["projects"] }),
  trainings: unstable_cache(loadTrainings, ["trainings"], { revalidate: 3600, tags: ["trainings"] }),
  technologies: unstable_cache(loadTechnologies, ["technologies"], { revalidate: 3600, tags: ["technologies"] }),
  authors: unstable_cache(loadAuthors, ["authors"], { revalidate: 3600, tags: ["authors"] }),
  seoPages: unstable_cache(loadSeoPages, ["seo-pages"], { revalidate: 3600, tags: ["seo-pages"] }),
};

export const getServices = cached.services;
export const getProjects = cached.projects;
export const getTrainings = cached.trainings;
export const getTechnologies = cached.technologies;
export const getAuthors = cached.authors;
export const getSeoPages = cached.seoPages;

export async function getServiceBySlug(slug: string) {
  const items = await getServices();
  return items.find((item) => item.slug === slug) ?? null;
}

export async function getProjectBySlug(slug: string) {
  const items = await getProjects();
  return items.find((item) => item.slug === slug) ?? null;
}

export async function getTrainingBySlug(slug: string) {
  const items = await getTrainings();
  return items.find((item) => item.slug === slug) ?? null;
}

export async function getPageFaqs(entityType: string, entitySlug: string) {
  return unstable_cache(
    () => loadFaqs(entityType, entitySlug),
    ["faqs", entityType, entitySlug],
    { revalidate: 3600, tags: ["faqs"] },
  )();
}

export async function getSeoPage(template: string, slug: string) {
  const pages = await getSeoPages();
  return pages.find((page) => page.template === template && page.slug === slug) ?? null;
}

export async function getServiceCityPage(serviceSlug: string, citySlug: string) {
  const pages = await getSeoPages();
  return (
    pages.find(
      (page) =>
        page.template === "service-city" &&
        page.params.serviceSlug === serviceSlug &&
        page.params.citySlug === citySlug,
    ) ?? null
  );
}

export function isIndexableSeoPage(page: SeoPage) {
  if (page.noindex) return false;
  const text = page.body.sections
    .flatMap((section) => [...section.paragraphs, ...(section.bullets ?? [])])
    .join(" ")
    .trim();
  return text.length >= 280 && page.body.sections.length >= 2;
}

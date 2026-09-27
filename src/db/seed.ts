import { servicesData } from "../content/legacy/servicesData.js";
import { projectsData } from "../content/legacy/projectsData.js";
import { trainingPrograms } from "../content/legacy/trainingsData.js";
import { contactFaqs } from "../content/faqs";
import { CONTENT_UPDATED_AT } from "../content/revision";
import { fallbackSeoPages } from "../content/seo-pages";
import { team } from "../content/team";
import { technologyCatalog } from "../content/technology-catalog";
import { parseInrAmount, type Project, type Service } from "../content/types";
import { closeDb, getDb } from "./index";
import {
  authors,
  faqs,
  leads,
  projects,
  seoPages,
  services,
  technologies,
  trainingModules,
  trainings,
} from "./schema";

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
};

async function main() {
  const db = getDb();
  if (!db) {
    console.error("DATABASE_URL is not set. Nothing to seed.");
    process.exit(1);
  }

  await db.delete(trainingModules);
  await db.delete(faqs);
  await db.delete(leads);
  await db.delete(seoPages);
  await db.delete(technologies);
  await db.delete(authors);
  await db.delete(trainings);
  await db.delete(projects);
  await db.delete(services);

  const serviceRows = servicesData as Service[];
  await db.insert(services).values(
    serviceRows.map((service) => ({
      slug: service.slug,
      title: service.title,
      metaTitle: service.metaTitle,
      metaDescription: service.metaDescription,
      heroImage: service.heroImage,
      category: service.category,
      shortDescription: service.shortDescription,
      fullDescription: service.fullDescription,
      benefits: service.benefits,
      useCases: service.useCases,
      technologies: service.technologies,
      process: service.process,
      updatedAt: new Date(CONTENT_UPDATED_AT),
    })),
  );

  const faqRows = [
    ...serviceRows.flatMap((service) =>
      (service.faqs ?? []).map((faq, sortOrder) => ({
        entityType: "service",
        entitySlug: service.slug,
        question: faq.question,
        answer: faq.answer,
        sortOrder,
      })),
    ),
    ...contactFaqs.map((faq, sortOrder) => ({
      entityType: "page",
      entitySlug: "contact",
      question: faq.question,
      answer: faq.answer,
      sortOrder,
    })),
  ];
  if (faqRows.length > 0) await db.insert(faqs).values(faqRows);

  const projectRows = projectsData as Project[];
  await db.insert(projects).values(
    projectRows.map((project) => ({
      slug: project.slug,
      title: project.title,
      metaTitle: project.metaTitle,
      metaDescription: project.metaDescription,
      heroImage: project.heroImage,
      category: project.category,
      platform: project.platform,
      industry: project.industry,
      duration: project.duration,
      year: project.year,
      storeLink: project.storeLink || null,
      storeType: project.storeType,
      shortDescription: project.shortDescription,
      challenge: project.challenge,
      solution: project.solution,
      results: project.results,
      features: project.features,
      technologies: project.technologies,
      testimonial: project.testimonial ?? null,
      updatedAt: new Date(CONTENT_UPDATED_AT),
    })),
  );

  const trainingRows = trainingPrograms as RawTraining[];
  await db.insert(trainings).values(
    trainingRows.map((training) => ({
      externalId: training.id,
      slug: training.slug,
      title: training.title,
      category: training.category,
      level: training.level,
      duration: training.duration,
      price: training.price,
      priceAmount: parseInrAmount(training.price),
      rating: training.rating,
      students: training.students,
      heroImage: training.heroImage,
      shortDescription: training.shortDescription,
      fullDescription: training.fullDescription,
      metaTitle: training.metaTitle,
      metaDescription: training.metaDescription,
      topics: training.topics,
      outcomes: training.outcomes,
      technologies: training.technologies,
      updatedAt: new Date(CONTENT_UPDATED_AT),
    })),
  );

  const moduleRows = trainingRows.flatMap((training) =>
    training.topics.map((title, sortOrder) => ({
      trainingSlug: training.slug,
      title,
      description: null,
      sortOrder,
    })),
  );
  if (moduleRows.length > 0) await db.insert(trainingModules).values(moduleRows);

  await db.insert(technologies).values(technologyCatalog);
  await db.insert(authors).values(team);
  await db.insert(seoPages).values(
    fallbackSeoPages.map((page) => ({
      slug: page.slug,
      template: page.template,
      params: page.params,
      title: page.title,
      description: page.description,
      body: page.body,
      canonical: page.canonical,
      locale: page.locale,
      noindex: page.noindex,
      updatedAt: new Date(page.updatedAt),
    })),
  );

  console.log(
    `Seeded ${serviceRows.length} services, ${projectRows.length} projects, ${trainingRows.length} trainings, ${fallbackSeoPages.length} SEO pages.`,
  );
  await closeDb();
}

main().catch(async (error) => {
  console.error(error);
  await closeDb();
  process.exit(1);
});

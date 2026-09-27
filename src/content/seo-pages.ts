import { servicesData } from "./legacy/servicesData.js";
import { projectsData } from "./legacy/projectsData.js";
import type { Project, SeoPage, Service } from "./types";

const services = servicesData as Service[];
const projects = projectsData as Project[];

/** Cities already published on the trainings page, plus the office city from the contact page. */
export const publishedCities = [
  { city: "Mumbai", state: "Maharashtra", slug: "mumbai", source: "trainings" },
  { city: "Bangalore", state: "Karnataka", slug: "bangalore", source: "trainings" },
  { city: "Pune", state: "Maharashtra", slug: "pune", source: "trainings" },
  { city: "Hyderabad", state: "Telangana", slug: "hyderabad", source: "trainings" },
  { city: "Delhi", state: "NCR", slug: "delhi", source: "trainings" },
  { city: "Chennai", state: "Tamil Nadu", slug: "chennai", source: "trainings" },
  { city: "Prayagraj", state: "Uttar Pradesh", slug: "prayagraj", source: "office" },
] as const;

const UPDATED = "2025-12-29T00:00:00.000Z";

function findService(slug: string) {
  const service = services.find((item) => item.slug === slug);
  if (!service) throw new Error(`Missing service ${slug}`);
  return service;
}

function findProject(slug: string) {
  const project = projects.find((item) => item.slug === slug);
  if (!project) throw new Error(`Missing project ${slug}`);
  return project;
}

function serviceCityPage(
  serviceSlug: string,
  citySlug: string,
  noindex: boolean,
): SeoPage {
  const service = findService(serviceSlug);
  const city = publishedCities.find((item) => item.slug === citySlug);
  if (!city) throw new Error(`Missing city ${citySlug}`);

  const locationNote =
    city.source === "office"
      ? `${city.city}, ${city.state} is the published NeoVision Tech office and training center (Lalbihara, Near Rajasthan Sweet House, Kanpur Road, Bamrauli).`
      : `${city.city}, ${city.state} is one of the cities listed on the NeoVision Tech trainings page.`;

  const sections = noindex
    ? [
        {
          heading: service.title,
          paragraphs: [`${service.title} for teams in ${city.city}.`],
        },
      ]
    : [
        {
          heading: "Overview",
          paragraphs: service.fullDescription.split(/\n\n+/).filter(Boolean),
        },
        {
          heading: "What this engagement includes",
          paragraphs: service.benefits.map((benefit) => `${benefit.title}. ${benefit.description}`),
        },
        {
          heading: `Context for ${city.city}`,
          paragraphs: [locationNote, service.shortDescription],
        },
        {
          heading: "Typical applications",
          paragraphs: [],
          bullets: service.useCases,
        },
        {
          heading: "How delivery usually runs",
          paragraphs: service.process.map((step) => `${step.step}: ${step.description}`),
        },
      ];

  return {
    slug: `${service.slug}-${city.slug}`,
    template: "service-city",
    params: {
      serviceSlug: service.slug,
      city: city.city,
      state: city.state,
      citySlug: city.slug,
    },
    title: `${service.title} in ${city.city}`,
    description: noindex
      ? `${service.shortDescription} Example thin page for ${city.city}; kept out of the index.`
      : service.metaDescription,
    body: { sections },
    canonical: null,
    locale: "en-IN",
    noindex,
    updatedAt: UPDATED,
  };
}

function industryPage(options: {
  slug: string;
  serviceSlug: string;
  projectSlug: string;
  noindex: boolean;
}): SeoPage {
  const service = findService(options.serviceSlug);
  const project = findProject(options.projectSlug);
  const sections = options.noindex
    ? [
        {
          heading: "Overview",
          paragraphs: [`${service.title} applied to ${project.industry}.`],
        },
      ]
    : [
        {
          heading: `${service.title} for ${project.industry}`,
          paragraphs: [service.shortDescription, ...service.fullDescription.split(/\n\n+/).filter(Boolean)],
        },
        {
          heading: `Related work: ${project.title}`,
          paragraphs: [
            project.shortDescription,
            ...project.challenge.split(/\n\n+/).filter(Boolean),
            ...project.solution.split(/\n\n+/).filter(Boolean),
          ],
        },
        {
          heading: "Capabilities used on this kind of work",
          paragraphs: [],
          bullets: [...service.useCases, ...project.features].slice(0, 8),
        },
      ];

  return {
    slug: options.slug,
    template: "industry",
    params: {
      serviceSlug: service.slug,
      projectSlug: project.slug,
      industry: project.industry,
    },
    title: options.noindex
      ? `${service.title} for education teams`
      : `${service.title} for ${project.category}`,
    description: options.noindex
      ? `Short example page combining ${service.title} with education. Marked noindex because the body is thin.`
      : `${service.metaDescription} Illustrated with the ${project.title} engagement.`,
    body: { sections },
    canonical: null,
    locale: "en-IN",
    noindex: options.noindex,
    updatedAt: UPDATED,
  };
}

/**
 * Small programmatic set derived only from services, projects, training cities, and the office address.
 * Indexable pages reuse full existing copy. Thin examples are noindex.
 */
export const fallbackSeoPages: SeoPage[] = [
  serviceCityPage("ai-business-automation-services", "hyderabad", false),
  serviceCityPage("agentic-ai-chatbot-development", "bangalore", false),
  serviceCityPage("industrial-training-programs", "prayagraj", false),
  serviceCityPage("digital-marketing-services", "pune", true),
  industryPage({
    slug: "ai-automation-for-fintech",
    serviceSlug: "ai-business-automation-services",
    projectSlug: "metfolio-gold-investment-app",
    noindex: false,
  }),
  industryPage({
    slug: "mobile-apps-for-logistics",
    serviceSlug: "mobile-app-development-services",
    projectSlug: "alladin-ice-delivery-app",
    noindex: false,
  }),
  industryPage({
    slug: "websites-for-education",
    serviceSlug: "seo-optimized-website-development",
    projectSlug: "international-edtech-platform",
    noindex: true,
  }),
];

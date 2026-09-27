import type { MetadataRoute } from "next";
import { isIndexableSeoPage } from "@/lib/content";
import { CONTENT_UPDATED_AT } from "@/content/revision";
import type { Project, SeoPage, Service, Training } from "@/content/types";
import { absoluteUrl } from "@/lib/site";

export const SITEMAP_CHUNK = 1000;

export type SitemapEntry = MetadataRoute.Sitemap[number];

const staticPaths: { path: string; changeFrequency: SitemapEntry["changeFrequency"]; priority: number }[] = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/about", changeFrequency: "monthly", priority: 0.8 },
  { path: "/services", changeFrequency: "weekly", priority: 0.9 },
  { path: "/projects", changeFrequency: "weekly", priority: 0.9 },
  { path: "/technologies", changeFrequency: "monthly", priority: 0.7 },
  { path: "/trainings", changeFrequency: "weekly", priority: 0.8 },
  { path: "/contact", changeFrequency: "yearly", priority: 0.6 },
  { path: "/privacy", changeFrequency: "yearly", priority: 0.3 },
];

export function staticSitemapEntries(lastModified = new Date(CONTENT_UPDATED_AT)): SitemapEntry[] {
  return staticPaths.map((item) => ({
    url: absoluteUrl(item.path),
    lastModified,
    changeFrequency: item.changeFrequency,
    priority: item.priority,
  }));
}

export function catalogSitemapEntries(input: {
  services: Service[];
  projects: Project[];
  trainings: Training[];
}): SitemapEntry[] {
  return [
    ...input.services.map((service) => ({
      url: absoluteUrl(`/services/${service.slug}`),
      lastModified: new Date(service.updatedAt),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
    ...input.projects.map((project) => ({
      url: absoluteUrl(`/projects/${project.slug}`),
      lastModified: new Date(project.updatedAt),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...input.trainings.map((training) => ({
      url: absoluteUrl(`/trainings/${training.slug}`),
      lastModified: new Date(training.updatedAt),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
  ];
}

export function indexableSeoEntries(pages: SeoPage[]): SitemapEntry[] {
  return pages.filter(isIndexableSeoPage).map((page) => ({
    url: seoPageUrl(page),
    lastModified: new Date(page.updatedAt),
    changeFrequency: "weekly" as const,
    priority: 0.5,
  }));
}

export function seoPageUrl(page: SeoPage) {
  if (page.canonical) return page.canonical;
  if (page.template === "service-city") {
    return absoluteUrl(`/services/${page.params.serviceSlug}/${page.params.citySlug}`);
  }
  return absoluteUrl(`/solutions/${page.template}/${page.slug}`);
}

export function chunkEntries<T>(items: T[], size = SITEMAP_CHUNK) {
  if (items.length === 0) return [[] as T[]];
  const chunks: T[][] = [];
  for (let index = 0; index < items.length; index += size) {
    chunks.push(items.slice(index, index + size));
  }
  return chunks;
}

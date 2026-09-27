import type { MetadataRoute } from "next";
import type { MarketPage } from "@/content/markets/types";
import { isIndexableSeoPage } from "@/lib/content";
import { CONTENT_UPDATED_AT } from "@/content/revision";
import type { Project, SeoPage, Service, Training } from "@/content/types";
import { SERVICE_REDIRECTS, locales, lp, type Locale } from "@/lib/i18n";
import { marketAlternates } from "@/lib/seo/hreflang";
import { absoluteUrl } from "@/lib/site";

export const SITEMAP_CHUNK = 1000;

export type SitemapEntry = MetadataRoute.Sitemap[number];

export const LOCALE_SITEMAP_ORDER = locales;

export function staticSitemapEntries(lastModified = new Date(CONTENT_UPDATED_AT)): SitemapEntry[] {
  return [
    {
      url: absoluteUrl("/"),
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
      alternates: { languages: marketAlternates("/", { home: true }) },
    },
    {
      url: absoluteUrl("/en-in/privacy"),
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
      alternates: { languages: marketAlternates("/privacy") },
    },
  ];
}

function serviceSitemapPath(slug: string) {
  return SERVICE_REDIRECTS[slug] ?? `/services/${slug}`;
}

export function catalogSitemapEntries(input: {
  services: Service[];
  projects: Project[];
  trainings: Training[];
}): SitemapEntry[] {
  return [
    ...input.services.map((service) => ({
      url: absoluteUrl(lp("en-in", serviceSitemapPath(service.slug))),
      lastModified: new Date(service.updatedAt),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
    ...input.projects.map((project) => ({
      url: absoluteUrl(lp("en-in", `/case-studies/${project.slug}`)),
      lastModified: new Date(project.updatedAt),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...input.trainings.map((training) => ({
      url: absoluteUrl(lp("en-in", `/trainings/${training.slug}`)),
      lastModified: new Date(training.updatedAt),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
  ];
}

export function localeSitemapEntries(input: {
  locale: Locale;
  pages: MarketPage[];
  projects: Project[];
  trainings: Training[];
}): SitemapEntry[] {
  const pages = input.pages.filter((page) => page.locale === input.locale);
  const entries: SitemapEntry[] = [];
  if (input.locale === "en-in") {
    entries.push(...staticSitemapEntries());
  }
  for (const page of pages) {
    const isHome = page.slug === "home";
    const path = isHome ? lp(input.locale) : lp(input.locale, `/${page.slug}`);
    if (input.locale === "en-in" && page.slug === "privacy") continue;
    entries.push({
      url: absoluteUrl(path),
      lastModified: new Date(page.updatedAt),
      changeFrequency: isHome ? "weekly" : "monthly",
      priority: isHome ? 0.9 : 0.7,
      alternates: {
        languages: marketAlternates(isHome ? "/" : `/${page.slug}`, { home: isHome }),
      },
    });
  }
  for (const project of input.projects) {
    const path = `/case-studies/${project.slug}`;
    entries.push({
      url: absoluteUrl(lp(input.locale, path)),
      lastModified: new Date(project.updatedAt),
      changeFrequency: "monthly",
      priority: 0.6,
      alternates: { languages: marketAlternates(path) },
    });
  }
  if (input.locale === "en-in") {
    entries.push({
      url: absoluteUrl(lp("en-in", "/trainings")),
      lastModified: new Date(CONTENT_UPDATED_AT),
      changeFrequency: "weekly",
      priority: 0.8,
    });
    for (const training of input.trainings) {
      entries.push({
        url: absoluteUrl(lp("en-in", `/trainings/${training.slug}`)),
        lastModified: new Date(training.updatedAt),
        changeFrequency: "weekly",
        priority: 0.7,
      });
    }
  }
  return entries;
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
    return absoluteUrl(`/en-in/services/${page.params.serviceSlug}/${page.params.citySlug}`);
  }
  return absoluteUrl(`/en-in/solutions/${page.template}/${page.slug}`);
}

export function chunkEntries<T>(items: T[], size = SITEMAP_CHUNK) {
  if (items.length === 0) return [[] as T[]];
  const chunks: T[][] = [];
  for (let index = 0; index < items.length; index += size) {
    chunks.push(items.slice(index, index + size));
  }
  return chunks;
}

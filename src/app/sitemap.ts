import type { MetadataRoute } from "next";
import { getMarketPages, getProjects, getSeoPages, getTrainings } from "@/lib/content";
import { chunkEntries, indexableSeoEntries, localeSitemapEntries, LOCALE_SITEMAP_ORDER } from "@/lib/seo/sitemap";

export const revalidate = 3600;

export async function generateSitemaps() {
  const seoPages = await getSeoPages();
  const seoChunks = chunkEntries(indexableSeoEntries(seoPages));
  return [
    ...LOCALE_SITEMAP_ORDER.map((_, index) => ({ id: index })),
    ...seoChunks.map((_, index) => ({ id: index + LOCALE_SITEMAP_ORDER.length })),
  ];
}

export default async function sitemap({ id }: { id: Promise<string> | number }): Promise<MetadataRoute.Sitemap> {
  const resolved = typeof id === "number" ? id : Number(await id);
  const locale = LOCALE_SITEMAP_ORDER[resolved];
  if (locale) {
    const [pages, projects, trainings] = await Promise.all([getMarketPages(), getProjects(), getTrainings()]);
    return localeSitemapEntries({ locale, pages, projects, trainings });
  }
  const entries = indexableSeoEntries(await getSeoPages());
  return chunkEntries(entries)[resolved - LOCALE_SITEMAP_ORDER.length] ?? [];
}

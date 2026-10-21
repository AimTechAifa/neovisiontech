import type { MetadataRoute } from "next";
import { getProjects, getSeoPages, getServices, getTrainings } from "@/lib/content";
import {
  catalogSitemapEntries,
  chunkEntries,
  indexableSeoEntries,
  staticSitemapEntries,
} from "@/lib/seo/sitemap";

export const revalidate = 3600;

export async function generateSitemaps() {
  const seoPages = await getSeoPages();
  const seoChunks = chunkEntries(indexableSeoEntries(seoPages));
  return [
    { id: 0 },
    { id: 1 },
    ...seoChunks.map((_, index) => ({ id: index + 2 })),
  ];
}

export default async function sitemap({ id }: { id: Promise<string> | number }): Promise<MetadataRoute.Sitemap> {
  const resolved = typeof id === "number" ? id : Number(await id);
  if (resolved === 0) return staticSitemapEntries();
  if (resolved === 1) {
    const [services, projects, trainings] = await Promise.all([getServices(), getProjects(), getTrainings()]);
    return catalogSitemapEntries({ services, projects, trainings });
  }
  const entries = indexableSeoEntries(await getSeoPages());
  return chunkEntries(entries)[resolved - 2] ?? [];
}

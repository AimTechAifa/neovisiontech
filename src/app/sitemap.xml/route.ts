import { NextResponse } from "next/server";
import { getSeoPages } from "@/lib/content";
import { chunkEntries, indexableSeoEntries } from "@/lib/seo/sitemap";
import { absoluteUrl } from "@/lib/site";

export const revalidate = 3600;

export async function GET() {
  const pages = await getSeoPages();
  const chunks = chunkEntries(indexableSeoEntries(pages));
  const ids = [0, 1, ...chunks.map((_, index) => index + 2)];
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${ids
  .map(
    (id) => `  <sitemap>
    <loc>${absoluteUrl(`/sitemap/${id}.xml`)}</loc>
  </sitemap>`,
  )
  .join("\n")}
</sitemapindex>
`;

  return new NextResponse(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=0, must-revalidate",
    },
  });
}

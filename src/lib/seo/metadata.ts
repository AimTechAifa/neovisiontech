import type { Metadata } from "next";
import { absoluteUrl, languageAlternates, siteConfig } from "@/lib/site";

type PageMeta = {
  title: string;
  description: string;
  path: string;
  image?: string;
  noindex?: boolean;
  type?: "website" | "article";
};

/** Collapse a repeated brand suffix such as "About Us | NeoVisionTech | NeoVisionTech". */
export function uniqueTitle(title: string) {
  const suffix = ` | ${siteConfig.shortName}`;
  let value = title.trim().replace(/\s+/g, " ");
  while (value.endsWith(suffix)) {
    const without = value.slice(0, -suffix.length).trim();
    if (without.endsWith(suffix) || without.endsWith(siteConfig.shortName)) {
      value = without;
      continue;
    }
    break;
  }
  return value;
}

export function pageMetadata({
  title,
  description,
  path,
  image,
  noindex = false,
  type = "website",
}: PageMeta): Metadata {
  const url = absoluteUrl(path);
  const summary = description.trim() || siteConfig.description;
  const pageTitle = uniqueTitle(title);
  const images = [{ url: absoluteUrl(image?.trim() || "/opengraph-image"), alt: pageTitle }];

  return {
    title: { absolute: pageTitle },
    description: summary,
    alternates: {
      canonical: noindex ? undefined : url,
      languages: languageAlternates(path),
    },
    robots: noindex
      ? { index: false, follow: true }
      : { index: true, follow: true },
    openGraph: {
      type,
      url,
      title: pageTitle,
      description: summary,
      siteName: siteConfig.shortName,
      locale: "en_IN",
      images,
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: summary,
      images: images.map((item) => item.url),
    },
  };
}

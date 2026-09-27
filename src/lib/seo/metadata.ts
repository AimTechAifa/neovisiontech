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
  const images = [{ url: absoluteUrl(image?.trim() || "/opengraph-image"), alt: title }];

  return {
    title: { absolute: title },
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
      title,
      description: summary,
      siteName: siteConfig.shortName,
      locale: "en_IN",
      images,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: summary,
      images: images.map((item) => item.url),
    },
  };
}

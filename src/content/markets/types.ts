import type { Locale } from "@/lib/i18n";

export type MarketSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type MarketFaq = { question: string; answer: string };

export type MarketPage = {
  locale: Locale;
  slug: string;
  title: string;
  description: string;
  h1: string;
  lede: string;
  sections: MarketSection[];
  faqs?: MarketFaq[];
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  machineDraft: boolean;
  updatedAt: string;
};

export type DraftCaseStudy = {
  slug: string;
  locale: Locale;
  title: string;
  description: string;
  h1: string;
  lede: string;
  sections: MarketSection[];
  machineDraft: boolean;
  noindex: true;
  draft: true;
  updatedAt: string;
};

export type Benefit = { title: string; description: string };
export type ProcessStep = { step: string; description: string };
export type Faq = { question: string; answer: string; entityType?: string; entitySlug?: string };

export type Service = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  heroImage: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  benefits: Benefit[];
  useCases: string[];
  technologies: string[];
  process: ProcessStep[];
  faqs: Faq[];
};

export type ProjectResult = { metric: string; value: string; description: string };
export type ProjectTestimonial = { quote: string; author: string; company: string };

export type Project = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  heroImage: string;
  category: string;
  platform: string;
  industry: string;
  duration: string;
  year: string;
  storeLink: string | null;
  storeType: string;
  shortDescription: string;
  challenge: string;
  solution: string;
  results: ProjectResult[];
  features: string[];
  technologies: string[];
  testimonial: ProjectTestimonial | null;
};

export type TrainingModule = {
  title: string;
  description: string | null;
  sortOrder: number;
};

export type Training = {
  id: string;
  slug: string;
  title: string;
  category: string;
  level: string;
  duration: string;
  price: string;
  priceAmount: number | null;
  rating: number;
  students: string;
  heroImage: string;
  shortDescription: string;
  fullDescription: string;
  metaTitle: string;
  metaDescription: string;
  topics: string[];
  modules: TrainingModule[];
  outcomes: string[];
  technologies: string[];
};

export type Technology = {
  slug: string;
  name: string;
  color: string;
  category: string;
  type: string | null;
  description: string | null;
  iconKey: string;
  sortOrder: number;
};

export type Author = {
  slug: string;
  name: string;
  role: string;
  image: string | null;
  bio: string | null;
  sortOrder: number;
};

export type SeoSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type SeoPage = {
  slug: string;
  template: string;
  params: Record<string, string>;
  title: string;
  description: string;
  body: { sections: SeoSection[] };
  canonical: string | null;
  locale: string;
  noindex: boolean;
  updatedAt: string;
};

export function parseInrAmount(price: string | null | undefined): number | null {
  if (!price) return null;
  const digits = price.replace(/[^\d]/g, "");
  if (!digits) return null;
  const value = Number(digits);
  return Number.isFinite(value) ? value : null;
}

export function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

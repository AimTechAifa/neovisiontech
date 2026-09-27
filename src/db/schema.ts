import {
  boolean,
  index,
  integer,
  jsonb,
  pgTable,
  real,
  serial,
  text,
  timestamp,
  uniqueIndex,
} from "drizzle-orm/pg-core";
import type { MarketFaq, MarketSection } from "@/content/markets/types";
import type { Benefit, ProcessStep, ProjectResult, ProjectTestimonial, SeoSection } from "@/content/types";

export const services = pgTable(
  "services",
  {
    id: serial("id").primaryKey(),
    slug: text("slug").notNull(),
    title: text("title").notNull(),
    metaTitle: text("meta_title").notNull(),
    metaDescription: text("meta_description").notNull(),
    heroImage: text("hero_image").notNull(),
    category: text("category").notNull(),
    shortDescription: text("short_description").notNull(),
    fullDescription: text("full_description").notNull(),
    benefits: jsonb("benefits").$type<Benefit[]>().notNull(),
    useCases: jsonb("use_cases").$type<string[]>().notNull(),
    technologies: jsonb("technologies").$type<string[]>().notNull(),
    process: jsonb("process").$type<ProcessStep[]>().notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (table) => [
    uniqueIndex("services_slug_idx").on(table.slug),
    index("services_category_idx").on(table.category),
    index("services_updated_at_idx").on(table.updatedAt),
  ],
);

export const projects = pgTable(
  "projects",
  {
    id: serial("id").primaryKey(),
    slug: text("slug").notNull(),
    title: text("title").notNull(),
    metaTitle: text("meta_title").notNull(),
    metaDescription: text("meta_description").notNull(),
    heroImage: text("hero_image").notNull(),
    category: text("category").notNull(),
    platform: text("platform").notNull(),
    industry: text("industry").notNull(),
    duration: text("duration").notNull(),
    year: text("year").notNull(),
    storeLink: text("store_link"),
    storeType: text("store_type").notNull(),
    shortDescription: text("short_description").notNull(),
    challenge: text("challenge").notNull(),
    solution: text("solution").notNull(),
    results: jsonb("results").$type<ProjectResult[]>().notNull(),
    features: jsonb("features").$type<string[]>().notNull(),
    technologies: jsonb("technologies").$type<string[]>().notNull(),
    testimonial: jsonb("testimonial").$type<ProjectTestimonial | null>(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (table) => [
    uniqueIndex("projects_slug_idx").on(table.slug),
    index("projects_category_idx").on(table.category),
    index("projects_updated_at_idx").on(table.updatedAt),
  ],
);

export const trainings = pgTable(
  "trainings",
  {
    id: serial("id").primaryKey(),
    externalId: text("external_id").notNull(),
    slug: text("slug").notNull(),
    title: text("title").notNull(),
    category: text("category").notNull(),
    level: text("level").notNull(),
    duration: text("duration").notNull(),
    price: text("price").notNull(),
    priceAmount: integer("price_amount"),
    rating: real("rating").notNull(),
    students: text("students").notNull(),
    heroImage: text("hero_image").notNull(),
    shortDescription: text("short_description").notNull(),
    fullDescription: text("full_description").notNull(),
    metaTitle: text("meta_title").notNull(),
    metaDescription: text("meta_description").notNull(),
    topics: jsonb("topics").$type<string[]>().notNull(),
    outcomes: jsonb("outcomes").$type<string[]>().notNull(),
    technologies: jsonb("technologies").$type<string[]>().notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (table) => [
    uniqueIndex("trainings_slug_idx").on(table.slug),
    index("trainings_category_idx").on(table.category),
    index("trainings_updated_at_idx").on(table.updatedAt),
  ],
);

export const trainingModules = pgTable(
  "training_modules",
  {
    id: serial("id").primaryKey(),
    trainingSlug: text("training_slug")
      .notNull()
      .references(() => trainings.slug, { onDelete: "cascade" }),
    title: text("title").notNull(),
    description: text("description"),
    sortOrder: integer("sort_order").notNull(),
  },
  (table) => [
    index("training_modules_training_slug_idx").on(table.trainingSlug),
    index("training_modules_sort_idx").on(table.trainingSlug, table.sortOrder),
  ],
);

export const technologies = pgTable(
  "technologies",
  {
    id: serial("id").primaryKey(),
    slug: text("slug").notNull(),
    name: text("name").notNull(),
    color: text("color").notNull(),
    category: text("category").notNull(),
    type: text("type"),
    description: text("description"),
    iconKey: text("icon_key").notNull(),
    sortOrder: integer("sort_order").notNull(),
  },
  (table) => [
    uniqueIndex("technologies_slug_idx").on(table.slug),
    index("technologies_category_idx").on(table.category),
  ],
);

export const faqs = pgTable(
  "faqs",
  {
    id: serial("id").primaryKey(),
    entityType: text("entity_type").notNull(),
    entitySlug: text("entity_slug").notNull(),
    question: text("question").notNull(),
    answer: text("answer").notNull(),
    sortOrder: integer("sort_order").notNull().default(0),
  },
  (table) => [
    index("faqs_entity_idx").on(table.entityType, table.entitySlug),
  ],
);

export const authors = pgTable(
  "authors",
  {
    id: serial("id").primaryKey(),
    slug: text("slug").notNull(),
    name: text("name").notNull(),
    role: text("role").notNull(),
    image: text("image"),
    bio: text("bio"),
    sortOrder: integer("sort_order").notNull(),
  },
  (table) => [uniqueIndex("authors_slug_idx").on(table.slug)],
);

export const leads = pgTable(
  "leads",
  {
    id: serial("id").primaryKey(),
    name: text("name").notNull(),
    email: text("email").notNull(),
    phone: text("phone").notNull(),
    inquiryType: text("inquiry_type").notNull(),
    selectedOption: text("selected_option").notNull(),
    message: text("message").notNull(),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (table) => [
    index("leads_created_at_idx").on(table.createdAt),
    index("leads_email_idx").on(table.email),
  ],
);

export const seoPages = pgTable(
  "seo_pages",
  {
    id: serial("id").primaryKey(),
    slug: text("slug").notNull(),
    template: text("template").notNull(),
    params: jsonb("params").$type<Record<string, string>>().notNull(),
    title: text("title").notNull(),
    description: text("description").notNull(),
    body: jsonb("body").$type<{ sections: SeoSection[] }>().notNull(),
    canonical: text("canonical"),
    locale: text("locale").notNull().default("en-IN"),
    noindex: boolean("noindex").notNull().default(false),
    updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (table) => [
    uniqueIndex("seo_pages_template_slug_locale_idx").on(table.template, table.slug, table.locale),
    index("seo_pages_slug_idx").on(table.slug),
    index("seo_pages_template_idx").on(table.template),
    index("seo_pages_locale_idx").on(table.locale),
    index("seo_pages_noindex_idx").on(table.noindex),
    index("seo_pages_updated_at_idx").on(table.updatedAt),
  ],
);

export const marketPageRows = pgTable(
  "market_pages",
  {
    id: serial("id").primaryKey(),
    locale: text("locale").notNull(),
    slug: text("slug").notNull(),
    title: text("title").notNull(),
    description: text("description").notNull(),
    h1: text("h1").notNull(),
    lede: text("lede").notNull(),
    sections: jsonb("sections").$type<MarketSection[]>().notNull(),
    faqs: jsonb("faqs").$type<MarketFaq[] | null>(),
    primaryCta: jsonb("primary_cta").$type<{ label: string; href: string }>().notNull(),
    secondaryCta: jsonb("secondary_cta").$type<{ label: string; href: string } | null>(),
    machineDraft: boolean("machine_draft").notNull().default(false),
    noindex: boolean("noindex").notNull().default(false),
    updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (table) => [
    uniqueIndex("market_pages_locale_slug_idx").on(table.locale, table.slug),
    index("market_pages_locale_idx").on(table.locale),
    index("market_pages_updated_at_idx").on(table.updatedAt),
  ],
);

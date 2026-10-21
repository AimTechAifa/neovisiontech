CREATE TABLE "authors" (
	"id" serial PRIMARY KEY NOT NULL,
	"slug" text NOT NULL,
	"name" text NOT NULL,
	"role" text NOT NULL,
	"image" text,
	"bio" text,
	"sort_order" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE "faqs" (
	"id" serial PRIMARY KEY NOT NULL,
	"entity_type" text NOT NULL,
	"entity_slug" text NOT NULL,
	"question" text NOT NULL,
	"answer" text NOT NULL,
	"sort_order" integer DEFAULT 0 NOT NULL
);
--> statement-breakpoint
CREATE TABLE "leads" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"email" text NOT NULL,
	"phone" text NOT NULL,
	"inquiry_type" text NOT NULL,
	"selected_option" text NOT NULL,
	"message" text NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "projects" (
	"id" serial PRIMARY KEY NOT NULL,
	"slug" text NOT NULL,
	"title" text NOT NULL,
	"meta_title" text NOT NULL,
	"meta_description" text NOT NULL,
	"hero_image" text NOT NULL,
	"category" text NOT NULL,
	"platform" text NOT NULL,
	"industry" text NOT NULL,
	"duration" text NOT NULL,
	"year" text NOT NULL,
	"store_link" text,
	"store_type" text NOT NULL,
	"short_description" text NOT NULL,
	"challenge" text NOT NULL,
	"solution" text NOT NULL,
	"results" jsonb NOT NULL,
	"features" jsonb NOT NULL,
	"technologies" jsonb NOT NULL,
	"testimonial" jsonb,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "seo_pages" (
	"id" serial PRIMARY KEY NOT NULL,
	"slug" text NOT NULL,
	"template" text NOT NULL,
	"params" jsonb NOT NULL,
	"title" text NOT NULL,
	"description" text NOT NULL,
	"body" jsonb NOT NULL,
	"canonical" text,
	"locale" text DEFAULT 'en-IN' NOT NULL,
	"noindex" boolean DEFAULT false NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "services" (
	"id" serial PRIMARY KEY NOT NULL,
	"slug" text NOT NULL,
	"title" text NOT NULL,
	"meta_title" text NOT NULL,
	"meta_description" text NOT NULL,
	"hero_image" text NOT NULL,
	"category" text NOT NULL,
	"short_description" text NOT NULL,
	"full_description" text NOT NULL,
	"benefits" jsonb NOT NULL,
	"use_cases" jsonb NOT NULL,
	"technologies" jsonb NOT NULL,
	"process" jsonb NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "technologies" (
	"id" serial PRIMARY KEY NOT NULL,
	"slug" text NOT NULL,
	"name" text NOT NULL,
	"color" text NOT NULL,
	"category" text NOT NULL,
	"type" text,
	"description" text,
	"icon_key" text NOT NULL,
	"sort_order" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE "training_modules" (
	"id" serial PRIMARY KEY NOT NULL,
	"training_slug" text NOT NULL,
	"title" text NOT NULL,
	"description" text,
	"sort_order" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE "trainings" (
	"id" serial PRIMARY KEY NOT NULL,
	"external_id" text NOT NULL,
	"slug" text NOT NULL,
	"title" text NOT NULL,
	"category" text NOT NULL,
	"level" text NOT NULL,
	"duration" text NOT NULL,
	"price" text NOT NULL,
	"price_amount" integer,
	"rating" real NOT NULL,
	"students" text NOT NULL,
	"hero_image" text NOT NULL,
	"short_description" text NOT NULL,
	"full_description" text NOT NULL,
	"meta_title" text NOT NULL,
	"meta_description" text NOT NULL,
	"topics" jsonb NOT NULL,
	"outcomes" jsonb NOT NULL,
	"technologies" jsonb NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "training_modules" ADD CONSTRAINT "training_modules_training_slug_trainings_slug_fk" FOREIGN KEY ("training_slug") REFERENCES "public"."trainings"("slug") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
CREATE UNIQUE INDEX "authors_slug_idx" ON "authors" USING btree ("slug");--> statement-breakpoint
CREATE INDEX "faqs_entity_idx" ON "faqs" USING btree ("entity_type","entity_slug");--> statement-breakpoint
CREATE INDEX "leads_created_at_idx" ON "leads" USING btree ("created_at");--> statement-breakpoint
CREATE INDEX "leads_email_idx" ON "leads" USING btree ("email");--> statement-breakpoint
CREATE UNIQUE INDEX "projects_slug_idx" ON "projects" USING btree ("slug");--> statement-breakpoint
CREATE INDEX "projects_category_idx" ON "projects" USING btree ("category");--> statement-breakpoint
CREATE INDEX "projects_updated_at_idx" ON "projects" USING btree ("updated_at");--> statement-breakpoint
CREATE UNIQUE INDEX "seo_pages_template_slug_locale_idx" ON "seo_pages" USING btree ("template","slug","locale");--> statement-breakpoint
CREATE INDEX "seo_pages_slug_idx" ON "seo_pages" USING btree ("slug");--> statement-breakpoint
CREATE INDEX "seo_pages_template_idx" ON "seo_pages" USING btree ("template");--> statement-breakpoint
CREATE INDEX "seo_pages_locale_idx" ON "seo_pages" USING btree ("locale");--> statement-breakpoint
CREATE INDEX "seo_pages_noindex_idx" ON "seo_pages" USING btree ("noindex");--> statement-breakpoint
CREATE INDEX "seo_pages_updated_at_idx" ON "seo_pages" USING btree ("updated_at");--> statement-breakpoint
CREATE UNIQUE INDEX "services_slug_idx" ON "services" USING btree ("slug");--> statement-breakpoint
CREATE INDEX "services_category_idx" ON "services" USING btree ("category");--> statement-breakpoint
CREATE INDEX "services_updated_at_idx" ON "services" USING btree ("updated_at");--> statement-breakpoint
CREATE UNIQUE INDEX "technologies_slug_idx" ON "technologies" USING btree ("slug");--> statement-breakpoint
CREATE INDEX "technologies_category_idx" ON "technologies" USING btree ("category");--> statement-breakpoint
CREATE INDEX "training_modules_training_slug_idx" ON "training_modules" USING btree ("training_slug");--> statement-breakpoint
CREATE INDEX "training_modules_sort_idx" ON "training_modules" USING btree ("training_slug","sort_order");--> statement-breakpoint
CREATE UNIQUE INDEX "trainings_slug_idx" ON "trainings" USING btree ("slug");--> statement-breakpoint
CREATE INDEX "trainings_category_idx" ON "trainings" USING btree ("category");--> statement-breakpoint
CREATE INDEX "trainings_updated_at_idx" ON "trainings" USING btree ("updated_at");
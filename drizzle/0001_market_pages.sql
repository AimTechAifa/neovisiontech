CREATE TABLE "market_pages" (
	"id" serial PRIMARY KEY NOT NULL,
	"locale" text NOT NULL,
	"slug" text NOT NULL,
	"title" text NOT NULL,
	"description" text NOT NULL,
	"h1" text NOT NULL,
	"lede" text NOT NULL,
	"sections" jsonb NOT NULL,
	"faqs" jsonb,
	"primary_cta" jsonb NOT NULL,
	"secondary_cta" jsonb,
	"machine_draft" boolean DEFAULT false NOT NULL,
	"noindex" boolean DEFAULT false NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX "market_pages_locale_slug_idx" ON "market_pages" USING btree ("locale","slug");--> statement-breakpoint
CREATE INDEX "market_pages_locale_idx" ON "market_pages" USING btree ("locale");--> statement-breakpoint
CREATE INDEX "market_pages_updated_at_idx" ON "market_pages" USING btree ("updated_at");

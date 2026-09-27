# NeoVision Tech

Marketing site for NeoVision Tech. Next.js 15 App Router, TypeScript, and Tailwind CSS v4. Pages are statically generated and revalidated. Postgres is optional: when `DATABASE_URL` is unset, the site builds and serves the seeded content that shipped with the previous Vite app.

## Architecture

- **App Router** under `src/app`. Server Components by default. Client components are limited to interactive pieces: header, theme, project and technology filters, contact form, assessment quiz, glowing cards, and animated backgrounds.
- **Content** is read through `src/lib/content.ts`. That module uses Drizzle when `DATABASE_URL` is set and otherwise returns the legacy catalogs in `src/content/legacy` plus team, FAQ, technology, and programmatic SEO seed data. Queries select the columns each page needs and are cached with `unstable_cache` (1 hour, tag `content`).
- **Routes preserved from the SPA:** `/`, `/about`, `/services`, `/services/[slug]`, `/projects`, `/projects/[slug]`, `/technologies`, `/trainings`, `/trainings/[slug]`, `/contact`, `/privacy`.
- **Programmatic SEO** adds `/services/[slug]/[city]` and `/solutions/[template]/[slug]`. See below.
- **APIs:** `POST /api/contact`, `POST /api/ai/quiz`, `POST /api/ai/roadmap`. The same logic is available as server actions in `src/app/actions.ts`.
- **SEO:** per-page Metadata API titles, descriptions, canonicals, Open Graph, Twitter cards, and `hreflang` alternates (`en-IN` and `x-default`). Every page emits a non-empty description (the site default when a page description is blank), `og:site_name`, `og:url`, `og:locale`, and an absolute `og:image`. JSON-LD covers Organization, WebSite, BreadcrumbList, Service, Course, SoftwareApplication, FAQPage, and Person, with `@id` and absolute `url` values. `app/sitemap.ts` splits static, catalog, and programmatic URLs and sets `lastmod` from each record. `app/robots.ts` is generated. Dynamic OG images use `next/og`. Unknown routes and unknown slugs call `notFound()` and render `app/not-found.tsx` with an HTTP 404. There is no SPA catch-all rewrite.
- **Home, services, projects, and technologies grids** keep the original page copy and layout. Detail pages, the trainings catalog, the about team, contact options, sitemaps, and programmatic pages read the content layer so a database can replace that data without a redesign.
- The homepage hero is a compressed WebP of the same Unsplash photograph the previous site loaded remotely, so the largest image is served from this origin. Animated path backgrounds and the pointer glow load after the first paint.

## Environment

Copy `.env.example` to `.env.local`. None of these are required for a production build.

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Public origin for canonicals, Open Graph, the sitemap, robots, and JSON-LD. Optional. See [Site URL](#site-url). |
| `DATABASE_URL` | Postgres connection string. Omit to use seed data in the repo. |
| `GROQ_API_KEY` | Server-only key for the training assessment and roadmap (`llama-3.3-70b-versatile`). Omit to use the built-in fallback. |
| `EMAIL_PROVIDER` | `resend` (default). Any other value skips sending. |
| `RESEND_API_KEY` | Resend API key. |
| `CONTACT_FROM_EMAIL` | From address Resend is allowed to send as. |
| `CONTACT_TO_EMAIL` | Inbox for leads. Defaults to `contact@neovisiontech.in`. |

Do not commit `.env`, `.env.local`, or any API key. The previous Groq key that lived in the browser bundle has been removed and should stay rotated.

## Site URL

Canonicals, `og:url`, sitemap locations, `robots.txt`, JSON-LD `@id` and `url`, and absolute `og:image` URLs all read one origin from `src/lib/site.ts`.

Resolution order:

1. `NEXT_PUBLIC_SITE_URL`, when it is set.
2. `https://` plus `VERCEL_PROJECT_PRODUCTION_URL` (Vercel sets this to the project production host and does not include a protocol).
3. `https://neovisiontech.vercel.app`.

Leave `NEXT_PUBLIC_SITE_URL` unset on the Vercel project so production builds use the Vercel production host. The site currently ships at `https://neovisiontech.vercel.app`.

`https://neovisiontech.com` is not this deployment. That hostname resolves to an unrelated server and returns 404, so it must not be the canonical origin. After DNS for the custom domain points at this Vercel project, set `NEXT_PUBLIC_SITE_URL` to `https://your-domain` (no trailing slash) and redeploy. Every absolute URL switches with that one variable.

## Database

Schema lives in `src/db/schema.ts`: services, projects, trainings, training modules, technologies, FAQs, authors, leads, and `seo_pages`. The initial SQL migration is `drizzle/0000_init.sql`.

```bash
npm run db:generate   # drizzle-kit generate, after schema edits
npm run db:migrate    # apply migrations (needs DATABASE_URL)
npm run db:seed       # replace catalog rows from the legacy data files
```

`seo_pages` columns: slug, template, params (JSON), title, description, body (sections JSON), canonical, locale, noindex, updated_at. Indexes cover template+slug+locale (unique), slug, template, locale, noindex, and updated_at.

The contact form stores a lead when the database is available. It sends mail when Resend is configured. It confirms success if either step works. If neither is configured it returns 503 and the form shows the published mailto address. A honeypot field (`company_website`) drops bot submissions quietly. Contact is limited to 5 requests per 10 minutes per IP; quiz and roadmap are limited to 8.

## Programmatic SEO

Example pages are generated in `src/content/seo-pages.ts` from existing services, projects, the cities already listed for trainings, and the Prayagraj office. Nothing in that set invents addresses, prices, or ratings.

| URL | Source |
| --- | --- |
| `/services/ai-business-automation-services/hyderabad` | Service copy + Hyderabad from the trainings city list |
| `/services/agentic-ai-chatbot-development/bangalore` | Service copy + Bangalore |
| `/services/industrial-training-programs/prayagraj` | Training service + published office |
| `/services/digital-marketing-services/pune` | Thin example, `noindex` |
| `/solutions/industry/ai-automation-for-fintech` | AI automation service + Metfolio |
| `/solutions/industry/mobile-apps-for-logistics` | Mobile apps service + Alladin Ice |
| `/solutions/industry/websites-for-education` | Thin example, `noindex` |

A page is indexable only when `noindex` is false, the body has at least two sections, and the visible text is at least 280 characters. Indexable URLs are emitted from the programmatic sitemap chunk (`/sitemap/2.xml` and onward, 1,000 URLs per file). `generateStaticParams` prerenders the indexable set plus one thin sample per route. `dynamicParams` and `revalidate = 3600` cover the long tail.

To add pages at scale:

1. Insert rows into `seo_pages` (or extend `fallbackSeoPages` when there is no database).
2. Use template `service-city` with `params.serviceSlug` and `params.citySlug` for `/services/[slug]/[city]`.
3. Use any other template name for `/solutions/[template]/[slug]`.
4. Set `noindex` on thin or draft rows. Leave `canonical` null unless the page should point at an existing URL.
5. Keep locale as `en-IN` until a new locale is added to `src/lib/site.ts`.
6. Run the seed, or insert directly, then redeploy. ISR will pick up database changes within the revalidate window. New slugs that were not in `generateStaticParams` render on first request.

`languageAlternates` already emits `en-IN` and `x-default` for every path. Adding a locale means prefixing routes and extending that map; unprefixed URLs stay the default locale.

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
npm run typecheck
npm run test
```

## Deploying on Vercel

The repo is a zero-config Next.js app (`vercel.json` sets the framework and does not rewrite unknown paths). Set the environment variables above in the Vercel project. A build succeeds with no database and no API keys. After adding `DATABASE_URL`, run `npm run db:migrate` and `npm run db:seed` against that database (Vercel does not run them automatically). Set `NEXT_PUBLIC_SITE_URL` only when the public hostname should differ from `VERCEL_PROJECT_PRODUCTION_URL`.

Owner actions for full functionality:

- Set `GROQ_API_KEY` so the training quiz and roadmap call Groq instead of the fallback.
- Set `DATABASE_URL`, migrate, and seed so leads persist and editors can change catalog rows.
- Set `RESEND_API_KEY` and `CONTACT_FROM_EMAIL` so the contact form sends email.

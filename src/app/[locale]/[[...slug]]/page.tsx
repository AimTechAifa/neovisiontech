import { notFound } from "next/navigation";
import { draftSlugs } from "@/content/markets/drafts";
import { CaseStudyView, DraftCaseStudyView } from "@/components/views/case-study-view";
import { ContactView } from "@/components/views/contact-view";
import { MarketPageView } from "@/components/views/market-page-view";
import { ProgrammaticPage } from "@/components/views/programmatic-page";
import { TrainingDetailView } from "@/components/views/training-detail-view";
import { TrainingsView } from "@/components/views/trainings-view";
import JsonLdScript from "@/components/json-ld";
import {
  getMarketPages,
  getPageFaqs,
  getProjects,
  getSeoPages,
  getServices,
  getTrainings,
} from "@/lib/content";
import { isLocale, locales, lp, openGraphLocale, type Locale } from "@/lib/i18n";
import {
  caseStudyPreface,
  crumbsFor,
  indiaOnlyMetadata,
  localeArea,
  marketExtras,
  marketMetadata,
  resolveLocaleRoute,
  solutionPath,
} from "@/lib/locale-route";
import { marketAlternates } from "@/lib/seo/hreflang";
import {
  breadcrumbJsonLd,
  courseJsonLd,
  faqJsonLd,
  marketServiceJsonLd,
  personJsonLd,
  projectJsonLd,
  serviceJsonLd,
  techArticleJsonLd,
} from "@/lib/seo/jsonld";
import { pageMetadata } from "@/lib/seo/metadata";

export const revalidate = 3600;
export const dynamicParams = true;

export async function generateStaticParams() {
  const [markets, projects, trainings, seoPages] = await Promise.all([
    getMarketPages(),
    getProjects(),
    getTrainings(),
    getSeoPages(),
  ]);
  const params: { locale: string; slug: string[] }[] = [];
  for (const locale of locales) {
    params.push({ locale, slug: [] });
    for (const page of markets.filter((item) => item.locale === locale && item.slug !== "home")) {
      params.push({ locale, slug: page.slug.split("/") });
    }
    for (const project of projects) {
      params.push({ locale, slug: ["case-studies", project.slug] });
    }
    for (const draft of draftSlugs) {
      params.push({ locale, slug: ["case-studies", draft] });
    }
    if (locale === "en-in") {
      params.push({ locale, slug: ["trainings"] });
      for (const training of trainings) params.push({ locale, slug: ["trainings", training.slug] });
      for (const page of seoPages) {
        if (page.template === "service-city" && page.params.serviceSlug && page.params.citySlug) {
          params.push({ locale, slug: ["services", page.params.serviceSlug, page.params.citySlug] });
        } else if (page.template !== "service-city") {
          params.push({ locale, slug: ["solutions", page.template, page.slug] });
        }
      }
    }
  }
  return params;
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug?: string[] }> }) {
  const { locale, slug } = await params;
  const resolved = await resolveLocaleRoute(locale, slug);
  if (!resolved) notFound();
  if (resolved.kind === "market") return marketMetadata(resolved.locale, resolved.page);
  if (resolved.kind === "case") {
    const path = `/case-studies/${resolved.project.slug}`;
    return pageMetadata({
      title: resolved.project.metaTitle,
      description: resolved.project.metaDescription,
      path: lp(resolved.locale, path),
      image: resolved.project.heroImage,
      type: "article",
      languages: marketAlternates(path),
      ogLocale: openGraphLocale(resolved.locale),
    });
  }
  if (resolved.kind === "draft") {
    return pageMetadata({
      title: resolved.draft.title,
      description: resolved.draft.description,
      path: lp(resolved.locale, `/case-studies/${resolved.draft.slug}`),
      noindex: true,
      type: "article",
      ogLocale: openGraphLocale(resolved.locale),
    });
  }
  if (resolved.kind === "trainings") {
    return indiaOnlyMetadata(
      "Industrial Training Programs | NeoVisionTech",
      "Industrial training programmes in India, priced in INR, from the Prayagraj office.",
      "/trainings",
    );
  }
  if (resolved.kind === "training") {
    return indiaOnlyMetadata(
      resolved.training.metaTitle,
      resolved.training.metaDescription,
      `/trainings/${resolved.training.slug}`,
    );
  }
  const seo = resolved.kind === "city" || resolved.kind === "solution" ? resolved.page : null;
  if (!seo) notFound();
  return indiaOnlyMetadata(`${seo.title} | NeoVisionTech`, seo.description, solutionPath(seo), seo.noindex);
}

export default async function LocalePage({ params }: { params: Promise<{ locale: string; slug?: string[] }> }) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const resolved = await resolveLocaleRoute(locale, slug);
  if (!resolved) notFound();

  if (resolved.kind === "market") {
    const extras = await marketExtras(resolved.locale, resolved.page);
    const path = resolved.page.slug === "home" ? lp(resolved.locale) : lp(resolved.locale, `/${resolved.page.slug}`);
    const crumbs = crumbsFor(resolved.locale, resolved.page);
    const faqSource = [
      ...(resolved.page.faqs ?? []),
      ...(resolved.locale === "en-in" && extras.service ? extras.service.faqs : []),
    ];
    const contactFaqs = resolved.page.slug === "contact" ? await getPageFaqs("page", "contact") : [];
    return (
      <>
        <JsonLdScript
          data={[
            breadcrumbJsonLd(crumbs.map((crumb) => ({ name: crumb.label, path: crumb.path ?? path }))),
            marketServiceJsonLd({
              name: resolved.page.h1,
              description: resolved.page.description,
              path,
              serviceType: resolved.page.slug,
              areaServed: localeArea(resolved.locale),
            }),
            faqJsonLd(faqSource),
            faqJsonLd(contactFaqs),
            ...extras.team.map((person) => personJsonLd(person, lp(resolved.locale, "/about"))),
          ]}
        />
        <MarketPageView
          locale={resolved.locale}
          page={resolved.page}
          crumbs={crumbs}
          related={extras.related}
          service={extras.service}
          team={extras.team}
          technologies={extras.technologies}
          projects={extras.projects}
          trainings={extras.trainings}
        />
        {resolved.page.slug === "contact" && (
          <ContactSection locale={resolved.locale} />
        )}
      </>
    );
  }

  if (resolved.kind === "case") {
    const path = lp(resolved.locale, `/case-studies/${resolved.project.slug}`);
    return (
      <>
        <JsonLdScript
          data={[
            techArticleJsonLd({
              locale: resolved.locale,
              path,
              title: resolved.project.title,
              description: resolved.project.shortDescription,
              date: resolved.project.updatedAt,
            }),
            projectJsonLd(resolved.project, path),
          ]}
        />
        <CaseStudyView locale={resolved.locale} project={resolved.project} preface={caseStudyPreface[resolved.locale]} />
      </>
    );
  }

  if (resolved.kind === "draft") {
    const path = lp(resolved.locale, `/case-studies/${resolved.draft.slug}`);
    return (
      <>
        <JsonLdScript
          data={[
            techArticleJsonLd({
              locale: resolved.locale,
              path,
              title: resolved.draft.h1,
              description: resolved.draft.description,
              date: resolved.draft.updatedAt,
            }),
          ]}
        />
        <DraftCaseStudyView locale={resolved.locale} draft={resolved.draft} />
      </>
    );
  }

  if (resolved.kind === "trainings") {
    const programs = await getTrainings();
    return (
      <>
        <JsonLdScript
          data={breadcrumbJsonLd([
            { name: "Home", path: lp("en-in") },
            { name: "Trainings", path: lp("en-in", "/trainings") },
          ])}
        />
        <TrainingsView programs={programs} />
      </>
    );
  }

  if (resolved.kind === "training") {
    const path = lp("en-in", `/trainings/${resolved.training.slug}`);
    return (
      <>
        <JsonLdScript
          data={[
            breadcrumbJsonLd([
              { name: "Home", path: lp("en-in") },
              { name: "Trainings", path: lp("en-in", "/trainings") },
              { name: resolved.training.title, path },
            ]),
            courseJsonLd(resolved.training, path),
          ]}
        />
        <TrainingDetailView training={resolved.training} />
      </>
    );
  }

  const seo = resolved.page;
  const service = resolved.service;
  const path = lp("en-in", solutionPath(seo));
  return (
    <>
      <JsonLdScript
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: lp("en-in") },
            { name: "Services", path: lp("en-in", "/services") },
            { name: seo.title, path },
          ]),
          service ? serviceJsonLd(service, path) : null,
        ]}
      />
      <ProgrammaticPage page={seo} service={service} />
    </>
  );
}

async function ContactSection({ locale }: { locale: Locale }) {
  const [services, trainings] = await Promise.all([getServices(), locale === "en-in" ? getTrainings() : Promise.resolve([])]);
  return (
    <ContactView
      locale={locale}
      services={services.map((service) => ({ title: service.title }))}
      trainings={trainings.map((training) => ({ title: training.title }))}
      showTrainings={locale === "en-in"}
    />
  );
}

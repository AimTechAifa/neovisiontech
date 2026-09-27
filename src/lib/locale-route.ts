import { draftCaseStudy, draftSlugs } from "@/content/markets/drafts";
import { caseStudyPreface } from "@/content/markets/pages";
import { childLabels } from "@/content/markets/labels";
import type { MarketPage } from "@/content/markets/types";
import type { Author, Project, SeoPage, Service, Technology, Training } from "@/content/types";
import {
  getAuthors,
  getMarketPage,
  getProjectBySlug,
  getProjects,
  getSeoPage,
  getServiceBySlug,
  getServiceCityPage,
  getTechnologies,
  getTrainingBySlug,
  getTrainings,
} from "@/lib/content";
import {
  SILO_SOURCE,
  htmlLanguage,
  isLocale,
  lp,
  marketArea,
  openGraphLocale,
  siloChildren,
  type Locale,
} from "@/lib/i18n";
import { marketAlternates } from "@/lib/seo/hreflang";
import { pageMetadata } from "@/lib/seo/metadata";

export async function resolveLocaleRoute(localeParam: string, slugParts: string[] | undefined) {
  if (!isLocale(localeParam)) return null;
  const locale: Locale = localeParam;
  const parts = slugParts ?? [];
  const slug = parts.join("/");

  if (parts.length === 0) {
    const page = await getMarketPage(locale, "home");
    return page ? { kind: "market" as const, locale, page } : null;
  }

  if (parts[0] === "case-studies" && parts.length === 2 && parts[1]) {
    const draft = draftCaseStudy(locale, parts[1]);
    if (draft) return { kind: "draft" as const, locale, draft };
    const project = await getProjectBySlug(parts[1]);
    if (!project) return null;
    return { kind: "case" as const, locale, project };
  }

  if (parts[0] === "trainings") {
    if (locale !== "en-in") return null;
    if (parts.length === 1) return { kind: "trainings" as const, locale };
    if (parts.length === 2 && parts[1]) {
      const training = await getTrainingBySlug(parts[1]);
      return training ? { kind: "training" as const, locale, training } : null;
    }
    return null;
  }

  if (parts[0] === "solutions" && parts.length === 3 && parts[1] && parts[2]) {
    if (locale !== "en-in") return null;
    const page = await getSeoPage(parts[1], parts[2]);
    if (!page) return null;
    const service = page.params.serviceSlug ? await getServiceBySlug(page.params.serviceSlug) : null;
    return { kind: "solution" as const, locale, page, service };
  }

  if (parts[0] === "services" && parts.length === 3 && parts[1] && parts[2]) {
    if (locale !== "en-in") return null;
    const page = await getServiceCityPage(parts[1], parts[2]);
    if (!page) return null;
    const service = await getServiceBySlug(parts[1]);
    return { kind: "city" as const, locale, page, service };
  }

  const page = await getMarketPage(locale, slug);
  if (!page) return null;
  return { kind: "market" as const, locale, page };
}

export function marketMetadata(locale: Locale, page: MarketPage) {
  const isHome = page.slug === "home";
  const path = isHome ? lp(locale) : lp(locale, `/${page.slug}`);
  return pageMetadata({
    title: page.title,
    description: page.description,
    path,
    languages: marketAlternates(isHome ? "/" : `/${page.slug}`, { home: isHome }),
    ogLocale: openGraphLocale(locale),
  });
}

export function indiaOnlyMetadata(title: string, description: string, path: string, noindex = false) {
  return pageMetadata({
    title,
    description,
    path: lp("en-in", path),
    noindex,
    languages: marketAlternates(path, { only: ["en-in"] }),
    ogLocale: openGraphLocale("en-in"),
  });
}

export async function marketExtras(locale: Locale, page: MarketPage) {
  const related = relatedLinks(locale, page.slug);
  const source = locale === "en-in" ? SILO_SOURCE[page.slug] : undefined;
  const service = source ? await getServiceBySlug(source) : null;
  const team = page.slug === "about" ? await getAuthors() : [];
  const technologies = page.slug === "technologies" ? await getTechnologies() : [];
  const projects = page.slug === "case-studies" ? await getProjects() : [];
  const trainings = locale === "en-in" && page.slug === "home" ? await getTrainings() : [];
  return { related, service, team, technologies, projects, trainings };
}

function relatedLinks(locale: Locale, slug: string) {
  const labels = childLabels[locale];
  const hubs = [
    { key: "ai-solutions" as const, label: locale === "fr-lu" ? "Solutions IA" : "Enterprise AI" },
    { key: "engineering" as const, label: locale === "fr-lu" ? "Ingénierie" : "Engineering" },
  ];
  for (const hub of hubs) {
    const children = siloChildren[hub.key];
    if (slug === hub.key) {
      return children.map((child) => ({
        href: lp(locale, `/${hub.key}/${child}`),
        label: labels[child] ?? child,
      }));
    }
    if (slug.startsWith(`${hub.key}/`)) {
      return [
        { href: lp(locale, `/${hub.key}`), label: hub.label },
        ...children
          .filter((child) => `${hub.key}/${child}` !== slug)
          .map((child) => ({ href: lp(locale, `/${hub.key}/${child}`), label: labels[child] ?? child })),
      ];
    }
  }
  if (slug === "services") {
    return [
      { href: lp(locale, "/ai-solutions"), label: locale === "fr-lu" ? "Solutions IA" : "Enterprise AI" },
      { href: lp(locale, "/engineering"), label: locale === "fr-lu" ? "Ingénierie" : "Engineering" },
      { href: lp(locale, "/services/digital-marketing"), label: labels["digital-marketing"] ?? "Digital marketing" },
    ];
  }
  if (slug === "services/digital-marketing") {
    return [{ href: lp(locale, "/services"), label: locale === "fr-lu" ? "Services" : "Services" }];
  }
  return [];
}

export function crumbsFor(locale: Locale, page: MarketPage) {
  const home = locale === "fr-lu" ? "Accueil" : "Home";
  const items: { label: string; path: string | null }[] = [{ label: home, path: lp(locale) }];
  if (page.slug === "home") return items;
  const parts = page.slug.split("/");
  if (parts.length === 2 && parts[0] && parts[1]) {
    const parent = parts[0] === "ai-solutions"
      ? locale === "fr-lu" ? "Solutions IA" : "Enterprise AI"
      : parts[0] === "engineering"
        ? locale === "fr-lu" ? "Ingénierie" : "Engineering"
        : "Services";
    items.push({ label: parent, path: lp(locale, `/${parts[0]}`) });
  }
  items.push({ label: page.h1, path: null });
  return items;
}

export function localeLanguage(locale: Locale) {
  return htmlLanguage(locale);
}

export function localeArea(locale: Locale) {
  return marketArea(locale);
}

export type MarketBundle = {
  related: { href: string; label: string }[];
  service: Service | null;
  team: Author[];
  technologies: Technology[];
  projects: Project[];
  trainings: Training[];
};

export function solutionPath(page: SeoPage) {
  if (page.template === "service-city") {
    return `/services/${page.params.serviceSlug}/${page.params.citySlug}`;
  }
  return `/solutions/${page.template}/${page.slug}`;
}

export { draftSlugs, caseStudyPreface };

import { describe, expect, it } from "vitest";
import { fallbackSeoPages } from "@/content/seo-pages";
import { team } from "@/content/team";
import { contactFaqs } from "@/content/faqs";
import { servicesData } from "@/content/legacy/servicesData.js";
import { projectsData } from "@/content/legacy/projectsData.js";
import { trainingPrograms } from "@/content/legacy/trainingsData.js";
import { parseInrAmount, type Project, type Service, type Training } from "@/content/types";
import {
  breadcrumbJsonLd,
  courseJsonLd,
  faqJsonLd,
  organizationJsonLd,
  personJsonLd,
  projectJsonLd,
  serviceJsonLd,
  websiteJsonLd,
} from "@/lib/seo/jsonld";
import { CONTENT_UPDATED_AT } from "@/content/revision";
import { pageMetadata, uniqueTitle } from "@/lib/seo/metadata";
import { professionalServiceJsonLd } from "@/lib/seo/jsonld";
import { catalogSitemapEntries, indexableSeoEntries, localeSitemapEntries, seoPageUrl, staticSitemapEntries } from "@/lib/seo/sitemap";
import { resolveSiteUrl, siteConfig } from "@/lib/site";
import { SERVICE_REDIRECTS, legacyRedirect, lp } from "@/lib/i18n";
import { draftCaseStudies } from "@/content/markets/drafts";
import { marketPages } from "@/content/markets/pages";

const service = (servicesData as Service[])[0];
const project = (projectsData as Project[])[0];
const training = trainingPrograms[0] as Training;

describe("JSON-LD", () => {
  it("describes the organization with logo, contact points, and sameAs", () => {
    const data = organizationJsonLd();
    expect(data["@context"]).toBe("https://schema.org");
    expect(data["@type"]).toBe("Organization");
    expect(data["@id"]).toBe(`${siteConfig.url}/#organization`);
    expect(data.url).toBe(siteConfig.url);
    expect(data.logo).toEqual(expect.stringContaining("logo-512.webp"));
    expect(data.sameAs).toEqual(expect.arrayContaining([expect.stringContaining("linkedin.com")]));
    const points = data.contactPoint as { email: string; telephone: string }[];
    expect(points.length).toBeGreaterThanOrEqual(2);
    expect(points[0]?.email).toContain("@");
    expect(points[0]?.telephone).toMatch(/^\+91/);
    expect(JSON.stringify(data)).not.toMatch(/ratingValue|aggregateRating|reviewCount|foundingDate|SOC 2|GDPR/i);
  });

  it("describes the website without inventing a search action", () => {
    const data = websiteJsonLd();
    expect(data["@type"]).toBe("WebSite");
    expect(data["@id"]).toBe(`${siteConfig.url}/#website`);
    expect(data.url).toBe(siteConfig.url);
    expect(data).not.toHaveProperty("potentialAction");
  });

  it("numbers breadcrumb positions from the home page", () => {
    const data = breadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "Services", path: "/services" },
      { name: service.title, path: `/services/${service.slug}` },
    ]);
    const items = data.itemListElement as { position: number; name: string; item: string }[];
    expect(items.map((item) => item.position)).toEqual([1, 2, 3]);
    expect(items[2]?.item).toContain(`/services/${service.slug}`);
  });

  it("describes a service from existing copy", () => {
    const data = serviceJsonLd(service);
    expect(data["@type"]).toBe("Service");
    expect(data["@id"]).toBe(`${siteConfig.url}/services/${service.slug}#service`);
    expect(data.url).toBe(`${siteConfig.url}/services/${service.slug}`);
    expect(String(data.image).startsWith("http")).toBe(true);
    expect(data.name).toBe(service.title);
    expect(data.description).toBe(service.shortDescription);
    expect(data.serviceType).toBe(service.category);
  });

  it("describes a course with an offer and course instances only from published data", () => {
    const data = courseJsonLd({ ...training, modules: [], priceAmount: parseInrAmount(training.price) });
    expect(data["@type"]).toBe("Course");
    expect(data["@id"]).toBe(`${siteConfig.url}/trainings/${training.slug}#course`);
    expect(String(data.image).startsWith("http")).toBe(true);
    const offer = data.offers as { price: string; priceCurrency: string };
    expect(offer.priceCurrency).toBe("INR");
    expect(offer.price).toBe(String(parseInrAmount(training.price)));
    const instances = data.hasCourseInstance as { ["@type"]: string; location: { name: string } }[];
    expect(instances.length).toBeGreaterThan(0);
    expect(instances.every((item) => item["@type"] === "CourseInstance")).toBe(true);
    expect(instances.some((item) => item.location.name === "Hyderabad")).toBe(true);
    expect(data).not.toHaveProperty("aggregateRating");
  });

  it("describes a project as a software application without a fake price", () => {
    const data = projectJsonLd(project);
    expect(data["@type"]).toBe("SoftwareApplication");
    expect(data["@id"]).toBe(`${siteConfig.url}/projects/${project.slug}#software`);
    expect(data.url).toBe(`${siteConfig.url}/projects/${project.slug}`);
    expect(data.name).toBe(project.title);
    expect(data.operatingSystem).toBe(project.platform);
    expect(data).not.toHaveProperty("offers");
    expect(data).not.toHaveProperty("aggregateRating");
  });

  it("builds FAQPage entities and skips an empty list", () => {
    expect(faqJsonLd([])).toBeNull();
    const data = faqJsonLd(contactFaqs);
    expect(data?.["@type"]).toBe("FAQPage");
    const questions = data?.mainEntity as { name: string; acceptedAnswer: { text: string } }[];
    expect(questions).toHaveLength(contactFaqs.length);
    expect(questions[0]?.acceptedAnswer.text.length).toBeGreaterThan(10);
  });

  it("describes leadership as people and only adds an image when one exists", () => {
    const ceo = personJsonLd(team[0]);
    expect(ceo["@type"]).toBe("Person");
    expect(ceo.jobTitle).toBe("CEO & Founder");
    expect(ceo.image).toEqual(expect.stringContaining("/images/ceo.webp"));
    const developer = personJsonLd(team[2]);
    expect(developer).not.toHaveProperty("image");
  });
});

describe("programmatic sitemap", () => {
  it("publishes substantial pages and drops thin noindex examples", () => {
    const urls = indexableSeoEntries(fallbackSeoPages).map((entry) => entry.url);
    expect(urls.some((url) => url.includes("/services/ai-business-automation-services/hyderabad"))).toBe(true);
    expect(urls.some((url) => url.includes("/solutions/industry/ai-automation-for-fintech"))).toBe(true);
    expect(urls.some((url) => url.includes("pune"))).toBe(false);
    expect(urls.some((url) => url.includes("websites-for-education"))).toBe(false);
    const dated = indexableSeoEntries(fallbackSeoPages)[0];
    expect(dated?.lastModified).toEqual(new Date(CONTENT_UPDATED_AT));
    const thin = fallbackSeoPages.find((page) => page.noindex);
    expect(thin).toBeTruthy();
    expect(seoPageUrl(thin!).length).toBeGreaterThan(10);
  });
});

describe("site origin and metadata", () => {
  it("resolves the public origin from env, then Vercel, then the deployment URL", () => {
    expect(resolveSiteUrl({})).toBe("https://neovisiontech.vercel.app");
    expect(resolveSiteUrl({ VERCEL_PROJECT_PRODUCTION_URL: "neovisiontech.vercel.app" })).toBe(
      "https://neovisiontech.vercel.app",
    );
    expect(resolveSiteUrl({ NEXT_PUBLIC_SITE_URL: "https://example.com/" })).toBe("https://example.com");
    expect(siteConfig.url).not.toContain("neovisiontech.com");
  });

  it("keeps the brand suffix once", () => {
    expect(uniqueTitle("About Us | NeoVisionTech | NeoVisionTech")).toBe("About Us | NeoVisionTech");
    expect(uniqueTitle("Technologies | NeoVisionTech")).toBe("Technologies | NeoVisionTech");
    const about = pageMetadata({
      title: "About Us | NeoVisionTech | NeoVisionTech",
      description: "About NeoVision Tech.",
      path: "/about",
    });
    expect(about.title).toEqual({ absolute: "About Us | NeoVisionTech" });
    const technologies = pageMetadata({
      title: "Technologies | NeoVisionTech",
      description: "Stack",
      path: "/technologies",
    });
    const trainings = pageMetadata({
      title: "Industrial Training Programs | NeoVisionTech",
      description: "Courses",
      path: "/trainings",
    });
    const privacy = pageMetadata({
      title: "Privacy Policy | NeoVisionTech",
      description: "",
      path: "/privacy",
    });
    expect(technologies.description?.length).toBeGreaterThan(0);
    expect(technologies.title).toEqual({ absolute: "Technologies | NeoVisionTech" });
    expect(trainings.title).toEqual({ absolute: "Industrial Training Programs | NeoVisionTech" });
    expect((trainings.openGraph as { locale?: string }).locale).toBe("en_IN");
    expect(privacy.description).toBe(siteConfig.description);
    const draft = pageMetadata({
      title: "Draft",
      description: "Unpublished template",
      path: "/en-us/case-studies/secure-rag-fintech",
      noindex: true,
    });
    expect(draft.robots).toMatchObject({ index: false });
    expect(draft.alternates?.canonical).toBeUndefined();
    expect(draft.alternates?.languages).toBeUndefined();
    expect(privacy.title).toEqual({ absolute: "Privacy Policy | NeoVisionTech" });
  });

  it("always emits a description, site name, locale, and an absolute image", () => {
    const meta = pageMetadata({ title: "About", description: "  ", path: "/about" });
    expect(meta.description).toBe(siteConfig.description);
    expect(meta.alternates?.canonical).toBe(`${siteConfig.url}/about`);
    const og = meta.openGraph as { url?: string; siteName?: string; locale?: string; images?: { url: string }[] };
    expect(og.url).toBe(`${siteConfig.url}/about`);
    expect(og.siteName).toBe(siteConfig.shortName);
    expect(og.locale).toBe("en_IN");
    expect(og.images?.[0]?.url).toBe(`${siteConfig.url}/opengraph-image`);
  });
});

describe("sitemap coverage", () => {
  it("lists privacy and detail pages with lastmod taken from the records", () => {
    const staticUrls = staticSitemapEntries().map((entry) => entry.url);
    expect(staticUrls).toContain(`${siteConfig.url}/en-in/privacy`);
    expect(staticUrls).toContain(`${siteConfig.url}/`);
    expect(staticSitemapEntries()[0]?.lastModified).toEqual(new Date(CONTENT_UPDATED_AT));

    const revised = "2026-01-15T00:00:00.000Z";
    const entries = catalogSitemapEntries({
      services: [{ ...service, updatedAt: revised }],
      projects: [{ ...project, updatedAt: revised }],
      trainings: [{ ...(training as Training), modules: [], priceAmount: null, updatedAt: CONTENT_UPDATED_AT }],
    });
    const servicePath = SERVICE_REDIRECTS[service.slug] ?? `/services/${service.slug}`;
    expect(entries.map((entry) => entry.url)).toEqual([
      `${siteConfig.url}${lp("en-in", servicePath)}`,
      `${siteConfig.url}${lp("en-in", `/case-studies/${project.slug}`)}`,
      `${siteConfig.url}${lp("en-in", `/trainings/${training.slug}`)}`,
    ]);
    expect(entries[0]?.lastModified).toEqual(new Date(revised));
    expect(entries[2]?.lastModified).toEqual(new Date(CONTENT_UPDATED_AT));
  });
});

describe("markets", () => {
  it("keeps US and UK service nodes free of a fabricated street address", () => {
    const us = professionalServiceJsonLd("en-us");
    const uk = professionalServiceJsonLd("en-gb");
    const india = professionalServiceJsonLd("en-in");
    expect(us["@type"]).toBe("ProfessionalService");
    expect(us).not.toHaveProperty("address");
    expect(us).not.toHaveProperty("telephone");
    expect(JSON.stringify(uk)).not.toMatch(/Bamrauli|211012|\+91/);
    expect(india.address).toMatchObject({ addressLocality: "Prayagraj", postalCode: "211012" });
    expect(india.telephone).toMatch(/^\+91/);
  });

  it("writes distinct market ledes and keeps French pages marked as drafts", () => {
    const homes = marketPages.filter((page) => page.slug === "home");
    const ledes = homes.map((page) => page.lede);
    expect(new Set(ledes).size).toBe(homes.length);
    const french = marketPages.filter((page) => page.locale === "fr-lu");
    expect(french.every((page) => page.machineDraft)).toBe(true);
    expect(french.every((page) => /[àâçéèêëîïôùûüœ]/i.test(`${page.h1} ${page.lede}`))).toBe(true);
    const joined = marketPages.map((page) => `${page.title} ${page.h1}`).join("\n");
    expect(joined).not.toMatch(/hallucination-free|GDPR Compliant|SOC 2 Certified|GDPR-compliant/i);
  });

  it("redirects the previous audience to India and leaves drafts out of the sitemap", () => {
    expect(legacyRedirect("/projects/alladin-ice-delivery-app")).toBe("/en-in/case-studies/alladin-ice-delivery-app");
    expect(legacyRedirect("/services/agentic-ai-chatbot-development")).toBe("/en-in/ai-solutions/agentic-ai");
    expect(legacyRedirect("/about")).toBe("/en-in/about");
    expect(legacyRedirect("/en-us")).toBeNull();
    const urls = localeSitemapEntries({
      locale: "en-us",
      pages: marketPages,
      projects: [{ ...project, updatedAt: CONTENT_UPDATED_AT }],
      trainings: [],
    }).map((entry) => entry.url);
    expect(urls.some((url) => url.includes("/trainings"))).toBe(false);
    expect(urls.some((url) => url.includes("secure-rag-fintech"))).toBe(false);
    expect(draftCaseStudies.every((draft) => draft.noindex && draft.draft)).toBe(true);
  });
});

describe("prices", () => {
  it("parses rupee amounts that already exist and ignores empty strings", () => {
    expect(parseInrAmount("₹65,000")).toBe(65000);
    expect(parseInrAmount("")).toBeNull();
    expect(parseInrAmount("Contact us")).toBeNull();
  });
});

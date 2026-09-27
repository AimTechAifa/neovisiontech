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
import { indexableSeoEntries, seoPageUrl } from "@/lib/seo/sitemap";

const service = (servicesData as Service[])[0];
const project = (projectsData as Project[])[0];
const training = trainingPrograms[0] as Training;

describe("JSON-LD", () => {
  it("describes the organization with logo, contact points, and sameAs", () => {
    const data = organizationJsonLd();
    expect(data["@context"]).toBe("https://schema.org");
    expect(data["@type"]).toBe("Organization");
    expect(data.logo).toEqual(expect.stringContaining("logo-512.webp"));
    expect(data.sameAs).toEqual(expect.arrayContaining([expect.stringContaining("linkedin.com")]));
    const points = data.contactPoint as { email: string; telephone: string }[];
    expect(points.length).toBeGreaterThanOrEqual(2);
    expect(points[0]?.email).toContain("@");
    expect(points[0]?.telephone).toMatch(/^\+91/);
    expect(JSON.stringify(data)).not.toMatch(/ratingValue|aggregateRating|reviewCount/i);
  });

  it("describes the website without inventing a search action", () => {
    const data = websiteJsonLd();
    expect(data["@type"]).toBe("WebSite");
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
    expect(data.name).toBe(service.title);
    expect(data.description).toBe(service.shortDescription);
    expect(data.serviceType).toBe(service.category);
  });

  it("describes a course with an offer and course instances only from published data", () => {
    const data = courseJsonLd({ ...training, modules: [], priceAmount: parseInrAmount(training.price) });
    expect(data["@type"]).toBe("Course");
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
    const thin = fallbackSeoPages.find((page) => page.noindex);
    expect(thin).toBeTruthy();
    expect(seoPageUrl(thin!).length).toBeGreaterThan(10);
  });
});

describe("prices", () => {
  it("parses rupee amounts that already exist and ignores empty strings", () => {
    expect(parseInrAmount("₹65,000")).toBe(65000);
    expect(parseInrAmount("")).toBeNull();
    expect(parseInrAmount("Contact us")).toBeNull();
  });
});

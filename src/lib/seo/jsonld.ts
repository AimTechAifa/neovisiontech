import type { Author, Faq, Project, Service, Training } from "@/content/types";
import { parseInrAmount } from "@/content/types";
import { absoluteUrl, siteConfig } from "@/lib/site";

export type JsonLd = Record<string, unknown>;

const trainingLocations = [
  { city: "Mumbai", state: "Maharashtra" },
  { city: "Bangalore", state: "Karnataka" },
  { city: "Pune", state: "Maharashtra" },
  { city: "Hyderabad", state: "Telangana" },
  { city: "Delhi", state: "NCR" },
  { city: "Chennai", state: "Tamil Nadu" },
  { city: "Prayagraj", state: "Uttar Pradesh" },
];

export function organizationJsonLd(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    url: siteConfig.url,
    logo: absoluteUrl(siteConfig.logoPath),
    email: siteConfig.emails.general,
    sameAs: [...siteConfig.sameAs],
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.streetAddress,
      addressLocality: siteConfig.address.addressLocality,
      addressRegion: siteConfig.address.addressRegion,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.addressCountry,
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: siteConfig.emails.general,
        telephone: siteConfig.phones[0]?.tel,
        areaServed: "IN",
        availableLanguage: ["en"],
      },
      {
        "@type": "ContactPoint",
        contactType: "technical support",
        email: siteConfig.emails.support,
        telephone: siteConfig.phones[1]?.tel,
        areaServed: "IN",
        availableLanguage: ["en"],
      },
    ],
  };
}

export function websiteJsonLd(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    name: siteConfig.shortName,
    url: siteConfig.url,
    inLanguage: siteConfig.locale,
    publisher: { "@id": `${siteConfig.url}/#organization` },
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function serviceJsonLd(service: Service): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${absoluteUrl(`/services/${service.slug}`)}#service`,
    name: service.title,
    description: service.shortDescription,
    serviceType: service.category,
    url: absoluteUrl(`/services/${service.slug}`),
    image: absoluteUrl(service.heroImage),
    provider: { "@id": `${siteConfig.url}/#organization` },
    areaServed: "IN",
  };
}

export function faqJsonLd(faqs: Faq[]): JsonLd | null {
  if (faqs.length === 0) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function projectJsonLd(project: Project): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `${absoluteUrl(`/projects/${project.slug}`)}#software`,
    name: project.title,
    description: project.shortDescription,
    applicationCategory: project.category,
    operatingSystem: project.platform,
    image: absoluteUrl(project.heroImage),
    url: absoluteUrl(`/projects/${project.slug}`),
    creator: { "@id": `${siteConfig.url}/#organization` },
  };
}

function courseInstance(training: Training, city: string, state: string): JsonLd {
  return {
    "@type": "CourseInstance",
    name: `${training.title} — ${city}`,
    courseMode: "onsite",
    courseWorkload: training.duration,
    location: {
      "@type": "Place",
      name: city === "Prayagraj" ? "NeoVision Tech Office & Training Center" : city,
      address: {
        "@type": "PostalAddress",
        addressLocality: city,
        addressRegion: state,
        addressCountry: "IN",
        ...(city === "Prayagraj"
          ? {
              streetAddress: siteConfig.address.streetAddress,
              postalCode: siteConfig.address.postalCode,
            }
          : {}),
      },
    },
  };
}

export function courseJsonLd(training: Training): JsonLd {
  const price = training.priceAmount ?? parseInrAmount(training.price);
  const node: JsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    "@id": `${absoluteUrl(`/trainings/${training.slug}`)}#course`,
    name: training.title,
    description: training.shortDescription,
    url: absoluteUrl(`/trainings/${training.slug}`),
    image: absoluteUrl(training.heroImage),
    provider: { "@id": `${siteConfig.url}/#organization` },
    educationalLevel: training.level,
    timeRequired: training.duration,
    hasCourseInstance: trainingLocations.map((location) =>
      courseInstance(training, location.city, location.state),
    ),
  };

  if (price !== null) {
    node.offers = {
      "@type": "Offer",
      price: String(price),
      priceCurrency: "INR",
      url: absoluteUrl(`/trainings/${training.slug}`),
      category: training.price,
    };
  }

  return node;
}

export function personJsonLd(author: Author): JsonLd {
  const node: JsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${absoluteUrl("/about")}#${author.slug}`,
    name: author.name,
    jobTitle: author.role,
    worksFor: { "@id": `${siteConfig.url}/#organization` },
  };
  if (author.image) node.image = absoluteUrl(author.image);
  return node;
}

export function graph(...nodes: Array<JsonLd | null | undefined>): JsonLd[] {
  return nodes.filter((node): node is JsonLd => Boolean(node));
}

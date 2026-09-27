export const locales = ["en-us", "en-gb", "en-lu", "fr-lu", "en-in"] as const;
export type Locale = (typeof locales)[number];

export const defaultMarket: Locale = "en-in";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export function localeFromPath(pathname: string): Locale | null {
  const first = pathname.split("/").filter(Boolean)[0];
  return first && isLocale(first) ? first : null;
}

const htmlLang: Record<Locale, string> = {
  "en-us": "en-US",
  "en-gb": "en-GB",
  "en-lu": "en-LU",
  "fr-lu": "fr-LU",
  "en-in": "en-IN",
};

const ogLocale: Record<Locale, string> = {
  "en-us": "en_US",
  "en-gb": "en_GB",
  "en-lu": "en_LU",
  "fr-lu": "fr_LU",
  "en-in": "en_IN",
};

const areaServed: Record<Locale, string> = {
  "en-us": "US",
  "en-gb": "GB",
  "en-lu": "LU",
  "fr-lu": "LU",
  "en-in": "IN",
};

export function htmlLanguage(locale: Locale) {
  return htmlLang[locale];
}

export function openGraphLocale(locale: Locale) {
  return ogLocale[locale];
}

export function marketArea(locale: Locale) {
  return areaServed[locale];
}

export function lp(locale: Locale, path = "/") {
  const suffix = path === "/" ? "" : path.startsWith("/") ? path : `/${path}`;
  return `/${locale}${suffix}`;
}

export const marketNames: Record<Locale, { country: string; language: string; short: string }> = {
  "en-us": { country: "United States", language: "English", short: "United States" },
  "en-gb": { country: "United Kingdom", language: "English", short: "United Kingdom" },
  "en-lu": { country: "Luxembourg", language: "English", short: "Luxembourg" },
  "fr-lu": { country: "Luxembourg", language: "Français", short: "Luxembourg (FR)" },
  "en-in": { country: "India", language: "English", short: "India" },
};

type NavItem = { href: string; label: string };

const navLabels: Record<Locale, { ai: string; engineering: string; work: string; about: string; contact: string; trainings: string; technologies: string }> = {
  "en-us": { ai: "AI Solutions", engineering: "Engineering", work: "Case Studies", about: "About", contact: "Contact", trainings: "Training", technologies: "Technologies" },
  "en-gb": { ai: "AI Solutions", engineering: "Engineering", work: "Case Studies", about: "About", contact: "Contact", trainings: "Training", technologies: "Technologies" },
  "en-lu": { ai: "AI Solutions", engineering: "Engineering", work: "Case Studies", about: "About", contact: "Contact", trainings: "Training", technologies: "Technologies" },
  "fr-lu": { ai: "Solutions IA", engineering: "Ingénierie", work: "Études de cas", about: "À propos", contact: "Contact", trainings: "Formations", technologies: "Technologies" },
  "en-in": { ai: "AI Solutions", engineering: "Engineering", work: "Case Studies", about: "About", contact: "Contact", trainings: "Trainings", technologies: "Technologies" },
};

export function navigation(locale: Locale): NavItem[] {
  const labels = navLabels[locale];
  const items: NavItem[] = [
    { href: lp(locale, "/ai-solutions"), label: labels.ai },
    { href: lp(locale, "/engineering"), label: labels.engineering },
    { href: lp(locale, "/case-studies"), label: labels.work },
    { href: lp(locale, "/technologies"), label: labels.technologies },
    { href: lp(locale, "/about"), label: labels.about },
  ];
  if (locale === "en-in") items.push({ href: lp(locale, "/trainings"), label: labels.trainings });
  items.push({ href: lp(locale, "/contact"), label: labels.contact });
  return items;
}

export function ctaLabel(locale: Locale) {
  switch (locale) {
    case "en-us":
      return "Request a proposal";
    case "en-gb":
      return "Book a review";
    case "en-lu":
      return "Request a review";
    case "fr-lu":
      return "Demander une revue";
    case "en-in":
      return "Start a project";
  }
}

const crawlerPattern = /bot|crawl|spider|slurp|bingpreview|facebookexternalhit|embedly|quora link preview|whatsapp|telegram|slackbot|discord|preview/i;

export function isCrawler(userAgent: string | null) {
  if (!userAgent) return false;
  return crawlerPattern.test(userAgent);
}

/** Suggest a market. Never used to redirect. */
export function suggestLocale(input: { country?: string | null; acceptLanguage?: string | null }): Locale | null {
  const country = input.country?.toUpperCase() ?? "";
  const lang = input.acceptLanguage?.toLowerCase() ?? "";
  if (country === "US") return "en-us";
  if (country === "GB") return "en-gb";
  if (country === "IN") return "en-in";
  if (country === "LU") return lang.includes("fr") ? "fr-lu" : "en-lu";
  if (lang.includes("fr-lu")) return "fr-lu";
  if (lang.includes("en-gb")) return "en-gb";
  if (lang.includes("en-us")) return "en-us";
  if (lang.includes("en-in")) return "en-in";
  if (lang.includes("en-lu")) return "en-lu";
  return null;
}

export const siloChildren = {
  "ai-solutions": ["rag-pipelines", "agentic-ai", "private-llms"],
  engineering: ["mern-polyglot", "programmatic-seo", "mobile-applications", "product-design"],
} as const;

export const SERVICE_REDIRECTS: Record<string, string> = {
  "ai-business-automation-services": "/ai-solutions",
  "agentic-ai-chatbot-development": "/ai-solutions/agentic-ai",
  "custom-web-application-development": "/engineering/mern-polyglot",
  "seo-optimized-website-development": "/engineering/programmatic-seo",
  "mobile-app-development-services": "/engineering/mobile-applications",
  "ui-ux-design-services": "/engineering/product-design",
  "digital-marketing-services": "/services/digital-marketing",
  "industrial-training-programs": "/trainings",
};

const staticRedirects: Record<string, string> = {
  "/about": "/en-in/about",
  "/services": "/en-in/services",
  "/projects": "/en-in/case-studies",
  "/technologies": "/en-in/technologies",
  "/trainings": "/en-in/trainings",
  "/contact": "/en-in/contact",
  "/privacy": "/en-in/privacy",
};

export function legacyRedirect(pathname: string): string | null {
  const path = pathname.length > 1 && pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;
  if (staticRedirects[path]) return staticRedirects[path];
  const service = /^\/services\/([^/]+)$/.exec(path);
  if (service?.[1]) {
    const dest = SERVICE_REDIRECTS[service[1]];
    return `/en-in${dest ?? `/services/${service[1]}`}`;
  }
  const city = /^\/services\/([^/]+)\/([^/]+)$/.exec(path);
  if (city) return `/en-in/services/${city[1]}/${city[2]}`;
  const project = /^\/projects\/([^/]+)$/.exec(path);
  if (project?.[1]) return `/en-in/case-studies/${project[1]}`;
  const training = /^\/trainings\/([^/]+)$/.exec(path);
  if (training?.[1]) return `/en-in/trainings/${training[1]}`;
  const solution = /^\/solutions\/([^/]+)\/([^/]+)$/.exec(path);
  if (solution) return `/en-in/solutions/${solution[1]}/${solution[2]}`;

  const localeService = /^\/(en-us|en-gb|en-lu|fr-lu|en-in)\/services\/([^/]+)$/.exec(path);
  if (localeService?.[1] && localeService[2]) {
    const dest = SERVICE_REDIRECTS[localeService[2]];
    if (dest) return `/${localeService[1]}${dest}`;
  }
  const localeProjects = /^\/(en-us|en-gb|en-lu|fr-lu|en-in)\/projects(\/[^/]+)?$/.exec(path);
  if (localeProjects?.[1]) return `/${localeProjects[1]}/case-studies${localeProjects[2] ?? ""}`;
  return null;
}

/** Existing service slug → silo path, used when an India page keeps the original service body. */
export const SILO_SOURCE: Record<string, string> = {
  "ai-solutions": "ai-business-automation-services",
  "ai-solutions/agentic-ai": "agentic-ai-chatbot-development",
  "engineering/mern-polyglot": "custom-web-application-development",
  "engineering/programmatic-seo": "seo-optimized-website-development",
  "engineering/mobile-applications": "mobile-app-development-services",
  "engineering/product-design": "ui-ux-design-services",
  "services/digital-marketing": "digital-marketing-services",
};

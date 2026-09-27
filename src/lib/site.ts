export const locales = ["en-IN"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en-IN";

const DEFAULT_SITE_URL = "https://neovisiontech.vercel.app";

type SiteEnv = {
  NEXT_PUBLIC_SITE_URL?: string;
  VERCEL_PROJECT_PRODUCTION_URL?: string;
};

/** Explicit NEXT_PUBLIC_SITE_URL, then the Vercel production host, then the known deployment URL. */
export function resolveSiteUrl(env?: SiteEnv): string {
  const source: SiteEnv = env ?? {
    NEXT_PUBLIC_SITE_URL: process.env["NEXT_PUBLIC_SITE_URL"],
    VERCEL_PROJECT_PRODUCTION_URL: process.env["VERCEL_PROJECT_PRODUCTION_URL"],
  };
  const explicit = source.NEXT_PUBLIC_SITE_URL?.trim();
  if (explicit) return explicit.replace(/\/$/, "");

  const vercel = source.VERCEL_PROJECT_PRODUCTION_URL?.trim();
  if (vercel) {
    const withProtocol = /^https?:\/\//i.test(vercel) ? vercel : `https://${vercel}`;
    return withProtocol.replace(/\/$/, "");
  }

  return DEFAULT_SITE_URL;
}

export const siteConfig = {
  name: "NeoVision Tech",
  shortName: "NeoVisionTech",
  title: "NeoVisionTech | Advanced Web & App Development",
  description:
    "Transforming ideas into digital reality with premium web and mobile app development services. Specializing in AI, React, Next.js, and modern tech stacks.",
  url: resolveSiteUrl(),
  locale: defaultLocale,
  localePath: "en-IN",
  emails: {
    general: "contact@neovisiontech.in",
    support: "support@neovisiontech.in",
    ceo: "naushad@neovisiontech.in",
  },
  phones: [
    { display: "+91 96444 35690", tel: "+919644435690" },
    { display: "+91 79744 92357", tel: "+917974492357" },
  ],
  address: {
    streetAddress: "Lalbihara, Near Rajasthan Sweet House, Kanpur Road, Bamrauli",
    addressLocality: "Prayagraj",
    addressRegion: "Uttar Pradesh",
    postalCode: "211012",
    addressCountry: "IN",
  },
  sameAs: [
    "https://www.linkedin.com/in/neo-vision-tech-570b323a3",
    "https://www.youtube.com/@NeoVisionTech-y9l",
    "https://github.com",
    "https://www.instagram.com/neovisiontech/",
  ],
  logoPath: "/images/logo-512.webp",
  foundingYear: "2014",
} as const;

export function absoluteUrl(path = "/") {
  if (path.startsWith("http")) return path;
  return `${siteConfig.url}${path.startsWith("/") ? path : `/${path}`}`;
}

export function languageAlternates(path: string) {
  const href = absoluteUrl(path);
  return {
    "en-IN": href,
    "x-default": href,
  };
}

import { htmlLanguage, locales, lp, type Locale } from "@/lib/i18n";
import { absoluteUrl } from "@/lib/site";

/** Reciprocal hreflang set. Home x-default is the market chooser. Inner pages use en-in. */
export function marketAlternates(path: string, options?: { home?: boolean; only?: readonly Locale[] }) {
  const list = options?.only ?? locales;
  const languages: Record<string, string> = {};
  for (const locale of list) {
    const localPath = options?.home ? lp(locale) : lp(locale, path);
    languages[htmlLanguage(locale)] = absoluteUrl(localPath);
  }
  languages["x-default"] = options?.home ? absoluteUrl("/") : absoluteUrl(lp("en-in", path));
  return languages;
}

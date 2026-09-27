import Link from "next/link";
import { locales, lp, marketNames } from "@/lib/i18n";
import { marketAlternates } from "@/lib/seo/hreflang";
import { pageMetadata } from "@/lib/seo/metadata";

const blurbs: Record<(typeof locales)[number], string> = {
  "en-us": "Enterprise staff augmentation and grounded GenAI copilots. Commercials in USD. Engineering from Prayagraj, with no US office.",
  "en-gb": "Nearshore web engineering and legacy cloud migration for UK organisations. GDPR-aligned delivery. Commercials in GBP.",
  "en-lu": "On-premise FinTech software and controlled RAG, designed for CSSF and DORA expectations. Commercials in EUR.",
  "fr-lu": "Logiciels FinTech sur site et pipelines RAG maîtrisés, conçus pour les attentes CSSF et DORA. Devis en euros.",
  "en-in": "MVP development, digital transformation, and industrial training for Indian startups. Course fees in INR.",
};

export const metadata = pageMetadata({
  title: "Choose a NeoVision Tech market | NeoVisionTech",
  description:
    "NeoVision Tech serves India, the United States, the United Kingdom, and Luxembourg from its Prayagraj office. Choose a market. This page does not redirect.",
  path: "/",
  languages: marketAlternates("/", { home: true }),
});

export default function MarketChooserPage() {
  return (
    <div lang="en" className="mx-auto max-w-5xl px-4 py-16 md:px-8">
      <p className="text-sm font-bold uppercase tracking-wider text-blue-700 dark:text-blue-300">NeoVision Tech</p>
      <h1 className="mt-3 text-4xl font-black tracking-tight text-slate-900 dark:text-white md:text-5xl">Choose your market</h1>
      <p className="mt-4 max-w-3xl text-lg text-slate-700 dark:text-slate-300">
        The company has one office, in Bamrauli, Prayagraj, Uttar Pradesh. Pick the market you are buying for. Search engines are not redirected.
      </p>
      <ul className="mt-10 grid gap-4 md:grid-cols-2">
        {locales.map((locale) => (
          <li key={locale}>
            <Link
              href={lp(locale)}
              className="block h-full rounded-2xl border border-slate-200 bg-white p-6 hover:border-blue-500 dark:border-white/10 dark:bg-white/5"
            >
              <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">
                {marketNames[locale].language} · {locale}
              </p>
              <h2 className="mt-2 text-2xl font-black text-slate-900 dark:text-white">{marketNames[locale].country}</h2>
              <p className="mt-3 text-slate-700 dark:text-slate-300">{blurbs[locale]}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

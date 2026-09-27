import { notFound } from "next/navigation";
import JsonLdScript from "@/components/json-ld";
import { htmlLanguage, isLocale } from "@/lib/i18n";
import { professionalServiceJsonLd } from "@/lib/seo/jsonld";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const lang = htmlLanguage(locale);
  return (
    <div lang={lang} className="contents">
      <script dangerouslySetInnerHTML={{ __html: `document.documentElement.lang=${JSON.stringify(lang)}` }} />
      <JsonLdScript data={professionalServiceJsonLd(locale)} />
      {children}
    </div>
  );
}

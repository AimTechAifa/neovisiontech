import { CONTENT_UPDATED_AT } from "@/content/revision";
import type { Locale } from "@/lib/i18n";
import type { DraftCaseStudy, MarketSection } from "./types";

export const draftSlugs = ["secure-rag-fintech", "react-native-us-saas"] as const;

const unpublished: Record<Locale, MarketSection[]> = {
  "en-us": [
    { heading: "Problem", paragraphs: ["No client problem is published. This slot stays empty until the owner supplies a real engagement."] },
    { heading: "Architecture", paragraphs: ["Architecture diagram: not published. Do not treat a placeholder as a system design."] },
    { heading: "Stack", paragraphs: ["No stack is listed, because none was provided for this template."] },
    { heading: "Metrics", paragraphs: ["No metrics are published. Invented percentages will not be added here."] },
    { heading: "Results", paragraphs: ["No results are published."] },
    { heading: "Testimonial", paragraphs: ["No testimonial is published. There is no quote and no customer name."] },
  ],
  "en-gb": [
    { heading: "Problem", paragraphs: ["No client problem is published. This slot stays empty until the owner supplies a real engagement."] },
    { heading: "Architecture", paragraphs: ["Architecture diagram: not published. A placeholder is not a system design."] },
    { heading: "Stack", paragraphs: ["No stack is listed, because none was provided for this template."] },
    { heading: "Metrics", paragraphs: ["No metrics are published. Invented percentages will not be added here."] },
    { heading: "Results", paragraphs: ["No results are published."] },
    { heading: "Testimonial", paragraphs: ["No testimonial is published. There is no quote and no customer name."] },
  ],
  "en-lu": [
    { heading: "Problem", paragraphs: ["No client problem is published. This slot stays empty until the owner supplies a real engagement."] },
    { heading: "Architecture", paragraphs: ["Architecture diagram: not published. This is not evidence of a CSSF or DORA review."] },
    { heading: "Stack", paragraphs: ["No stack is listed, because none was provided for this template."] },
    { heading: "Metrics", paragraphs: ["No metrics are published. Invented percentages will not be added here."] },
    { heading: "Results", paragraphs: ["No results are published."] },
    { heading: "Testimonial", paragraphs: ["No testimonial is published. There is no quote and no customer name."] },
  ],
  "fr-lu": [
    { heading: "Problème", paragraphs: ["Aucun problème client n'est publié. Cet emplacement reste vide tant que le propriétaire n'a pas fourni un mandat réel."] },
    { heading: "Architecture", paragraphs: ["Schéma d'architecture : non publié. Ce n'est pas une preuve d'examen CSSF ou DORA."] },
    { heading: "Pile technique", paragraphs: ["Aucune pile n'est indiquée, parce qu'aucune n'a été fournie pour ce modèle."] },
    { heading: "Métriques", paragraphs: ["Aucune métrique n'est publiée. Aucun pourcentage inventé ne sera ajouté ici."] },
    { heading: "Résultats", paragraphs: ["Aucun résultat n'est publié."] },
    { heading: "Témoignage", paragraphs: ["Aucun témoignage n'est publié. Il n'y a ni citation ni nom de client."] },
  ],
  "en-in": [
    { heading: "Problem", paragraphs: ["No client problem is published. This slot stays empty until the owner supplies a real engagement."] },
    { heading: "Architecture", paragraphs: ["Architecture diagram: not published. Do not treat a placeholder as a system design."] },
    { heading: "Stack", paragraphs: ["No stack is listed, because none was provided for this template."] },
    { heading: "Metrics", paragraphs: ["No metrics are published. Invented percentages will not be added here."] },
    { heading: "Results", paragraphs: ["No results are published."] },
    { heading: "Testimonial", paragraphs: ["No testimonial is published. There is no quote and no customer name."] },
  ],
};

const copy: Record<string, Record<Locale, { title: string; description: string; h1: string; lede: string }>> = {
  "secure-rag-fintech": {
    "en-us": {
      title: "Draft: Secure RAG for FinTech | NeoVisionTech",
      description: "Unpublished template. No client, diagram, or metric. Excluded from search and the sitemap.",
      h1: "Secure RAG for FinTech (draft template)",
      lede: "This page is a template for a future case study. It is not a client engagement. No institution, diagram, or metric is published here.",
    },
    "en-gb": {
      title: "Draft: Secure RAG for FinTech | NeoVisionTech",
      description: "Unpublished template. No client, diagram, or metric. Excluded from search and the sitemap.",
      h1: "Secure RAG for FinTech (draft template)",
      lede: "This page is a template for a future case study. It is not a client engagement. No institution, diagram, or metric is published here.",
    },
    "en-lu": {
      title: "Draft: Secure RAG for FinTech | NeoVisionTech",
      description: "Unpublished template. No Luxembourg client, diagram, or metric. Excluded from search and the sitemap.",
      h1: "Secure RAG for FinTech (draft template)",
      lede: "This page is a template. It is not a Luxembourg institution and not a CSSF or DORA approval. No diagram or metric is published.",
    },
    "fr-lu": {
      title: "Brouillon : RAG sécurisé pour la FinTech | NeoVisionTech",
      description: "Modèle non publié. Aucun client, schéma ou métrique. Exclu de la recherche et du sitemap.",
      h1: "RAG sécurisé pour la FinTech (modèle brouillon)",
      lede: "Cette page est un modèle pour une future étude de cas. Ce n'est pas un mandat client. Aucun établissement, schéma ou chiffre n'est publié ici.",
    },
    "en-in": {
      title: "Draft: Secure RAG for FinTech | NeoVisionTech",
      description: "Unpublished template. No client, diagram, or metric. Excluded from search and the sitemap.",
      h1: "Secure RAG for FinTech (draft template)",
      lede: "This page is a template for a future case study. It is not a client engagement. No institution, diagram, or metric is published here.",
    },
  },
  "react-native-us-saas": {
    "en-us": {
      title: "Draft: React Native for a US SaaS | NeoVisionTech",
      description: "Unpublished template. No US client, diagram, or metric. Excluded from search and the sitemap.",
      h1: "React Native for a US SaaS (draft template)",
      lede: "This page is a template. It does not name a United States company and it does not publish a download, revenue, or performance figure.",
    },
    "en-gb": {
      title: "Draft: React Native for a US SaaS | NeoVisionTech",
      description: "Unpublished template. No client, diagram, or metric. Excluded from search and the sitemap.",
      h1: "React Native for a US SaaS (draft template)",
      lede: "This page is a template. It does not name a company and it does not publish a download, revenue, or performance figure.",
    },
    "en-lu": {
      title: "Draft: React Native for a US SaaS | NeoVisionTech",
      description: "Unpublished template. No client, diagram, or metric. Excluded from search and the sitemap.",
      h1: "React Native for a US SaaS (draft template)",
      lede: "This page is a template. It does not name a company and it does not publish a figure of any kind.",
    },
    "fr-lu": {
      title: "Brouillon : React Native pour un SaaS américain | NeoVisionTech",
      description: "Modèle non publié. Aucun client, schéma ou métrique. Exclu de la recherche et du sitemap.",
      h1: "React Native pour un SaaS américain (modèle brouillon)",
      lede: "Cette page est un modèle. Elle ne nomme aucune société et ne publie aucun chiffre de téléchargement, de revenu ou de performance.",
    },
    "en-in": {
      title: "Draft: React Native for a US SaaS | NeoVisionTech",
      description: "Unpublished template. No client, diagram, or metric. Excluded from search and the sitemap.",
      h1: "React Native for a US SaaS (draft template)",
      lede: "This page is a template. It does not name a company and it does not publish a download, revenue, or performance figure.",
    },
  },
};

export const draftCaseStudies: DraftCaseStudy[] = (Object.keys(copy) as string[]).flatMap((slug) =>
  (Object.keys(copy[slug] ?? {}) as Locale[]).map((locale) => {
    const fields = copy[slug]?.[locale];
    if (!fields) throw new Error(`Missing draft copy for ${locale} ${slug}`);
    return {
      slug,
      locale,
      ...fields,
      sections: unpublished[locale],
      machineDraft: locale === "fr-lu",
      noindex: true as const,
      draft: true as const,
      updatedAt: CONTENT_UPDATED_AT,
    };
  }),
);

export function draftCaseStudy(locale: string, slug: string) {
  return draftCaseStudies.find((item) => item.locale === locale && item.slug === slug) ?? null;
}

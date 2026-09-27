import { CONTENT_UPDATED_AT } from "@/content/revision";
import type { Locale } from "@/lib/i18n";
import type { MarketPage } from "./types";

function page(
  locale: Locale,
  slug: string,
  fields: Omit<MarketPage, "locale" | "slug" | "machineDraft" | "updatedAt">,
): MarketPage {
  return {
    locale,
    slug,
    machineDraft: locale === "fr-lu",
    updatedAt: CONTENT_UPDATED_AT,
    ...fields,
  };
}

const cta = {
  "en-us": { label: "Request a staff-augmentation proposal", href: "/contact" },
  "en-gb": { label: "Book a migration review", href: "/contact" },
  "en-lu": { label: "Request a confidential architecture review", href: "/contact" },
  "fr-lu": { label: "Demander une revue d'architecture confidentielle", href: "/contact" },
  "en-in": { label: "Start an MVP conversation", href: "/contact" },
} as const;

export const marketPages: MarketPage[] = [
  page("en-us", "home", {
    title: "US Enterprise Staff Augmentation and GenAI Copilots | NeoVisionTech",
    description: "Embedded engineering pods and grounded GenAI copilots for United States product teams. Scoped in USD from our Prayagraj engineering office.",
    h1: "Enterprise staff augmentation and GenAI copilots for US product teams",
    lede: "NeoVision Tech places senior engineers inside United States product squads and builds copilots that answer from your own documents. Engagements are priced in US dollars, staffed from our Prayagraj office, and run with a US-hours overlap. We do not operate a US office or a US phone line.",
    sections: [
      {
        heading: "Staff augmentation that joins the squad",
        paragraphs: [
          "US buyers usually need capacity next to an existing roadmap, not a black-box offshore project. We staff pods of React, Node, and data engineers who work in your backlog, your pull-request rules, and your incident channel.",
          "Commercials are discussed in USD as time-and-materials or a fixed pod rate. The people are employed through our India office. You get named engineers, a stateside-friendly overlap window, and a single engagement lead.",
        ],
      },
      {
        heading: "Copilots grounded in your systems",
        paragraphs: [
          "A copilot that only chats with a public model is a demo. We connect retrieval, tool use, and permission checks so answers cite internal sources and refuse questions the user cannot access.",
          "We describe this as grounded and hallucination-minimized, with citations and guardrails. We do not claim the model is hallucination-free.",
        ],
      },
    ],
    primaryCta: cta["en-us"],
    secondaryCta: { label: "See AI solution pillars", href: "/ai-solutions" },
  }),
  page("en-gb", "home", {
    title: "UK Nearshore Web Engineering and Legacy Cloud Migration | NeoVisionTech",
    description: "GDPR-aligned nearshore web platforms and legacy cloud migration for United Kingdom organisations. Commercials in GBP. Engineering delivered from Prayagraj.",
    h1: "Nearshore web engineering and legacy cloud migration for UK organisations",
    lede: "British product and IT teams hire NeoVision Tech when a legacy estate needs a careful move to the cloud and the new web platform has to be designed for UK GDPR. We build GDPR-aligned systems. We are not a certified GDPR body, and we do not hold an ICO registration on your behalf.",
    sections: [
      {
        heading: "Legacy estates, migrated without a big-bang cutover",
        paragraphs: [
          "Many UK organisations still run line-of-business systems that cannot be switched off on a Friday. We map the workflows, stand up the replacement in slices, and keep the old system as the system of record until the new path is proven.",
          "The work is organised around your change board. Commercial conversations are in pounds sterling. Delivery sits in our Prayagraj engineering office, with overlap into the UK working day.",
        ],
      },
      {
        heading: "GDPR-aligned delivery, not a certification badge",
        paragraphs: [
          "We design data flows, retention, and access so a UK controller can meet UK GDPR duties: purpose limitation, a data processing addendum, and a clear place to export or delete a person's data.",
          "Where a workload should stay in a UK or EU region, we say so and design for that region. We do not pretend NeoVision Tech itself is 'GDPR certified'.",
        ],
      },
    ],
    primaryCta: cta["en-gb"],
    secondaryCta: { label: "Review the engineering pillar", href: "/engineering" },
  }),
  page("en-lu", "home", {
    title: "Luxembourg On-Premise FinTech Software and Controlled RAG | NeoVisionTech",
    description: "On-premise FinTech software and RAG pipelines designed for CSSF and DORA expectations. No Luxembourg office. Engineering from Prayagraj. Commercials in EUR.",
    h1: "On-premise FinTech software and controlled RAG for Luxembourg institutions",
    lede: "Luxembourg financial teams ask us for software that can run on their own premises and for retrieval systems that keep documents inside a controlled boundary. We design for CSSF supervisory expectations and DORA operational resilience. We do not hold a CSSF licence and we are not a DORA-certified entity.",
    sections: [
      {
        heading: "Premises first, cloud only when you choose it",
        paragraphs: [
          "A public multi-tenant chatbot is the wrong default for client files and dealing records. We package models, vector stores, and orchestration so they can sit in your data centre or a private VPC you control.",
          "Fees are discussed in euro. There is no NeoVision Tech office in Luxembourg City. The engineering office is in Bamrauli, Prayagraj, India, and that is the only address we publish.",
        ],
      },
      {
        heading: "Designed for CSSF and DORA duties",
        paragraphs: [
          "We document access, logging, and exit so your compliance team can show how a system is operated and how it can be turned off. That is a design capability, not a claim that the software is pre-approved by the CSSF.",
          "Retrieval answers cite the passage they used. We call the result grounded and hallucination-minimized. We never call it hallucination-free.",
        ],
      },
    ],
    primaryCta: cta["en-lu"],
    secondaryCta: { label: "Inspect private LLM deployments", href: "/ai-solutions/private-llms" },
  }),
  page("fr-lu", "home", {
    title: "Logiciels FinTech sur site et RAG maîtrisé au Luxembourg | NeoVisionTech",
    description: "Logiciels FinTech sur site et pipelines RAG conçus pour les attentes CSSF et DORA. Pas de bureau au Luxembourg. Ingénierie à Prayagraj. Devis en euros.",
    h1: "Logiciels FinTech sur site et pipelines RAG maîtrisés pour les institutions luxembourgeoises",
    lede: "Les équipes financières au Luxembourg nous demandent des logiciels capables de rester dans leurs locaux et des systèmes de recherche documentaire dont les pièces ne quittent pas un périmètre contrôlé. Nous concevons pour les attentes de la CSSF et pour la résilience opérationnelle prévue par DORA. Nous ne détenons pas d'agrément CSSF et nous ne sommes pas un organisme certifié DORA.",
    sections: [
      {
        heading: "D'abord vos locaux, le cloud seulement si vous le décidez",
        paragraphs: [
          "Un assistant hébergé chez un tiers, ouvert à tous les locataires, est un mauvais défaut pour des dossiers clients. Nous empaquetons le modèle, le magasin vectoriel et l'orchestration pour qu'ils puissent tourner dans votre centre de données ou dans un VPC privé que vous contrôlez.",
          "Les échanges commerciaux se font en euros. NeoVision Tech n'a pas de bureau à Luxembourg-Ville. Le seul établissement publié est le bureau d'ingénierie de Bamrauli, à Prayagraj, en Inde.",
        ],
      },
      {
        heading: "Conçu pour les obligations CSSF et DORA",
        paragraphs: [
          "Nous documentons les accès, les journaux et la sortie du système afin que votre conformité puisse expliquer comment il est exploité et comment on l'arrête. C'est une capacité de conception, pas une pré-approbation de la CSSF.",
          "Les réponses citent le passage utilisé. Nous parlons d'un système ancré, où les hallucinations sont réduites par des garde-fous. Nous ne disons jamais qu'il est exempt d'hallucinations.",
        ],
      },
    ],
    primaryCta: cta["fr-lu"],
    secondaryCta: { label: "Voir les LLM privés", href: "/ai-solutions/private-llms" },
  }),
  page("en-in", "home", {
    title: "MVP Development and Startup Digital Transformation in India | NeoVisionTech",
    description: "Domestic MVP builds, digital transformation, and industrial training for Indian startups. Course fees in INR. Visit the Prayagraj office.",
    h1: "MVP development and digital transformation for Indian startups",
    lede: "NeoVision Tech builds first releases for Indian startups and modernises the tools those teams already run. You can visit the engineering and training centre in Bamrauli, Prayagraj. Course fees are published in rupees and only on this India site.",
    sections: [
      {
        heading: "A domestic MVP, not a copied enterprise pitch",
        paragraphs: [
          "Early Indian product teams need a release they can put in front of users, a payment path, and a codebase the next hire can read. We scope that MVP in INR and staff it from Prayagraj.",
          "When the product already exists, the work shifts to the integrations, admin tools, and search pages that a growing startup actually lacks.",
        ],
      },
      {
        heading: "Training stays on the India site",
        paragraphs: [
          "Industrial courses, from generative AI to web engineering, are listed with rupee fees, duration, and the cities already published on the training pages. Those prices are not shown on the US, UK, or Luxembourg sites.",
        ],
        bullets: ["Hands-on cohorts", "Fees in INR", "Enrolment through the Prayagraj contact path"],
      },
    ],
    faqs: [
      {
        question: "Where is the office?",
        answer: "Lalbihara, Near Rajasthan Sweet House, Kanpur Road, Bamrauli, Prayagraj, Uttar Pradesh, India.",
      },
    ],
    primaryCta: cta["en-in"],
    secondaryCta: { label: "Browse training programmes", href: "/trainings" },
  }),

  page("en-us", "ai-solutions", {
    title: "Enterprise AI Solutions for US Teams | NeoVisionTech",
    description: "RAG pipelines, agentic workflow bots, and private LLM deployments for United States enterprises. Grounded answers with citations and guardrails.",
    h1: "Enterprise AI for US product and operations teams",
    lede: "US enterprises hire this pillar when a copilot has to sit on real systems of record. The three practices below are how we staff that work from Prayagraj into a US squad.",
    sections: [
      {
        heading: "What the US engagement looks like",
        paragraphs: [
          "We start from the workflow a US operator already does, then add retrieval or an agent only where it removes a step. Pods are scoped in USD and overlap US hours.",
          "Security reviews from your side are expected. We will not invent a SOC 2 certificate to pass them. We will show how data is retrieved, logged, and limited.",
        ],
      },
    ],
    primaryCta: cta["en-us"],
  }),
  page("en-gb", "ai-solutions", {
    title: "Enterprise AI Solutions for UK Organisations | NeoVisionTech",
    description: "GDPR-aligned RAG, agentic workflows, and private models for United Kingdom organisations replacing manual knowledge work.",
    h1: "Enterprise AI shaped for UK data duties",
    lede: "UK organisations use this pillar to put retrieval and workflow agents on internal knowledge without shipping personal data to an unknown tenant. The design is GDPR-aligned. It is not a certification.",
    sections: [
      {
        heading: "A UK buyer's questions, answered in the design",
        paragraphs: [
          "Where does the prompt go, who can see the source document, and how do you delete a person's data? Those three questions drive the architecture before a model is chosen.",
          "Commercials are in GBP. Delivery remains at our Prayagraj office.",
        ],
      },
    ],
    primaryCta: cta["en-gb"],
  }),
  page("en-lu", "ai-solutions", {
    title: "Enterprise AI for Luxembourg Financial Teams | NeoVisionTech",
    description: "On-premise and private-VPC AI for Luxembourg institutions: RAG, agents, and private LLMs designed for CSSF and DORA expectations.",
    h1: "Enterprise AI that can stay inside a Luxembourg control boundary",
    lede: "This pillar is for institutions that cannot accept a shared public chatbot for client or dealing documents. Deployments are designed to run on-premise or in a private VPC, with controls your CSSF and DORA files can describe.",
    sections: [
      {
        heading: "No invented Luxembourg office",
        paragraphs: [
          "We do not list a Luxembourg address, phone, or licence. The company office is in Prayagraj. The software is what we place inside your boundary.",
        ],
      },
    ],
    primaryCta: cta["en-lu"],
  }),
  page("fr-lu", "ai-solutions", {
    title: "IA d'entreprise pour les équipes financières au Luxembourg | NeoVisionTech",
    description: "IA sur site ou en VPC privé pour les institutions luxembourgeoises : RAG, agents et LLM privés, conçus pour les attentes CSSF et DORA.",
    h1: "Une IA d'entreprise qui peut rester dans votre périmètre de contrôle",
    lede: "Ce pilier s'adresse aux institutions qui ne peuvent pas confier des dossiers clients à un assistant public partagé. Les déploiements sont conçus pour fonctionner sur site ou dans un VPC privé, avec des contrôles que vos dossiers CSSF et DORA peuvent décrire.",
    sections: [
      {
        heading: "Pas de bureau inventé au Luxembourg",
        paragraphs: [
          "Nous ne publions ni adresse, ni téléphone, ni agrément au Luxembourg. Le bureau de la société est à Prayagraj. Le logiciel, lui, se place dans votre périmètre.",
        ],
      },
    ],
    primaryCta: cta["fr-lu"],
  }),
  page("en-in", "ai-solutions", {
    title: "AI Solutions for Indian Startups and Operators | NeoVisionTech",
    description: "Practical RAG, agentic workflows, and private model setups for Indian startups, plus a path into our INR training programmes.",
    h1: "AI solutions sized for Indian product teams",
    lede: "Indian startups use this pillar to add search over their own docs, a workflow bot, or a private model without a US enterprise contract. Scoping is in INR. The same engineers teach the public training programmes listed on this site.",
    sections: [
      {
        heading: "Tied to work we already publish",
        paragraphs: [
          "Business automation and agentic chatbot engagements already delivered by NeoVision Tech sit in this silo. The India pages keep that delivery detail and add a startup-sized way to start.",
        ],
      },
    ],
    primaryCta: cta["en-in"],
    secondaryCta: { label: "See training programmes", href: "/trainings" },
  }),

  page("en-us", "ai-solutions/rag-pipelines", {
    title: "RAG Pipelines for US Enterprises | NeoVisionTech",
    description: "Vector retrieval with pgvector or Pinecone, permission-aware document search, and cited answers for US knowledge bases.",
    h1: "RAG pipelines for US knowledge bases",
    lede: "US teams ask us to stop employees pasting policy into a public chat box. We build retrieval that embeds your corpus, filters by the caller's permissions, and returns the passage behind the answer.",
    sections: [
      {
        heading: "pgvector or Pinecone, chosen for the estate",
        paragraphs: [
          "If the system of record is already PostgreSQL, pgvector keeps embeddings next to the rows you know how to back up. Pinecone is the alternative when the corpus is large and the application stack should not own the index.",
          "Either way the pipeline is chunking, metadata, and an access check. A pretty chat window without that check is not the engagement.",
        ],
      },
      {
        heading: "Citations instead of confidence theatre",
        paragraphs: [
          "Answers link to the chunk they used. When retrieval is empty, the copilot says so. That is how we minimise hallucinations. It is not a promise that the model never errs.",
        ],
      },
    ],
    faqs: [
      {
        question: "Will you host the index in the United States?",
        answer: "We can target a US region you already use. NeoVision Tech does not operate its own US data centre.",
      },
    ],
    primaryCta: cta["en-us"],
  }),
  page("en-gb", "ai-solutions/rag-pipelines", {
    title: "GDPR-Aligned RAG Pipelines for UK Organisations | NeoVisionTech",
    description: "Permission-aware retrieval for UK organisations, with pgvector or Pinecone and a design that supports UK GDPR deletion and access duties.",
    h1: "RAG pipelines aligned with UK GDPR duties",
    lede: "A UK knowledge base often contains personal data. Retrieval has to honour the same access and deletion rules as the source system, or the copilot becomes a shadow copy you cannot explain to the ICO.",
    sections: [
      {
        heading: "The index is not a second, forgotten archive",
        paragraphs: [
          "We tie chunks back to a source identifier so a deletion in the system of record can remove or expire the embedding. Retention follows the schedule you already publish, not an open-ended vector store.",
          "pgvector suits teams who want the index inside the database they already operate. Pinecone suits a larger corpus when you accept that vendor as a processor and put it in the record of processing.",
        ],
      },
    ],
    faqs: [
      {
        question: "Are you GDPR certified?",
        answer: "No. We build GDPR-aligned retrieval. Certification is not something we claim.",
      },
    ],
    primaryCta: cta["en-gb"],
  }),
  page("en-lu", "ai-solutions/rag-pipelines", {
    title: "On-Premise RAG for Luxembourg Institutions | NeoVisionTech",
    description: "Document retrieval that can run on-premise for Luxembourg financial teams, using pgvector or a private index, with citations and access checks.",
    h1: "RAG that can stay on Luxembourg premises",
    lede: "For dealing notes, KYC packs, and policy manuals, the index often has to live next to the files. We design retrieval for an on-premise or private-VPC deployment and for the questions a CSSF or DORA review will ask about access and logging.",
    sections: [
      {
        heading: "Embeddings without a public side door",
        paragraphs: [
          "pgvector on a database you administer is the default when the documents cannot leave the building. A managed index is used only when your policy allows that processor.",
          "Every answer cites the chunk. Empty retrieval does not get papered over with a fluent guess.",
        ],
      },
    ],
    primaryCta: cta["en-lu"],
  }),
  page("fr-lu", "ai-solutions/rag-pipelines", {
    title: "RAG sur site pour les institutions luxembourgeoises | NeoVisionTech",
    description: "Recherche documentaire déployable sur site, avec pgvector ou un index privé, des citations et un contrôle d'accès, pour les équipes financières au Luxembourg.",
    h1: "Des pipelines RAG qui peuvent rester dans vos locaux",
    lede: "Pour des notes d'opération, des dossiers KYC et des manuels internes, l'index doit souvent vivre à côté des fichiers. Nous concevons la recherche pour un déploiement sur site ou en VPC privé, et pour les questions d'accès et de journalisation qu'un dossier CSSF ou DORA posera.",
    sections: [
      {
        heading: "Des plongements sans porte dérobée publique",
        paragraphs: [
          "pgvector sur une base que vous administrez est le défaut lorsque les documents ne peuvent pas quitter le bâtiment. Un index managé n'est retenu que si votre politique accepte ce sous-traitant.",
          "Chaque réponse cite le passage. Une recherche vide ne se transforme pas en supposition fluide.",
        ],
      },
    ],
    primaryCta: cta["fr-lu"],
  }),
  page("en-in", "ai-solutions/rag-pipelines", {
    title: "RAG Pipelines for Indian Startups | NeoVisionTech",
    description: "Document search for Indian product teams using pgvector or Pinecone, scoped in INR, with the same retrieval ideas taught in our training programmes.",
    h1: "RAG pipelines a startup team in India can operate",
    lede: "Indian product teams want search over policies, tickets, and course notes without a six-figure platform contract. We implement pgvector when PostgreSQL is already in the stack, and Pinecone when the index should sit beside the app.",
    sections: [
      {
        heading: "Small corpus, real permissions",
        paragraphs: [
          "A startup still has private data: customer exports, HR files, unpaid invoices. Retrieval filters by the user, and answers cite the chunk. We do not sell this as hallucination-free.",
          "If your team wants to learn the same pattern before hiring, the India training catalogue includes generative AI programmes priced in INR.",
        ],
      },
    ],
    primaryCta: cta["en-in"],
    secondaryCta: { label: "See generative AI training", href: "/trainings/generative-ai-masterclass" },
  }),

  page("en-us", "ai-solutions/agentic-ai", {
    title: "Agentic AI and Workflow Bots for US Operations | NeoVisionTech",
    description: "Multi-agent orchestration and workflow bots for US back offices, with human approval on anything that moves money or customer data.",
    h1: "Agentic AI for US workflows that still need a human stop",
    lede: "US operations leaders ask for agents that file the ticket, draft the reply, and stop before they refund a customer. We orchestrate those steps and keep a person on the irreversible ones.",
    sections: [
      {
        heading: "Multi-agent does not mean unsupervised",
        paragraphs: [
          "One agent retrieves policy, another drafts, a third checks that the tool call is allowed for that role. The refund, the wire, and the production deploy stay behind an approval.",
          "This is the same class of work as our published agentic chatbot engagements, staffed for a US squad and discussed in USD.",
        ],
      },
    ],
    primaryCta: cta["en-us"],
  }),
  page("en-gb", "ai-solutions/agentic-ai", {
    title: "Agentic Workflows for UK Operations Teams | NeoVisionTech",
    description: "Workflow agents for UK organisations, designed so personal data in a tool call stays inside a GDPR-aligned process.",
    h1: "Agentic workflows for UK operations",
    lede: "UK teams want the repetitive casework off the queue without an agent emailing a customer something the organisation cannot defend. We design the tool list, the approval, and the record of what data moved.",
    sections: [
      {
        heading: "A process a data protection lead can read",
        paragraphs: [
          "Each tool is named, the personal data it can touch is listed, and the agent cannot invent a new tool at runtime. That is GDPR-aligned design, not a badge.",
        ],
      },
    ],
    primaryCta: cta["en-gb"],
  }),
  page("en-lu", "ai-solutions/agentic-ai", {
    title: "Controlled Agents for Luxembourg Financial Operations | NeoVisionTech",
    description: "Workflow agents for Luxembourg institutions with on-premise deployment options and an approval step before any instruction that moves value.",
    h1: "Agents that stop before they move value",
    lede: "In a Luxembourg financial operation, an agent that can talk is not the same as an agent that can instruct a payment. We separate those powers and log both.",
    sections: [
      {
        heading: "Orchestration inside the boundary",
        paragraphs: [
          "The planner, the tools, and the audit log can run on-premise. A public agent framework with a shared control plane is not the default for this market.",
        ],
      },
    ],
    primaryCta: cta["en-lu"],
  }),
  page("fr-lu", "ai-solutions/agentic-ai", {
    title: "Agents contrôlés pour les opérations financières au Luxembourg | NeoVisionTech",
    description: "Agents de workflow pour les institutions luxembourgeoises, avec une option sur site et une validation humaine avant toute instruction qui déplace de la valeur.",
    h1: "Des agents qui s'arrêtent avant de déplacer de la valeur",
    lede: "Dans une opération financière au Luxembourg, un agent qui dialogue n'est pas un agent autorisé à initier un paiement. Nous séparons ces pouvoirs et nous journalisons les deux.",
    sections: [
      {
        heading: "Une orchestration dans le périmètre",
        paragraphs: [
          "Le planificateur, les outils et le journal d'audit peuvent tourner sur site. Un framework d'agents public, avec un plan de contrôle partagé, n'est pas le défaut pour ce marché.",
        ],
      },
    ],
    primaryCta: cta["fr-lu"],
  }),
  page("en-in", "ai-solutions/agentic-ai", {
    title: "Agentic AI and Chatbot Workflows for Indian Teams | NeoVisionTech",
    description: "Multi-step workflow bots and agentic chatbots for Indian startups and operators, building on NeoVision Tech's published chatbot engagements.",
    h1: "Agentic AI for Indian support and operations queues",
    lede: "Indian teams ask for a bot that can check an order, qualify a lead, and hand the rest to a person. That is the agentic chatbot work we already deliver, framed here for a domestic MVP budget in INR.",
    sections: [
      {
        heading: "Published delivery, not a new fictional client",
        paragraphs: [
          "The benefits, process, and questions on the India version of this page come from the agentic chatbot service already on this site. We did not invent a new logo or a new metric for the US or Luxembourg.",
        ],
      },
    ],
    primaryCta: cta["en-in"],
  }),

  page("en-us", "ai-solutions/private-llms", {
    title: "Private LLM Deployments for US Enterprises | NeoVisionTech",
    description: "Private, permissioned LLM deployments for US companies that cannot paste proprietary data into a consumer chat product.",
    h1: "Private LLMs for US teams who cannot use a consumer chat box",
    lede: "When the corpus is proprietary, a US security review will ask where the weights run and who can read the prompt. We deploy a private endpoint, ground it with retrieval, and wrap it in the same identity system as the rest of the product.",
    sections: [
      {
        heading: "Grounded, not hallucination-free",
        paragraphs: [
          "A private model still invents text. Retrieval, citations, and a refusal when the context is missing are how we minimise that. We will not sign a statement that the system is hallucination-free.",
        ],
      },
    ],
    primaryCta: cta["en-us"],
  }),
  page("en-gb", "ai-solutions/private-llms", {
    title: "Private LLM Deployments for UK Organisations | NeoVisionTech",
    description: "Private model hosting for UK organisations that need a GDPR-aligned place for prompts and documents.",
    h1: "Private LLMs with a UK data-protection story",
    lede: "UK organisations moving off a consumer chatbot need a named place where prompts are stored, a retention period, and a way to keep special-category data out. We design that private deployment. We do not certify it.",
    sections: [
      {
        heading: "Region and retention are part of the build",
        paragraphs: [
          "We will target a UK or EU region when your policy requires it, using a provider you accept as a processor. NeoVision Tech does not own a UK facility.",
        ],
      },
    ],
    primaryCta: cta["en-gb"],
  }),
  page("en-lu", "ai-solutions/private-llms", {
    title: "Private and On-Premise LLMs for Luxembourg | NeoVisionTech",
    description: "Private LLM deployments that can run on-premise for Luxembourg institutions, designed for CSSF and DORA operational questions.",
    h1: "Private LLMs that Luxembourg institutions can keep on premises",
    lede: "Some Luxembourg mandates will not accept a shared model endpoint for client documents. We package a private model, the retrieval index, and the logs so they can run in your data centre.",
    sections: [
      {
        heading: "Designed for the questions, not a licence",
        paragraphs: [
          "We help you describe availability, access, and exit in language a DORA operations file expects. That design work is not a CSSF authorisation and not a DORA certificate.",
        ],
      },
    ],
    primaryCta: cta["en-lu"],
  }),
  page("fr-lu", "ai-solutions/private-llms", {
    title: "LLM privés et sur site pour le Luxembourg | NeoVisionTech",
    description: "Déploiements de LLM privés, y compris sur site, pour les institutions luxembourgeoises, conçus pour les questions opérationnelles CSSF et DORA.",
    h1: "Des LLM privés que les institutions luxembourgeoises peuvent garder sur site",
    lede: "Certains mandats au Luxembourg n'acceptent pas un point d'accès de modèle partagé pour des documents clients. Nous empaquetons un modèle privé, l'index de recherche et les journaux pour qu'ils tournent dans votre centre de données.",
    sections: [
      {
        heading: "Conçu pour les questions, pas pour un agrément",
        paragraphs: [
          "Nous aidons à décrire la disponibilité, l'accès et la sortie dans les termes qu'un dossier opérationnel DORA attend. Ce travail de conception n'est ni un agrément CSSF ni un certificat DORA.",
        ],
      },
    ],
    primaryCta: cta["fr-lu"],
  }),
  page("en-in", "ai-solutions/private-llms", {
    title: "Private LLM Setups for Indian Product Teams | NeoVisionTech",
    description: "A practical private-model setup for Indian startups that need grounded answers over their own documents, scoped in INR.",
    h1: "Private LLMs without an enterprise-only price tag",
    lede: "Indian startups often need one private endpoint for internal search, not a research cluster. We set up a grounded deployment with citations and an access check, and we price the build in INR.",
    sections: [
      {
        heading: "Honest limits",
        paragraphs: [
          "The model can still be wrong. Citations and guardrails reduce that. We do not advertise a hallucination-free system, and we do not invent a compliance certificate to win the deal.",
        ],
      },
    ],
    primaryCta: cta["en-in"],
  }),

  page("en-us", "engineering", {
    title: "Full-Stack Engineering for US Product Squads | NeoVisionTech",
    description: "MERN and polyglot product engineering, programmatic SEO, and mobile builds staffed into United States squads.",
    h1: "Full-stack engineering embedded with US squads",
    lede: "This pillar is the product engineering we staff into United States teams: React and Node, PostgreSQL or MongoDB, mobile, and the programmatic pages that should not be maintained by hand.",
    sections: [
      {
        heading: "A pod, not a ticket queue",
        paragraphs: [
          "US staff-augmentation buyers get engineers in the sprint, not a weekly status PDF. The stack pages below are the practices those pods actually use.",
        ],
      },
    ],
    primaryCta: cta["en-us"],
  }),
  page("en-gb", "engineering", {
    title: "Full-Stack Engineering and Legacy Replacement for the UK | NeoVisionTech",
    description: "Web platforms and programmatic sites for UK organisations replacing legacy systems, delivered as GDPR-aligned nearshore engineering.",
    h1: "Full-stack engineering for UK legacy replacement",
    lede: "UK organisations use this pillar when the website, the admin tools, and the migration off an ageing stack have to land as one programme. Spelling, dates, and the data-protection notes follow UK practice.",
    sections: [
      {
        heading: "Nearshore, with a named office in India",
        paragraphs: [
          "The engineers are in Prayagraj. We do not describe that as a London studio. Overlap with the UK day is planned into the engagement.",
        ],
      },
    ],
    primaryCta: cta["en-gb"],
  }),
  page("en-lu", "engineering", {
    title: "Full-Stack Engineering for Luxembourg Financial Products | NeoVisionTech",
    description: "Secure web and mobile engineering for Luxembourg financial products, with on-premise deployment options and EUR commercials.",
    h1: "Full-stack engineering for controlled financial products",
    lede: "Luxembourg product teams use this pillar for the applications around a controlled core: portals, operator tools, and sites that must not leak data through a marketing stack.",
    sections: [
      {
        heading: "Build for the boundary you already have",
        paragraphs: [
          "We will target on-premise or a private network when the application sits next to regulated data. A public SaaS default is not assumed.",
        ],
      },
    ],
    primaryCta: cta["en-lu"],
  }),
  page("fr-lu", "engineering", {
    title: "Ingénierie full-stack pour les produits financiers au Luxembourg | NeoVisionTech",
    description: "Ingénierie web et mobile pour des produits financiers luxembourgeois, avec une option sur site et des échanges en euros.",
    h1: "Une ingénierie full-stack pour des produits sous contrôle",
    lede: "Les équipes produit au Luxembourg utilisent ce pilier pour les applications autour d'un cœur contrôlé : portails, outils d'exploitation et sites qui ne doivent pas fuir par une pile marketing.",
    sections: [
      {
        heading: "Construire pour le périmètre que vous avez déjà",
        paragraphs: [
          "Nous visons le sur-site ou un réseau privé lorsque l'application côtoie des données réglementées. Le SaaS public n'est pas le présupposé.",
        ],
      },
    ],
    primaryCta: cta["fr-lu"],
  }),
  page("en-in", "engineering", {
    title: "Full-Stack Engineering for Indian Startups | NeoVisionTech",
    description: "MERN, programmatic sites, mobile, and product design for Indian MVPs, with training programmes in INR for the same skills.",
    h1: "Full-stack engineering for Indian MVPs",
    lede: "Indian startups use this pillar to ship the web app, the admin, and the mobile client of a first release. The same skills are taught in the INR programmes on this site.",
    sections: [
      {
        heading: "From the services we already list",
        paragraphs: [
          "Custom web, SEO-oriented sites, mobile, and UI work already published by NeoVision Tech are organised here so a founder can see the path from MVP to a maintainable product.",
        ],
      },
    ],
    primaryCta: cta["en-in"],
    secondaryCta: { label: "Web and mobile courses", href: "/trainings" },
  }),

  page("en-us", "engineering/mern-polyglot", {
    title: "MERN and Polyglot Engineering for US Products | NeoVisionTech",
    description: "React, Node, MongoDB, and PostgreSQL pods for United States product teams that need senior capacity inside the sprint.",
    h1: "MERN and polyglot pods for US product roadmaps",
    lede: "A US staff-augmentation engagement on this page means React and Node engineers who can also live in PostgreSQL when MongoDB is the wrong store. The pod joins your repository.",
    sections: [
      {
        heading: "Choose the database for the access pattern",
        paragraphs: [
          "Document shapes that change every week can stay in MongoDB. Reporting, permissions, and retrieval usually want PostgreSQL. We will not force one logo because it is in the acronym.",
        ],
      },
    ],
    primaryCta: cta["en-us"],
  }),
  page("en-gb", "engineering/mern-polyglot", {
    title: "MERN and Polyglot Web Platforms for the UK | NeoVisionTech",
    description: "React and Node platforms for UK organisations replacing legacy web estates, with PostgreSQL or MongoDB chosen for the workload.",
    h1: "Web platforms for UK organisations leaving a legacy stack",
    lede: "UK programmes on this page replace a tired web estate with React and Node, and a database that operations can actually back up. The language of the engagement is British English; the engineers are in Prayagraj.",
    sections: [
      {
        heading: "Migration in slices",
        paragraphs: [
          "We keep the legacy system as the record until a slice of users has run on the new platform. That is how a UK change board can approve the move without a weekend cutover.",
        ],
      },
    ],
    primaryCta: cta["en-gb"],
  }),
  page("en-lu", "engineering/mern-polyglot", {
    title: "Secure MERN and PostgreSQL Builds for Luxembourg | NeoVisionTech",
    description: "React, Node, and PostgreSQL applications that can be deployed on-premise for Luxembourg financial products.",
    h1: "Polyglot builds that deploy inside a controlled network",
    lede: "Luxembourg product work on this page favours PostgreSQL, explicit schemas, and a deployment you can place on-premise. MongoDB is used only when the data shape justifies it and the policy allows it.",
    sections: [
      {
        heading: "Operable by your team",
        paragraphs: [
          "We leave infrastructure as code and a runbook, because a DORA-minded review will ask who restarts the service at 02:00 and how.",
        ],
      },
    ],
    primaryCta: cta["en-lu"],
  }),
  page("fr-lu", "engineering/mern-polyglot", {
    title: "Builds MERN et PostgreSQL pour le Luxembourg | NeoVisionTech",
    description: "Applications React, Node et PostgreSQL déployables sur site pour des produits financiers luxembourgeois.",
    h1: "Des builds polyglottes déployables dans un réseau contrôlé",
    lede: "Le travail produit au Luxembourg sur cette page privilégie PostgreSQL, des schémas explicites et un déploiement que vous pouvez placer sur site. MongoDB n'est retenu que si la forme des données le justifie et si la politique l'autorise.",
    sections: [
      {
        heading: "Exploitable par votre équipe",
        paragraphs: [
          "Nous laissons l'infrastructure en code et un runbook, parce qu'une revue inspirée de DORA demandera qui redémarre le service à deux heures et comment.",
        ],
      },
    ],
    primaryCta: cta["fr-lu"],
  }),
  page("en-in", "engineering/mern-polyglot", {
    title: "MERN and PostgreSQL MVPs for Indian Startups | NeoVisionTech",
    description: "React, Node, MongoDB, and PostgreSQL delivery for Indian MVPs, continuing NeoVision Tech's custom web application work.",
    h1: "MERN and PostgreSQL for an Indian first release",
    lede: "Founders in India use this page for the custom web application work NeoVision Tech already publishes: React, Node, and a database chosen for the product rather than for a slogan. Scoping is in INR.",
    sections: [
      {
        heading: "A codebase the next hire can read",
        paragraphs: [
          "The MVP includes the admin path and the deployment notes, so the startup is not stuck when the first engineer leaves.",
        ],
      },
    ],
    primaryCta: cta["en-in"],
  }),

  page("en-us", "engineering/programmatic-seo", {
    title: "Programmatic SEO Architectures for US Sites | NeoVisionTech",
    description: "How NeoVision Tech builds indexable, templated URL architectures for US sites without doorway pages.",
    h1: "Programmatic SEO architectures for US content sites",
    lede: "US growth teams want thousands of useful URLs, not thousands of doorway pages. We design the template, the data, the canonical, and the rule that keeps a thin page out of the index.",
    sections: [
      {
        heading: "Index only what a person would read",
        paragraphs: [
          "A page earns a place in the sitemap when it has a distinct intent and enough copy. Thin combinations are noindex. That is the same rule this site uses for its own programmatic examples.",
        ],
      },
    ],
    primaryCta: cta["en-us"],
  }),
  page("en-gb", "engineering/programmatic-seo", {
    title: "Programmatic SEO for UK Organisations | NeoVisionTech",
    description: "Templated but indexable URL systems for UK organisations, with British spelling in the templates and a noindex rule for thin pages.",
    h1: "Programmatic SEO that a UK editor can still stand behind",
    lede: "UK organisations get into trouble when a template invents a page for every town and says nothing specific. We build the data model, the spelling (organisation, specialise), and the noindex threshold together.",
    sections: [
      {
        heading: "Canonicals that match the host you actually serve",
        paragraphs: [
          "We will not point a UK programme at a domain that does not resolve to the deployment. This site's own canonicals follow the host that serves it.",
        ],
      },
    ],
    primaryCta: cta["en-gb"],
  }),
  page("en-lu", "engineering/programmatic-seo", {
    title: "Programmatic SEO for Luxembourg Financial Content | NeoVisionTech",
    description: "Careful templated publishing for Luxembourg sites that must not generate uncontrolled public pages about regulated products.",
    h1: "Programmatic pages with a compliance stop",
    lede: "A Luxembourg financial site cannot auto-publish a page that sounds like an offer. We build templated architectures with a review gate and a noindex default until a page is approved.",
    sections: [
      {
        heading: "Public URLs are a controlled surface",
        paragraphs: [
          "The generator is allowed to draft. It is not allowed to index. That distinction matters more here than raw URL count.",
        ],
      },
    ],
    primaryCta: cta["en-lu"],
  }),
  page("fr-lu", "engineering/programmatic-seo", {
    title: "SEO programmatique pour les contenus luxembourgeois | NeoVisionTech",
    description: "Publication templée et contrôlée pour les sites luxembourgeois, avec un défaut noindex tant qu'une page n'est pas approuvée.",
    h1: "Des pages programmatiques avec un arrêt de conformité",
    lede: "Un site financier luxembourgeois ne peut pas publier automatiquement une page qui ressemble à une offre. Nous construisons des architectures templées avec une porte de revue et un défaut noindex jusqu'à approbation.",
    sections: [
      {
        heading: "L'URL publique est une surface contrôlée",
        paragraphs: [
          "Le générateur a le droit de préparer un brouillon. Il n'a pas le droit d'indexer. Cette distinction compte plus ici que le nombre d'URL.",
        ],
      },
    ],
    primaryCta: cta["fr-lu"],
  }),
  page("en-in", "engineering/programmatic-seo", {
    title: "Programmatic SEO for Indian Product Sites | NeoVisionTech",
    description: "Templated local and catalogue pages for Indian startups, using the same noindex rule NeoVision Tech applies on this site.",
    h1: "Programmatic SEO for Indian catalogues and city pages",
    lede: "Indian startups ask for a page per city or per course variant. We build that architecture and keep thin combinations out of the sitemap, the same way this site treats its own programmatic examples.",
    sections: [
      {
        heading: "Useful pages, INR-scoped builds",
        paragraphs: [
          "The India service for SEO-oriented websites lives in this silo. City examples that were already published stay on the India site only.",
        ],
      },
    ],
    primaryCta: cta["en-in"],
  }),

  page("en-us", "engineering/mobile-applications", {
    title: "Mobile Engineering for US Product Teams | NeoVisionTech",
    description: "React Native and native mobile capacity for United States squads, staffed from Prayagraj with a USD engagement.",
    h1: "Mobile engineers inside a US product squad",
    lede: "US mobile work here is staff augmentation and product engineering on the app you already ship. We do not publish a fictional 'React Native for US SaaS' client. That title is a draft template, kept out of the index until you supply a real engagement.",
    sections: [
      {
        heading: "Ship on the stack the app already uses",
        paragraphs: [
          "React Native when the product is shared, native when the platform team has already committed. The pod follows your release train.",
        ],
      },
    ],
    primaryCta: cta["en-us"],
  }),
  page("en-gb", "engineering/mobile-applications", {
    title: "Mobile Applications for UK Organisations | NeoVisionTech",
    description: "Mobile product engineering for UK organisations, including GDPR-aligned handling of device data and account deletion.",
    h1: "Mobile applications for UK organisations",
    lede: "UK mobile programmes on this page include the account-deletion and device-data questions a GDPR-aligned app has to answer. We build that behaviour. We do not certify the app.",
    sections: [
      {
        heading: "Store listings in British English",
        paragraphs: [
          "Copy, permissions text, and support email are written for a UK user. The engineering office remains in Prayagraj.",
        ],
      },
    ],
    primaryCta: cta["en-gb"],
  }),
  page("en-lu", "engineering/mobile-applications", {
    title: "Mobile Applications for Luxembourg Financial Services | NeoVisionTech",
    description: "Mobile clients for Luxembourg financial products, with on-device storage choices a security review can inspect.",
    h1: "Mobile clients for controlled financial services",
    lede: "A Luxembourg mobile client often sits in front of a core that cannot be reached from a consumer push network without a review. We design the session, the storage, and the logging for that review.",
    sections: [
      {
        heading: "No sample client invented for this page",
        paragraphs: [
          "Published mobile case studies on this site are the real engagements already named. We do not add a Luxembourg bank logo.",
        ],
      },
    ],
    primaryCta: cta["en-lu"],
  }),
  page("fr-lu", "engineering/mobile-applications", {
    title: "Applications mobiles pour les services financiers luxembourgeois | NeoVisionTech",
    description: "Clients mobiles pour des produits financiers luxembourgeois, avec des choix de stockage sur l'appareil qu'une revue de sécurité peut inspecter.",
    h1: "Des clients mobiles pour des services financiers contrôlés",
    lede: "Un client mobile luxembourgeois se trouve souvent devant un cœur qui ne s'ouvre pas à un réseau push grand public sans revue. Nous concevons la session, le stockage et la journalisation pour cette revue.",
    sections: [
      {
        heading: "Pas de client fictif sur cette page",
        paragraphs: [
          "Les études mobiles publiées sur ce site sont les mandats déjà nommés. Nous n'ajoutons pas le logo d'une banque luxembourgeoise.",
        ],
      },
    ],
    primaryCta: cta["fr-lu"],
  }),
  page("en-in", "engineering/mobile-applications", {
    title: "Mobile App Development for Indian Startups | NeoVisionTech",
    description: "iOS and Android delivery for Indian MVPs, continuing NeoVision Tech's published mobile application work. Related courses are priced in INR.",
    h1: "Mobile applications for Indian product launches",
    lede: "This is the mobile application service NeoVision Tech already delivers, placed in the engineering silo for Indian startups. Store listings, push, and a first Android or iOS release are scoped in INR.",
    sections: [
      {
        heading: "Learn the same stack",
        paragraphs: [
          "Mobile and React Native programmes on the India training pages use rupee fees. They are not offered as a US or Luxembourg price list.",
        ],
      },
    ],
    primaryCta: cta["en-in"],
    secondaryCta: { label: "Mobile training programmes", href: "/trainings" },
  }),

  page("en-us", "engineering/product-design", {
    title: "Product Design for US Enterprise Software | NeoVisionTech",
    description: "Interface design for US B2B products, paired with the engineers who implement the flows.",
    h1: "Product design that US squads can implement in the same sprint",
    lede: "US enterprise design engagements here are tied to the pod that will build the screens. We do not run a separate US design studio.",
    sections: [
      {
        heading: "Flows before decoration",
        paragraphs: [
          "We design the operator path, the empty state, and the error the copilot shows when retrieval fails. Visual polish follows a flow a US user can finish.",
        ],
      },
    ],
    primaryCta: cta["en-us"],
  }),
  page("en-gb", "engineering/product-design", {
    title: "Product Design for UK Services | NeoVisionTech",
    description: "Interface design for UK organisations, including British English microcopy and accessible colour contrast.",
    h1: "Product design for UK services and public-facing tools",
    lede: "UK design work on this page uses British spelling in the interface and checks contrast before a screen is called done. The designers collaborate with the Prayagraj engineering pod.",
    sections: [
      {
        heading: "Microcopy is part of the delivery",
        paragraphs: [
          "Organisation, postcode, and rubbish — not organization, zip code, and trash — when the product is for a UK user.",
        ],
      },
    ],
    primaryCta: cta["en-gb"],
  }),
  page("en-lu", "engineering/product-design", {
    title: "Product Design for Luxembourg Financial Interfaces | NeoVisionTech",
    description: "Interface design for Luxembourg financial tools, with bilingual-ready layouts and no decorative trust badges.",
    h1: "Interfaces for financial tools that must stay serious",
    lede: "Luxembourg operator tools should not wear startup gradients over a payment instruction. We design dense, reviewable screens and leave room for French and English labels.",
    sections: [
      {
        heading: "No fake assurance badges",
        paragraphs: [
          "We will not place a CSSF or DORA badge in the UI. If a control exists, the interface shows the control, not a medal.",
        ],
      },
    ],
    primaryCta: cta["en-lu"],
  }),
  page("fr-lu", "engineering/product-design", {
    title: "Design produit pour les interfaces financières luxembourgeoises | NeoVisionTech",
    description: "Design d'interfaces pour des outils financiers luxembourgeois, avec des écrans prêts pour le français et l'anglais, sans badges de confiance décoratifs.",
    h1: "Des interfaces financières qui restent sobres",
    lede: "Les outils d'exploitation au Luxembourg ne devraient pas recouvrir une instruction de paiement d'un dégradé de startup. Nous concevons des écrans denses, relisibles, et nous prévoyons des libellés en français et en anglais.",
    sections: [
      {
        heading: "Pas de faux badges",
        paragraphs: [
          "Nous ne placerons pas un badge CSSF ou DORA dans l'interface. Si un contrôle existe, l'écran montre le contrôle, pas une médaille.",
        ],
      },
    ],
    primaryCta: cta["fr-lu"],
  }),
  page("en-in", "engineering/product-design", {
    title: "UI and UX Design for Indian Product Teams | NeoVisionTech",
    description: "Product design for Indian MVPs, continuing NeoVision Tech's published UI/UX work, scoped in INR.",
    h1: "Product design for Indian MVPs",
    lede: "This page is the UI/UX service already published by NeoVision Tech, aimed at Indian startups who need screens a small team can build. The engagement is scoped in INR.",
    sections: [
      {
        heading: "Design next to the engineers",
        paragraphs: [
          "The same pod that designs the flow implements it, so the MVP does not stall between a deck and a repository.",
        ],
      },
    ],
    primaryCta: cta["en-in"],
  }),

  page("en-us", "services/digital-marketing", {
    title: "Digital Marketing Engineering for US Campaigns | NeoVisionTech",
    description: "Tracking, landing pages, and content operations for US campaigns. Not a promise of rankings or a fabricated pipeline.",
    h1: "Marketing engineering for US campaign sites",
    lede: "US marketing work we will take is the site, the measurement, and the landing pages behind a campaign you already run. We do not promise a rank, and we do not invent pipeline numbers.",
    sections: [
      {
        heading: "Measurement before more pages",
        paragraphs: [
          "If the US site cannot tell which page earned the enquiry, more content will not help. We fix that path first.",
        ],
      },
    ],
    primaryCta: cta["en-us"],
  }),
  page("en-gb", "services/digital-marketing", {
    title: "Digital Marketing Sites for UK Organisations | NeoVisionTech",
    description: "Campaign sites and measurement for UK organisations, written in British English and designed with a GDPR-aligned consent approach.",
    h1: "Campaign sites for UK organisations",
    lede: "UK campaign work includes the consent story for analytics. We implement a GDPR-aligned consent pattern. We do not claim the organisation is certified, and we do not guarantee positions.",
    sections: [
      {
        heading: "Copy a UK reader recognises",
        paragraphs: [
          "Landing pages use British spelling and a clear organisation name. Tracking waits for consent.",
        ],
      },
    ],
    primaryCta: cta["en-gb"],
  }),
  page("en-lu", "services/digital-marketing", {
    title: "Restrained Digital Publishing for Luxembourg Firms | NeoVisionTech",
    description: "Public pages for Luxembourg firms that need measurement without turning a regulated message into an uncontrolled campaign.",
    h1: "Public pages that stay inside the message you approved",
    lede: "Luxembourg firms often need a precise public site, not a growth experiment. We build the pages and the measurement. We do not invent performance claims.",
    sections: [
      {
        heading: "Approved copy only",
        paragraphs: [
          "Programmatic expansion of financial claims is out of scope on this market until a compliance reviewer signs the template.",
        ],
      },
    ],
    primaryCta: cta["en-lu"],
  }),
  page("fr-lu", "services/digital-marketing", {
    title: "Publication numérique sobre pour les sociétés luxembourgeoises | NeoVisionTech",
    description: "Pages publiques et mesure pour les sociétés luxembourgeoises, sans transformer un message réglementé en campagne non contrôlée.",
    h1: "Des pages publiques qui restent dans le message approuvé",
    lede: "Les sociétés luxembourgeoises ont souvent besoin d'un site public précis, pas d'une expérience de croissance. Nous construisons les pages et la mesure. Nous n'inventons pas de performances.",
    sections: [
      {
        heading: "Uniquement le texte approuvé",
        paragraphs: [
          "L'expansion programmatique d'allégations financières est hors périmètre sur ce marché tant qu'un relecteur conformité n'a pas signé le modèle.",
        ],
      },
    ],
    primaryCta: cta["fr-lu"],
  }),
  page("en-in", "services/digital-marketing", {
    title: "Digital Marketing Services for Indian Startups | NeoVisionTech",
    description: "The digital marketing service NeoVision Tech already publishes, for Indian startups, scoped in INR.",
    h1: "Digital marketing for Indian product launches",
    lede: "This is the digital marketing service already listed by NeoVision Tech, kept for Indian startups who need landing pages and a measurement path. It is not a guarantee of rankings.",
    sections: [
      {
        heading: "Scoped with the MVP",
        paragraphs: [
          "Marketing pages ship with the product, in INR, instead of as a separate retainers-only conversation.",
        ],
      },
    ],
    primaryCta: cta["en-in"],
  }),

  page("en-us", "services", {
    title: "US Service Pillars | NeoVisionTech",
    description: "Enterprise AI and full-stack engineering pillars for United States teams.",
    h1: "Two pillars for US engagements",
    lede: "United States work is organised as enterprise AI and full-stack engineering. Training catalogues and rupee prices are not part of this market.",
    sections: [
      {
        heading: "Start from the pillar, not a generic menu",
        paragraphs: ["Each child page is written for a US buying motion: staff augmentation, copilots, and product pods. The India office is the only office."],
      },
    ],
    primaryCta: cta["en-us"],
  }),
  page("en-gb", "services", {
    title: "UK Service Pillars | NeoVisionTech",
    description: "AI and engineering pillars for United Kingdom organisations, including GDPR-aligned delivery and legacy migration.",
    h1: "Two pillars for UK organisations",
    lede: "United Kingdom work is organised as enterprise AI and full-stack engineering, with legacy migration and GDPR-aligned design in the copy. It is not a certification menu.",
    sections: [
      {
        heading: "British English throughout",
        paragraphs: ["Organisation, programme, and colour show up in the product language. The engineering office is in Prayagraj."],
      },
    ],
    primaryCta: cta["en-gb"],
  }),
  page("en-lu", "services", {
    title: "Luxembourg Service Pillars | NeoVisionTech",
    description: "AI and engineering pillars for Luxembourg institutions, designed for on-premise deployment and CSSF/DORA questions.",
    h1: "Two pillars for Luxembourg institutions",
    lede: "Luxembourg work is organised as enterprise AI and full-stack engineering, with on-premise deployment as a first-class option. No local office is claimed.",
    sections: [
      {
        heading: "Euro commercials, India delivery",
        paragraphs: ["Quotes are discussed in EUR. The published address remains Bamrauli, Prayagraj."],
      },
    ],
    primaryCta: cta["en-lu"],
  }),
  page("fr-lu", "services", {
    title: "Piliers de services pour le Luxembourg | NeoVisionTech",
    description: "Piliers IA et ingénierie pour les institutions luxembourgeoises, avec un déploiement sur site et des questions CSSF/DORA.",
    h1: "Deux piliers pour les institutions luxembourgeoises",
    lede: "Le travail au Luxembourg est organisé en IA d'entreprise et en ingénierie full-stack, avec le déploiement sur site comme option de premier plan. Aucun bureau local n'est revendiqué.",
    sections: [
      {
        heading: "Devis en euros, livraison en Inde",
        paragraphs: ["Les échanges se font en euros. L'adresse publiée reste Bamrauli, Prayagraj."],
      },
    ],
    primaryCta: cta["fr-lu"],
  }),
  page("en-in", "services", {
    title: "India Service Pillars and Training | NeoVisionTech",
    description: "AI, engineering, and industrial training for Indian startups. Course fees in INR.",
    h1: "Pillars for Indian startups, plus training",
    lede: "India is the only market that lists training programmes and rupee course fees. AI and engineering pillars organise the services this site already published.",
    sections: [
      {
        heading: "Visit the office",
        paragraphs: ["The training centre and engineering office are in Bamrauli, Prayagraj, Uttar Pradesh."],
      },
    ],
    primaryCta: cta["en-in"],
    secondaryCta: { label: "Open training programmes", href: "/trainings" },
  }),

  page("en-us", "about", {
    title: "About NeoVision Tech | United States Engagements",
    description: "How US teams engage NeoVision Tech. The company is engineered from Prayagraj, India. No US office is claimed.",
    h1: "An India engineering office, engaged by US teams",
    lede: "NeoVision Tech is not a Delaware studio with a borrowed skyline. US clients engage engineers who sit in Prayagraj. The company story, the named leadership, and the published case studies are the same facts as on the India site.",
    sections: [
      {
        heading: "What we will not add for a US pitch",
        paragraphs: ["No US address, no US phone number, no invented headcount, and no certification medals. Staff augmentation means named people on your squad."],
      },
    ],
    primaryCta: cta["en-us"],
  }),
  page("en-gb", "about", {
    title: "About NeoVision Tech | United Kingdom Engagements",
    description: "How UK organisations engage NeoVision Tech. Delivery is from Prayagraj. No UK office is claimed.",
    h1: "Nearshore to the UK, based in Prayagraj",
    lede: "UK organisations work with NeoVision Tech as a nearshore engineering partner. We use British English in this market's copy. We do not claim a London office or a UK company number on this page.",
    sections: [
      {
        heading: "The facts stay the facts",
        paragraphs: ["Leadership names, the Prayagraj address, and the published projects are shared. Marketing counts that disagree with each other are listed for the owner to verify and are not repeated here as new proof."],
      },
    ],
    primaryCta: cta["en-gb"],
  }),
  page("en-lu", "about", {
    title: "About NeoVision Tech | Luxembourg Engagements",
    description: "How Luxembourg institutions engage NeoVision Tech. The only published office is in Prayagraj, India.",
    h1: "No Luxembourg branch, by design",
    lede: "If a page on this market implied a Luxembourg office, it would be false. NeoVision Tech's published office is in Bamrauli, Prayagraj. Luxembourg clients engage that team for on-premise-capable software.",
    sections: [
      {
        heading: "Leadership is published once",
        paragraphs: ["The people named on the India about page are the leadership. We do not create a local managing partner for this market."],
      },
    ],
    primaryCta: cta["en-lu"],
  }),
  page("fr-lu", "about", {
    title: "À propos de NeoVision Tech | Mandats luxembourgeois",
    description: "Comment les institutions luxembourgeoises travaillent avec NeoVision Tech. Le seul bureau publié est à Prayagraj, en Inde.",
    h1: "Pas de succursale luxembourgeoise, et c'est volontaire",
    lede: "Si une page de ce marché laissait entendre un bureau au Luxembourg, ce serait faux. Le bureau publié de NeoVision Tech est à Bamrauli, Prayagraj. Les clients luxembourgeois engagent cette équipe pour des logiciels capables de tourner sur site.",
    sections: [
      {
        heading: "La direction est publiée une seule fois",
        paragraphs: ["Les personnes nommées sur la page À propos de l'Inde sont la direction. Nous n'inventons pas d'associé local pour ce marché."],
      },
    ],
    primaryCta: cta["fr-lu"],
  }),
  page("en-in", "about", {
    title: "About NeoVision Tech | India",
    description: "NeoVision Tech's Prayagraj engineering and training centre, and the team published on this site.",
    h1: "Engineering and training from Prayagraj",
    lede: "This is the home market. The office and training centre are in Bamrauli, Prayagraj, Uttar Pradesh. The leadership named below is the team already published on this website.",
    sections: [
      {
        heading: "Numbers the owner still needs to confirm",
        paragraphs: ["Older pages have disagreed about founding year, project counts, and certifications. Those strings now live in one claims file for the owner. This about page does not add new figures."],
      },
    ],
    primaryCta: cta["en-in"],
  }),

  page("en-us", "contact", {
    title: "Contact NeoVision Tech | United States",
    description: "Request a USD staff-augmentation or copilot proposal. Replies come from the Prayagraj office. No US phone line is listed.",
    h1: "Request a US engagement",
    lede: "Tell us about the squad, the stack, and whether you need people, a copilot, or both. We reply from contact@neovisiontech.in. The phone numbers on the India site are the Prayagraj office, not a US line, so this page does not relabel them.",
    sections: [
      {
        heading: "What to include",
        paragraphs: ["Timezone overlap you need, rough duration, and whether a private corpus is involved. Do not send secrets in the first message."],
      },
    ],
    primaryCta: { label: "Use the form", href: "/contact#form" },
  }),
  page("en-gb", "contact", {
    title: "Contact NeoVision Tech | United Kingdom",
    description: "Book a GBP migration or GDPR-aligned build review. The reply comes from the Prayagraj office.",
    h1: "Book a UK review",
    lede: "Describe the legacy estate or the web platform, and whether personal data is in scope. We reply by email from the India office. We will not pretend a +44 number exists.",
    sections: [
      {
        heading: "A useful first note",
        paragraphs: ["Say which systems must keep running during a migration and whether you need a data processing addendum discussed. That is a contracting topic, not a certification."],
      },
    ],
    primaryCta: { label: "Use the form", href: "/contact#form" },
  }),
  page("en-lu", "contact", {
    title: "Contact NeoVision Tech | Luxembourg",
    description: "Request a confidential EUR architecture review for an on-premise or private deployment. No Luxembourg phone number is published.",
    h1: "Request a confidential review",
    lede: "Describe the boundary: on-premise, private VPC, or undecided. We reply from the Prayagraj office by email. There is no Luxembourg switchboard on this page.",
    sections: [
      {
        heading: "Keep the first email boring",
        paragraphs: ["Name the document classes and the deployment constraint. Leave account numbers and client files out of the form."],
      },
    ],
    primaryCta: { label: "Use the form", href: "/contact#form" },
  }),
  page("fr-lu", "contact", {
    title: "Contacter NeoVision Tech | Luxembourg",
    description: "Demander une revue d'architecture confidentielle en euros, pour un déploiement sur site ou privé. Aucun numéro luxembourgeois n'est publié.",
    h1: "Demander une revue confidentielle",
    lede: "Décrivez le périmètre : sur site, VPC privé, ou encore ouvert. Nous répondons depuis le bureau de Prayagraj par courriel. Cette page ne publie pas de standard luxembourgeois.",
    sections: [
      {
        heading: "Un premier message sobre",
        paragraphs: ["Indiquez les familles de documents et la contrainte de déploiement. Laissez les numéros de compte et les dossiers clients hors du formulaire."],
      },
    ],
    primaryCta: { label: "Utiliser le formulaire", href: "/contact#form" },
  }),
  page("en-in", "contact", {
    title: "Contact NeoVision Tech | India",
    description: "Talk to the Prayagraj office about an MVP, a service engagement, or a training programme. Fees for courses are in INR.",
    h1: "Talk to the Prayagraj office",
    lede: "Use this form for an MVP, a service, or a training cohort. The address, phones, and emails below are the ones already published for the Bamrauli office. Course prices, when you enrol, are in INR.",
    sections: [
      {
        heading: "Training or delivery",
        paragraphs: ["Say which you need. Training enrolments stay on this India market so a rupee fee is never shown as a US or European price."],
      },
    ],
    primaryCta: { label: "Go to the form", href: "/contact#form" },
  }),

  page("en-us", "privacy", {
    title: "Privacy | NeoVision Tech United States",
    description: "How NeoVision Tech handles enquiries from United States visitors. The company is operated from India.",
    h1: "Privacy for United States visitors",
    lede: "This notice covers the enquiry form on the US market site. NeoVision Tech operates from India. We do not sell the form contents. We do not claim a US state privacy certification.",
    sections: [
      {
        heading: "What the form stores",
        paragraphs: ["Name, email, phone, and the message you type. If a database is configured, the lead is stored there. If email is configured, it is sent to the published inbox. Last updated 29 December 2025."],
      },
    ],
    primaryCta: cta["en-us"],
  }),
  page("en-gb", "privacy", {
    title: "Privacy | NeoVision Tech United Kingdom",
    description: "How NeoVision Tech handles enquiries from United Kingdom visitors, in terms a UK GDPR conversation can use.",
    h1: "Privacy for United Kingdom visitors",
    lede: "UK visitors can use this page to see what the enquiry form collects. We design our own handling to be GDPR-aligned: a stated purpose, a limited set of fields, and a contact for access or deletion requests. We are not certified.",
    sections: [
      {
        heading: "Purpose",
        paragraphs: ["The purpose is to reply to your enquiry. We do not use the form to build an advertising audience. Last updated 29 December 2025."],
      },
    ],
    primaryCta: cta["en-gb"],
  }),
  page("en-lu", "privacy", {
    title: "Privacy | NeoVision Tech Luxembourg",
    description: "How NeoVision Tech handles enquiries from Luxembourg visitors. No local establishment is claimed.",
    h1: "Privacy for Luxembourg visitors",
    lede: "Enquiry data is handled by NeoVision Tech from India so we can answer you. This page does not describe a Luxembourg establishment. Do not submit client files or special-category data in the form.",
    sections: [
      {
        heading: "Retention",
        paragraphs: ["Leads are kept long enough to answer and to keep a record of the conversation. Last updated 29 December 2025."],
      },
    ],
    primaryCta: cta["en-lu"],
  }),
  page("fr-lu", "privacy", {
    title: "Confidentialité | NeoVision Tech Luxembourg",
    description: "Comment NeoVision Tech traite les demandes des visiteurs luxembourgeois. Aucun établissement local n'est revendiqué.",
    h1: "Confidentialité pour les visiteurs au Luxembourg",
    lede: "Les données du formulaire sont traitées par NeoVision Tech depuis l'Inde afin de vous répondre. Cette page ne décrit pas un établissement luxembourgeois. N'envoyez pas de dossiers clients ni de données sensibles dans le formulaire.",
    sections: [
      {
        heading: "Conservation",
        paragraphs: ["Les demandes sont conservées le temps de répondre et de garder une trace de l'échange. Dernière mise à jour : 29 décembre 2025."],
      },
    ],
    primaryCta: cta["fr-lu"],
  }),
  page("en-in", "privacy", {
    title: "Privacy Policy | NeoVision Tech India",
    description: "How NeoVision Tech collects and uses information on the India site, including training enquiries.",
    h1: "Privacy policy",
    lede: "This is the India privacy notice. It covers the website, the contact form, and training enquiries. Last updated 29 December 2025. The date is fixed in the content data. It does not change every time the page is rendered.",
    sections: [
      {
        heading: "Information we collect",
        paragraphs: ["Name, email, phone, and the message you send. Technical data such as browser type may be logged by the host. We use this information to reply, to run training enrolment, and to operate the site."],
      },
      {
        heading: "How to reach us",
        paragraphs: ["Write to contact@neovisiontech.in or use the phones published for the Prayagraj office."],
      },
    ],
    primaryCta: cta["en-in"],
  }),

  page("en-us", "technologies", {
    title: "Technologies Used on US Engagements | NeoVisionTech",
    description: "React, Node, PostgreSQL, pgvector, and Pinecone as used on United States staff-augmentation engagements.",
    h1: "The stack US pods actually join",
    lede: "US squads usually want React, Node, and either PostgreSQL or MongoDB, plus a retrieval store when a copilot is in scope. This page names those tools without turning the list into a certification.",
    sections: [
      {
        heading: "Retrieval is a choice, not a logo wall",
        paragraphs: ["pgvector when Postgres is already there. Pinecone when the index should be separate. The US security review picks the region; we do not host a private US cloud of our own."],
      },
    ],
    primaryCta: cta["en-us"],
  }),
  page("en-gb", "technologies", {
    title: "Technologies for UK Programmes | NeoVisionTech",
    description: "The web, data, and cloud tools NeoVision Tech uses when replacing UK legacy estates.",
    h1: "Technologies for UK replacement programmes",
    lede: "UK programmes on this site favour boring, operable tools: React, Node, PostgreSQL, and a cloud region you can name in a GDPR record. Novelty is not the goal.",
    sections: [
      {
        heading: "Operable by the team you already have",
        paragraphs: ["We avoid a stack your UK operations group cannot restart. Migration tooling follows the estate, not a fashion list."],
      },
    ],
    primaryCta: cta["en-gb"],
  }),
  page("en-lu", "technologies", {
    title: "Technologies for Luxembourg Controlled Deployments | NeoVisionTech",
    description: "Stacks that can run on-premise for Luxembourg financial software, including PostgreSQL and pgvector.",
    h1: "Technologies that can run without a public control plane",
    lede: "Luxembourg deployments prefer PostgreSQL, pgvector, and container images you can run without calling home. A managed US-only SaaS is not the default recommendation.",
    sections: [
      {
        heading: "Explicit processors",
        paragraphs: ["If a managed service is required, it is named so your vendor list stays accurate. We do not hide a model endpoint inside a demo key."],
      },
    ],
    primaryCta: cta["en-lu"],
  }),
  page("fr-lu", "technologies", {
    title: "Technologies pour les déploiements contrôlés au Luxembourg | NeoVisionTech",
    description: "Piles capables de tourner sur site pour des logiciels financiers luxembourgeois, dont PostgreSQL et pgvector.",
    h1: "Des technologies qui peuvent tourner sans plan de contrôle public",
    lede: "Les déploiements luxembourgeois privilégient PostgreSQL, pgvector et des images que vous pouvez exécuter sans appel extérieur. Un SaaS managé uniquement américain n'est pas la recommandation par défaut.",
    sections: [
      {
        heading: "Des sous-traitants explicites",
        paragraphs: ["Si un service managé est nécessaire, il est nommé afin que votre liste de fournisseurs reste exacte. Nous ne cachons pas un point d'accès de modèle dans une clé de démonstration."],
      },
    ],
    primaryCta: cta["fr-lu"],
  }),
  page("en-in", "technologies", {
    title: "Technologies | NeoVision Tech India",
    description: "The languages, frameworks, and platforms NeoVision Tech uses, and teaches, in India.",
    h1: "Technologies we build with and teach",
    lede: "The India technology catalogue is the stack behind client work and behind the training programmes. Course tools are practised in cohorts priced in INR.",
    sections: [
      {
        heading: "Same tools, two uses",
        paragraphs: ["A startup MVP and a training lab can share React, Node, Python, and SQL. The commercial difference is whether you are hiring a pod or enrolling a student."],
      },
    ],
    primaryCta: cta["en-in"],
    secondaryCta: { label: "See courses", href: "/trainings" },
  }),

  page("en-us", "case-studies", {
    title: "Case Studies | NeoVision Tech United States",
    description: "Published NeoVision Tech engagements. US visitors see the same real projects, with no invented American clients.",
    h1: "Published engagements, read from the United States",
    lede: "These are the real projects already published by NeoVision Tech. They are not relabelled as US clients. A 'React Native for US SaaS' page exists only as a noindex draft until the owner supplies a real engagement.",
    sections: [
      {
        heading: "How to read the metrics",
        paragraphs: ["Figures on each study are the ones already published with that project. We did not inflate them for this market."],
      },
    ],
    primaryCta: cta["en-us"],
  }),
  page("en-gb", "case-studies", {
    title: "Case Studies | NeoVision Tech United Kingdom",
    description: "Published NeoVision Tech engagements for UK readers. No invented British clients.",
    h1: "Published engagements, read from the United Kingdom",
    lede: "UK readers get the same named projects and the same published figures. We have not created a British logo to make the list feel local.",
    sections: [
      {
        heading: "What a UK buyer should take from them",
        paragraphs: ["They show delivery shape: mobile, web, and operations tools. They do not show a UK GDPR certification."],
      },
    ],
    primaryCta: cta["en-gb"],
  }),
  page("en-lu", "case-studies", {
    title: "Case Studies | NeoVision Tech Luxembourg",
    description: "Published NeoVision Tech engagements. The secure-RAG FinTech example is an unpublished draft and is not indexed.",
    h1: "Published engagements, without a fictional Luxembourg client",
    lede: "The studies below are real and previously published. 'Secure RAG for FinTech' is a draft template with no client and no metrics. It is marked noindex and is absent from the sitemap.",
    sections: [
      {
        heading: "Do not cite the draft",
        paragraphs: ["If you need a Luxembourg reference, wait until the owner supplies one. We will not backfill it."],
      },
    ],
    primaryCta: cta["en-lu"],
  }),
  page("fr-lu", "case-studies", {
    title: "Études de cas | NeoVision Tech Luxembourg",
    description: "Mandats déjà publiés par NeoVision Tech. L'exemple RAG FinTech est un brouillon non indexé, sans client.",
    h1: "Des mandats publiés, sans client luxembourgeois fictif",
    lede: "Les études ci-dessous sont réelles et déjà publiées. « RAG sécurisé pour la FinTech » est un modèle de brouillon, sans client et sans métriques. Il est en noindex et absent du sitemap.",
    sections: [
      {
        heading: "Ne citez pas le brouillon",
        paragraphs: ["S'il vous faut une référence luxembourgeoise, attendez que le propriétaire en fournisse une. Nous ne la fabriquerons pas."],
      },
    ],
    primaryCta: cta["fr-lu"],
  }),
  page("en-in", "case-studies", {
    title: "Case Studies | NeoVision Tech India",
    description: "The nine published NeoVision Tech projects, moved from the old projects URLs.",
    h1: "Case studies",
    lede: "These are the nine projects previously published on this site. Old /projects links permanently redirect here. Draft templates are not mixed into this list.",
    sections: [
      {
        heading: "What stayed the same",
        paragraphs: ["Names, stacks, and the metrics already written for each project. Nothing new was added to make a market look larger."],
      },
    ],
    primaryCta: cta["en-in"],
  }),
];

export function marketPage(locale: Locale, slug: string) {
  return marketPages.find((item) => item.locale === locale && item.slug === slug) ?? null;
}

export const caseStudyPreface: Record<Locale, string> = {
  "en-us":
    "You are reading a published NeoVision Tech engagement from the United States site. The client, stack, and figures below are the ones already published. This project is not described as a US company, and no American metric was added.",
  "en-gb":
    "You are reading a published NeoVision Tech engagement from the United Kingdom site. The client, stack, and figures below are unchanged from the original publication. Nothing here is a UK GDPR case study unless the original text said so.",
  "en-lu":
    "You are reading a published NeoVision Tech engagement from the Luxembourg site. It is not a Luxembourg client and not evidence of a CSSF or DORA approval. Figures are only those already published with the project.",
  "fr-lu":
    "Vous lisez un mandat déjà publié par NeoVision Tech, depuis le site luxembourgeois en français. Ce n'est pas un client luxembourgeois et ce n'est pas une preuve d'accord CSSF ou DORA. Les chiffres sont uniquement ceux déjà publiés avec le projet.",
  "en-in":
    "This is a published NeoVision Tech project. The write-up below keeps the original challenge, solution, and figures.",
};

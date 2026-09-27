import type { Project } from "@/content/types";
import type { DraftCaseStudy } from "@/content/markets/types";
import { MarkdownText } from "@/components/markdown-text";
import MediaImage from "@/components/media-image";
import { Breadcrumbs, Button } from "@/components/ui";
import { ctaLabel, lp, type Locale } from "@/lib/i18n";

export function CaseStudyView({
  locale,
  project,
  preface,
}: {
  locale: Locale;
  project: Project;
  preface: string;
}) {
  const diagram =
    locale === "fr-lu"
      ? "Schéma d'architecture : non publié. Le propriétaire n'a pas fourni de diagramme pour ce mandat."
      : "Architecture diagram: not published. The owner has not supplied a diagram for this engagement.";
  return (
    <article className="pb-20">
      <header className="bg-linear-to-b from-slate-50 via-white to-white pt-8 dark:from-[#0a0a0a] dark:via-[#0f0f0f] dark:to-[#0a0a0a]">
        <Breadcrumbs
          items={[
            { label: locale === "fr-lu" ? "Accueil" : "Home", path: lp(locale) },
            { label: locale === "fr-lu" ? "Études de cas" : "Case Studies", path: lp(locale, "/case-studies") },
            { label: project.title, path: null },
          ]}
        />
        <div className="mx-auto grid max-w-6xl gap-8 px-4 pb-12 md:px-8 lg:grid-cols-2">
          <div>
            <h1 className="text-4xl font-black tracking-tight text-slate-900 dark:text-white">{project.title}</h1>
            <p className="mt-4 text-lg text-slate-700 dark:text-slate-300">{preface}</p>
            <p className="mt-4 text-slate-600 dark:text-slate-300">{project.shortDescription}</p>
            <dl className="mt-6 grid grid-cols-3 gap-4 text-sm">
              <div>
                <dt className="text-slate-500">Industry</dt>
                <dd className="font-semibold text-slate-900 dark:text-white">{project.industry}</dd>
              </div>
              <div>
                <dt className="text-slate-500">Duration</dt>
                <dd className="font-semibold text-slate-900 dark:text-white">{project.duration}</dd>
              </div>
              <div>
                <dt className="text-slate-500">Year</dt>
                <dd className="font-semibold text-slate-900 dark:text-white">{project.year}</dd>
              </div>
            </dl>
            <div className="mt-6">
              <Button href={lp(locale, "/contact")} variant="primary">
                {ctaLabel(locale)}
              </Button>
            </div>
          </div>
          <div className="relative h-72 overflow-hidden rounded-2xl bg-slate-100 dark:bg-slate-900">
            <MediaImage src={project.heroImage} alt="" className="object-cover" sizes="(min-width: 1024px) 50vw, 100vw" />
          </div>
        </div>
      </header>
      <div className="mx-auto max-w-4xl space-y-10 px-4 py-12 md:px-8">
        <section>
          <h2 className="mb-3 text-2xl font-black text-slate-900 dark:text-white">{locale === "fr-lu" ? "Problème" : "Problem"}</h2>
          <MarkdownText text={project.challenge} />
        </section>
        <section className="rounded-2xl border border-dashed border-slate-300 p-6 dark:border-white/20">
          <h2 className="mb-3 text-2xl font-black text-slate-900 dark:text-white">{locale === "fr-lu" ? "Architecture" : "Architecture"}</h2>
          <p className="text-slate-700 dark:text-slate-300">{diagram}</p>
        </section>
        <section>
          <h2 className="mb-3 text-2xl font-black text-slate-900 dark:text-white">{locale === "fr-lu" ? "Pile" : "Stack"}</h2>
          <ul className="flex flex-wrap gap-2">
            {project.technologies.map((item) => (
              <li key={item} className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-800 dark:bg-slate-900 dark:text-slate-100">
                {item}
              </li>
            ))}
          </ul>
        </section>
        <section>
          <h2 className="mb-3 text-2xl font-black text-slate-900 dark:text-white">{locale === "fr-lu" ? "Solution" : "What we built"}</h2>
          <MarkdownText text={project.solution} />
        </section>
        {project.results.length > 0 && (
          <section>
            <h2 className="mb-3 text-2xl font-black text-slate-900 dark:text-white">{locale === "fr-lu" ? "Chiffres déjà publiés" : "Published figures"}</h2>
            <ul className="space-y-2 text-slate-700 dark:text-slate-300">
              {project.results.map((result) => (
                <li key={`${result.metric}-${result.value}`}>
                  <strong>{result.value}</strong> {result.metric}. {result.description}
                </li>
              ))}
            </ul>
          </section>
        )}
        {project.testimonial && (
          <section>
            <h2 className="mb-3 text-2xl font-black text-slate-900 dark:text-white">{locale === "fr-lu" ? "Témoignage" : "Testimonial"}</h2>
            <blockquote className="border-l-4 border-blue-600 pl-4 text-slate-700 dark:text-slate-300">
              <p>{project.testimonial.quote}</p>
              <footer className="mt-2 text-sm">
                {project.testimonial.author}, {project.testimonial.company}
              </footer>
            </blockquote>
          </section>
        )}
      </div>
    </article>
  );
}

export function DraftCaseStudyView({ locale, draft }: { locale: Locale; draft: DraftCaseStudy }) {
  const banner =
    locale === "fr-lu"
      ? "Modèle brouillon. Non publié. Le propriétaire n'a pas fourni de client, d'architecture ni de métriques."
      : "Draft template. Not published. The owner has not supplied a client, architecture, or metrics.";
  return (
    <article className="pb-20">
      <header className="bg-amber-50 pt-8 dark:bg-amber-950/30">
        <Breadcrumbs
          items={[
            { label: locale === "fr-lu" ? "Accueil" : "Home", path: lp(locale) },
            { label: locale === "fr-lu" ? "Études de cas" : "Case Studies", path: lp(locale, "/case-studies") },
            { label: draft.h1, path: null },
          ]}
        />
        <div className="mx-auto max-w-4xl px-4 pb-12 md:px-8">
          <p className="mb-4 rounded-xl border border-amber-400 bg-amber-100 px-4 py-3 font-semibold text-amber-950 dark:border-amber-700 dark:bg-amber-950 dark:text-amber-100">
            {banner}
          </p>
          <h1 className="text-4xl font-black tracking-tight text-slate-900 dark:text-white">{draft.h1}</h1>
          <p className="mt-4 text-lg text-slate-700 dark:text-slate-300">{draft.lede}</p>
        </div>
      </header>
      <div className="mx-auto max-w-4xl space-y-8 px-4 py-12 md:px-8">
        {draft.sections.map((section) => (
          <section key={section.heading}>
            <h2 className="mb-2 text-2xl font-black text-slate-900 dark:text-white">{section.heading}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 80)} className="text-slate-700 dark:text-slate-300">
                {paragraph}
              </p>
            ))}
          </section>
        ))}
      </div>
    </article>
  );
}

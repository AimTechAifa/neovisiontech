import Link from "next/link";
import type { MarketPage } from "@/content/markets/types";
import type { Author, Project, Service, Technology, Training } from "@/content/types";
import MediaImage from "@/components/media-image";
import { Breadcrumbs, Button } from "@/components/ui";
import { lp, type Locale } from "@/lib/i18n";

export type MarketCrumb = { label: string; path: string | null };
export type MarketLink = { href: string; label: string };

function withLocale(locale: Locale, href: string) {
  if (href.startsWith("http") || href.startsWith("#") || href.startsWith(`/${locale}`)) return href;
  const [path, hash] = href.split("#");
  const prefixed = lp(locale, path || "/");
  return hash ? `${prefixed}#${hash}` : prefixed;
}

export function MarketPageView({
  locale,
  page,
  crumbs,
  related = [],
  service,
  team = [],
  technologies = [],
  trainings = [],
  projects = [],
}: {
  locale: Locale;
  page: MarketPage;
  crumbs: MarketCrumb[];
  related?: MarketLink[];
  service?: Service | null;
  team?: Author[];
  technologies?: Technology[];
  trainings?: Training[];
  projects?: Project[];
}) {
  return (
    <article className="pb-20">
      <header className="bg-linear-to-b from-slate-50 via-white to-white pt-8 dark:from-[#0a0a0a] dark:via-[#0f0f0f] dark:to-[#0a0a0a]">
        <Breadcrumbs items={crumbs} />
        <div className="mx-auto max-w-4xl px-4 pb-12 md:px-8">
          <h1 className="text-4xl font-black tracking-tight text-slate-900 dark:text-white md:text-5xl">{page.h1}</h1>
          <p className="mt-6 text-lg leading-relaxed text-slate-600 dark:text-slate-300">{page.lede}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={withLocale(locale, page.primaryCta.href)} variant="primary" size="lg">
              {page.primaryCta.label}
            </Button>
            {page.secondaryCta && (
              <Button href={withLocale(locale, page.secondaryCta.href)} variant="outline" size="lg">
                {page.secondaryCta.label}
              </Button>
            )}
          </div>
        </div>
      </header>
      <div className="mx-auto max-w-4xl space-y-12 px-4 py-12 md:px-8">
        {page.sections.map((section) => (
          <section key={section.heading}>
            <h2 className="mb-4 text-2xl font-black text-slate-900 dark:text-white">{section.heading}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 96)} className="mb-4 leading-relaxed text-slate-700 dark:text-slate-300">
                {paragraph}
              </p>
            ))}
            {section.bullets && section.bullets.length > 0 && (
              <ul className="list-disc space-y-2 pl-5 text-slate-700 dark:text-slate-300">
                {section.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            )}
          </section>
        ))}
        {related.length > 0 && (
          <nav aria-label="Related">
            <h2 className="mb-4 text-2xl font-black text-slate-900 dark:text-white">
              {locale === "fr-lu" ? "Dans cette rubrique" : "In this section"}
            </h2>
            <ul className="space-y-2">
              {related.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="font-semibold text-blue-700 underline-offset-2 hover:underline dark:text-blue-300">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
        {service && locale === "en-in" && (
          <section aria-label={service.title}>
            <h2 className="mb-4 text-2xl font-black text-slate-900 dark:text-white">{service.title}</h2>
            <p className="mb-4 leading-relaxed text-slate-700 dark:text-slate-300">{service.fullDescription}</p>
            {service.benefits.length > 0 && (
              <ul className="mb-6 list-disc space-y-2 pl-5 text-slate-700 dark:text-slate-300">
                {service.benefits.map((benefit) => (
                  <li key={benefit.title}>
                    <strong>{benefit.title}.</strong> {benefit.description}
                  </li>
                ))}
              </ul>
            )}
            {service.process.length > 0 && (
              <ol className="mb-6 list-decimal space-y-2 pl-5 text-slate-700 dark:text-slate-300">
                {service.process.map((step) => (
                  <li key={step.step}>
                    <strong>{step.step}.</strong> {step.description}
                  </li>
                ))}
              </ol>
            )}
          </section>
        )}
        {team.length > 0 && (
          <section>
            <h2 className="mb-4 text-2xl font-black text-slate-900 dark:text-white">
              {locale === "fr-lu" ? "Équipe" : "Team"}
            </h2>
            <ul className="grid gap-4 sm:grid-cols-2">
              {team.map((person) => (
                <li key={person.slug} className="rounded-2xl border border-slate-200 p-4 dark:border-white/10">
                  {person.image ? (
                    <MediaImage src={person.image} alt="" width={72} height={72} className="mb-3 h-16 w-16 rounded-full object-cover" />
                  ) : (
                    <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-slate-200 text-sm font-bold text-slate-800 dark:bg-slate-800 dark:text-slate-100">
                      {person.name.split(" ").map((part) => part[0]).slice(0, 2).join("")}
                    </div>
                  )}
                  <p className="font-bold text-slate-900 dark:text-white">{person.name}</p>
                  <p className="text-sm text-slate-600 dark:text-slate-300">{person.role}</p>
                </li>
              ))}
            </ul>
          </section>
        )}
        {technologies.length > 0 && (
          <section>
            <h2 className="mb-4 text-2xl font-black text-slate-900 dark:text-white">
              {locale === "fr-lu" ? "Outils que nous livrons" : "Tools we deliver with"}
            </h2>
            <ul className="flex flex-wrap gap-2">
              {technologies.map((item) => (
                <li key={item.slug} className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-800 dark:bg-slate-900 dark:text-slate-100">
                  {item.name}
                </li>
              ))}
            </ul>
          </section>
        )}
        {projects.length > 0 && (
          <section>
            <h2 className="mb-4 text-2xl font-black text-slate-900 dark:text-white">
              {locale === "fr-lu" ? "Mandats publiés" : "Published engagements"}
            </h2>
            <ul className="space-y-3">
              {projects.map((project) => (
                <li key={project.slug}>
                  <Link
                    href={lp(locale, `/case-studies/${project.slug}`)}
                    className="font-semibold text-blue-700 underline-offset-2 hover:underline dark:text-blue-300"
                  >
                    {project.title}
                  </Link>
                  <p className="text-sm text-slate-600 dark:text-slate-300">{project.shortDescription}</p>
                </li>
              ))}
            </ul>
          </section>
        )}
        {trainings.length > 0 && locale === "en-in" && (
          <section>
            <h2 className="mb-4 text-2xl font-black text-slate-900 dark:text-white">Training programmes in India</h2>
            <p className="mb-4 text-slate-700 dark:text-slate-300">
              Course fees below are in Indian rupees and are listed only on the India site.
            </p>
            <ul className="space-y-3">
              {trainings.slice(0, 6).map((training) => (
                <li key={training.slug}>
                  <Link href={lp("en-in", `/trainings/${training.slug}`)} className="font-semibold text-blue-700 hover:underline dark:text-blue-300">
                    {training.title}
                  </Link>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    {training.price} · {training.duration}
                  </p>
                </li>
              ))}
            </ul>
            <p className="mt-4">
              <Link href={lp("en-in", "/trainings")} className="font-semibold text-blue-700 hover:underline dark:text-blue-300">
                All India training programmes
              </Link>
            </p>
          </section>
        )}
        {page.faqs && page.faqs.length > 0 && (
          <section>
            <h2 className="mb-4 text-2xl font-black text-slate-900 dark:text-white">
              {locale === "fr-lu" ? "Questions fréquentes" : "Questions"}
            </h2>
            <dl className="space-y-4">
              {page.faqs.map((faq) => (
                <div key={faq.question}>
                  <dt className="font-bold text-slate-900 dark:text-white">{faq.question}</dt>
                  <dd className="mt-1 text-slate-700 dark:text-slate-300">{faq.answer}</dd>
                </div>
              ))}
            </dl>
          </section>
        )}
        {service && locale === "en-in" && service.faqs.length > 0 && (
          <section>
            <h2 className="mb-4 text-2xl font-black text-slate-900 dark:text-white">Service questions</h2>
            <dl className="space-y-4">
              {service.faqs.map((faq) => (
                <div key={faq.question}>
                  <dt className="font-bold text-slate-900 dark:text-white">{faq.question}</dt>
                  <dd className="mt-1 text-slate-700 dark:text-slate-300">{faq.answer}</dd>
                </div>
              ))}
            </dl>
          </section>
        )}
      </div>
    </article>
  );
}

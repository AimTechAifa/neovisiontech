import Link from "next/link";
import { Breadcrumbs } from "@/components/ui";
import type { SeoPage, Service } from "@/content/types";

export function ProgrammaticPage({ page, service }: { page: SeoPage; service: Service | null }) {
  const crumbs = page.template === "service-city" && service
    ? [
        { label: "Home", path: "/" },
        { label: "Services", path: "/services" },
        { label: service.title, path: `/services/${service.slug}` },
        { label: page.params.city ?? page.title, path: null },
      ]
    : [
        { label: "Home", path: "/" },
        { label: "Solutions", path: "/services" },
        { label: page.title, path: null },
      ];

  return (
    <article className="pb-20">
      <header className="bg-linear-to-b from-slate-50 via-white to-white pt-8 dark:from-[#0a0a0a] dark:via-[#0f0f0f] dark:to-[#0a0a0a]">
        <Breadcrumbs items={crumbs} />
        <div className="mx-auto max-w-4xl px-4 pb-12 md:px-8">
          <p className="mb-4 text-sm font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            {page.template === "service-city" ? `${page.params.city}, ${page.params.state}` : page.params.industry ?? "Solution"}
          </p>
          <h1 className="text-4xl font-black tracking-tight text-slate-900 dark:text-white md:text-5xl">{page.title}</h1>
          <p className="mt-6 text-lg leading-relaxed text-slate-600 dark:text-slate-300">{page.description}</p>
        </div>
      </header>
      <div className="mx-auto max-w-4xl space-y-12 px-4 py-12 md:px-8">
        {page.body.sections.map((section) => (
          <section key={section.heading}>
            <h2 className="mb-4 text-2xl font-black text-slate-900 dark:text-white">{section.heading}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 80)} className="mb-4 leading-relaxed text-slate-600 dark:text-slate-300">
                {paragraph}
              </p>
            ))}
            {section.bullets && section.bullets.length > 0 && (
              <ul className="list-disc space-y-2 pl-5 text-slate-600 dark:text-slate-300">
                {section.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            )}
          </section>
        ))}
        {service && (
          <p>
            <Link href={`/services/${service.slug}`} className="font-semibold text-blue-600 hover:underline">
              Read the full {service.title} service page
            </Link>
          </p>
        )}
      </div>
    </article>
  );
}

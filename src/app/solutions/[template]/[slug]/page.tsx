import { notFound } from "next/navigation";
import { ProgrammaticPage } from "@/components/views/programmatic-page";
import JsonLdScript from "@/components/json-ld";
import { getSeoPage, getSeoPages, getServiceBySlug } from "@/lib/content";
import { breadcrumbJsonLd } from "@/lib/seo/jsonld";
import { pageMetadata } from "@/lib/seo/metadata";

export const revalidate = 3600;
export const dynamicParams = true;

export async function generateStaticParams() {
  const pages = await getSeoPages();
  const templated = pages.filter((page) => page.template !== "service-city");
  const top = templated.filter((page) => !page.noindex);
  const thinSample = templated.filter((page) => page.noindex).slice(0, 1);
  return [...top, ...thinSample].map((page) => ({
    template: page.template,
    slug: page.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ template: string; slug: string }> }) {
  const { template, slug } = await params;
  const page = await getSeoPage(template, slug);
  if (!page) notFound();
  return pageMetadata({
    title: `${page.title} | NeoVisionTech`,
    description: page.description,
    path: `/solutions/${template}/${slug}`,
    noindex: page.noindex,
  });
}

export default async function SolutionPage({ params }: { params: Promise<{ template: string; slug: string }> }) {
  const { template, slug } = await params;
  const page = await getSeoPage(template, slug);
  if (!page) notFound();
  const service = page.params.serviceSlug ? await getServiceBySlug(page.params.serviceSlug) : null;

  return (
    <>
      <JsonLdScript
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Solutions", path: "/services" },
          { name: page.title, path: `/solutions/${template}/${slug}` },
        ])}
      />
      <ProgrammaticPage page={page} service={service} />
    </>
  );
}

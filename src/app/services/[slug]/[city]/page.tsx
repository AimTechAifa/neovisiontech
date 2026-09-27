import { notFound } from "next/navigation";
import { ProgrammaticPage } from "@/components/views/programmatic-page";
import JsonLdScript from "@/components/json-ld";
import { getSeoPages, getServiceBySlug, getServiceCityPage } from "@/lib/content";
import { breadcrumbJsonLd, serviceJsonLd } from "@/lib/seo/jsonld";
import { pageMetadata } from "@/lib/seo/metadata";

export const revalidate = 3600;
export const dynamicParams = true;

export async function generateStaticParams() {
  const pages = await getSeoPages();
  const cityPages = pages.filter((page) => page.template === "service-city");
  const top = cityPages.filter((page) => !page.noindex);
  const thinSample = cityPages.filter((page) => page.noindex).slice(0, 1);
  return [...top, ...thinSample].map((page) => ({
    slug: page.params.serviceSlug,
    city: page.params.citySlug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string; city: string }> }) {
  const { slug, city } = await params;
  const page = await getServiceCityPage(slug, city);
  if (!page) return {};
  return pageMetadata({
    title: `${page.title} | NeoVisionTech`,
    description: page.description,
    path: `/services/${slug}/${city}`,
    noindex: page.noindex,
  });
}

export default async function ServiceCityPage({ params }: { params: Promise<{ slug: string; city: string }> }) {
  const { slug, city } = await params;
  const page = await getServiceCityPage(slug, city);
  if (!page) notFound();
  const service = await getServiceBySlug(slug);

  return (
    <>
      <JsonLdScript
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: service?.title ?? "Service", path: `/services/${slug}` },
            { name: page.params.city ?? city, path: `/services/${slug}/${city}` },
          ]),
          service ? serviceJsonLd(service) : null,
        ]}
      />
      <ProgrammaticPage page={page} service={service} />
    </>
  );
}

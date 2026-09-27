import { notFound } from "next/navigation";
import { ServiceDetailView } from "@/components/views/service-detail-view";
import JsonLdScript from "@/components/json-ld";
import { getServiceBySlug, getServices } from "@/lib/content";
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd } from "@/lib/seo/jsonld";
import { pageMetadata } from "@/lib/seo/metadata";

export const revalidate = 3600;
export const dynamicParams = true;

export async function generateStaticParams() {
  const services = await getServices();
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);
  if (!service) return {};
  return pageMetadata({
    title: service.metaTitle,
    description: service.metaDescription,
    path: `/services/${service.slug}`,
    image: service.heroImage,
  });
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);
  if (!service) notFound();
  const related = (await getServices())
    .filter((item) => item.category === service.category && item.slug !== service.slug)
    .slice(0, 3);

  return (
    <>
      <JsonLdScript
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: service.title, path: `/services/${service.slug}` },
          ]),
          serviceJsonLd(service),
          faqJsonLd(service.faqs),
        ]}
      />
      <ServiceDetailView service={service} relatedServices={related} />
    </>
  );
}

import { ServicesView } from "@/components/views/services-view";
import JsonLdScript from "@/components/json-ld";
import { breadcrumbJsonLd } from "@/lib/seo/jsonld";
import { pageMetadata } from "@/lib/seo/metadata";

export const metadata = pageMetadata({
  title: "Our Services | NeoVisionTech",
  description: "Explore our comprehensive technology services including AI Business Automation, Agentic AI Chatbots, Custom Web App Development, and SEO Optimization.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <JsonLdScript
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ])}
      />
      <ServicesView />
    </>
  );
}

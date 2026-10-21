import { TechnologiesView } from "@/components/views/technologies-view";
import JsonLdScript from "@/components/json-ld";
import { breadcrumbJsonLd } from "@/lib/seo/jsonld";
import { pageMetadata } from "@/lib/seo/metadata";

export const revalidate = 3600;

export const metadata = pageMetadata({
  title: "Technologies | NeoVisionTech",
  description: "The languages, frameworks, and platforms NeoVision Tech uses to build web, mobile, AI, and enterprise software.",
  path: "/technologies",
});

export default function TechnologiesPage() {
  return (
    <>
      <JsonLdScript
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Technologies", path: "/technologies" },
        ])}
      />
      <TechnologiesView />
    </>
  );
}

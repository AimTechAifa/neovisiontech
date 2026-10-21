import { AboutView } from "@/components/views/about-view";
import JsonLdScript from "@/components/json-ld";
import { getAuthors } from "@/lib/content";
import { pageMetadata } from "@/lib/seo/metadata";
import { breadcrumbJsonLd, personJsonLd } from "@/lib/seo/jsonld";

export const revalidate = 3600;

export const metadata = pageMetadata({
  title: "About Us | NeoVisionTech",
  description: "Learn about NeoVisionTech, our mission, vision, and the expert team driving digital transformation across industries.",
  path: "/about",
});

export default async function AboutPage() {
  const authors = await getAuthors();
  return (
    <>
      <JsonLdScript
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
          ]),
          ...authors.map((author) => personJsonLd(author)),
        ]}
      />
      <AboutView teamMembers={authors} />
    </>
  );
}

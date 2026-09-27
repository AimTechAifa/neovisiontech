import { TrainingsView } from "@/components/views/trainings-view";
import JsonLdScript from "@/components/json-ld";
import { getTrainings } from "@/lib/content";
import { breadcrumbJsonLd } from "@/lib/seo/jsonld";
import { pageMetadata } from "@/lib/seo/metadata";

export const revalidate = 3600;

export const metadata = pageMetadata({
  title: "Industrial Training Programs | NeoVisionTech",
  description: "Expert-led training programs across India. Master in-demand technologies with hands-on projects, placement support, and industry-recognized certifications.",
  path: "/trainings",
});

export default async function TrainingsPage() {
  const programs = await getTrainings();
  return (
    <>
      <JsonLdScript
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Trainings", path: "/trainings" },
        ])}
      />
      <TrainingsView programs={programs} />
    </>
  );
}

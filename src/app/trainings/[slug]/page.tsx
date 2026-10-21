import { notFound } from "next/navigation";
import { TrainingDetailView } from "@/components/views/training-detail-view";
import JsonLdScript from "@/components/json-ld";
import { getTrainingBySlug, getTrainings } from "@/lib/content";
import { breadcrumbJsonLd, courseJsonLd } from "@/lib/seo/jsonld";
import { pageMetadata } from "@/lib/seo/metadata";

export const revalidate = 3600;
export const dynamicParams = true;

export async function generateStaticParams() {
  const trainings = await getTrainings();
  return trainings.map((training) => ({ slug: training.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const training = await getTrainingBySlug(slug);
  if (!training) notFound();
  return pageMetadata({
    title: training.metaTitle,
    description: training.metaDescription,
    path: `/trainings/${training.slug}`,
    image: training.heroImage,
  });
}

export default async function TrainingPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const training = await getTrainingBySlug(slug);
  if (!training) notFound();

  return (
    <>
      <JsonLdScript
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Trainings", path: "/trainings" },
            { name: training.title, path: `/trainings/${training.slug}` },
          ]),
          courseJsonLd(training),
        ]}
      />
      <TrainingDetailView training={training} />
    </>
  );
}

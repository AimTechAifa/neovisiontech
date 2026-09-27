import { getTrainingBySlug } from "@/lib/content";
import { ogContentType, ogSize, renderOg } from "@/lib/seo/og";

export const runtime = "nodejs";
export const size = ogSize;
export const contentType = ogContentType;
export const alt = "NeoVision Tech training";

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const training = await getTrainingBySlug(slug);
  return renderOg(training?.title ?? "Trainings", training?.shortDescription ?? "NeoVision Tech training programs");
}

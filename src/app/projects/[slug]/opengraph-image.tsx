import { getProjectBySlug } from "@/lib/content";
import { ogContentType, ogSize, renderOg } from "@/lib/seo/og";

export const runtime = "nodejs";
export const size = ogSize;
export const contentType = ogContentType;
export const alt = "NeoVision Tech project";

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  return renderOg(project?.title ?? "Projects", project?.shortDescription ?? "NeoVision Tech case studies");
}

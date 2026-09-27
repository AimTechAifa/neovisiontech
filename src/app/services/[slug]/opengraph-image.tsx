import { getServiceBySlug } from "@/lib/content";
import { ogContentType, ogSize, renderOg } from "@/lib/seo/og";

export const runtime = "nodejs";
export const size = ogSize;
export const contentType = ogContentType;
export const alt = "NeoVision Tech service";

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);
  return renderOg(service?.title ?? "Services", service?.shortDescription ?? "NeoVision Tech services");
}

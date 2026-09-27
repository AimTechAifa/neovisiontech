import { ogContentType, ogSize, renderOg } from "@/lib/seo/og";
import { siteConfig } from "@/lib/site";

export const runtime = "nodejs";
export const size = ogSize;
export const contentType = ogContentType;
export const alt = "NeoVision Tech";

export default function Image() {
  return renderOg("Innovating tomorrow with smart technology", siteConfig.description);
}

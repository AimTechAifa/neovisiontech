import { PrivacyView } from "@/components/views/privacy-view";
import JsonLdScript from "@/components/json-ld";
import { breadcrumbJsonLd } from "@/lib/seo/jsonld";
import { pageMetadata } from "@/lib/seo/metadata";

export const metadata = pageMetadata({
  title: "Privacy Policy | NeoVisionTech",
  description: "How NeoVision Tech collects, uses, and protects information when you visit the website or use our services.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <JsonLdScript
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Privacy Policy", path: "/privacy" },
        ])}
      />
      <PrivacyView />
    </>
  );
}

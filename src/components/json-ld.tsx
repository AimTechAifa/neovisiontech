import type { JsonLd } from "@/lib/seo/jsonld";

export default function JsonLdScript({ data }: { data: JsonLd | Array<JsonLd | null | undefined> }) {
  const nodes = (Array.isArray(data) ? data : [data]).filter((node): node is JsonLd => Boolean(node));
  return (
    <>
      {nodes.map((node, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(node).replace(/</g, "\\u003c") }}
        />
      ))}
    </>
  );
}

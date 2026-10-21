import { ProjectsView } from "@/components/views/projects-view";
import JsonLdScript from "@/components/json-ld";
import { breadcrumbJsonLd } from "@/lib/seo/jsonld";
import { pageMetadata } from "@/lib/seo/metadata";

export const metadata = pageMetadata({
  title: "Our Projects & Case Studies | NeoVisionTech",
  description: "Browse our portfolio of successful projects including mobile apps, enterprise software, AI solutions, and SaaS platforms.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <>
      <JsonLdScript
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Projects", path: "/projects" },
        ])}
      />
      <ProjectsView />
    </>
  );
}

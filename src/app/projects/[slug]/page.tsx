import { notFound } from "next/navigation";
import { ProjectDetailView } from "@/components/views/project-detail-view";
import JsonLdScript from "@/components/json-ld";
import { getProjectBySlug, getProjects } from "@/lib/content";
import { breadcrumbJsonLd, projectJsonLd } from "@/lib/seo/jsonld";
import { pageMetadata } from "@/lib/seo/metadata";

export const revalidate = 3600;
export const dynamicParams = true;

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) notFound();
  return pageMetadata({
    title: project.metaTitle,
    description: project.metaDescription,
    path: `/projects/${project.slug}`,
    image: project.heroImage,
  });
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) notFound();
  const related = (await getProjects())
    .filter((item) => item.category === project.category && item.slug !== project.slug)
    .slice(0, 3);

  return (
    <>
      <JsonLdScript
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Projects", path: "/projects" },
            { name: project.title, path: `/projects/${project.slug}` },
          ]),
          projectJsonLd(project),
        ]}
      />
      <ProjectDetailView project={project} relatedProjects={related} />
    </>
  );
}

import { HomeView } from "@/components/views/home-view";
import { pageMetadata } from "@/lib/seo/metadata";

export const metadata = pageMetadata({
  title: "NeoVisionTech | Advanced Web & App Development",
  description:
    "Transforming ideas into digital reality with premium web and mobile app development services. Specializing in AI, React, Next.js, and modern tech stacks.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <link rel="preload" as="image" href="/images/hero-technology.webp" fetchPriority="high" />
      <HomeView />
    </>
  );
}

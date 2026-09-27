import { Button } from "@/components/ui";
import { pageMetadata } from "@/lib/seo/metadata";

export const metadata = pageMetadata({
  title: "Page not found | NeoVisionTech",
  description: "",
  path: "/404",
  noindex: true,
});

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center px-4 py-24 text-center">
      <p className="text-sm font-bold uppercase tracking-wider text-blue-600">404</p>
      <h1 className="mt-4 text-4xl font-black text-slate-900 dark:text-white">Page not found</h1>
      <p className="mt-4 text-slate-600 dark:text-slate-400">That page is not part of the NeoVision Tech site.</p>
      <Button href="/" className="mt-8">Back home</Button>
    </section>
  );
}

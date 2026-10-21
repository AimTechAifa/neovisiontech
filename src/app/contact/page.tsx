import { ContactView } from "@/components/views/contact-view";
import JsonLdScript from "@/components/json-ld";
import { getPageFaqs, getServices, getTrainings } from "@/lib/content";
import { breadcrumbJsonLd, faqJsonLd } from "@/lib/seo/jsonld";
import { pageMetadata } from "@/lib/seo/metadata";

export const revalidate = 3600;

export const metadata = pageMetadata({
  title: "Contact Us | NeoVisionTech",
  description: "Get in touch with NeoVisionTech for your next project. We are ready to help you with web development, mobile apps, and AI solutions.",
  path: "/contact",
});

export default async function ContactPage() {
  const [services, trainings, faqs] = await Promise.all([
    getServices(),
    getTrainings(),
    getPageFaqs("page", "contact"),
  ]);

  return (
    <>
      <JsonLdScript
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
          ]),
          faqJsonLd(faqs),
        ]}
      />
      <ContactView
        services={services.map((service) => ({ title: service.title }))}
        trainings={trainings.map((training) => ({ title: training.title }))}
      />
    </>
  );
}

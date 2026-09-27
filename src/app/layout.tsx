import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/footer";
import Header from "@/components/header";
import JsonLdScript from "@/components/json-ld";
import { ThemeProvider } from "@/components/theme-provider";
import AppToaster from "@/components/toaster";
import AnimatedBackground from "@/components/ui/animated-background";
import { organizationJsonLd, websiteJsonLd } from "@/lib/seo/jsonld";
import { absoluteUrl, siteConfig } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { absolute: siteConfig.title },
  description: siteConfig.description,
  applicationName: siteConfig.shortName,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    siteName: siteConfig.shortName,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [{ url: absoluteUrl("/opengraph-image"), alt: siteConfig.title }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [absoluteUrl("/opengraph-image")],
  },
  robots: { index: true, follow: true },
};

const themeScript = `try{if(localStorage.getItem("theme")==="light"){document.documentElement.classList.remove("dark")}}catch(e){}`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`dark ${inter.className}`} suppressHydrationWarning>
      <JsonLdScript data={[organizationJsonLd(), websiteJsonLd()]} />
      <body className="flex min-h-screen flex-col bg-white text-slate-900 antialiased dark:bg-[#0a0a0a] dark:text-white">
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <ThemeProvider>
          <a
            href="#content"
            className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-slate-900"
          >
            Skip to content
          </a>
          <AnimatedBackground />
          <Header />
          <main id="content" className="relative z-10 flex-1">
            {children}
          </main>
          <Footer />
          <AppToaster />
        </ThemeProvider>
      </body>
    </html>
  );
}

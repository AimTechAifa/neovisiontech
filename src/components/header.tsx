"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import MediaImage from "@/components/media-image";
import { useTheme } from "@/components/theme-provider";
import { Button, ThemeToggle } from "@/components/ui";
import { ctaLabel, localeFromPath, locales, lp, marketNames, navigation } from "@/lib/i18n";

function samePath(pathname: string, target: (typeof locales)[number]) {
  const current = localeFromPath(pathname);
  if (!current) return lp(target);
  const rest = pathname.slice(`/${current}`.length) || "/";
  if ((rest.startsWith("/trainings") || rest.startsWith("/solutions")) && target !== "en-in") return lp(target);
  if (/^\/services\/[^/]+\/[^/]+/.test(rest) && target !== "en-in") return lp(target, "/services");
  return lp(target, rest === "/" ? "/" : rest);
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();
  const pathname = usePathname();
  const locale = localeFromPath(pathname);
  const navLinks = locale
    ? [{ label: locale === "fr-lu" ? "Accueil" : "Home", href: lp(locale) }, ...navigation(locale)]
    : locales.map((item) => ({ label: marketNames[item].short, href: lp(item) }));
  const ctaHref = locale ? lp(locale, "/contact") : "/en-in/contact";
  const cta = locale ? ctaLabel(locale) : "India office";

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 dark:bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-slate-100 dark:border-white/10 transition-colors duration-300">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href={locale ? lp(locale) : "/"} className="flex items-center gap-3 group">
            <div className="relative p-1.5 rounded-xl bg-slate-900 dark:bg-gradient-to-br dark:from-blue-950/30 dark:to-indigo-950/30 backdrop-blur-sm shadow-md">
              <MediaImage
                src="/images/neovision-logo.webp"
                alt="NeoVision Tech logo"
                width={40}
                height={40}
                priority
                unoptimized
                className="w-10 h-10 object-contain transition-transform group-hover:scale-110"
              />
            </div>
            <span className="text-xl font-bold text-slate-900 dark:text-white hidden sm:block">
              Neo<span className="text-blue-600 dark:text-blue-400">Vision</span>
              <span className="text-slate-600 dark:text-slate-400 font-normal ml-1">Tech</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1" aria-label="Primary">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 rounded-lg transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            {locale && (
              <nav aria-label="Markets" className="flex items-center gap-2 text-xs font-semibold text-slate-600 dark:text-slate-300">
                {locales.map((item) => (
                  <Link key={item} href={samePath(pathname, item)} className={item === locale ? "text-blue-700 dark:text-blue-300" : "hover:text-slate-900 dark:hover:text-white"}>
                    {item}
                  </Link>
                ))}
              </nav>
            )}
            <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
            <Button href={ctaHref} variant="primary" size="sm">
              {cta}
            </Button>
          </div>

          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
            <button
              type="button"
              onClick={() => setIsMenuOpen((open) => !open)}
              className="p-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 rounded-lg transition-colors"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div id="mobile-navigation" className="md:hidden py-4 border-t border-slate-100 dark:border-white/10">
            <nav className="flex flex-col gap-1" aria-label="Mobile">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="px-4 py-3 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-white/5 rounded-lg transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-4 pt-4 border-t border-slate-100 dark:border-white/10">
                <Button href={ctaHref} variant="primary" size="md" className="w-full">
                  {cta}
                </Button>
                {locale && (
                  <div className="mt-3 flex flex-wrap gap-2 px-4">
                    {locales.map((item) => (
                      <Link key={item} href={samePath(pathname, item)} className="text-xs font-semibold text-blue-700 dark:text-blue-300" onClick={() => setIsMenuOpen(false)}>
                        {marketNames[item].short}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

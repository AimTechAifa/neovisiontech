"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment } from "react";
import RevealOnScroll from "./reveal-on-scroll";

export type Crumb = { label: string; path: string | null };

export default function Breadcrumbs({ items }: { items?: Crumb[] }) {
  const pathname = usePathname();
  const pathnames = pathname.split("/").filter(Boolean);
  const breadcrumbItems: Crumb[] = items ?? [
    { label: "Home", path: "/" },
    ...pathnames.map((name, index) => {
      const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
      const isLast = index === pathnames.length - 1;
      let label = name
        .replace(/-/g, " ")
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
      if (name === "contact") label = "Contact Us";
      return { label, path: isLast ? null : routeTo };
    }),
  ];

  return (
    <RevealOnScroll>
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-8 py-4 px-4 md:px-8 lg:px-12 max-w-1440px mx-auto">
        <ol className="flex flex-wrap items-center gap-2">
          {breadcrumbItems.map((item, index) => {
            const isLast = index === breadcrumbItems.length - 1;
            return (
              <Fragment key={`${item.label}-${index}`}>
                <li className="flex items-center gap-2">
                  {index > 0 && <span aria-hidden="true" className="opacity-50">/</span>}
                  {item.path && !isLast ? (
                    <Link href={item.path} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium text-slate-600 dark:text-slate-300">
                      {item.label}
                    </Link>
                  ) : (
                    <span aria-current={isLast ? "page" : undefined} className="text-slate-900 dark:text-white font-medium truncate max-w-[200px] sm:max-w-none">
                      {item.label}
                    </span>
                  )}
                </li>
              </Fragment>
            );
          })}
        </ol>
      </nav>
    </RevealOnScroll>
  );
}

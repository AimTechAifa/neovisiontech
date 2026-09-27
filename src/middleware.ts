import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { isCrawler, legacyRedirect, suggestLocale } from "@/lib/i18n";

export function middleware(request: NextRequest) {
  const destination = legacyRedirect(request.nextUrl.pathname);
  if (destination) {
    const url = request.nextUrl.clone();
    url.pathname = destination;
    return NextResponse.redirect(url, 301);
  }

  const response = NextResponse.next();
  if (isCrawler(request.headers.get("user-agent"))) return response;

  const suggestion = suggestLocale({
    country: request.headers.get("x-vercel-ip-country"),
    acceptLanguage: request.headers.get("accept-language"),
  });
  if (suggestion) {
    response.cookies.set("nv-market-suggestion", suggestion, {
      path: "/",
      maxAge: 60 * 60 * 24 * 30,
      sameSite: "lax",
    });
  }
  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|api/|images/|icons/|icon.png|apple-icon.png|favicon.ico|sitemap|robots.txt|manifest.webmanifest|opengraph-image).*)"],
};

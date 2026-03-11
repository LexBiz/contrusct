import { NextRequest, NextResponse } from "next/server";
import { defaultLocale, locales } from "@/lib/i18n";

const PUBLIC_FILE = /\.(.*)$/;

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const segments = pathname.split("/").filter(Boolean);
  const firstSegment = segments[0];
  const isKnownLocale = firstSegment ? locales.includes(firstSegment as (typeof locales)[number]) : false;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/admin") ||
    pathname === "/" ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next();
  }

  if (isKnownLocale && firstSegment === defaultLocale) {
    const url = request.nextUrl.clone();
    const nextPath = `/${segments.slice(1).join("/")}` || "/";
    url.pathname = nextPath === "//" ? "/" : nextPath;
    return NextResponse.redirect(url);
  }

  if (isKnownLocale) {
    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/:path*",
};

export const locales = ["cs", "en", "de", "ru", "uk"] as const;

export const defaultLocale = "cs" as const;

export type Locale = (typeof locales)[number];

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function localePath(locale: Locale, path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  if (locale === defaultLocale) {
    return normalized;
  }
  return normalized === "/" ? `/${locale}` : `/${locale}${normalized}`;
}

export function stripLocaleFromPath(pathname: string): string {
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length === 0) {
    return "/";
  }
  if (isLocale(segments[0])) {
    const rest = `/${segments.slice(1).join("/")}`;
    return rest === "/" ? "/" : rest;
  }
  return pathname || "/";
}

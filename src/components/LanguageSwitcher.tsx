"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Locale, localePath, locales, stripLocaleFromPath } from "@/lib/i18n";
import { getSiteContent } from "@/lib/siteContent";

type LanguageSwitcherProps = {
  locale: Locale;
};

export function LanguageSwitcher({ locale }: LanguageSwitcherProps) {
  const pathname = usePathname();
  const basePath = stripLocaleFromPath(pathname || "/");

  return (
    <div className="lang-switch" aria-label="Language switcher">
      {locales.map((item) => {
        const content = getSiteContent(item);
        return (
          <Link
            key={item}
            href={localePath(item, basePath)}
            className={locale === item ? "active" : ""}
            hrefLang={item}
          >
            {content.languageShort}
          </Link>
        );
      })}
    </div>
  );
}

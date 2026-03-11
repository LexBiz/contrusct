"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { BrandLogo } from "@/components/BrandLogo";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { Locale, localePath } from "@/lib/i18n";
import { getSiteContent } from "@/lib/siteContent";

type SiteHeaderProps = { locale: Locale };

export function SiteHeader({ locale }: SiteHeaderProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const content = getSiteContent(locale);
  const close = () => setOpen(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const homeHref = localePath(locale, "/");

  return (
    <header className="site-header">
      <div className="container header-inner">
        <BrandLogo locale={locale} compact onClick={close} />
        <button
          className="header-toggle"
          aria-label={content.nav.menu}
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "✕" : "☰"}
        </button>
        <nav id="site-nav" className={`header-nav-wrap ${open ? "open" : ""}`}>
          <div className="header-nav">
            {content.nav.items.map((item) => {
              const href = localePath(locale, item.href);
              const active =
                href === homeHref ? pathname === href : pathname === href || pathname?.startsWith(`${href}/`);
              return (
                <Link
                  key={href}
                  href={href}
                  className={active ? "active" : ""}
                  onClick={close}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
          <div className="header-tools">
            <LanguageSwitcher locale={locale} />
            <Link href={localePath(locale, "/contacts")} className="header-cta" onClick={close}>
              {content.nav.cta}
            </Link>
          </div>
        </nav>
      </div>
      {open ? <button className="site-backdrop" aria-label="Close menu" onClick={close} /> : null}
    </header>
  );
}

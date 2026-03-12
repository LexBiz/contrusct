"use client";

import Link from "next/link";
import { Locale, localePath } from "@/lib/i18n";
import { getSiteContent } from "@/lib/siteContent";

type BrandLogoProps = {
  locale: Locale;
  compact?: boolean;
  hero?: boolean;
  href?: string;
  onClick?: () => void;
};

export function BrandLogo({
  locale,
  compact = false,
  hero = false,
  href,
  onClick,
}: BrandLogoProps) {
  const content = getSiteContent(locale);
  const target = href ?? localePath(locale, "/");
  const shouldPrioritize = compact || hero;

  return (
    <Link
      href={target}
      className={`brand-logo ${compact ? "brand-logo-compact" : ""} ${hero ? "brand-logo-hero" : ""}`}
      onClick={onClick}
      aria-label={content.brand.eyebrow}
    >
      <span className={`brand-logo-visual ${hero ? "brand-logo-visual-hero" : ""}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/logo.png"
          alt={content.brand.eyebrow}
          className="brand-logo-image"
          width="512"
          height="512"
          loading={shouldPrioritize ? "eager" : "lazy"}
          fetchPriority={shouldPrioritize ? "high" : "auto"}
          decoding="async"
        />
        <span className="brand-logo-glow" />
        <span className="brand-logo-ring" />
      </span>
      <span className="brand-logo-copy">
        <strong>{content.brand.eyebrow}</strong>
        <small>{content.brand.subtitle}</small>
      </span>
    </Link>
  );
}

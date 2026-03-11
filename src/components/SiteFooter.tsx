import Link from "next/link";
import { openCookieSettings } from "@/components/CookieConsent";
import { BrandLogo } from "@/components/BrandLogo";
import { Locale, localePath } from "@/lib/i18n";
import { company } from "@/lib/company";
import { getSiteContent } from "@/lib/siteContent";

type SiteFooterProps = {
  locale: Locale;
};

export function SiteFooter({ locale }: SiteFooterProps) {
  const content = getSiteContent(locale);
  const countryLabel =
    locale === "de"
      ? company.countryDe
      : locale === "en"
        ? company.countryEn
        : locale === "ru"
          ? company.countryUk
          : company.countryCs;

  return (
    <footer className="site-footer">
      <div className="container footer-grid-main">
        <div className="footer-brand-block">
          <BrandLogo locale={locale} />
          <p className="footer-text">{content.footer.description}</p>
        </div>

        <div className="footer-links-block">
          <h4>{content.footer.navigationTitle}</h4>
          {content.nav.items.map((item) => (
            <Link key={item.href} href={localePath(locale, item.href)}>
              {item.label}
            </Link>
          ))}
        </div>

        <div className="footer-links-block">
          <h4>{content.footer.contactTitle}</h4>
          <p>{company.legalName}</p>
          <p>ICO: {company.ico}</p>
          <p>DIC: {company.dic}</p>
          <p>{company.street}</p>
          <p>{company.cityLine}</p>
          <a href={`mailto:${company.email}`}>{company.email}</a>
        </div>

        <div className="footer-links-block">
          <h4>{content.footer.legalTitle}</h4>
          <Link href={localePath(locale, "/privacy-policy")}>{content.footer.privacy}</Link>
          <Link href={localePath(locale, "/cookie-policy")}>{content.footer.cookies}</Link>
          <button type="button" className="footer-link-button" onClick={openCookieSettings}>
            {content.footer.cookieSettings}
          </button>
          <p>Datova schranka: {company.dataBox}</p>
          <p>{countryLabel}</p>
        </div>
      </div>

      <div className="container footer-bottom-line">
        <p>
          © {new Date().getFullYear()} {company.legalName}. {content.footer.rights}
        </p>
      </div>
    </footer>
  );
}

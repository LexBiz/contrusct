import { CookieConsent } from "@/components/CookieConsent";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { Locale } from "@/lib/i18n";

type PublicShellProps = {
  locale: Locale;
  children: React.ReactNode;
};

export function PublicShell({ locale, children }: PublicShellProps) {
  return (
    <div className="site-shell">
      <SiteHeader locale={locale} />
      <main className="site-main">{children}</main>
      <SiteFooter locale={locale} />
      <CookieConsent locale={locale} />
    </div>
  );
}

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PublicShell } from "@/components/PublicShell";
import { defaultLocale, isLocale, locales } from "@/lib/i18n";
import { getSiteContent } from "@/lib/siteContent";

type LocaleLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) {
    return {};
  }
  const content = getSiteContent(locale);

  return {
    title: `ConStrukT VS Company | ${content.home.heroTitle}`,
    description: content.home.heroText,
  };
}

export function generateStaticParams() {
  return locales.filter((locale) => locale !== defaultLocale).map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return <PublicShell locale={locale}>{children}</PublicShell>;
}

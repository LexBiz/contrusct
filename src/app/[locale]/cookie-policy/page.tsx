import { notFound } from "next/navigation";
import { CookiePolicyPage } from "@/components/PublicPages";
import { isLocale } from "@/lib/i18n";

type LocalePageProps = {
  params: Promise<{ locale: string }>;
};

export default async function LocalizedCookiePolicyPage({ params }: LocalePageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) {
    notFound();
  }

  return <CookiePolicyPage locale={locale} />;
}

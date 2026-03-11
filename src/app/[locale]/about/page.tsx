import { notFound } from "next/navigation";
import { AboutPage } from "@/components/PublicPages";
import { isLocale } from "@/lib/i18n";

type LocalePageProps = {
  params: Promise<{ locale: string }>;
};

export default async function LocalizedAboutPage({ params }: LocalePageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) {
    notFound();
  }

  return <AboutPage locale={locale} />;
}

import { notFound } from "next/navigation";
import { PrivacyPage } from "@/components/PublicPages";
import { isLocale } from "@/lib/i18n";

type LocalePageProps = {
  params: Promise<{ locale: string }>;
};

export default async function LocalizedPrivacyPage({ params }: LocalePageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) {
    notFound();
  }

  return <PrivacyPage locale={locale} />;
}

import { notFound } from "next/navigation";
import { ServicesPage } from "@/components/PublicPages";
import { isLocale } from "@/lib/i18n";

type LocalePageProps = {
  params: Promise<{ locale: string }>;
};

export default async function LocalizedServicesPage({ params }: LocalePageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) {
    notFound();
  }

  return <ServicesPage locale={locale} />;
}

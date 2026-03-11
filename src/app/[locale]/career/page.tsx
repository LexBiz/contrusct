import { notFound } from "next/navigation";
import { CareerPage } from "@/components/PublicPages";
import { isLocale } from "@/lib/i18n";

type LocalePageProps = {
  params: Promise<{ locale: string }>;
};

export const dynamic = "force-dynamic";

export default async function LocalizedCareerPage({ params }: LocalePageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) {
    notFound();
  }

  return await CareerPage({ locale });
}

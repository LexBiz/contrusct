import { NextResponse } from "next/server";
import { addSubmission } from "@/lib/storage";
import { isLocale } from "@/lib/i18n";

type ContactPayload = {
  fullName: string;
  email: string;
  phone: string;
  details: string;
  workType?: string;
  area?: number;
  city?: string;
  deadline?: string;
  photoLink?: string;
  cookieConsent?: string;
  consent: boolean;
  locale?: string;
};

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function successMessage(locale: string) {
  if (locale === "en") return "Request received. We will contact you within 24 hours.";
  if (locale === "de") return "Anfrage erhalten. Wir melden uns innerhalb von 24 Stunden.";
  if (locale === "ru") return "Запрос получен. Мы свяжемся с вами в течение 24 часов.";
  return "Poptavka byla prijata. Ozveme se do 24 hodin.";
}

export async function POST(request: Request) {
  try {
    let payload: ContactPayload;
    try {
      payload = (await request.json()) as ContactPayload;
    } catch {
      return NextResponse.json({ message: "Некорректные данные формы." }, { status: 400 });
    }
    const fullName = String(payload.fullName ?? "").trim();
    const email = String(payload.email ?? "").trim();
    const phone = String(payload.phone ?? "").trim();
    const details = String(payload.details ?? "").trim();
    const consent = payload.consent === true;

    if (!fullName || !email || !phone || !details || !consent) {
      return NextResponse.json(
        { message: "Заполнены не все обязательные поля." },
        { status: 400 },
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json({ message: "Некорректный email." }, { status: 400 });
    }

    const rawLocale = String(payload.locale ?? "");
    const locale = isLocale(rawLocale) ? rawLocale : "cs";

    await addSubmission({
      locale,
      fullName,
      email,
      phone,
      details,
      workType: String(payload.workType ?? "").trim(),
      area: Number(payload.area ?? 0) || 0,
      city: String(payload.city ?? "").trim(),
      deadline: String(payload.deadline ?? "").trim(),
      photoLink: String(payload.photoLink ?? "").trim(),
      consentAccepted: consent,
      cookieConsent: String(payload.cookieConsent ?? "essential").trim() || "essential",
    });

    return NextResponse.json({
      message: successMessage(locale),
    });
  } catch {
    return NextResponse.json({ message: "Ошибка сервера. Попробуйте еще раз." }, { status: 500 });
  }
}

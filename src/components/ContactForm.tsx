"use client";

import { FormEvent, useMemo, useState } from "react";
import { Locale } from "@/lib/i18n";
import { getSiteContent } from "@/lib/siteContent";

type Status = "idle" | "loading" | "success" | "error";
type ContactFormProps = {
  locale: Locale;
};

function formatPrice(value: number) {
  return new Intl.NumberFormat("cs-CZ").format(value);
}

function roundTo(value: number, step: number) {
  return Math.round(value / step) * step;
}

export function ContactForm({ locale }: ContactFormProps) {
  const t = getSiteContent(locale).form;
  const workTypeOptions = t.workTypes;
  const cityOptions = t.cities;
  const deadlineOptions = t.deadlines;
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const [workType, setWorkType] = useState<(typeof workTypeOptions)[number]["value"]>("interior");
  const [area, setArea] = useState(120);
  const [city, setCity] = useState<(typeof cityOptions)[number]["value"]>("praha");
  const [deadline, setDeadline] =
    useState<(typeof deadlineOptions)[number]["value"]>("standard");

  const estimate = useMemo(() => {
    const selectedWork = workTypeOptions.find((item) => item.value === workType) ?? workTypeOptions[0];
    const selectedCity = cityOptions.find((item) => item.value === city) ?? cityOptions[0];
    const selectedDeadline =
      deadlineOptions.find((item) => item.value === deadline) ?? deadlineOptions[1];
    const base = Math.max(area, 10) * selectedWork.rate * selectedCity.factor * selectedDeadline.factor;
    const min = roundTo(base * 0.88, 1000);
    const max = roundTo(base * 1.12, 1000);

    return {
      workLabel: selectedWork.label,
      cityLabel: selectedCity.label,
      deadlineLabel: selectedDeadline.label,
      min,
      max,
    };
  }, [area, city, deadline, workType, cityOptions, deadlineOptions, workTypeOptions]);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    const formEl = e.currentTarget;
    const form = new FormData(formEl);
    const details = [
      `Тип работ: ${estimate.workLabel}`,
      `Площадь: ${String(form.get("area") ?? area)} м²`,
      `Город: ${estimate.cityLabel}`,
      `Сроки: ${estimate.deadlineLabel}`,
      `Ссылка на фото / объект: ${String(form.get("photoLink") ?? "").trim() || "не указано"}`,
      "",
      "Описание проекта:",
      String(form.get("details") ?? "").trim(),
      "",
      `Ориентировочный диапазон: ${formatPrice(estimate.min)} - ${formatPrice(estimate.max)} CZK`,
    ]
      .filter(Boolean)
      .join("\n");

    const payload = {
      fullName: String(form.get("fullName") ?? ""),
      email: String(form.get("email") ?? ""),
      phone: String(form.get("phone") ?? ""),
      details,
      workType,
      area: Number(form.get("area") ?? area),
      city,
      deadline,
      photoLink: String(form.get("photoLink") ?? ""),
      cookieConsent:
        typeof window !== "undefined"
          ? String(window.localStorage.getItem("construct-cookie-consent") ?? "essential")
          : "essential",
      consent: form.get("consent") === "on",
      locale,
    };

    try {
      const res = await fetch("/api/contact", {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify(payload),
      });
      const data = (await res.json().catch(() => ({}))) as { message?: string };
      if (!res.ok) {
        throw new Error(data.message || t.error);
      }
      formEl.reset();
      setWorkType("interior");
      setArea(120);
      setCity("praha");
      setDeadline("standard");
      setStatus("success");
      setMessage(data.message || t.success);
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error && error.message
          ? error.message
          : t.error,
      );
    }
  }

  return (
    <div className="lead-form-grid">
      <section className="estimate-card">
        <div className="estimate-head">
          <span className="section-tag">{t.estimateTag}</span>
          <h3>{t.estimateTitle}</h3>
          <p>{t.estimateText}</p>
        </div>

        <div className="estimate-controls">
          <label>
            {t.typeLabel}
            <select
              name="workType"
              value={workType}
              onChange={(e) => setWorkType(e.target.value as typeof workType)}
            >
              {workTypeOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>

          <label>
            {t.areaLabel}
            <input
              name="area"
              type="number"
              min={10}
              value={area}
              onChange={(e) => setArea(Number(e.target.value) || 10)}
            />
          </label>

          <label>
            {t.cityLabel}
            <select
              name="city"
              value={city}
              onChange={(e) => setCity(e.target.value as typeof city)}
            >
              {cityOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>

          <label>
            {t.deadlineLabel}
            <select
              name="deadline"
              value={deadline}
              onChange={(e) => setDeadline(e.target.value as typeof deadline)}
            >
              {deadlineOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div className="estimate-result">
          <span>{t.resultLabel}</span>
          <strong>
            {formatPrice(estimate.min)} - {formatPrice(estimate.max)} CZK
          </strong>
          <p>{t.resultHint}</p>
        </div>
      </section>

      <form className="contact-form-new" onSubmit={handleSubmit}>
        <div className="contact-form-head">
          <span className="section-tag">{t.fastTag}</span>
          <h3>{t.fastTitle}</h3>
          <p>{t.fastText}</p>
        </div>

        <input type="hidden" name="area" value={area} />

        <div className="form-grid-new">
          <label>
            {t.nameLabel}
            <input name="fullName" required />
          </label>
          <label>
            {t.phoneLabel}
            <input name="phone" type="tel" required />
          </label>
          <label>
            {t.emailLabel}
            <input name="email" type="email" required />
          </label>
          <label>
            {t.photoLabel}
            <input name="photoLink" placeholder="Google Drive / Dropbox / photo link" />
          </label>
        </div>

        <label>
          {t.detailsLabel}
          <textarea
            name="details"
            required
            rows={6}
            placeholder={t.detailsPlaceholder}
          />
        </label>

        <label className="checkbox-row">
          <input type="checkbox" name="consent" required />
          {t.consent}
        </label>

        <div className="form-actions">
          <button className="btn btn-primary" type="submit" disabled={status === "loading"}>
            {status === "loading" ? t.sending : t.submit}
          </button>
          {message ? <p className={`form-msg ${status}`}>{message}</p> : null}
        </div>
      </form>
    </div>
  );
}

"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { Locale, localePath } from "@/lib/i18n";
import { getSiteContent } from "@/lib/siteContent";

const STORAGE_KEY = "construct-cookie-consent";
const EVENT_NAME = "construct-open-cookie-settings";
const CONSENT_EVENT = "construct-cookie-consent-changed";

type CookieConsentProps = {
  locale: Locale;
};

export function CookieConsent({ locale }: CookieConsentProps) {
  const content = getSiteContent(locale).cookieBanner;
  const [forceOpen, setForceOpen] = useState(false);
  const requiresConsent = useSyncExternalStore(
    (onStoreChange) => {
      function handleStorage(event: StorageEvent) {
        if (!event.key || event.key === STORAGE_KEY) {
          onStoreChange();
        }
      }

      function handleConsentChange() {
        onStoreChange();
      }

      window.addEventListener("storage", handleStorage);
      window.addEventListener(CONSENT_EVENT, handleConsentChange);

      return () => {
        window.removeEventListener("storage", handleStorage);
        window.removeEventListener(CONSENT_EVENT, handleConsentChange);
      };
    },
    () => !window.localStorage.getItem(STORAGE_KEY),
    () => false,
  );

  useEffect(() => {
    function handleOpen() {
      setForceOpen(true);
    }

    window.addEventListener(EVENT_NAME, handleOpen);
    return () => {
      window.removeEventListener(EVENT_NAME, handleOpen);
    };
  }, []);

  function save(choice: "all" | "essential") {
    window.localStorage.setItem(STORAGE_KEY, choice);
    setForceOpen(false);
    window.dispatchEvent(new Event(CONSENT_EVENT));
  }

  if (!requiresConsent && !forceOpen) {
    return null;
  }

  return (
    <aside className="cookie-banner" aria-live="polite">
      <div className="cookie-banner-card">
        <div>
          <p className="section-tag">{content.title}</p>
          <p className="cookie-banner-text">{content.text}</p>
        </div>
        <div className="cookie-banner-actions">
          <button type="button" className="btn btn-secondary" onClick={() => save("essential")}>
            {content.acceptNecessary}
          </button>
          <button type="button" className="btn btn-primary" onClick={() => save("all")}>
            {content.acceptAll}
          </button>
        </div>
        <div className="cookie-banner-links">
          <Link href={localePath(locale, "/cookie-policy")}>{content.settings}</Link>
          <Link href={localePath(locale, "/privacy-policy")}>GDPR</Link>
        </div>
      </div>
    </aside>
  );
}

export function openCookieSettings() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event(EVENT_NAME));
  }
}

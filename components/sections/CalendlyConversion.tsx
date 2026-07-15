"use client";

import { useEffect } from "react";

// Google Ads konverze „Rezervace schůzky" (AW-18227137742).
const ADS_CONVERSION = "AW-18227137742/128ECIz9-dAcEM6ZsPND";

// Calendly běží v iframu, takže dovnitř nevidíme. Po rezervaci ale pošle
// zprávu ven — tou konverzi poznáme.
export function CalendlyConversion() {
  useEffect(() => {
    const onMessage = (e: MessageEvent) => {
      if (e.origin !== "https://calendly.com") return;
      if (e.data?.event !== "calendly.event_scheduled") return;
      window.gtag?.("event", "conversion", { send_to: ADS_CONVERSION });
    };
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  return null;
}

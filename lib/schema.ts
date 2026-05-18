// 🔒 CHRÁNĚNÁ ZÓNA — validace formuláře.
// Měnit jen po domluvě s Lukem.

import { z } from "zod";

export const GOALS = ["zhubnout", "nabrat", "forma", "sila"] as const;
export const KG_BUCKETS = ["do-5", "5-10", "10-15", "15-plus"] as const;
export const TIMELINES = ["3m", "6m", "12m", "nespecham"] as const;
export const EXPERIENCE = ["zacatecnik", "obcas", "pokrocily"] as const;
export const PACKAGE_CHOICES = [
  "Online Coaching",
  "Hybrid",
  "Hybrid Pro",
  "Hybrid Elite",
  "Nevim",
] as const;
export const SOURCES = [
  "socialni-site",
  "doporuceni",
  "google",
  "jinde",
] as const;
export const REASONS = [
  "reference",
  "zkusenosti",
  "hodnoty",
  "vysledky",
  "jine",
] as const;

// CZ telefon — povolíme +420 prefix nebo bez něj, mezery jsou ok
const phoneRegex = /^(\+?420)?\s?[0-9]{3}\s?[0-9]{3}\s?[0-9]{3}$/;

export const LeadSchema = z.object({
  goal: z.enum(GOALS, { required_error: "Vyber cíl" }),
  kg: z.enum(KG_BUCKETS).optional(),
  timeline: z.enum(TIMELINES, { required_error: "Vyber časový horizont" }),
  experience: z.enum(EXPERIENCE, { required_error: "Vyber svou úroveň" }),
  package: z.enum(PACKAGE_CHOICES, { required_error: "Vyber balíček" }),
  source: z.enum(SOURCES, { required_error: "Vyber, odkud jsi se o mně dozvěděl" }),
  reason: z.enum(REASONS, { required_error: "Vyber, proč jsi vybral mě" }),
  name: z
    .string()
    .min(2, "Zadej jméno a příjmení")
    .max(120, "Jméno je moc dlouhé"),
  email: z.string().email("Neplatný e-mail"),
  phone: z
    .string()
    .regex(phoneRegex, "Neplatné telefonní číslo (např. 702 169 863)"),
  message: z.string().max(2000).optional().or(z.literal("")),
  gdpr: z.literal(true, {
    errorMap: () => ({
      message: "Bez souhlasu se zpracováním údajů nemůžu poptávku přijmout.",
    }),
  }),
});

export type LeadInput = z.infer<typeof LeadSchema>;

// Labely pro zobrazení (česky) — používá je e-mail i success screen
export const GOAL_LABELS: Record<(typeof GOALS)[number], string> = {
  zhubnout: "Zhubnout",
  nabrat: "Nabrat svaly",
  forma: "Forma / zpevnit",
  sila: "Síla / výkon",
};

export const KG_LABELS: Record<(typeof KG_BUCKETS)[number], string> = {
  "do-5": "do 5 kg",
  "5-10": "5–10 kg",
  "10-15": "10–15 kg",
  "15-plus": "15+ kg",
};

export const TIMELINE_LABELS: Record<(typeof TIMELINES)[number], string> = {
  "3m": "Do 90 dnů",
  "6m": "6 měsíců",
  "12m": "12 měsíců",
  nespecham: "Nespěchám",
};

export const EXPERIENCE_LABELS: Record<(typeof EXPERIENCE)[number], string> = {
  zacatecnik: "Začátečník (nikdy / sporadicky)",
  obcas: "Občas cvičím (1–2× týdně, bez plánu)",
  pokrocily: "Pokročilý (pravidelně, mám systém)",
};

export const SOURCE_LABELS: Record<(typeof SOURCES)[number], string> = {
  "socialni-site": "Sociální sítě (Instagram / TikTok / Facebook)",
  doporuceni: "Doporučení od kamaráda",
  google: "Google / vyhledávání trenéra",
  jinde: "Jinde",
};

export const REASON_LABELS: Record<(typeof REASONS)[number], string> = {
  reference: "Reference klientů",
  zkusenosti: "Šest let zkušeností",
  hodnoty: "Hodnoty, které vyznáváš",
  vysledky: "Tvoje výsledky",
  jine: "Jiné",
};

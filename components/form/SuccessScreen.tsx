// 🔒 CHRÁNĚNÁ ZÓNA — komponenta formuláře.
"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Instagram } from "lucide-react";
import { contact, formCopy } from "@/lib/content";
import {
  GOAL_LABELS,
  KG_LABELS,
  TIMELINE_LABELS,
  type LeadInput,
} from "@/lib/schema";

interface Props {
  data: LeadInput;
}

export function SuccessScreen({ data }: Props) {
  const firstName = data.name.split(" ")[0];

  const summary: Array<[string, string]> = [
    ["Cíl", GOAL_LABELS[data.goal]],
    ["Kolik", data.kg ? KG_LABELS[data.kg] : "—"],
    ["Časový horizont", TIMELINE_LABELS[data.timeline]],
    ["Balíček", data.package],
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="text-center"
    >
      <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-emerald/20 text-emerald-light mb-6">
        <CheckCircle2 className="h-8 w-8" strokeWidth={1.5} />
      </div>

      <h3 className="font-display text-3xl sm:text-4xl font-semibold text-bone leading-tight">
        Díky, {firstName}.
      </h3>
      <p className="mt-3 text-bone/70 text-[1.0625rem]">
        {formCopy.success.title}
      </p>

      <div className="mt-8 mx-auto max-w-md text-left rounded-xl border border-bone/10 bg-ink/40 p-5">
        <div className="text-xs uppercase tracking-[0.15em] text-mute mb-3">
          Na základě toho, co jsi vyplnil/a:
        </div>
        <dl className="space-y-2.5">
          {summary.map(([k, v]) => (
            <div key={k} className="flex items-baseline justify-between gap-4 text-sm">
              <dt className="text-mute">{k}</dt>
              <dd className="text-bone/90 font-medium text-right">{v}</dd>
            </div>
          ))}
        </dl>
      </div>

      <p className="mt-8 text-bone/80">
        Ozvu se ti do <strong>48 hodin</strong> na{" "}
        <span className="text-bone">{data.phone}</span>
        <br className="hidden sm:block" /> nebo{" "}
        <span className="text-bone">{data.email}</span>.
      </p>

      <div className="mt-8 inline-flex flex-col items-center gap-3">
        <span className="text-sm text-mute">{formCopy.success.instagramCta}</span>
        <a
          href={contact.instagramUrl}
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex items-center gap-2 h-11 px-5 rounded-xl border border-bone/15 hover:border-emerald-light hover:bg-emerald/5 text-bone transition-colors"
        >
          <Instagram className="h-4 w-4" />
          @{contact.instagram}
        </a>
      </div>
    </motion.div>
  );
}

"use client";

import { motion } from "framer-motion";
import { Split } from "lucide-react";
import { guarantee } from "@/lib/content";
import { renderInline } from "@/lib/markdown";

export function CustomCollab() {
  const handleCustom = () => {
    const target = document.getElementById("kontakt");
    if (!target) return;
    const ev = new CustomEvent("preselect-package", { detail: "Nevim" });
    window.dispatchEvent(ev);
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="py-16 sm:py-20 bg-ink">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl bg-graphite border border-bone/5 p-8 sm:p-10 flex flex-col sm:flex-row sm:items-center gap-8"
        >
          <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald/10 text-emerald-light">
            <Split className="h-5 w-5" />
          </div>
          <div className="flex-1">
            <h3 className="font-display text-2xl font-semibold text-bone leading-tight">
              {guarantee.customTitle}
            </h3>
            <p className="mt-3 text-[1rem] leading-relaxed text-bone/70">
              {renderInline(guarantee.customBody)}
            </p>
          </div>
          <button
            type="button"
            onClick={handleCustom}
            className="group inline-flex items-center justify-center gap-2 h-12 px-5 rounded-xl border border-bone/15 hover:border-emerald-light hover:bg-emerald/5 text-bone font-medium transition-colors shrink-0"
          >
            {guarantee.customCta}
            <span className="transition-transform group-hover:translate-x-1" aria-hidden>
              →
            </span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}

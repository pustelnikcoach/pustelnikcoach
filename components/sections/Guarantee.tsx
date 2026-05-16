"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Split } from "lucide-react";
import { guarantee } from "@/lib/content";
import { renderInline } from "@/lib/markdown";

export function Guarantee() {
  const handleCustom = () => {
    const target = document.getElementById("kontakt");
    if (!target) return;
    const ev = new CustomEvent("preselect-package", { detail: "Nevim" });
    window.dispatchEvent(ev);
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="garance" className="py-20 sm:py-28 bg-ink">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="font-display font-semibold text-display-lg text-bone"
          >
            {guarantee.heading}
          </motion.h2>
        </div>

        <div className="mt-12 grid lg:grid-cols-5 gap-6 lg:gap-8 items-stretch">
          {/* Levý sloupec — statistika + garance */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 rounded-2xl bg-graphite border border-emerald/30 p-8 sm:p-10 relative overflow-hidden"
          >
            <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-emerald/15 blur-3xl pointer-events-none" />
            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full bg-emerald/15 text-emerald-light px-3 py-1 text-xs uppercase tracking-[0.15em]">
                <ShieldCheck className="h-3.5 w-3.5" />
                Garance
              </div>

              <div className="mt-7 flex items-baseline gap-3">
                <span className="font-display text-7xl sm:text-8xl font-semibold text-emerald-light leading-none">
                  {guarantee.statNumber}
                </span>
              </div>
              <p className="mt-4 text-[1.0625rem] text-bone/70 max-w-md leading-relaxed">
                {guarantee.statLabel}
              </p>

              <div className="mt-8 rounded-xl bg-ink/60 border border-bone/10 p-5 text-[1.05rem] leading-relaxed text-bone/90">
                {renderInline(guarantee.promise)}
              </div>
            </div>
          </motion.div>

          {/* Pravý sloupec — spolupráce mimo ceník */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 rounded-2xl bg-graphite border border-bone/5 p-8 sm:p-10 flex flex-col"
          >
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-bone/[0.06] text-bone/80">
              <Split className="h-5 w-5" />
            </div>
            <h3 className="mt-5 font-display text-2xl font-semibold text-bone leading-tight">
              {guarantee.customTitle}
            </h3>
            <p className="mt-3 text-[1rem] leading-relaxed text-bone/70 flex-1">
              {renderInline(guarantee.customBody)}
            </p>
            <button
              type="button"
              onClick={handleCustom}
              className="group mt-7 inline-flex items-center justify-center gap-2 h-12 px-5 rounded-xl border border-bone/15 hover:border-emerald-light hover:bg-emerald/5 text-bone font-medium transition-colors"
            >
              {guarantee.customCta}
              <span className="transition-transform group-hover:translate-x-1" aria-hidden>
                →
              </span>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

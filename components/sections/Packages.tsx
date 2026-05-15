"use client";

import { motion } from "framer-motion";
import { Check, Clock4 } from "lucide-react";
import {
  oneTime,
  oneTimeHeading,
  packages,
  packagesHeading,
  urgency,
} from "@/lib/content";
import { renderInline } from "@/lib/markdown";
import { cn } from "@/lib/utils";

export function Packages() {
  const handleSelect = (packageName: string) => {
    const ev = new CustomEvent("preselect-package", { detail: packageName });
    window.dispatchEvent(ev);
    const target = document.getElementById("kontakt");
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="balicky" className="py-20 sm:py-28 bg-ink">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="max-w-2xl mb-12 sm:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="font-display font-semibold text-display-lg text-bone"
          >
            {packagesHeading.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-[1.0625rem] text-bone/65 leading-relaxed"
          >
            {renderInline(packagesHeading.subtitle)}
          </motion.p>
        </div>

        {/* Urgency strip */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="mb-10 inline-flex items-start gap-3 rounded-xl border border-emerald/25 bg-emerald/[0.08] px-4 py-3 text-sm text-bone/85"
        >
          <Clock4 className="h-4 w-4 mt-0.5 text-emerald-light shrink-0" aria-hidden />
          <span>{urgency.message}</span>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {packages.map((pkg, i) => {
            const featured = pkg.tag === "NEJOBLÍBENĚJŠÍ";
            return (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.06 }}
                className={cn(
                  "relative p-7 sm:p-9 rounded-2xl border transition-all duration-300",
                  "bg-graphite hover:-translate-y-1",
                  featured
                    ? "border-emerald shadow-[0_0_0_1px_rgba(15,76,58,0.4),0_30px_60px_-20px_rgba(15,76,58,0.5)]"
                    : "border-bone/5 hover:border-bone/15"
                )}
              >
                {pkg.tag && (
                  <span
                    className={cn(
                      "absolute -top-3 left-7 inline-flex items-center rounded-full px-3 py-1 text-[0.65rem] tracking-[0.18em] uppercase font-medium",
                      featured
                        ? "bg-emerald text-bone"
                        : "bg-bone/10 text-bone/80"
                    )}
                  >
                    {pkg.tag}
                  </span>
                )}

                <h3 className="font-display text-2xl font-semibold text-bone">
                  {pkg.name}
                </h3>
                {pkg.bestFor && (
                  <p className="mt-2 text-sm text-bone/55 leading-snug">
                    {pkg.bestFor}
                  </p>
                )}

                <div className="mt-5 flex items-baseline gap-1">
                  <span className="font-display text-5xl font-semibold text-bone leading-none">
                    {pkg.price}
                  </span>
                  <span className="text-mute text-base ml-1">Kč {pkg.period}</span>
                </div>

                <ul className="mt-7 space-y-3">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-[0.95rem] text-bone/80">
                      <Check
                        className="h-4 w-4 mt-1 shrink-0 text-emerald-light"
                        aria-hidden
                      />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  onClick={() => handleSelect(pkg.name)}
                  className={cn(
                    "group mt-8 w-full inline-flex items-center justify-center gap-2 h-12 rounded-xl font-medium transition-colors",
                    featured
                      ? "bg-emerald hover:bg-emerald-light text-bone"
                      : "border border-bone/15 hover:border-emerald-light hover:bg-emerald/5 text-bone"
                  )}
                >
                  Vybrat balíček
                  <span className="transition-transform group-hover:translate-x-1" aria-hidden>
                    →
                  </span>
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* Jednorázovky */}
        <div className="mt-20">
          <h3 className="text-sm uppercase tracking-[0.18em] text-mute mb-6">
            {oneTimeHeading}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {oneTime.map((item) => (
              <div
                key={item.name}
                className="p-5 rounded-xl bg-graphite/60 border border-bone/5"
              >
                <div className="text-sm text-bone/85">{item.name}</div>
                <div className="mt-2 font-display text-2xl font-semibold text-bone">
                  {item.price} <span className="text-base text-mute">Kč</span>
                </div>
                {item.note && (
                  <div className="mt-1 text-xs text-mute">{item.note}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

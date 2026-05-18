"use client";

import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import { guarantee } from "@/lib/content";
import { renderInline } from "@/lib/markdown";

export function Guarantee() {
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

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="mt-12 rounded-2xl bg-graphite border border-emerald/30 p-8 sm:p-12 relative overflow-hidden"
        >
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-emerald/15 blur-3xl pointer-events-none" />
          <div className="relative grid sm:grid-cols-5 gap-8 sm:gap-12 items-start">
            <div className="sm:col-span-2">
              <div className="inline-flex items-center gap-2 rounded-full bg-emerald/15 text-emerald-light px-3 py-1 text-xs uppercase tracking-[0.15em]">
                <ShieldCheck className="h-3.5 w-3.5" />
                Garance
              </div>
              <div className="mt-6 font-display text-7xl sm:text-8xl font-semibold text-emerald-light leading-none">
                {guarantee.statNumber}
              </div>
            </div>

            <div className="sm:col-span-3">
              <p className="text-[1.0625rem] text-bone/75 leading-relaxed">
                {guarantee.statLabel}
              </p>
              <div className="mt-6 rounded-xl bg-ink/60 border border-bone/10 p-5 text-[1.05rem] leading-relaxed text-bone/90">
                {renderInline(guarantee.promise)}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

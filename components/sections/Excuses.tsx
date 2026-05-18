"use client";

import { motion } from "framer-motion";
import { Heart, Quote } from "lucide-react";
import { excuses, excusesHeading } from "@/lib/content";
import { renderInline } from "@/lib/markdown";

export function Excuses() {
  return (
    <section id="vymluvy" className="py-20 sm:py-28 bg-ink relative overflow-hidden">
      <div className="absolute -top-40 -left-40 h-[480px] w-[480px] rounded-full bg-emerald/[0.06] blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8">
        <div className="max-w-2xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald/10 text-emerald-light px-3 py-1 text-xs uppercase tracking-[0.15em] mb-5">
            <Heart className="h-3.5 w-3.5" />
            Zdraví máte jen jedno
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="font-display font-semibold text-display-lg text-bone"
          >
            {excusesHeading.title}
          </motion.h2>
          {excusesHeading.subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-4 text-[1.0625rem] text-bone/65 leading-relaxed"
            >
              {renderInline(excusesHeading.subtitle)}
            </motion.p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {excuses.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="relative p-7 sm:p-8 rounded-2xl bg-graphite border border-bone/5"
            >
              <Quote
                className="absolute top-6 right-6 h-6 w-6 text-bone/15"
                aria-hidden
              />
              <p className="font-display text-xl sm:text-2xl text-bone/60 leading-snug italic">
                {item.excuse}
              </p>
              <div className="mt-5 pt-5 border-t border-bone/5">
                <div className="text-[0.7rem] uppercase tracking-[0.18em] text-emerald-light mb-2">
                  Petr na to
                </div>
                <p className="text-[1rem] leading-relaxed text-bone/85">
                  {renderInline(item.answer)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

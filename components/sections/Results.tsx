"use client";

import { motion } from "framer-motion";
import { results, resultsHeading } from "@/lib/content";

export function Results() {
  return (
    <section id="vysledky" className="py-20 sm:py-28 bg-ink">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="max-w-2xl mb-12 sm:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="font-display font-semibold text-display-lg text-bone"
          >
            {resultsHeading.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-[1.0625rem] text-bone/65 leading-relaxed"
          >
            {resultsHeading.subtitle}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {results.map((r, i) => (
            <motion.article
              key={r.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group bg-graphite rounded-2xl overflow-hidden border border-bone/5 hover:border-emerald/30 transition-colors duration-300"
            >
              <div className="relative aspect-[4/5] bg-ink/50 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={r.image}
                  alt={`${r.name} — výsledek spolupráce`}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).style.display = "none";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-graphite via-graphite/20 to-transparent pointer-events-none" />
                <div className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-full bg-ink/70 backdrop-blur px-3 py-1 text-[0.7rem] tracking-widest uppercase text-bone/80">
                  {r.duration}
                </div>
              </div>

              <div className="p-6 sm:p-7">
                <div className="text-xs uppercase tracking-[0.15em] text-mute mb-2">
                  {r.name}
                </div>
                <div className="font-display text-2xl font-semibold text-bone leading-tight">
                  {r.before}{" "}
                  <span className="text-mute mx-1" aria-hidden>
                    →
                  </span>{" "}
                  <span className="text-emerald-light">{r.after}</span>
                </div>
                <blockquote className="mt-4 pt-4 border-t border-bone/5 text-[0.95rem] text-bone/70 leading-relaxed">
                  &ldquo;{r.quote}&rdquo;
                </blockquote>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

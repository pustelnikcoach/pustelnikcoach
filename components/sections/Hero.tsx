"use client";

import { motion } from "framer-motion";
import { hero } from "@/lib/content";
import { renderInline } from "@/lib/markdown";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[90vh] pt-28 pb-20 sm:pt-32 sm:pb-24 bg-ink-graphite overflow-hidden"
    >
      <div className="absolute inset-0 bg-hero-radial pointer-events-none" aria-hidden />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8 grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        <div className="order-2 md:order-1">
          <motion.p
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-xs sm:text-[0.78rem] font-medium uppercase tracking-[0.18em] text-mute mb-6"
          >
            {hero.eyebrow}
          </motion.p>

          <motion.h1
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="font-display font-semibold text-display-xl text-bone"
          >
            {hero.headlineLine1}
            <br />
            <span className="text-bone/70">{hero.headlineLine2}</span>
          </motion.h1>

          <motion.p
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-7 text-[1.0625rem] leading-relaxed text-bone/70 max-w-xl"
          >
            {renderInline(hero.subheadline)}
          </motion.p>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4"
          >
            <a
              href="#kontakt"
              className="group inline-flex items-center justify-center gap-2 h-14 px-7 rounded-xl bg-emerald hover:bg-emerald-light text-bone font-medium transition-all duration-200 active:scale-[0.98]"
            >
              {hero.ctaPrimary}
              <span className="transition-transform group-hover:translate-x-1" aria-hidden>→</span>
            </a>
            <a
              href="#vysledky"
              className="inline-flex items-center justify-center gap-2 h-14 px-7 rounded-xl bg-transparent border border-bone/15 text-bone hover:border-bone/30 hover:bg-bone/[0.03] font-medium transition-all duration-200"
            >
              {hero.ctaSecondary}
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="order-1 md:order-2 relative"
        >
          <div className="relative aspect-[4/5] w-full max-w-md mx-auto md:mx-0 md:ml-auto rounded-2xl overflow-hidden border border-emerald/20 bg-graphite shadow-2xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={hero.image}
              alt={hero.imageAlt}
              className="absolute inset-0 h-full w-full object-cover"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.display = "none";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent pointer-events-none" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

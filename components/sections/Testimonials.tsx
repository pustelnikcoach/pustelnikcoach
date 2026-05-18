"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { testimonials, testimonialsHeading } from "@/lib/content";

export function Testimonials() {
  return (
    <section id="recenze" className="py-20 sm:py-28 bg-graphite relative overflow-hidden">
      <div className="absolute -bottom-32 -right-32 h-[420px] w-[420px] rounded-full bg-emerald/[0.05] blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8">
        <div className="max-w-2xl mb-12 sm:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="font-display font-semibold text-display-lg text-bone"
          >
            {testimonialsHeading.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-[1.0625rem] text-bone/65 leading-relaxed"
          >
            {testimonialsHeading.subtitle}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="relative p-7 sm:p-8 rounded-2xl bg-ink/60 border border-bone/5 hover:border-emerald/20 transition-colors duration-300"
            >
              <Quote className="absolute top-6 right-6 h-6 w-6 text-bone/15" aria-hidden />
              <blockquote className="font-display text-lg sm:text-xl leading-snug text-bone/90 italic pr-8">
                „{t.quote}"
              </blockquote>
              <figcaption className="mt-6 pt-5 border-t border-bone/5 text-[0.7rem] uppercase tracking-[0.18em] text-emerald-light">
                {t.name}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}

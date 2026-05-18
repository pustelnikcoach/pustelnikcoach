"use client";

import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { about } from "@/lib/content";
import { renderInline } from "@/lib/markdown";

export function About() {
  return (
    <section id="o-mne" className="py-20 sm:py-28 bg-ink">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 grid md:grid-cols-5 gap-10 md:gap-14 items-start">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="md:col-span-2"
        >
          <div className="relative aspect-[4/5] w-full max-w-md rounded-2xl overflow-hidden bg-graphite border border-bone/5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={about.image}
              alt={about.imageAlt}
              className="absolute inset-0 h-full w-full object-cover object-top"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.display = "none";
              }}
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="md:col-span-3"
        >
          <h2 className="font-display font-semibold text-display-lg text-bone mb-8">
            {about.heading}
          </h2>

          <div className="space-y-5 text-[1.0625rem] leading-relaxed text-bone/75 [&>p:nth-child(3)]:mt-10 [&>p:nth-child(3)]:pt-6 [&>p:nth-child(3)]:border-t [&>p:nth-child(3)]:border-bone/10">
            {about.paragraphs.map((p, i) => (
              <p key={i}>{renderInline(p)}</p>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-2">
            {about.badges.map((b) => (
              <span
                key={b}
                className="inline-flex items-center gap-2 rounded-full bg-graphite border border-bone/5 px-3.5 py-1.5 text-sm text-bone/80"
              >
                <Check className="h-3.5 w-3.5 text-emerald-light" aria-hidden />
                {b}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { vsl } from "@/lib/content";

export function VSL() {
  if (!vsl.videoUrl) return null; // dokud není video, sekce se neukáže

  return (
    <section id="vsl" className="py-20 sm:py-28 bg-ink">
      <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          {vsl.eyebrow && (
            <p className="text-sm font-medium tracking-widest text-emerald-light mb-3">
              {vsl.eyebrow}
            </p>
          )}
          <h2 className="font-display font-semibold text-display-lg text-bone mb-8">
            {vsl.heading}
          </h2>

          <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-bone/5 bg-graphite">
            <video
              className="absolute inset-0 h-full w-full"
              src={vsl.videoUrl}
              poster={vsl.poster || undefined}
              controls
              playsInline
              preload="metadata"
            />
          </div>

          <a
            href="#kontakt"
            className="group mt-10 inline-flex h-14 items-center justify-center gap-2 rounded-xl bg-emerald px-8 font-medium text-bone transition-all duration-200 hover:bg-emerald-light active:scale-[0.98]"
          >
            {vsl.cta}
            <span className="transition-transform group-hover:translate-x-1" aria-hidden>
              →
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

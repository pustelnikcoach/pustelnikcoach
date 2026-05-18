"use client";

import { motion } from "framer-motion";
import { Flag, MapPin } from "lucide-react";
import { process, processHeading } from "@/lib/content";
import { renderInline } from "@/lib/markdown";
import { cn } from "@/lib/utils";

// 4 milníky v zigzag layoutu jako mapa.
// Pozice (col 0-3, row 0-1) — desktop only.
const positions = [
  { col: 0, row: 0, align: "left" as const },
  { col: 1, row: 1, align: "left" as const },
  { col: 2, row: 0, align: "left" as const },
  { col: 3, row: 1, align: "left" as const },
];

export function Process() {
  return (
    <section className="py-20 sm:py-28 bg-graphite relative overflow-hidden">
      <div className="absolute top-1/2 -translate-y-1/2 -left-40 h-[500px] w-[500px] rounded-full bg-emerald/[0.05] blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8">
        <div className="max-w-2xl mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald/10 text-emerald-light px-3 py-1 text-xs uppercase tracking-[0.15em] mb-5">
            <MapPin className="h-3.5 w-3.5" />
            Mapa transformace
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="font-display font-semibold text-display-lg text-bone"
          >
            {processHeading.title}
          </motion.h2>
          {processHeading.subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-4 text-[1.0625rem] text-bone/65 leading-relaxed"
            >
              {processHeading.subtitle}
            </motion.p>
          )}
        </div>

        {/* DESKTOP — mapa se šipkami */}
        <div className="hidden md:block relative">
          <svg
            viewBox="0 0 1200 460"
            preserveAspectRatio="none"
            className="absolute inset-0 h-full w-full pointer-events-none"
            aria-hidden
          >
            <defs>
              <marker
                id="arrowhead"
                viewBox="0 0 10 10"
                refX="9"
                refY="5"
                markerWidth="6"
                markerHeight="6"
                orient="auto"
              >
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#1A6B52" />
              </marker>
            </defs>
            {/* 1 → 2 (top-left to bottom-right of next col) */}
            <motion.path
              d="M 200 130 C 260 200, 320 280, 420 330"
              fill="none"
              stroke="#1A6B52"
              strokeWidth="2"
              strokeDasharray="6 8"
              markerEnd="url(#arrowhead)"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1.2, delay: 0.3 }}
            />
            {/* 2 → 3 (bottom-left to top-right) */}
            <motion.path
              d="M 540 360 C 600 320, 660 240, 740 150"
              fill="none"
              stroke="#1A6B52"
              strokeWidth="2"
              strokeDasharray="6 8"
              markerEnd="url(#arrowhead)"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1.2, delay: 0.6 }}
            />
            {/* 3 → 4 */}
            <motion.path
              d="M 860 130 C 920 200, 980 280, 1060 330"
              fill="none"
              stroke="#1A6B52"
              strokeWidth="2"
              strokeDasharray="6 8"
              markerEnd="url(#arrowhead)"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1.2, delay: 0.9 }}
            />
          </svg>

          <div className="grid grid-cols-4 grid-rows-2 gap-x-4 gap-y-4 h-[460px]">
            {process.map((step, i) => {
              const pos = positions[i];
              const isLast = i === process.length - 1;
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  className={cn(
                    "rounded-2xl p-5 backdrop-blur-sm transition-all",
                    isLast
                      ? "bg-emerald/[0.08] border-2 border-emerald/50 shadow-[0_0_40px_-12px_rgba(26,107,82,0.6)] ring-1 ring-emerald/20"
                      : "bg-ink/60 border border-bone/10",
                    pos.row === 0 ? "row-start-1" : "row-start-2"
                  )}
                  style={{ gridColumnStart: pos.col + 1 }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span
                      className={cn(
                        "inline-flex items-center justify-center rounded-full text-[0.7rem] font-medium",
                        isLast
                          ? "h-9 w-9 bg-emerald text-bone shadow-lg shadow-emerald/40"
                          : "h-7 w-7 bg-emerald/15 text-emerald-light"
                      )}
                    >
                      {isLast ? <Flag className="h-4 w-4" /> : i + 1}
                    </span>
                    <span
                      className={cn(
                        "font-display font-semibold text-emerald-light",
                        isLast ? "text-lg" : "text-base"
                      )}
                    >
                      {step.step}
                    </span>
                    {isLast && (
                      <span className="ml-auto inline-flex items-center rounded-full bg-emerald/20 px-2 py-0.5 text-[0.6rem] uppercase tracking-[0.15em] text-emerald-light">
                        Cíl
                      </span>
                    )}
                  </div>
                  <h3
                    className={cn(
                      "font-semibold leading-snug",
                      isLast ? "text-lg text-bone" : "text-bone"
                    )}
                  >
                    {step.title}
                  </h3>
                  <p
                    className={cn(
                      "mt-2 leading-relaxed",
                      isLast
                        ? "text-[0.95rem] text-bone/80"
                        : "text-sm text-bone/65"
                    )}
                  >
                    {renderInline(step.description)}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* MOBIL — vertikální stack */}
        <div className="md:hidden relative space-y-5">
          <div className="absolute left-[18px] top-3 bottom-3 w-px bg-emerald/30" aria-hidden />
          {process.map((step, i) => {
            const isLast = i === process.length - 1;
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative pl-12"
              >
                <span
                  className={cn(
                    "absolute left-0 top-2 inline-flex h-9 w-9 items-center justify-center rounded-full",
                    isLast
                      ? "bg-emerald text-bone shadow-lg shadow-emerald/40"
                      : "bg-emerald/15 text-emerald-light border border-emerald/40"
                  )}
                >
                  {isLast ? <Flag className="h-4 w-4" /> : i + 1}
                </span>
                <div
                  className={cn(
                    "rounded-2xl p-5",
                    isLast
                      ? "bg-emerald/[0.08] border-2 border-emerald/50 shadow-[0_0_40px_-12px_rgba(26,107,82,0.5)]"
                      : "bg-ink/60 border border-bone/5"
                  )}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className={cn(
                        "font-display font-semibold text-emerald-light",
                        isLast ? "text-base" : "text-sm"
                      )}
                    >
                      {step.step}
                    </span>
                    {isLast && (
                      <span className="inline-flex items-center rounded-full bg-emerald/20 px-2 py-0.5 text-[0.6rem] uppercase tracking-[0.15em] text-emerald-light">
                        Cíl
                      </span>
                    )}
                  </div>
                  <h3
                    className={cn(
                      "font-semibold text-bone leading-snug",
                      isLast && "text-lg"
                    )}
                  >
                    {step.title}
                  </h3>
                  <p
                    className={cn(
                      "mt-2 leading-relaxed",
                      isLast ? "text-[0.95rem] text-bone/80" : "text-sm text-bone/65"
                    )}
                  >
                    {renderInline(step.description)}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

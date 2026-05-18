"use client";

import { motion } from "framer-motion";
import {
  Compass,
  Lightbulb,
  Repeat2,
  Settings2,
  ShieldCheck,
  Target,
  TrendingUp,
  UserCheck,
  type LucideIcon,
} from "lucide-react";
import { pillars, pillarsHeading } from "@/lib/content";
import { renderInline } from "@/lib/markdown";

const iconMap: Record<string, LucideIcon> = {
  Target,
  TrendingUp,
  Settings2,
  Compass,
  Lightbulb,
  Repeat2,
  ShieldCheck,
  UserCheck,
};

export function Pillars() {
  return (
    <section className="py-20 sm:py-28 bg-graphite">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="max-w-2xl mb-12 sm:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="font-display font-semibold text-display-lg text-bone"
          >
            {pillarsHeading.title}
          </motion.h2>
          {pillarsHeading.subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-4 text-[1.0625rem] text-bone/65 leading-relaxed"
            >
              {renderInline(pillarsHeading.subtitle)}
            </motion.p>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
          {pillars.map((p, i) => {
            const Icon = iconMap[p.icon] ?? Target;
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="relative p-7 sm:p-8 rounded-2xl bg-ink/50 border border-bone/5 hover:border-emerald/20 transition-colors"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-emerald/15 text-emerald-light mb-5">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-2xl font-semibold text-bone leading-tight">
                  {p.title}
                </h3>
                <p className="mt-3 text-[1rem] leading-relaxed text-bone/65">
                  {renderInline(p.description)}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { proof } from "@/lib/content";
import { CountUp } from "@/components/CountUp";

function ProofItem({ item, index }: { item: { number: string; label: string }; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="px-2 sm:px-8 py-6 sm:py-2 text-center"
    >
      <div className="font-display font-semibold text-4xl sm:text-5xl text-emerald-light leading-none tabular-nums">
        <CountUp value={item.number} />
      </div>
      <div className="mt-3 text-sm text-mute">{item.label}</div>
    </motion.div>
  );
}

export function ProofBar() {
  return (
    <section className="bg-graphite border-y border-bone/5">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-10 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-bone/10">
          {proof.map((item, i) => (
            <ProofItem key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

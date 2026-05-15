"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { proof } from "@/lib/content";

// Animuje numerickou část stringu (např. "100+", "99 %") od 0.
// Pokud number nezačíná číslicí, jen ho fade-rozsvítí.
function useCountUp(raw: string, duration: number = 1400) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const match = raw.match(/^(\d+)(.*)$/);
  const target = match ? parseInt(match[1], 10) : null;
  const suffix = match ? match[2] : "";

  const [value, setValue] = useState(target === null ? null : 0);

  useEffect(() => {
    if (!inView || target === null) return;
    let frameId: number;
    let startTime: number | null = null;
    const tick = (t: number) => {
      if (startTime === null) startTime = t;
      const elapsed = t - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setValue(Math.round(eased * target));
      if (progress < 1) frameId = requestAnimationFrame(tick);
    };
    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [inView, target, duration]);

  return { ref, inView, value, suffix, isNumeric: target !== null, raw };
}

function ProofItem({ item, index }: { item: { number: string; label: string }; index: number }) {
  const { ref, inView, value, suffix, isNumeric, raw } = useCountUp(item.number);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="px-2 sm:px-8 py-6 sm:py-2 text-center sm:text-left first:sm:pl-0 last:sm:pr-0"
    >
      <div className="font-display font-semibold text-4xl sm:text-5xl text-emerald-light leading-none tabular-nums">
        {isNumeric ? (
          <>
            {value}
            <span>{suffix}</span>
          </>
        ) : (
          raw
        )}
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

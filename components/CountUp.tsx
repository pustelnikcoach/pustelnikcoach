"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

// Jednotná délka pro všechna čísla → malé (6) běží pomalu po krocích,
// velká (100) rychle naběhnou, ale VŠECHNA skončí animaci ve stejný čas.
const DURATION = 1600;

// Animuje numerickou část stringu (např. "6+", "100+", "100 %") od 0,
// jakmile se dostane do viewportu. Nenumerické hodnoty vykreslí beze změny.
export function CountUp({ value, className }: { value: string; className?: string }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const match = value.match(/^(\d+)(.*)$/);
  const target = match ? parseInt(match[1], 10) : null;
  const suffix = match ? match[2] : "";

  const [num, setNum] = useState(target === null ? null : 0);

  useEffect(() => {
    if (!inView || target === null) return;
    let frameId: number;
    let start: number | null = null;
    const tick = (t: number) => {
      if (start === null) start = t;
      const progress = Math.min((t - start) / DURATION, 1); // lineární kroky
      setNum(Math.round(progress * target));
      if (progress < 1) frameId = requestAnimationFrame(tick);
    };
    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [inView, target]);

  return (
    <span ref={ref} className={className}>
      {target === null ? value : `${num}${suffix}`}
    </span>
  );
}

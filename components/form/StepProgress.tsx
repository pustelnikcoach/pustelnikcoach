// 🔒 CHRÁNĚNÁ ZÓNA — komponenta formuláře.
"use client";

import { cn } from "@/lib/utils";

interface Props {
  current: number;
  total: number;
}

export function StepProgress({ current, total }: Props) {
  const pct = Math.min(100, Math.max(0, ((current + 1) / total) * 100));
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between text-xs text-mute mb-2.5">
        <span className="uppercase tracking-[0.15em]">
          Krok {current + 1} z {total}
        </span>
        <span>{Math.round(pct)} %</span>
      </div>
      <div className="h-1.5 w-full rounded-full bg-bone/5 overflow-hidden">
        <div
          className={cn(
            "h-full bg-emerald-light transition-[width] duration-500 ease-out"
          )}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}

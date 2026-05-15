// 🔒 CHRÁNĚNÁ ZÓNA — komponenta formuláře.
"use client";

import type { LucideIcon } from "lucide-react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
  selected: boolean;
  onClick: () => void;
  title: string;
  subtitle?: string;
  icon?: LucideIcon;
}

export function OptionCard({ selected, onClick, title, subtitle, icon: Icon }: Props) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className={cn(
        "group relative text-left p-5 rounded-xl border transition-all duration-200",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-light focus-visible:ring-offset-2 focus-visible:ring-offset-graphite",
        selected
          ? "bg-emerald/15 border-emerald text-bone"
          : "bg-ink/40 border-bone/10 hover:border-bone/25 hover:bg-ink/60 text-bone/85"
      )}
    >
      <div className="flex items-start gap-3">
        {Icon && (
          <span
            className={cn(
              "inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg transition-colors",
              selected ? "bg-emerald text-bone" : "bg-bone/5 text-bone/70 group-hover:text-bone"
            )}
          >
            <Icon className="h-5 w-5" />
          </span>
        )}
        <div className="flex-1 min-w-0">
          <div className="font-medium text-[0.98rem] leading-snug">{title}</div>
          {subtitle && (
            <div className={cn("mt-1 text-sm", selected ? "text-bone/80" : "text-mute")}>
              {subtitle}
            </div>
          )}
        </div>
        <span
          className={cn(
            "shrink-0 inline-flex h-6 w-6 items-center justify-center rounded-full transition-all",
            selected
              ? "bg-emerald text-bone"
              : "border border-bone/15 text-transparent"
          )}
          aria-hidden
        >
          <Check className="h-3.5 w-3.5" />
        </span>
      </div>
    </button>
  );
}

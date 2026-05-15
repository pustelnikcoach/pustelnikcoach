import { forwardRef, type TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export const Textarea = forwardRef<
  HTMLTextAreaElement,
  TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, rows = 4, ...rest }, ref) => {
  return (
    <textarea
      ref={ref}
      rows={rows}
      className={cn(
        "w-full px-4 py-3 rounded-xl resize-none",
        "bg-ink/60 border border-bone/10 text-bone placeholder:text-mute/70",
        "transition-colors duration-200",
        "focus:outline-none focus:border-emerald-light focus:ring-2 focus:ring-emerald/30",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        "aria-[invalid=true]:border-red-400/60 aria-[invalid=true]:ring-red-400/20",
        className
      )}
      {...rest}
    />
  );
});

Textarea.displayName = "Textarea";

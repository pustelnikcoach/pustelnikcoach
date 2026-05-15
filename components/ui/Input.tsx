import { forwardRef, type InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export const Input = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>(({ className, type = "text", ...rest }, ref) => {
  return (
    <input
      ref={ref}
      type={type}
      className={cn(
        "w-full h-12 px-4 rounded-xl",
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

Input.displayName = "Input";

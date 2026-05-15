import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "ghost" | "outline";
type Size = "default" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
}

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-emerald text-bone hover:bg-emerald-light active:bg-emerald-dark shadow-sm",
  ghost:
    "bg-transparent text-bone border border-bone/15 hover:border-bone/30 hover:bg-bone/[0.03]",
  outline:
    "bg-transparent text-bone border border-emerald hover:bg-emerald/10",
};

const sizeClasses: Record<Size, string> = {
  default: "h-11 px-5 text-[0.95rem]",
  lg: "h-14 px-7 text-base",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "default", type = "button", ...rest }, ref) => {
    return (
      <button
        ref={ref}
        type={type}
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-xl font-medium",
          "transition-all duration-200 ease-out",
          "focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-light focus-visible:ring-offset-2 focus-visible:ring-offset-ink",
          "disabled:opacity-50 disabled:cursor-not-allowed",
          "active:scale-[0.98]",
          variantClasses[variant],
          sizeClasses[size],
          className
        )}
        {...rest}
      />
    );
  }
);

Button.displayName = "Button";

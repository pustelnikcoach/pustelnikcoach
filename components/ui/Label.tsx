import { forwardRef, type LabelHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export const Label = forwardRef<
  HTMLLabelElement,
  LabelHTMLAttributes<HTMLLabelElement>
>(({ className, ...rest }, ref) => {
  return (
    <label
      ref={ref}
      className={cn(
        "block text-sm font-medium text-bone/90 mb-2",
        className
      )}
      {...rest}
    />
  );
});

Label.displayName = "Label";

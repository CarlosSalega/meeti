import { LabelHTMLAttributes } from "react";
import { cn } from "@/shared/lib/utils";

type FormLabelProps = LabelHTMLAttributes<HTMLLabelElement>;

export function FormLabel({ children, className, ...props }: FormLabelProps) {
  return (
    <label className={cn("block", className)} {...props}>
      {children}
    </label>
  );
}

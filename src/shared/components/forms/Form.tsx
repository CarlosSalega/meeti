import { FormHTMLAttributes } from "react";
import { cn } from "@/shared/lib/utils";

type FormProps = FormHTMLAttributes<HTMLFormElement>;

export function Form({ children, className, ...props }: FormProps) {
  return (
    <form className={cn("mt-10 space-y-3", className)} {...props}>
      {children}
    </form>
  );
}

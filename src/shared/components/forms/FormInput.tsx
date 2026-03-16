import { InputHTMLAttributes } from "react";
import { cn } from "@/shared/lib/utils";

type Props = InputHTMLAttributes<HTMLInputElement>;

export function FormInput({ className, ...props }: Props) {
  return <input className={cn("w-full border border-slate-300 p-2", className)} {...props} />;
}

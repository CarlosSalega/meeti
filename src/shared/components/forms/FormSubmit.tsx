import { InputHTMLAttributes } from "react";
import { cn } from "@/shared/lib/utils";

type Props = InputHTMLAttributes<HTMLInputElement>;

export function FormSubmit({ className, ...props }: Props) {
  return (
    <input
      type="submit"
      className={cn("mt-5 w-full cursor-pointer bg-pink-600 p-2 font-black text-white uppercase", className)}
      {...props}
    />
  );
}

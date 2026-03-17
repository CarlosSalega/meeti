import type { Route } from "next";
import Link from "next/link";
import { cn } from "@/shared/lib/utils";

type NavLink = {
  href: Route;
  label: string;
};

type Props = {
  links: NavLink[];
  className?: string;
};

export function FormNavigation({ links, className }: Props) {
  return (
    <nav className={cn("mt-5 flex justify-between gap-4", className)}>
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="text-sm font-bold text-gray-600 uppercase hover:text-pink-600"
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}

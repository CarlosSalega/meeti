import Link from "next/link";
import Logo from "@/shared/components/ui/Logo";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="flex justify-center pt-10">
        <Link href="/" className="w-48">
          <Logo />
        </Link>
      </div>
      <main className="mx-auto max-w-2xl px-5 py-16">{children}</main>
    </>
  );
}

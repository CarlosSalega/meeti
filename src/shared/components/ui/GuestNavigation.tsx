import Link from "next/link";

export default function GuestNavigation() {
  return (
    <nav className="mt-5 flex items-center justify-center gap-4 md:mt-0">
      <Link className="text-sm font-bold" href="/auth/login">
        Login
      </Link>
      <Link className="bg-pink-600 p-2 text-sm font-bold text-white" href="/auth/register">
        Register
      </Link>
    </nav>
  );
}

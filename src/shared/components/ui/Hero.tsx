import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-hero flex h-150 items-center justify-center bg-cover bg-center">
      <div className="flex max-w-2xl flex-col items-center justify-center">
        <h1 className="text-center text-3xl font-black text-white uppercase lg:text-4xl">
          Find a Meeti or Create a Community to share what you love
        </h1>
        <Link
          className="mt-5 bg-orange-500 px-10 py-3 text-xl font-bold text-white transition-colors hover:bg-orange-600"
          href="/auth/register"
        >
          Get an account
        </Link>
      </div>
    </section>
  );
}

import { Metadata } from "next";
import Hero from "@/shared/components/ui/Hero";
import { generatePageTitle } from "@/shared/lib/metadata";

export const metadata: Metadata = {
  title: generatePageTitle("Home"),
};

export default function PublicPage() {
  return (
    <>
      <Hero />
    </>
  );
}

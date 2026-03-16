import { Metadata } from "next";
import Heading from "@/shared/components/typography/Heading";
import { generatePageTitle } from "@/shared/lib/metadata";

export const metadata: Metadata = {
  title: generatePageTitle("Login"),
};

export default function LoginPage() {
  return (
    <>
      <Heading level={2}>Login</Heading>
    </>
  );
}

import { Metadata } from "next";
import { generatePageTitle } from "@/shared/lib/metadata";

export const metadata: Metadata = {
  title: generatePageTitle("Register"),
};

export default function RegisterPage() {
  return (
    <>
      <h1>Register</h1>
    </>
  );
}

import { Metadata } from "next";
import { RegisterForm } from "@/features/auth/components";
import { FormNavigation } from "@/shared/components/forms";
import Heading from "@/shared/components/typography/Heading";
import { generatePageTitle } from "@/shared/lib/metadata";

export const metadata: Metadata = {
  title: generatePageTitle("Register"),
};

export default function RegisterPage() {
  return (
    <>
      <Heading level={3} className="text-center">
        Register
      </Heading>
      <RegisterForm />
      <FormNavigation
        links={[
          { href: "/auth/login", label: "Login" },
          { href: "/auth/forgot-password", label: "Forgot Password" },
        ]}
      />
    </>
  );
}

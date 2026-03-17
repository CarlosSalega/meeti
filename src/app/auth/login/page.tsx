import { Metadata } from "next";
import { LoginForm } from "@/features/auth/components";
import { FormNavigation } from "@/shared/components/forms";
import Heading from "@/shared/components/typography/Heading";
import { generatePageTitle } from "@/shared/lib/metadata";

export const metadata: Metadata = {
  title: generatePageTitle("Login"),
};

export default function LoginPage() {
  return (
    <>
      <Heading level={3} className="text-center">
        Login
      </Heading>
      <LoginForm />
      <FormNavigation
        links={[
          { href: "/auth/register", label: "Register" },
          { href: "/auth/forgot-password", label: "Forgot Password" },
        ]}
      />
    </>
  );
}

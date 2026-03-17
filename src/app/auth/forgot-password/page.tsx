import { ForgotPasswordForm } from "@/features/auth/components";
import { FormNavigation } from "@/shared/components/forms";
import Heading from "@/shared/components/typography/Heading";

export default function ForgotPasswordPage() {
  return (
    <>
      <Heading level={3} className="text-center">
        Forgot your Password
      </Heading>
      <ForgotPasswordForm />
      <FormNavigation
        links={[
          { href: "/auth/login", label: "Login" },
          { href: "/auth/register", label: "Register" },
        ]}
      />
    </>
  );
}

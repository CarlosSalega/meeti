"use client";

import { Form, FormInput, FormLabel, FormSubmit } from "@/shared/components/forms";

export function ForgotPasswordForm() {
  return (
    <>
      <Form>
        <FormLabel htmlFor="email">Email</FormLabel>
        <FormInput type="email" id="email" placeholder="enter your email" />
        <FormSubmit value="Send" />
      </Form>
    </>
  );
}

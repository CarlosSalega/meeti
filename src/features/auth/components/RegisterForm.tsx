"use client";

import { Form, FormInput, FormLabel, FormSubmit } from "@/shared/components/forms";

export function RegisterForm() {
  return (
    <Form>
      <FormLabel htmlFor="email">Email</FormLabel>
      <FormInput type="email" id="email" placeholder="enter your email" />
      <FormLabel htmlFor="password">Password</FormLabel>
      <FormInput type="password" id="password" placeholder="enter your password - min.8" />
      <FormInput type="password" id="repeat-password" placeholder="confirm your password" />
      <FormSubmit value="register" />
    </Form>
  );
}

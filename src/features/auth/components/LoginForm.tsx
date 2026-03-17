"use client";

import { Form, FormInput, FormLabel, FormSubmit } from "@/shared/components/forms";

export function LoginForm() {
  return (
    <Form>
      <FormLabel htmlFor="email">Email</FormLabel>
      <FormInput type="email" id="email" placeholder="Enter your Email" />
      <FormLabel htmlFor="password">Password</FormLabel>
      <FormInput type="password" id="password" placeholder="Enter your Password" />
      <FormSubmit value="Login" />
    </Form>
  );
}

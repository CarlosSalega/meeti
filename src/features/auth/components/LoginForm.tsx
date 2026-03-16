"use client";

import { Form, FormInput, FormLabel } from "@/shared/components/forms";

export default function LoginForm() {
  return (
    <Form>
      <FormLabel htmlFor="email">Email</FormLabel>
      <FormInput type="email" id="email" placeholder="Enter your Email" />
      <FormLabel htmlFor="password">Password</FormLabel>
      <FormInput type="password" id="password" placeholder="Enter your Password" />
    </Form>
  );
}

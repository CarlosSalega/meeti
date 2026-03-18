"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signInAction } from "@/features/auth/actions/auth-actions";
import { SignInInput, SignInSchema } from "@/features/auth/schemas/authSchema";
import { Form, FormError, FormInput, FormLabel, FormSubmit } from "@/shared/components/forms";

export function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(SignInSchema),
    mode: "onChange",
  });

  const onSubmit = async (data: SignInInput) => {
    await signInAction(data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormLabel htmlFor="email">Email</FormLabel>
      <FormInput type="email" id="email" placeholder="Enter your Email" {...register("email")} />
      <FormError>{errors.email?.message}</FormError>
      <FormLabel htmlFor="password">Password</FormLabel>
      <FormInput type="password" id="password" placeholder="Enter your Password" {...register("password")} />
      <FormError>{errors.password?.message}</FormError>
      <FormSubmit value="Login" />
    </Form>
  );
}

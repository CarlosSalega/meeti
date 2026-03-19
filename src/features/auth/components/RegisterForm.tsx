"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpAction } from "@/features/auth/actions/auth-actions";
import { SignUpInput, SignUpSchema } from "@/features/auth/schemas/authSchema";
import { Form, FormError, FormInput, FormLabel, FormSubmit } from "@/shared/components/forms";

export function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(SignUpSchema),
    mode: "onChange",
  });

  const onSubmit = async (data: SignUpInput) => {
    await signUpAction(data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormLabel htmlFor="name">Name</FormLabel>
      <FormInput type="text" id="name" placeholder="enter your ename" {...register("name")} />
      <FormError>{errors.name?.message}</FormError>
      <FormLabel htmlFor="email">Email</FormLabel>
      <FormInput type="email" id="email" placeholder="enter your email" {...register("email")} />
      <FormError>{errors.email?.message}</FormError>
      <FormLabel htmlFor="password">Password</FormLabel>
      <FormInput type="password" id="password" placeholder="enter your password - min.8" {...register("password")} />
      <FormError>{errors.password?.message}</FormError>
      <FormInput
        type="password"
        id="password-confirmation"
        placeholder="confirm your password"
        {...register("passwordConfirmation")}
      />
      <FormError>{errors.passwordConfirmation?.message}</FormError>
      <FormSubmit value="register" />
    </Form>
  );
}

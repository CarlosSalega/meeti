"use server";

import { SignInInput, SignInSchema, SignUpInput, SignUpSchema } from "@/features/auth/schemas/authSchema";
import { authService } from "@/features/auth/services/AuthService";

export async function signUpAction(input: SignUpInput) {
  const data = SignUpSchema.safeParse(input);

  await authService.register(data.data!);
}

export async function signInAction(input: SignInInput) {
  const data = SignInSchema.safeParse(input);

  await authService.login(data.data!);
}

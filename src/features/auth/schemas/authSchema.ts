import { z } from "zod";

export const BaseAuthSchema = z.object({
  name: z.string(),
  email: z.email({ error: "Invalid email address" }),
  password: z.string().min(8, { error: "Password must be at least 8 characters long" }),
  passwordConfirmation: z.string().min(1, { error: "Please confirm your password" }),
});

export const SignUpSchema = BaseAuthSchema.pick({
  name: true,
  email: true,
  password: true,
  passwordConfirmation: true,
}).refine((data) => data.password === data.passwordConfirmation, {
  message: "Passwords do not match",
  path: ["passwordConfirmation"],
});

export const SignInSchema = BaseAuthSchema.pick({
  email: true,
});

export type SignUpInput = z.infer<typeof SignUpSchema>;
export type SignInInput = z.infer<typeof SignInSchema>;

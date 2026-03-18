import { z } from "zod";

export const BaseAuthSchema = z.object({
  email: z.email({ error: "Invalid email address" }),
  password: z.string().min(8, { error: "Password must be at least 8 characters long" }),
  passwordConfirmation: z.string().min(1, { error: "Please confirm your password" }),
});

export const SignUpSchema = BaseAuthSchema.pick({
  email: true,
  password: true,
  passwordConfirmation: true,
}).refine((data) => data.password === data.passwordConfirmation, {
  message: "Passwords do not match",
  path: ["passwordConfirmation"],
});

export type SignUpInput = z.infer<typeof SignUpSchema>;

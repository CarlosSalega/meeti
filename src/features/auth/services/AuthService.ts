import { SignInInput, SignUpInput } from "@/features/auth/schemas/authSchema";

class AuthService {
  async register(credentials: SignUpInput) {
    const { email, password } = credentials;

    console.log("User registered:", { email, password });
  }

  async login(credentials: SignInInput) {
    const { email } = credentials;
    console.log("User login", { email });
  }
}

export const authService = new AuthService();

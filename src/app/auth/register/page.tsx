import { generatePageTitle } from "@/shared/lib/metadata";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: generatePageTitle("Register"),
};

export default function RegisterPage() {
	return (
		<>
			<h1>Register</h1>
		</>
	);
}

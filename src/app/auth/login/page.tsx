import Heading from "@/shared/components/typography/Heading";
import { generatePageTitle } from "@/shared/lib/metadata";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: generatePageTitle("Login"),
};

export default function LoginPage() {
	return (
		<>
			<Heading level={2}>Login</Heading>
		</>
	);
}

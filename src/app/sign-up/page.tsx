"use client";

import SignUpForm from "@/src/components/signUp/signUpForm.component";
import { Box, Container, Typography } from "@mui/material";
import { useSearchParams } from "next/navigation";

type SignupProps = {
	email: string;
};

const SignupPage: React.FC<SignupProps> = () => {
	const searchParams = useSearchParams();
	const email = searchParams?.get("email") || "";

	return (
		<Box>
			<Container maxWidth="lg" sx={{ pt: "50px", pb: "100px" }}>
				<Typography variant="h1" sx={{ textAlign: "center" }}>
					Sign In
				</Typography>
				<SignUpForm email={email} />
			</Container>
		</Box>
	);
};

export default SignupPage;

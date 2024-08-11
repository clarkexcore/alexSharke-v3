"use client";

import { useState } from "react";
import { signIn } from "@/hooks/useAuth";
import { Box, Button, TextField } from "@mui/material";
import { SignInCard } from "./signInForm.styled";

const SignInForm: React.FC = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSignIn = async () => {
		const user = await signIn(email, password);
		if (user) {
			console.log("User signed in successfully");
		}
	};

	return (
		<Box sx={{ mt: 5, display: "flex", justifyContent: "center" }}>
			<SignInCard>
				<TextField
					sx={{ width: "100%", mb: 3 }}
					id="email"
					label="Email"
					variant="outlined"
					onChange={e => setEmail(e.target.value)}
				/>
				<TextField
					sx={{ width: "100%", mb: 3 }}
					id="password"
					label="Password"
					variant="outlined"
					type="password"
					onChange={e => setPassword(e.target.value)}
				/>
				<Button
					variant="contained"
					onClick={handleSignIn}
					sx={{ width: "100%" }}
				>
					Sign In
				</Button>
			</SignInCard>
		</Box>
	);
};

export default SignInForm;

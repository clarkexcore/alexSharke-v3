"use client";

import { useState } from "react";
import { signIn } from "@/hooks/useAuth";
import { Box, Button, TextField } from "@mui/material";
import { SignInCard } from "./signInForm.styled";
import { AlertComponent } from "../common/common.components";

interface LoginFormData {
	email: string;
	password: string;
}

const SignInForm: React.FC = () => {
	const [error, setError] = useState<string>("");
	const [data, setData] = useState<LoginFormData>({
		email: "",
		password: "",
	});

	const handleSignIn = async () => {
		try {
			const user = await signIn(data.email, data.password);
			if (user) {
				console.log("User signed in successfully");
			}
		} catch (err: any) {
			setError(err?.message ?? "Login Error");
		}
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setData((prev: LoginFormData) => ({
			...prev,
			[name]: value,
		}));
	};

	return (
		<Box sx={{ mt: 5, display: "flex", justifyContent: "center" }}>
			<SignInCard>
				{error !== "" && (
					<AlertComponent
						level="error"
						message={error}
						clearTime={10000}
						resetState={setError}
					/>
				)}
				<TextField
					sx={{ width: "100%", mb: 3 }}
					id="email"
					label="Email"
					variant="outlined"
					onChange={handleChange}
				/>
				<TextField
					sx={{ width: "100%", mb: 3 }}
					id="password"
					label="Password"
					variant="outlined"
					type="password"
					onChange={handleChange}
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

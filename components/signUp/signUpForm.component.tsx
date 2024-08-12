"use client";

import { useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import { supabase } from "@/lib/supabaseClient";
import { SignInCard } from "../signIn/signInForm.styled";
import { AlertComponent } from "../common/common.components";

interface SignUpFormProps {
	email: string;
}

const SignUpForm: React.FC<SignUpFormProps> = ({ email }: SignUpFormProps) => {
	const [password, setPassword] = useState<string>("");

	const signUpUser = async () => {
		const { data, error } = await supabase.auth.signUp({ email, password });

		if (error) {
			console.error("Error signing up:", error.message);
		} else {
			console.log("User signed up successfully!", data);
			markUserAsInvited(email);
		}
	};

	const markUserAsInvited = async (email: string) => {
		const { error } = await supabase
			.from("approved_users")
			.update({ accepted: true })
			.eq("email", email);

		if (error) {
			console.error("Error updating invitation status:", error.message);
		}
	};

	return (
		<Box sx={{ mt: 5, display: "flex", justifyContent: "center" }}>
			<SignInCard>
				{(email === "" || !email) && (
					<AlertComponent
						level="error"
						message="You need to be invited in order to access this page and
						sign-up."
					/>
				)}

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
					onClick={signUpUser}
					sx={{ width: "100%" }}
				>
					Sign In
				</Button>
			</SignInCard>
		</Box>
	);
};

export default SignUpForm;

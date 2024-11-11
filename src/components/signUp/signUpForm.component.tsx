"use client";

import { useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import { supabase } from "@/lib/supabaseClient";
import { SignInCard } from "../signIn/signInForm.styled";
import { AlertComponent } from "../common/common.components";
import { Session, User } from "@supabase/supabase-js";
import { SupabaseAuthResp } from "@/types/common";

interface SignUpFormProps {
	email: string;
}

const SignUpForm: React.FC<SignUpFormProps> = ({ email }: SignUpFormProps) => {
	const [password, setPassword] = useState<string>("");
	const [error, setError] = useState<string>("");

	const signUpUser = async () => {
		const { data, error } = await supabase.auth.signUp({ email, password });

		if (error) {
			console.error("Error signing up:", error.message);
			setError("Error signing up.");
		} else {
			console.log("User signed up successfully!", data);
			markUserAsAccepted(email, data);
		}
	};

	const markUserAsAccepted = async (
		email: string,
		data: SupabaseAuthResp
	) => {
		const { error } = await supabase
			.from("approved_users")
			.update({ accepted: true, user_id: data.user?.id })
			.eq("email", email);

		if (error) {
			setError("Error updating invitation status.");
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

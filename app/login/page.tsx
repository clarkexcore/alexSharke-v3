import { Box, Container, Typography, Link as MuiLink } from "@mui/material";
import SignInForm from "@/components/signIn/signInForm.component";
import Link from "next/link";

const SigninPage: React.FC = () => {
	return (
		<Box>
			<Container maxWidth="lg" sx={{ pt: "50px", pb: "100px" }}>
				<Typography variant="h1" sx={{ textAlign: "center" }}>
					Login
				</Typography>
				<SignInForm />
				<Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
					<MuiLink
						href="/"
						underline={"hover"}
						sx={{ textDecoration: "none" }}
					>
						Back to Home Page
					</MuiLink>
				</Box>
			</Container>
		</Box>
	);
};

export default SigninPage;

import { Box, Container, Typography } from "@mui/material";
import SignInForm from "@/components/signIn/signInForm.component";

const SigninPage: React.FC = () => {
	return (
		<Box>
			<Container maxWidth="lg" sx={{ pt: "50px", pb: "100px" }}>
				<Typography variant="h1" sx={{ textAlign: "center" }}>
					Sign In
				</Typography>
				<SignInForm />
			</Container>
		</Box>
	);
};

export default SigninPage;

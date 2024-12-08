import { Box, Container, Typography } from "@mui/material";
import { StyledFooter } from "./footer.styled";

export default function Footer() {
	return (
		<StyledFooter>
			<Container>
				<Box
					sx={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<Typography>
						alexSHARKE {new Date().getFullYear()} &copy;
					</Typography>
				</Box>
			</Container>
		</StyledFooter>
	);
}

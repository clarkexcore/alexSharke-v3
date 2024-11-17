import { Box, Container, Typography } from "@mui/material";

export default function Footer() {
	return (
		<footer>
			<Container>
				<Box sx={{ display: "flex", justifyContent: "space-between" }}>
					<Typography>
						&copy; - alexSHARKE {new Date().getFullYear()}
					</Typography>
				</Box>
			</Container>
		</footer>
	);
}

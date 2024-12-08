import { Box, Container } from "@mui/material";

export default function TopNav() {
	return (
		<Box sx={{ background: "#000", color: "#fff", py: 1 }}>
			<Container maxWidth="xl">
				<Box
					sx={{
						display: "flex",
						justifyContent: "space-between",
					}}
				>
					<Box>Logo</Box>
					<Box>Links</Box>
				</Box>
			</Container>
		</Box>
	);
}

import { Box, Typography } from "@mui/material";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Admin - alexSHARKE",
};

export default function AdminPage() {
	return (
		<Box>
			<Typography variant="h1" sx={{ fontSize: 48 }}>
				Dashboard
			</Typography>
		</Box>
	);
}

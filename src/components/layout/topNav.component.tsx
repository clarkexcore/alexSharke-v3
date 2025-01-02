"use client";

import { Box, Container } from "@mui/material";
import { TopNavStyled } from "./topNav.styled";

export default function TopNav() {
	return (
		<TopNavStyled>
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
		</TopNavStyled>
	);
}

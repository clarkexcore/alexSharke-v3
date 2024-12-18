import { Box, BoxProps } from "@mui/material";

import { styled } from "@mui/material";

interface SideBarProps extends BoxProps {
	active: boolean;
}

export const SideBarStyled = styled(Box)<SideBarProps>(({ active, theme }) => ({
	height: "calc(100vh - 2rem)",
	position: "fixed",
	top: 0,
	margin: "1rem",
	left: 0,
	overflowY: "auto",
	borderRadius: "0.75rem",
	// backgroundColor: theme.palette.primary[900],
	display: "flex",
	flexDirection: "column",
	justifyContent: "space-between",
	width: "calc(25% - (2rem + 32px))",
	padding: "16px",
	transition: "all 0.3s",
	"@media (max-width: 1200px)": {
		width: "calc(350px - (2rem + 32px))",
		left: active ? "0" : "calc(-450px + (2rem + 32px))",
	},
}));

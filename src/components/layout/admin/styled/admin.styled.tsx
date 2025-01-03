import { Box, BoxProps, Button } from "@mui/material";

import { styled } from "@mui/material";

interface SideBarProps extends BoxProps {
	active: string;
}

export const SideBarStyled = styled(Box)<SideBarProps>(({ active, theme }) => ({
	height: "calc(100vh - 2rem)",
	position: "fixed",
	top: 0,
	margin: "1rem",
	left: 0,
	overflowY: "auto",
	borderRadius: "0.75rem",
	display: "flex",
	flexDirection: "column",
	justifyContent: "space-between",
	width: "calc(25% - (2rem + 32px))",
	padding: "16px",
	transition: "all 0.3s",
	backgroundColor: theme.palette.primary.main,
	color: theme.palette.secondary.main,
	zIndex: 10000,
	"@media (max-width: 1200px)": {
		width: "calc(350px - (2rem + 32px))",
		left: active === "true" ? "0" : "calc(-450px + (2rem + 32px))",
		boxShadow:
			active === "true" ? "5px 5px 11px 0px rgba(0,0,0,0.75)" : "none",
	},
}));

export const StyledWhiteButton = styled(Button)(({ theme }) => ({
	backgroundColor: theme.palette.secondary.main,
	color: theme.palette.primary.main,
	fontWeight: 700,
	"&:hover": {
		backgroundColor: theme.palette.secondary.dark,
	},
}));

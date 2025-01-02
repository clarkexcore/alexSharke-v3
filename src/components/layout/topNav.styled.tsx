import { Box, styled } from "@mui/material";

export const TopNavStyled = styled(Box)(({ theme }) => ({
	backgroundColor: theme.palette.primary.main,
	color: theme.palette.secondary.main,
	padding: "1rem 0",
}));

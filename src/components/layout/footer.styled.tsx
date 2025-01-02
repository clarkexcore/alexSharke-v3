"use client";

import { styled } from "@mui/material";

export const StyledFooter = styled("footer")(({ theme }) => ({
	backgroundColor: theme.palette.primary.main,
	color: theme.palette.secondary.main,
	padding: "25px 0",
}));

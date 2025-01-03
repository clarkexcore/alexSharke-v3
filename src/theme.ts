"use client";

import { createTheme } from "@mui/material/styles";
import { Fira_Sans, Montserrat } from "next/font/google";

export const firaSans = Fira_Sans({
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	style: ["normal", "italic"],
	display: "swap",
});

export const montserrat = Montserrat({
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	style: ["normal", "italic"],
	display: "swap",
});

declare module "@mui/material/styles" {
	interface Palette {
		accent: Palette["primary"];
	}
	interface PaletteOptions {
		accent?: PaletteOptions["primary"];
	}
}

const theme = createTheme({
	typography: {
		fontFamily: montserrat.style.fontFamily,
		h1: {
			fontWeight: 900,
		},
		body1: {
			fontFamily: firaSans.style.fontFamily,
			fontWeight: 300,
			fontSize: 14,
		},
		body2: {
			fontFamily: firaSans.style.fontFamily,
			fontWeight: 200,
			fontSize: 12,
		},
	},
	palette: {
		primary: {
			main: "#222",
			light: "rgba(0,0,0,0.66)",
			dark: "#000",
		},
		secondary: {
			main: "#fff",
			dark: "#F2F2F2",
		},
		accent: {
			main: "red",
		},
	},
});

export default theme;

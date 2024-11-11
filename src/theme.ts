"use client";

// import Montserrant from "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
	typography: {
        fontFamily: "Montserrat, sans-serif",
        h1: {
            fontWeight: 900
        },
        body1: {
            fontFamily: "Fira Sans, sans-serif",
            fontWeight: 300,
            fontSize: 14,
        },
        body2: {
            fontFamily: "Fira Sans, sans-serif",
            fontWeight: 200,
            fontSize: 12
        }
    },
    palette: {
        primary: {
            main: "#000"
        },
        secondary: {
            main: "#fff",
        }
    }
});

export default theme;

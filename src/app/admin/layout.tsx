"use client";

import { Box } from "@mui/material";
import { useRef, useState } from "react";

export default function AdminLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const [mobileMenuOpen, setMobileMenueOpen] = useState<boolean>(false);
	const containerRef = useRef<HTMLElement>(null);

	return (
		<>
			<Box sx={{ backgroundColor: "#f2f2f2", minHeight: "100vh" }}>
				{children}
			</Box>
		</>
	);
}

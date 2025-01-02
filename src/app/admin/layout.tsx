"use client";

import AdminSidebarNav from "@/components/layout/admin/sidebarNav.component";
import { Box, Grid, Typography } from "@mui/material";
import { useRef, useState } from "react";

export default function AdminLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const [mobileMenuOpen, setMobileMenueOpen] = useState<boolean>(false);
	const containerRef = useRef<HTMLElement>(null);

	return (
		<Box
			sx={{
				backgroundColor: "#f2f2f2",
				minHeight: "100vh",
				overflow: "hidden",
			}}
		>
			{/* Desktop Layout */}
			<Box sx={{ display: { lg: "block", xs: "none" } }}>
				<Grid container spacing={2}>
					<Grid item xs={3}>
						<AdminSidebarNav active="true" />
					</Grid>
					<Grid
						item
						xs={9}
						sx={{ paddingRight: "35px", paddingBottom: "50px" }}
					>
						<Box sx={{ padding: "1rem 0" }}>{children}</Box>
					</Grid>
				</Grid>
			</Box>
		</Box>
	);
}

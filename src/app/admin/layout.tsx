"use client";

import AdminSidebarNav from "@/components/layout/admin/sidebarNav.component";
import { Box, Container, Grid } from "@mui/material";
import { useRef, useState } from "react";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import MenuIcon from "@mui/icons-material/Menu";

export default function AdminLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
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

			{/* Mobile Layout */}
			<Box
				sx={{ disaply: { lg: "none", xs: "block" } }}
				ref={containerRef}
			>
				<Container sx={{ padding: 2 }}>
					<Box
						sx={{
							padding: "1rem 0",
							display: "flex",
							justifyContent: "flex-end",
						}}
					>
						<Box
							sx={{
								zIndex: 1000,
							}}
						>
							{mobileMenuOpen ? (
								<MenuIcon
									onClick={() => setMobileMenuOpen(false)}
								/>
							) : (
								<MenuOpenIcon
									onClick={() => setMobileMenuOpen(true)}
								/>
							)}
						</Box>
					</Box>
					{children}
				</Container>

				<AdminSidebarNav
					active={mobileMenuOpen.toString()}
					setMobileMenuOpen={setMobileMenuOpen}
				/>
			</Box>
		</Box>
	);
}

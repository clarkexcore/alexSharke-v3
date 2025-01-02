"use client";

import { Box, Stack } from "@mui/material";
import { SideBarStyled } from "./styled/admin.styled";

export default function AdminSidebarNav({ active }: { active: string }) {
	return (
		<>
			<SideBarStyled active={active}>
				<Box></Box>
				<Stack>Link</Stack>
			</SideBarStyled>
		</>
	);
}

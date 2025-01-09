import { Box, Divider, Stack } from "@mui/material";
import { SideBarStyled, StyledWhiteButton } from "./styled/admin.styled";
import { signOut } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";

export default function AdminSidebarNav({
	active,
	setMobileMenuOpen,
}: {
	active: string;
	setMobileMenuOpen?: (open: boolean) => void;
}) {
	const router = useRouter();

	const adminSignOut = async () => {
		try {
			await signOut();
			router.refresh();
		} catch (err) {
			console.error(err);
			alert("Error signing out of application.");
		}
	};

	return (
		<>
			<SideBarStyled active={active}>
				<Box>
					<Box sx={{ py: 2 }}>LOGO</Box>
					<Divider sx={{ backgroundColor: "#fff" }} />
					<Stack sx={{ py: 2 }}>Link</Stack>
				</Box>
				<StyledWhiteButton onClick={adminSignOut}>
					Logout
				</StyledWhiteButton>
			</SideBarStyled>
		</>
	);
}

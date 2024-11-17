import { getAdminUsers } from "@/actions/admint";
import Header from "@/components/home/header.component";
import { Box, Container } from "@mui/material";

export default async function Home() {
	const adminUsers = await getAdminUsers();

	return (
		<Box>
			<Header />
			<Container sx={{ py: 6 }}>This is a container.</Container>
		</Box>
	);
}

import { getAdminUsers } from "@/actions/admint";
import Footer from "@/components/layout/footer.component";
import Header from "@/components/home/header.component";
import { Box, Container } from "@mui/material";
import TopNav from "@/components/layout/topNav.component";

export default async function Home() {
	const adminUsers = await getAdminUsers();

	return (
		<Box>
			<TopNav />
			<Header />
			<Container sx={{ py: 6 }}>This is a container.</Container>
			<Footer />
		</Box>
	);
}

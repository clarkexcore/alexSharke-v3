import { getAdminUsers } from "@/actions/admint";
import Header from "@/components/home/header.component";
import { Box } from "@mui/material";

export default async function Home() {
	const adminUsers = await getAdminUsers();

	return (
		<Box>
			<Header />
		</Box>
	);
}

import Header from "@/components/home/header.component";
import { supabase } from "@/lib/supabaseClient";
import { Box } from "@mui/material";

export default function Home() {
	const getAdminUsersTable = async () => {
		try {
			const { data, error } = await supabase
				.from("admin_users")
				.select("*")
				.select();

			if (error !== null) {
				throw Error("Error fetching admin users table");
			}
		} catch (err) {
			console.error(err);
		}
	};

	getAdminUsersTable();
	return (
		<Box>
			<Header />
		</Box>
	);
}

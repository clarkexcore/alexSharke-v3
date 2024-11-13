"use server";

import { supabase } from "@/lib/supabaseClient";

export async function getAdminUsers() {
	try {
		const { data, error } = await supabase.from("admin_users").select("*");

		if (error) {
			throw Error("Error fetching admin users table");
		}
		return data;
	} catch (err) {
		console.error(err);
		return null;
	}
}

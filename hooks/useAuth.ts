// hooks/useAuth.ts
import { supabase } from "../lib/supabaseClient";

export const signUp = async (email: string, password: string) => {
	const { data, error } = await supabase.auth.signUp({
		email,
		password,
	});

	if (error) {
		console.error("Error signing up:", error.message);
		return null;
	}

	return data;
};

export const signIn = async (email: string, password: string) => {
	const { data, error } = await supabase.auth.signInWithPassword({
		email,
		password,
	});

	if (error) {
		console.error("Error signing in:", error.message);
		return null;
	}

	return data;
};

export const signOut = async () => {
	const { error } = await supabase.auth.signOut();

	if (error) {
		console.error("Error signing out:", error.message);
	}
};

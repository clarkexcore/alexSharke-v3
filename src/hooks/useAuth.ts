// hooks/useAuth.ts
import { supabase } from "@/lib/supabaseClient";

export const signUp = async (email: string, password: string) => {
	const { data, error } = await supabase.auth.signUp({
		email,
		password,
	});

	if (error) {
		throw Error(error.message as unknown as string);
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
		throw Error(error.message as unknown as string);
	}

	return data;
};

export const signOut = async () => {
	const { error } = await supabase.auth.signOut();

	if (error) {
		console.error("Error signing out:", error.message);
		throw Error(error.message as unknown as string);
	}
};

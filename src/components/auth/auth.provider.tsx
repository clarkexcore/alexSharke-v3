"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import type { User } from "@supabase/auth-helpers-nextjs";

type AuthContextType = {
	user: User | null;
	loading: boolean;
};

const AuthContext = createContext<AuthContextType>({
	user: null,
	loading: true,
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
	const [user, setUser] = useState<User | null>(null);
	const [loading, setLoading] = useState(true);
	const router = useRouter();
	const supabase = createClientComponentClient();

	useEffect(() => {
		// Check active session
		const checkUser = async () => {
			const {
				data: { session },
			} = await supabase.auth.getSession();
			setUser(session?.user ?? null);
			setLoading(false);
		};

		checkUser();

		// Listen for authentication state changes
		const {
			data: { subscription },
		} = supabase.auth.onAuthStateChange(async (event, session) => {
			setUser(session?.user ?? null);
			setLoading(false);
			if (event === "SIGNED_OUT") {
				router.push("/login");
			}
		});

		return () => {
			subscription.unsubscribe();
		};
	}, [router, supabase]);

	return (
		<AuthContext.Provider value={{ user, loading }}>
			{children}
		</AuthContext.Provider>
	);
}

export const useAuth = () => {
	const context = useContext(AuthContext);
	if (!context) {
		throw new Error("useAuth must be used within an AuthProvider");
	}
	return context;
};

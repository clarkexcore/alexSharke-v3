import { Session, User } from "@supabase/supabase-js";

export interface SupabaseAuthResp {
	user: User | null;
	session: Session | null;
}

import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
	const res = NextResponse.next();

	const supabase = createMiddlewareClient({
		req,
		res,
	});

	const {
		data: { session },
	} = await supabase.auth.getSession();

	console.log(session);

	if (!session && isProtectedRoute(req.nextUrl.pathname)) {
		return NextResponse.rewrite(new URL("/login", req.url));
	}

	return res;
}

function isProtectedRoute(pathname: string): boolean {
	const protectedRoutes = ["/admin"];
	return protectedRoutes.some(route => pathname.startsWith(route));
}

export const config = {
	matcher: ["/admin/:path*"],
};

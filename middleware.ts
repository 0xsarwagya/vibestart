import { headers } from "next/headers";
import { type NextRequest, NextResponse } from "next/server";

const checkAuth = async (req: NextRequest) => {
	/**
	 * Fetch the session using the `next-auth` api Route for session
	 * @see https://next-auth.js.org/getting-started/rest-api#get-apiauthsession
	 */
	const session = await fetch(
		new URL("/api/auth/session", req.nextUrl.origin).toString(),
		{
			headers: headers(),
		},
	).then((res) => res.json());

	/**
	 * It Returns an Empty Object When There Is No Session.
	 * When There Is A Session i.e the user is loggged in
	 * it returns the `Session` object from `next-auth`
	 */
	return Object.keys(session).length !== 0;
};

export async function middleware(request: NextRequest) {
	// Check if User is authenticated.
	const isAuthenticated = await checkAuth(request);
	// Check if Its A Protected Route i.e If it Is Something
	// For Which user needs to  be authenticated
	const isProtectedRote = request.nextUrl.pathname.startsWith("/app");

	/**
	 *  If the route is protected and the user is not authenticated, redirect to the login page.
	 */
	if (isProtectedRote && !isAuthenticated) {
		return NextResponse.redirect(
			new URL("/auth/login", request.nextUrl.origin),
		);
	}

	// Allow the request to proceed if the user is authenticated or the route is not protected.
	return NextResponse.next();
}

export const config = {
	matcher: [
		/*
		 * Match all request paths except for the ones starting with:
		 * - _next/static (static files)
		 * - _next/image (image optimization files)
		 * - favicon.ico (favicon file)
		 * Feel free to modify this pattern to include more paths.
		 */
		"/((?!_next/static|api|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
	],
};

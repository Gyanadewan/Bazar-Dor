
import { auth } from "@/lib/auth";
import { NextResponse } from "next/server";

export async function proxy(request) {
  const session = await auth.api.getSession({
    headers: request.headers,
  });

  const { pathname } = request.nextUrl;

  if (!session && pathname !== "/signup") {
    return NextResponse.redirect(new URL("/signup", request.url));
  }

  if (session && pathname === "/signup") {
    return NextResponse.redirect(new URL("/home", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/",
    "/home/:path*",
    "/category/:path*",
    "/details/:path*",
    "/myprofile/:path*",
    "/signup",
  ],
};

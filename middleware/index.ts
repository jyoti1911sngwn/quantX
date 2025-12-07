import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
  // Read the Better-Auth session cookie directly
  const sessionCookie = req.cookies.get('better-auth.session_token')?.value;

  // If no session and accessing protected route, redirect to sign-in
  if (!sessionCookie && req.nextUrl.pathname !== '/sign-in') {
    return NextResponse.redirect(new URL('/sign-in', req.url));
  }

  // If session exists and user tries to access /sign-in, redirect to dashboard
  if (sessionCookie && req.nextUrl.pathname === '/sign-in') {
    return NextResponse.redirect(new URL('/', req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next|favicon.ico).*)'], // protect all pages except API/_next
};

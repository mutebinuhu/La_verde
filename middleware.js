// middleware.js

import { NextResponse } from 'next/server';

export async function middleware(req) {
  const res = await fetch(`${req.nextUrl.origin}/api/auth/check`, {
    headers: {
      cookie: req.headers.get('cookie') || '', // Pass cookies to the API route
    },
  });

  // If the user is not authenticated, redirect them to the login page
  if (res.status === 401) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  return NextResponse.next(); // Proceed to the requested page
}

// Specify paths to protect
export const config = {
  matcher: ['/protected/:path*'], // Apply middleware to protected routes
};

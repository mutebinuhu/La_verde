// middleware.js
import { account } from './utils/appwrite';
import { NextResponse } from 'next/server';

export async function middleware(req) {
  try {
    // Check if user is authenticated by getting their session
    await account.get();
    // If user is authenticated, proceed to the next middleware or page
    return NextResponse.next();
  } catch (error) {
    console.log("my error=======================", error);
    // If the user is not authenticated, redirect to the login page
    if (error.code === 401) {
      // Redirect if the user is a guest (not logged in)
      return NextResponse.redirect(new URL('/login', req.url));
    } else {
      // Log any other errors for debugging
      console.error("An unexpected error occurred:", error);
      return NextResponse.next(); // Allow the request to proceed (or handle error as needed)
    }
  }
}

export const config = {
  matcher: ['/dashboard/admin'], // Protect the /dashboard/admin route
};

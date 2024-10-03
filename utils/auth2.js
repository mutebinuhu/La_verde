// utils/auth.js
import { redirect } from 'next/navigation';
import { account } from './appwrite';

// Reusable function to check authentication in server-side components
export async function checkAuthServer() {
  try {
    const user = await account.get();
    return user;
  } catch (error) {
    if (error.code === 401) {
      // Redirect to login if unauthenticated
      redirect('/login');
    }
    throw error;
  }
}

// Reusable function to check authentication in client-side components
export async function checkAuthClient(router) {
  try {
    const user = await account.get();
    return user;
  } catch (error) {
    if (error.code === 401) {
      // Redirect to login if unauthenticated
      router.push('/login');
    }
    throw error;
  }
}

export async function LogOut(router) {
    try {
      await account.deleteSession("current");
      router.push('/login');
    } catch (error) {
      if (error.code === 401) {
        // Redirect to login if unauthenticated
        router.push('/login');
      }
      throw error;
    }
  }

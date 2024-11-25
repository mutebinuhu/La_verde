// lib/appwrite.js
import { Client, Account, Databases } from 'appwrite';

const client = new Client();
const account = new Account(client);
const databases = new Databases(client);

client
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_API_URL) // Your Appwrite endpoint
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID) // Your project ID

export { client, account, databases };
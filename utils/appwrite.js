// lib/appwrite.js
import { Client, Account } from 'appwrite';

const client = new Client();
const account = new Account(client);

client
    .setEndpoint('https://cloud.appwrite.io/v1') // Your Appwrite endpoint
    .setProject('66fd525b00046559b300'); // Your project ID

export { client, account };
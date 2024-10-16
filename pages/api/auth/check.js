// pages/api/auth/check.js

import { account, client } from "@/utils/appwrite";

export default async function handler(req, res) {
  try {
    // Check the user session
    const session = await account.get();
    res.status(200).json({ loggedIn: true, user: session });
  } catch (error) {
    console.log("error", error);
    res.status(401).json({ loggedIn: false });
  }
}

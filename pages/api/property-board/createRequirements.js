// pages/api/createRequirement.js

import {client, account, databases } from "@/utils/appwrite";


export default async function handler(req, res) {
  if (req.method === "POST") {
    const { title, user_id } = req.body;
  

    try {
      const response = await databases.createDocument(
        "67320477003091afb449", // Replace with your database ID
        "67387bc40020fbb914e7", // Replace with your collection ID
        unique(), // Use Appwrite's unique ID generator
        {
          title,
          user_id,
          created_at: new Date(),
        }
      );
      res.status(201).json(response);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}

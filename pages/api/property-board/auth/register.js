import {client, account, databases } from "@/utils/appwrite";


export default async (req, res) => {
    const { email, password } = req.body;

    console.log("details", email, password);

    try {
      const session = await account.create("unique()",email, password);
      res.status(200).json(session);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
};

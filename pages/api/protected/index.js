import { account } from "@/utils/appwrite";


export default async function handler(req, res) {
  const jwt = req.headers.authorization;
  console.log("=============================the jwt========================", jwt);
  try {
    const session = await account.getSession('current', jwt);

    if (!session) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    // Your API logic here
    res.status(200).json({ message: 'Success' });
  } catch (error) {
    return res.status(401).json({ message: 'Unauthorized---------------' });
  }
}


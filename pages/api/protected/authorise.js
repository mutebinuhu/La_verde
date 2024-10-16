import { account } from "@/utils/appwrite";


export default async function handler(req, res) {
    const jwt = req.headers.authorization;
    
  try {
    const session = await account.getSession('current', jwt);
    console.log("session: ", session)

    if (!session) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

  }
  catch (error) {
    console.error('Error fetching session:', error);
    return res.status(400).json({ message: 'Error fetching session' });
  }
}
// pages/api/posts/index.js
import Message from '@/models/messages';
import connectToDatabase from '@/utils/db';


export default async function handler(req, res) {
  await connectToDatabase();

  if (req.method === 'GET') {
    try {
      const posts = await Message.find({}).sort({createdAt: 'desc'});
      
      res.status(200).json(posts);
    } catch (error) {
      res.status(400).json({ message: 'Error fetching posts', error: error.message });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

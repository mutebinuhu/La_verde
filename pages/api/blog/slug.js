// pages/api/posts/slug.js
import Post from '@/models/Post';
import connectToDatabase from '@/utils/db';

export default async function handler(req, res) {
  const { query: { slug }, method } = req;

  await connectToDatabase();

  switch (method) {
    case 'GET':
      try {
        const post = await Post.findOne({ slug });
        if (!post) {
          return res.status(404).json({ message: 'Post not found' });
        }
        res.status(200).json(post);
      } catch (error) {
        res.status(400).json({ message: 'Error fetching post', error: error.message });
      }
      break;
    default:
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
}

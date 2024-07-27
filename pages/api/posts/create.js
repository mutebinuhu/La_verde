
// pages/api/posts/create.js
import Post from '@/models/Post';
import connectToDatabase from '@/utils/db';
import slugify from 'slugify';

export default async function handler(req, res) {
  await connectToDatabase();

  if (req.method === 'POST') {
    try {
      const { title, content } = req.body;
      const slug = slugify(title, { lower: true });
      const newPost = new Post({ title, slug, content });
      await newPost.save();
      res.status(201).json({ message: 'Post created successfully', post: newPost });
    } catch (error) {
      res.status(400).json({ message: 'Error creating post', error: error.message });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}


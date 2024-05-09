import connectDB from '../../utils/db';
import User from '../../models/User';

connectDB();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { name, email } = req.body;
      const user = new User({ name, email });
      await user.save();
      res.status(201).json(user);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
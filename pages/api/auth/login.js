import { verifyPassword, generateToken } from '../../../lib/auth';

const users = []; // This should be replaced with a proper database in production

export default async (req, res) => {
  if (req.method === 'POST') {
    const { email, password } = req.body;
    const user = users.find(user => user.email === email);

    if (!user || !(await verifyPassword(password, user.password))) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const token = generateToken(user);
    res.status(200).json({ token });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
};

import { hashPassword } from '../../../lib/auth';

const users = []; // This should be replaced with a proper database in production

export default async (req, res) => {
  if (req.method === 'POST') {
    const { email, password } = req.body;

    // Check if user already exists
    if (users.find(user => user.email === email)) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const hashedPassword = await hashPassword(password);
    const newUser = { id: Date.now().toString(), email, password: hashedPassword };
    users.push(newUser);

    res.status(201).json({ message: 'User created', user: newUser });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
};

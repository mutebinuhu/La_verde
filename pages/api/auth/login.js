import User from '@/models/User';
import { verifyPassword, generateToken } from '../../../utils/auth';

const users = []; // This should be replaced with a proper database in production

export default async (req, res) => {
  if (req.method === 'POST') {
    const { email, password } = req.body;
    console.log("email", email)
    console.log("pwd", password)

    //const user = users.find(user => user.email === email);
    try {
      const user = await User.findOne({ email });
      if (!user || !(await verifyPassword(password, user.password))) {
        return res.status(401).json({ message: 'Invalid email or password' });
      }
      console.log("users========", user)
  
      const token = generateToken(user);
      res.status(200).json({ token });
    } catch (error) {
      console.error('Error finding user by email:', error);
      throw error;
    }


  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
};

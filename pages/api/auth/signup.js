import User from '@/models/User';
import { hashPassword } from '../../../utils/auth';

const users = []; // This should be replaced with a proper database in production

export default async (req, res) => {
  try {
    if (req.method === 'POST') {
      const { name, email, password } = req.body;
  
      // Check if user already exists
      if (users.find(user => user.email === email)) {
        return res.status(400).json({ message: 'User already exists' });
      }
  
      const hashedPassword = await hashPassword(password);
      const newUser = {name,email, password: hashedPassword };
      
      const user = new User(newUser);
      const savedUsers = await user.save(); 
  
      res.status(201).json({ message: 'User created', user: savedUsers });
    } else {
      
      res.status(405).json({ message: 'Method not allowed' });
    }
  } catch (error) {
    console.log("err", error)
  }
};

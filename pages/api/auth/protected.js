import { account } from '@/utils/appwrite';
import { verifyToken } from '../../../utils/auth';

export default async(req, res) => {
  const user = await account.get();
 
  res.status(200).json({ message: 'Protected content', user });
};

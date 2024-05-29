import { verifyToken } from '../../../utils/auth';

export default (req, res) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }

  const decoded = verifyToken(token);

  if (!decoded) {
    return res.status(401).json({ message: 'Invalid token' });
  }

  res.status(200).json({ message: 'Protected content', user: decoded });
};

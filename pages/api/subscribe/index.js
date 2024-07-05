import dbConnect from '../../../utils/db';
import Subscriber from '../../../models/Subscriber';

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case 'POST':
      try {
        const { name, email, message } = req.body;
        const subscriber = new Subscriber({ name, email, message });
        await subscriber.save();
        res.status(201).json({ success: true, data: subscriber });
      } catch (error) {
        console.log("err", error)
        res.status(400).json({ success: false, error: error.message });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}

// pages/api/item/[title].js
import connect from '../../../lib/mongoose';
import Property from '../../../models/Property';

export default async function handler(req, res) {
  const { title } = req.query;

  await connect();

  try {
    const property  = await Property.findOne({ title: title });

    if (!property) {
      return res.status(404).json({ message: 'property not found' });
    }

    res.status(200).json(property);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
}

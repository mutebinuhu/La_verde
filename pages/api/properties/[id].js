import connectToDatabase from '../../../utils/db';
import Property from '../../../models/Property';

export default async function handler(req, res) {
  await connectToDatabase();

  const { method } = req;
  const { id } = req.query;

  switch (method) {
    case 'GET':
      try {
        const property = await Property.findById(id);
        if (!property) {
          return res.status(404).json({ success: false });
        }
        res.status(200).json({ success: true, data: property });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case 'PUT':
      try {
        const property = await Property.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        });
        if (!property) {
          return res.status(404).json({ success: false });
        }
        res.status(200).json({ success: true, data: property });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case 'DELETE':
      try {
        const deletedProperty = await Property.deleteOne({ _id: id });
        if (!deletedProperty) {
          return res.status(404).json({ success: false });
        }
        res.status(200).json({ success: true, data: {} });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
import connectToDatabase from '../../../utils/db';
import Property from '../../../models/Property';

export default async function handler(req, res) {
  await connectToDatabase();

  const { method } = req;
  const { propertyId, coverImageUrl } = req.body;


  switch (method) {

    case 'PUT':
        try {
            await Property.updateOne(
              { _id: propertyId },
              { $set: { coverImage: coverImageUrl } }
            );
            res.status(200).json({ message: 'Cover image set successfully' });
          } catch (error) {
            res.status(500).json({ message: 'Error setting cover image', error });
          }
      break;
    default:
      res.setHeader('Allow', ['PUT']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
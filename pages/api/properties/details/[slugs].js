import Property from "@/models/Property";
import connectToDatabase from "@/utils/db";


export default async function handler(req, res) {
await connectToDatabase();
  const { method } = req;
  const { slug} = req.query;

  switch (method) {
    case 'GET':
        try {
            console.log("im here")
            const property = await Property.findBySlug(slug);

            if (property) {
                return res.status(200).json({ success: true, data: property });

            } else {
              res.status(400).json({ success: false });
            }
          } catch (err) {
            console.error('Error fetching property:', err);
          }
      break;

    default:
      res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
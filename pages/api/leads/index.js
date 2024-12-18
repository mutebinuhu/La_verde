// pages/api/locations/index.js
import connectToDatabase from '../../../utils/db';
import Lead from '@/models/Lead';
import authorize from '../protected/authorise';

export default async function handler(req, res) {
  await  connectToDatabase();

  const { method } = req;
   //await authorize(req, res);
  switch (method) {
    case 'GET':
      try {
        const leads = await Lead.find({});
        res.status(200).json({ success: true, data: leads });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case 'POST':
      try {
        console.log("location", req.body)
        const lead = await Lead.create(req.body);
        res.status(201).json({ success: true, data: lead });
      } catch (error) {
        console.log("my error", error);
        res.status(400).json({ success: false });

      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}

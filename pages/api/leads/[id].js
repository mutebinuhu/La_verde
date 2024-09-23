// pages/api/locations/[id].js
import connectToDatabase from '../../../utils/db';

import Lead from '@/models/Lead';

export default async function handler(req, res) {
  const { method } = req;
  const { id } = req.query;
  await connectToDatabase();

  switch (method) {
    case 'GET':
      try {
        const lead = await Lead.findById(id);
        if (!lead) {
          return res.status(404).json({ success: false });
        }
        res.status(200).json({ success: true, data: lead });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case 'PUT':
      try {
        const lead = await Lead.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        });
        if (!lead) {
          return res.status(404).json({ success: false });
        }
        res.status(200).json({ success: true, data: lead });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case 'DELETE':
      try {
        const deletedLead = await Lead.deleteOne({ _id: id });
        if (!deletedLead) {
          return res.status(404).json({ success: false });
        }
        res.status(200).json({ success: true, data: {} });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}

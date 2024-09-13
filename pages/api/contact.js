import Message from "@/models/messages";
import connectDB from "@/utils/db";

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message, phoneNumber } = req.body;
    await connectDB();

    // Send mail
    try {
      const message = new Message(req.body)
      await message.save();
      res.status(200).json({success:true });
    } catch (error) {
      console.error("ERR", error);
      res.status(500).json({ success: false, error: error.message });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
import JobApplication from '@/models/JobApplication';
import connectToDatabase from '@/utils/db';
import { v4 as uuidv4 } from 'uuid';
import { writeFile } from 'fs/promises';
import path from 'path';

export default async function handler(req, res) {
  await connectToDatabase();

  const method = req.method;

  switch (method) {
    case 'GET':
      try {
        const applications = await JobApplication.find();
        res.status(200).json(applications);
      } catch (error) {
        console.error('Error fetching job applications:', error);
        res.status(500).json({ error: 'Failed to fetch job applications' });
      }
      break;

    case 'POST':
      try {
        console.log("req=======================", req.formData())
        const formData = await req.formData();
        const name = formData.get('name');
        const email = formData.get('email');
        const phone = formData.get('phone');
        const position = formData.get('position');
        const cvFile = formData.get('cv');

        if (!name || !email || !phone || !position || !cvFile) {
          return res.status(400).json({ error: 'All fields are required' });
        }

        const cvFileName = `${uuidv4()}_${cvFile.name}`;
        const cvFilePath = path.join(process.cwd(), 'public/uploads', cvFileName);
        await writeFile(cvFilePath, Buffer.from(await cvFile.arrayBuffer()));

        const jobApplication = new JobApplication({
          name,
          email,
          phone,
          position,
          cv: `/uploads/${cvFileName}`,
        });

        await jobApplication.save();
        res.status(200).json({ message: 'Job application submitted successfully' });
      } catch (error) {
        console.error('======================================================Error submitting job application:', error.message);
        res.status(500).json({ error: 'Failed to submit job application' });
      }
      break;

    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
}

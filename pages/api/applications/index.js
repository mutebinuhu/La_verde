import JobApplication from '@/models/JobApplication';
import connectToDatabase from '@/utils/db';
import { v4 as uuidv4 } from 'uuid';
import { writeFile } from 'fs/promises';
import path from 'path';
import fs from 'fs';
import { IncomingForm } from 'formidable';
import cloudinary from '@/cloudinaryConfig';

export const config = {
  api: {
    bodyParser: false, // Disables Next.js body parsing
  },
};
export default async function handler(req, res) {
  await connectToDatabase();

  const method = req.method;

  switch (method) {
    case 'GET':
      try {
        // Retrieve all job applications from MongoDB
        const jobApplications = await JobApplication.find().sort({ createdAt: -1 }); // Sort by latest application first
  
        // Respond with the list of job applications
        res.status(200).json({
          message: 'Job applications retrieved successfully',
          jobApplications,
        });
      } catch (error) {
        console.error('Error retrieving job applications:', error);
        res.status(500).json({ error: 'Failed to retrieve job applications' });
      }
      break;

    case 'POST':
      await connectToDatabase();

      if (req.method === 'POST') {
        try {
          const form = new IncomingForm();
          //const uploadDir = path.join(process.cwd(), '/public/uploads');
      
          // Ensure the upload directory exists
           //fs.mkdirSync(uploadDir, { recursive: true });
      
         // form.uploadDir = uploadDir;
          //form.keepExtensions = true;

          form.parse(req, async (err, fields, files) => {
            if (err) {
              console.error('Formidable Error:', err);
              res.status(500).json({ error: 'Something went wrong during file upload' });
              return;
            }
      
            try {
              console.log('Fields:', fields);
              console.log('Files:', files.cv[0].filepath);
      
              // Upload the CV file to Cloudinary
              const uploadResponse = await cloudinary.v2.uploader.upload(files.cv[0].filepath, {
                folder: 'job_applications',
                resource_type: 'auto', // Automatically detects the file type
              });
      
              // Get the URL of the uploaded file
              const cvUrl = uploadResponse.secure_url;
      
              // Save the form data and Cloudinary URL to MongoDB
              const jobApplication = new JobApplication({
                name: fields.name[0],
                email: fields.email[0],
                phone: fields.phone[0],
                position: fields.position[0],
                cv: cvUrl,
              });
      
              await jobApplication.save();
      
              res.status(200).json({
                message: 'Job application submitted and saved successfully',
                jobApplication,
              });
            } catch (error) {
              console.error('Saving Error:', error);
              res.status(500).json({ error: 'Failed to save data' });
            }
          })
        } catch (error) {
          console.log("error---XXXXX", error.message)
        }
    
        ;
        
      } else {
        res.status(405).json({ message: 'Only POST requests allowed' });
      }
    
      break;

    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
}

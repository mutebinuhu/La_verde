import mongoose from 'mongoose';
import User from '../../../models/User';
import Homeworth from '@/models/Homeworth';

// Connect to MongoDB
const connectToDatabase = async () => {
  if (mongoose.connection.readyState === 1) return;

  await mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};
export const handler = async (req, res) =>{

    const method = req.method
    switch(method){

        case 'POST':
            try {
                const { fullName, email, address } = await req.json();
            
                if (!fullName || !email || !address) {
                  return  res.json('Missing required fields');
                }
                const newUser = new Homeworth({
                  fullName,
                  email,
                  address,
                });
            
                await newUser.save();
                return new json('User created successfully');

              } catch (error) {
                console.error(error);
                return res.json('Failed to create user');
              }

              break;
              default:
                  res.setHeader('Allow', ['POST']);
                  res.status(405).end(`Method ${req.method} Not Allowed`);
            }
        

       
}

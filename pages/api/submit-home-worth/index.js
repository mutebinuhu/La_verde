
import Homeworth from '@/models/Homeworth';
import connectToDatabase from '@/utils/db';


export default async function handler(req, res){
  await connectToDatabase();

    const method = req.method
    switch(method){

        case 'POST':
            try {
                const { fullName, email, address } = await req.body;
            
                if (!fullName || !email || !address) {
                  return  res.json('Missing required fields');
                }
                const newUser = new Homeworth({
                  fullName,
                  email,
                  address,
                });
            
               let apply =  await newUser.save();
               console.log("apply", apply)
                return res.json({data:'User created successfully'});

              } catch (error) {
                console.error("home-work-error", error.message);
                return res.json(error.message);
              }

              break;
              default:
                  res.setHeader('Allow', ['POST']);
                  res.status(405).end(`Method ${req.method} Not Allowed`);
            }
        

       
}

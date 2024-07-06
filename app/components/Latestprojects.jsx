import React from 'react';
import {Card, CardHeader, CardBody, CardFooter, Image, Button} from "@nextui-org/react";
import Link from 'next/link';
import { nonoSerif } from '@/utils/fonts';
const Project = ({image, name, paymentPlan, units, status}) =>{
  console.log("imagexxxxxxxxxxx===", image)
   let imageDisplay ="";
   if(name == "Reeman Living"){
    imageDisplay=image[7]
   }
   if(name == "SAADIYAT  LAGOON"){
    imageDisplay=image[2]
   }
   if(name == "Fay Al Reeman ll"){
    imageDisplay=image[3]
   }
  return(
    <Link href="/contact-us" className='z-40  transform transition-transform hover:scale-105 '>
    <section className='w-full h-[300px]  col-span-12 sm:col-span-7 -z-10'>
   <Card  className="w-full h-[300px] col-span-12  mt-3 md:mt-0 sm:col-span-7 -z-10">
     <CardHeader className="absolute z-10 top-1 flex-col items-start">
       <p className="text-tiny text-white rounded px-1 uppercase font-bold bg-[#104e3e]">{status}</p>
     </CardHeader>
     <Image
       removeWrapper
       alt="Relaxing app background"
       className="z-0 w-full h-full object-cover"
       src={imageDisplay}
     />
     <CardFooter className="absolute  bg-black/40 bottom-0 z-40 border-t-1 border-default-600 dark:border-default-100">
       <div className="flex flex-grow gap-2 items-center">
        
         <div className="flex flex-col">
         <p className="text-large text-bold text-white text-left">{name}</p>
        
         <p className="text-tiny text-white text-left  text-bold">{paymentPlan}</p>
         </div>
       </div>
  
      <Button radius="medium" size="XL">Learn More</Button>
    
     </CardFooter>
   </Card>
   </section>
   </Link>
  )
}
async function fetchData() {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL+'/api/projects', {
    next: { revalidate: 60 } // Revalidate data every 60 seconds
  });
  const data = await res.json();
  console.log("properties", data)
  return data;
}


const Latestprojects = async() => {
  const data = await fetchData();
    return (

       <div className='container  mx-auto  text-center py-16'>
         <h2 className={`${nonoSerif.className} text-4xl text-bold text-center py-8 md:py-16`}>Our Latest Projects</h2>
         <p className='p-8 text-xl'> Join us as we unveil our latest real estate project, designed to redefine modern living. Explore, invest, and secure your spot in the next era of exceptional living. Don't miss out, be part of the excitement</p>
         <div className="md:flex p-6   md:space-x-6 py-12">
   
{
  data && data.data.map((data)=>{
    console.log("test===", data)
    return(
      <Project image={data.images} name={data.title} units={`${data.unitsLeft} UNITS LEFT`} paymentPlan={data.paymentPlan.map((data)=><>{data}</>)} status="UNDER CONSTRUCTION" />
    )
  })
}
  
   
   

 </div>
 <div className="text-center mt-12">
      <Link
            isExternal
            showAnchorIcon
            href="/properties"
            className="mt-32"
          >
           <Button className='border-2 bg-[#104e3e] text-white  transform transition-transform hover:scale-105 border-[#104e3e]   py-6 px-6  font-bold rounded'>
                 Find out More
           </Button>
          </Link>
          <Link
            isExternal
            showAnchorIcon
            href="/properties"
            className="mt-32"
          >
           <Button className='border-2 bg-white text-[#104e3e] md:mx-4 mx-0 transform transition-transform hover:scale-105 border-[#104e3e]   py-6 px-6  font-bold rounded'>
                 Talk To Us
           </Button>
          </Link>
      </div>
       </div>
    );
}

export default Latestprojects;

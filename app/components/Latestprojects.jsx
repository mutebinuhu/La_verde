import React from 'react';
import {Card, CardHeader, CardBody, CardFooter, Image, Button} from "@nextui-org/react";
import Link from 'next/link';
import { nonoSerif } from '@/utils/fonts';
const Project = ({image, name, paymentPlan, units, status, date}) =>{
  return(
    <Link href="/contact-us" className='z-40 '>
    <section className='w-full h-[300px]  col-span-12 sm:col-span-7 -z-10'>
   <Card  className="w-full h-[300px] col-span-12  mt-3 md:mt-0 sm:col-span-7 -z-10">
     <CardHeader className="absolute z-10 top-1 flex-col items-start">
     <p className="text-tiny text-white rounded px-1 uppercase font-bold bg-[#104e3e]">{status}</p>
       <h4 className="text-white/90 font-medium text-xl bg-slate-500 my-4 px-3 opacity-75 rounded">{date}</h4>
     
      
     </CardHeader>
     <Image
       removeWrapper
       alt="Relaxing app background"
       className="z-0 w-full h-full object-cover"
       src={image}
     />
     <CardFooter className="absolute  bg-black/40 bottom-0 z-40 border-t-1 border-default-600 dark:border-default-100">
       <div className="flex flex-grow gap-2 items-center">
        
         <div className="flex flex-col">
         <p className="text-large text-bold text-white text-left">{name}</p>
         <p className="text-tiny text-white text-left text-bold">{units}</p>
         <p className="text-tiny text-white text-left  text-bold">{paymentPlan}</p>
         </div>
       </div>
  
      <Button radius="medium" size="LG">Lets Talk</Button>
    
     </CardFooter>
   </Card>
   </section>
   </Link>
  )
}
const Latestprojects = () => {
    return (

       <div className='container  mx-auto  text-center'>
         <h2 className={`${nonoSerif.className} text-4xl text-bold text-center py-8 md:py-16`}>Our Latest Projects</h2>
         <p className='p-8'> Join us as we unveil our latest real estate project, designed to redefine modern living. Explore, invest, and secure your spot in the next era of exceptional living. Don't miss out, be part of the excitement</p>
         <div className="md:flex p-6   md:space-x-6 py-12">
   

   <Project image="/ALDAR_AlReeman2PH3_CGI20_RearYard_04.jpg" name="Fay Al Reeman" units="50 UNITS LEFT" paymentPlan="40/60 PAYMENT PLAN" status="UNDER CONSTRUCTION" date="Sale started 31-Aug-23" />
   <Project image="/10.jpg" name="Reeman living " units="100 UNITS LEFT" paymentPlan="40/60 PAYMENT PLAN" status="UNDER CONSTRUCTION" date="Sale started 31-Aug-23"/>
   <Project image="/ALD2607_SaadiyatLagoons_S130_EXT_CyclePath.jpg" name="Saadiyat Lagoons" units="60 UNITS LEFT" paymentPlan="40/60 PAYMENT PLAN" status="UNDER CONSTRUCTION" date="Sale started 31-Aug-23" />
   

 </div>
       </div>
    );
}

export default Latestprojects;

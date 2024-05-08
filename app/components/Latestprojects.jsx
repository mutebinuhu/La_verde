import React from 'react';
import {Card, CardHeader, CardBody, CardFooter, Image, Button} from "@nextui-org/react";

const Latestprojects = () => {
    return (

       <div className='container  mx-auto pt-20   text-center'>
         <h2 className='text-3xl font-bold'>Our Latest Projects</h2>
         <p className='p-8'> Join us as we unveil our latest real estate project, designed to redefine modern living. Explore, invest, and secure your spot in the next era of exceptional living. Don't miss out, be part of the excitement</p>
         <div className="md:flex p-6   md:space-x-6 py-12">
   

   <Card  className="w-full h-[300px]  col-span-12 sm:col-span-7 -z-10">
     <CardHeader className="absolute z-10 top-1 flex-col items-start">
       {
         /**
          * 
          * <p className="text-tiny text-white/60 uppercase font-bold">New Site</p>
       <h4 className="text-white/90 font-medium text-xl">Sale Started 7/5/2024</h4>
          */
       }
     </CardHeader>
     <Image
       removeWrapper
       alt="Relaxing app background"
       className="z-0 w-full h-full object-cover"
       src="11.jpg"
     />
     <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
       <div className="flex flex-grow gap-2 items-center">
         <Image
           alt="Breathing app icon"
           className="rounded-full w-10 h-11 bg-black"
           src="11.jpg"
         />
         <div className="flex flex-col">
           <p className="text-tiny text-white/60">Info</p>
           <p className="text-tiny text-white/60">Info</p>
         </div>
       </div>
       <Button radius="full" size="sm">Lets Talk</Button>
     </CardFooter>
   </Card>
   <Card  className="w-full h-[300px] col-span-12  mt-3 md:mt-0 sm:col-span-7 -z-10">
     <CardHeader className="absolute z-10 top-1 flex-col items-start">
      {/**
       * <p className="text-tiny text-white/60 uppercase font-bold">New Site</p>
       <h4 className="text-white/90 font-medium text-xl">Sale Started 7/5/2024</h4>
       * 
       */} 
     </CardHeader>
     <Image
       removeWrapper
       alt="Relaxing app background"
       className="z-0 w-full h-full object-cover"
       src="EXT08_Aerial_v14_10417px_150dpi.jpg"
     />
     <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
       <div className="flex flex-grow gap-2 items-center">
         <Image
           alt="Breathing app icon"
           className="rounded-full w-10 h-11 bg-black"
           src="https://nextui.org/images/breathing-app-icon.jpeg"
         />
         <div className="flex flex-col">
         <p className="text-tiny text-white/60">Sama Yas</p>
           <p className="text-tiny text-white/60">Info</p>
         </div>
       </div>
       <Button radius="full" size="sm">Lets Talk</Button>
     </CardFooter>
   </Card>
   <Card  className="w-full h-[300px] col-span-12 sm:col-span-7  mt-3 md:mt-0 -z-10">
     <CardHeader className="absolute z-10 top-1 flex-col items-start">
     {
         /**
          * 
          * <p className="text-tiny text-white/60 uppercase font-bold">New Site</p>
       <h4 className="text-white/90 font-medium text-xl">Sale Started 7/5/2024</h4>
          */
       }
     </CardHeader>
     <Image
       removeWrapper
       alt="Relaxing app background"
       className="z-0 w-full h-full object-cover"
       src="ALD2607_SaadiyatLagoons_S130_EXT_CyclePath.jpg"
     />
     <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
       <div className="flex flex-grow gap-2 items-center">
         <Image
           alt="Breathing app icon"
           className="rounded-full w-10 h-11 bg-black"
           src="https://nextui.org/images/breathing-app-icon.jpeg"
         />
         <div className="flex flex-col">
         <p className="text-tiny text-white/60">Info</p>
           <p className="text-tiny text-white/60">Info</p>
         </div>
       </div>
       <Button radius="full" className='' size="sm">Lets Talk</Button>
     </CardFooter>
   </Card>
 </div>
       </div>
    );
}

export default Latestprojects;

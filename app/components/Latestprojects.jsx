import React from 'react';
import {Card, CardHeader, CardBody, CardFooter, Image, Button} from "@nextui-org/react";

const Latestprojects = () => {
    return (

       <div className='px-4 pt-20 text-center'>
         <h2 className='text-3xl font-bold'>Our Latest Projects</h2>
         <p>Experience the future of living! Join us as we unveil our latest real estate project, designed to redefine modern living. Explore, invest, and secure your spot in the next era of exceptional living. Don't miss out, be part of the excitement</p>
         <div className="md:flex  md:space-x-3  py-12">
   

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
       src="https://img.freepik.com/free-photo/mumbai-skyline-skyscrapers-construction_469504-21.jpg?t=st=1715058933~exp=1715062533~hmac=5e5976132534066875eb51981c83179845d9e3427178477e157c144a0019fd5e&w=826"
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
       src="https://img.freepik.com/free-photo/analog-landscape-city-with-buildings_23-2149661456.jpg?t=st=1715058810~exp=1715062410~hmac=fe20c8b9de63fac28d736dde97a67979203a8a652cbba4fa4d8462478b83e6d4&w=826"
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
       src="https://img.freepik.com/free-photo/amazing-aerial-shot-singapore-cityscape-with-lots-skyscrapers_181624-18618.jpg?t=st=1715059244~exp=1715062844~hmac=eac7b774f7a7c915d11b7a768929395a041b23e7ee7025fc654cc3258da0902a&w=826"
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

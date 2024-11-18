"use client"
import React, { useState } from 'react';
import {Button} from '@nextui-org/button'; 
import {Card, CardHeader, CardBody, Image,CardFooter, Textarea} from "@nextui-org/react";
import { FaWhatsapp } from 'react-icons/fa';


const Post = ({item})=>{
  return(
    <Card shadow="sm" className="my-2" >
          <CardBody className="overflow-visible rounded p-0 ">
              <CardBody className="p-2">
                <p>{item[0].message}</p>
              
              </CardBody>
              <CardFooter className="flex items-center justify-between">
                <Button size="sm" variant="primary">View Details</Button>
              </CardFooter>
          </CardBody>
    </Card>
  )
}
const MessageCard = () => {
  return (
    <div className="flex items-start p-4 bg-gray-100 rounded-lg shadow-lg max-w-md mx-auto">
      {/* Profile Image */}
      <div className="mr-4">
        <img
          src="https://via.placeholder.com/50" // Replace this with the actual profile image URL
          alt="User"
          className="w-12 h-12 rounded-full object-cover"
        />
      </div>

      {/* Message Content */}
      <div>
        {/* Name and Number */}
        <div className="flex items-center space-x-2">
          <span className="font-semibold text-gray-800">Khizar Ahmed</span>
          <span className="text-gray-500 text-sm">+971 55 858 7996</span>
        </div>

        {/* Message Text */}
        <p className="text-gray-700 mt-1">
          Looking for 2bhk for cash buyer Sun tower only 04 layout end user
        </p>

        {/* Time */}
        <span className="text-gray-500 text-xs mt-2 inline-block">11:31 AM</span>
      </div>
    </div>
  );
};
export default function page() {
  const [selectedOption, setSelectedOption] = useState('Buy');

  return (

         <section className=''>
           <div className="relative bg-cover bg-center py-8 h-[250px] lg:h-[300px] flex items-center justify-center text-white"
         style={{ backgroundImage: "url('/abudhabi.jpg')" }}>
      <div className="bg-black bg-opacity-50 md:pb-12 pb-4 px-4 rounded-lg flex flex-col items-center mx-4 md:w-1/2">
        {/* Options */}
        <h1 className="p-4 text-xl text-left md:text-2xl font-bold">Post Your Requirement</h1>


        {/* Search Input */}
        <div className="flex  w-full ">
          <Textarea  
            type="text"
            placeholder="What Property are you looking for"
            className="w-full px-4 py-2 rounded-l-full text-black focus:outline-none">
           
        
          </Textarea>
         
        </div>
        <button className="px-6 py-2 bg-green-800 text-white rounded font-semibold">
            Submit
          </button>
   
      </div> 
    </div>
    <div className='container mx-auto py-12 '>
    <Button className="text-lg font-semibold bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700" size="sm" variant="primary">Check Availabilities</Button>
    <Button className="text-lg font-semibold bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700" size="sm" variant="primary">Check Looking Fors</Button>
    </div>
    <div className='bg-gray-100 p-2 space-x-4 md:flex container mx-auto'>
      <div className='w-full'>
      <Post item={[{image:"https://placeholder.png", message:"Looking for a 3 bedrooms plus maid in Alreem"}]}/>
      <Post item={[{image:"https://placeholder.png", message:"Looking for a 3 bedrooms plus maid in Alreem"}]}/>
      
      </div>
      <div className='hidden md:block w-2/4 bg-white'>
        <p>Lorem  </p>
      </div>
    </div>
         </section>
  )
}

import React from 'react';
import ImagesGallery from './ImagesGallery';
import "../app/globals.css";
import { redirect } from 'next/navigation'
import ImagesSlideShow from './ImagesSlideShow';
import ImageCarousel from './ImageCoursel';
import { SlSizeFullscreen, Slbath, S } from "react-icons/sl";
import { FaBath } from "react-icons/fa";
import { IoIosBed } from "react-icons/io";
import { FaRegBuilding } from "react-icons/fa";
import { MdSquareFoot } from "react-icons/md";

import { FaRegCheckCircle } from "react-icons/fa";



 
async function fetchPropertyId(id) {
 
   const res = await fetch(process.env.NEXT_PUBLIC_API_URL+"api/properties/"+id)
  if (!res.ok) return undefined
  return res.json()
  
}
const PropertyDetailsBeta = async ({propertyId}) => {



  const res =  await fetchPropertyId(propertyId);
  console.log("data", res);
  
 


  const property = {
    images: [
      '/10.jpg', // Main image
      '/11.jpg', // Side image 1
      '/MASTER BATHROOM.jpg', // Side image 2
    ],
    description: 'A beautiful 3-bedroom house located in the suburbs with a spacious garden and modern amenities.',
    amenities: [
      'Swimming Pool',
      'Gym',
      'Parking',
      '24/7 Security',
    ],
    bedrooms: 3,
    datePosted: '2024-05-20',
  };
 
  return (
    <div className="max-w-6xl mx-auto ">
         <section>
         <div className='bg-white/50 shadow-xl my-4 rounded-lg p-4 mx-4'>
          <h1 className='text-3xl font-bold'>{res.data.title} in -  {res.data.address}</h1>
          </div>
      {/* Image Gallery */}
    <div className='hidden md:block'>
      
   {<ImagesGallery images={res.data.images} />}
    </div>
      <div className='md:hidden'>
      <ImagesSlideShow   images={res.data.images}/>
      </div>

      {/* Description */}
 

      <div className="mb-4  ">
        <section className='mx-12 border-b'>
          <ul className='text-normal py-8 '>
            <li className='py-4 text-2xl text-gray-500 font-bold flex space-x-4'><SlSizeFullscreen/><span>Size</span><span className='text-gray-800'>{res.data.size}<sup className='text-gray-600 space-x-4 text-xs'>sqft</sup></span></li>
            <li className='py-4 text-2xl text-gray-500 font-bold flex space-x-4'><FaBath/><span>Bathrooms</span><span className='text-gray-800'>{res.data.bathrooms}</span></li>
            <li className='py-4 text-2xl text-gray-500 font-bold  flex space-x-4'><IoIosBed/><span>Bedrooms</span><span className='text-gray-800'>{res.data.bedrooms}</span></li>
            <li className='py-4 text-2xl text-gray-500 font-bold flex space-x-4'><FaRegBuilding /><span>Type</span><span className='text-gray-800'>{res.data.subCategory}</span></li>
          </ul>
        </section>
        <section className='py-8 mx-12 border-b'>
        <h1 className="text-3xl font-bold mb-4">About This Property</h1>
        <p>{res.data.descriptionEnglish}</p>
        </section>
        <section className="my-8 mx-12 bg-gray-50 p-4">
        <h2 className="text-3xl font-bold mb-4">Amenities</h2>
        <ul className="">
          {res.data.amenities.map((amenity, index) => (
            <li key={index} className='flex space-x-4 py-2 '><FaRegCheckCircle className='text-2xl text-blue-500'/><span>{amenity}</span></li>
          ))}
        </ul>
      </section>
      <section className="my-8 mx-12 bg-gray-50 p-4">
        <h2 className="text-3xl font-bold mb-4">Price</h2>
        <p className='text-3xl font-semibold	'>AED {res.data.price}</p>
      </section>
      <section className="my-8 mx-12 bg-gray-50 p-4">
        <h2 className="text-3xl font-bold mb-4">Date Posted</h2>
        <p className='text-3xl font-semibold	'>{new Date(res.data.createdAt).toLocaleDateString()}</p>
      </section>
     

      </div>

      {/* Amenities */}
   

      {/* Details */}
     

      {/* Call to Action Buttons */}
      <div className='fixed bottom-0 left-0 right-0 bg-gray-500 bg-opacity-25 p-2'>
      <div className="flex justify-between">
        <a href={`https://wa.me/971506144930?text=I'm interested in ${res.data.title}`} target="_blank" rel="noopener noreferrer" className="bg-green-500 rounded-3xl text-white px-4 py-2 ">
          WhatsApp
        </a>
        <a href={`mailto:marketing@laverde.ae?subject=Inquiry about ${res.data.title}`} className="bg-blue-500 text-white px-4 py-2 rounded-full">
          Email
        </a>
        <a href="tel:+971508244755" className="bg-yellow-500 text-white px-4 py-2 rounded-full">
          Call
        </a>
        <a href="/contact-us" className="bg-gray-500 text-white px-4 py-2 rounded-full">
          Contact Us
        </a>
      </div>
      </div>
         </section>
    </div>
  );
};

export default PropertyDetailsBeta;

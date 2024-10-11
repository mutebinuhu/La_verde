import React from 'react';
import ImagesGallery from './ImagesGallery';
import "../app/globals.css";
import { redirect } from 'next/navigation'
import ImagesSlideShow from './ImagesSlideShow';
import ImageCarousel from './ImageCoursel';
import { SlSizeFullscreen, Slbath, S } from "react-icons/sl";
import { FaBath, FaPhone, FaPhoneAlt, FaVoicemail, FaWhatsapp } from "react-icons/fa";
import { IoIosBed } from "react-icons/io";
import { FaRegBuilding } from "react-icons/fa";
import { MdSquareFoot } from "react-icons/md";

import { FaRegCheckCircle } from "react-icons/fa";
import { FaMailchimp, FaMessage } from 'react-icons/fa6';
import ContactForm from './Contactus';

import { FaArrowUpRightDots } from "react-icons/fa6";
import { formatNumberWithCommas } from '@/utils/commons';


 
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
    <>
    <main className="max-w-6xl mx-auto relative ">
         <section className='bg-white/50 shadow-xl my-4 rounded-lg p-4 mx-4 md:mx-0'>
         <h1 className='text-3xl capitalize  font-bold'>{res.data.title} in -  {res.data.address}</h1>
          <FaArrowUpRightDots className='text-3xl text-gray-300'/>
          </section>
      {/* Image Gallery */}
    <div className='hidden md:block'>
   {<ImagesGallery images={res.data.images} coverImage={res.data.coverImage && res.data.coverImage} />}
    </div>
      <div className='md:hidden'>
      <ImagesSlideShow   images={res.data.images}/>
      </div>

      {/* Description */}
    
  
      <div className=" ">
     {
      /**
       *  <div className='right-0 top-20 fixed bg-gray-200 rounded-md  w-64  z-0'>
      <div className='bg-white/50 p-4'>
         <ContactForm title="Learn More about this property" propertyId={res.data._id} showEmailAndTextBox={false}/>
      </div>
   </div>
       * 
       */
     }
        <section className='mx-12 border-b gg'>
          <ul className='text-normal py-8 '>
            <li className='py-4 text-2xl text-gray-500 font-bold flex space-x-4'><SlSizeFullscreen/><span>Size</span><span className='text-gray-800'>{res.data.areaSquare}<sup className='text-gray-600 space-x-4 text-xs'>sqft</sup></span></li>
            <li className='py-4 text-2xl text-gray-500 font-bold flex space-x-4'><FaBath/><span>Bathrooms</span><span className='text-gray-800'>{res.data.bathrooms} </span></li>
            <li className='py-4 text-2xl text-gray-500 font-bold  flex space-x-4'><IoIosBed/><span>Bedrooms</span><span className='text-gray-800'>{res.data.bedrooms}</span></li>
            <li className='py-4 text-2xl text-gray-500 font-bold flex space-x-4'><FaRegBuilding /><span>Type</span><span className='text-gray-800'>{res.data.subCategory}</span></li>
          </ul>
        </section>
        <section className='py-8 mx-12 border-b'>
        <h1 className="text-3xl font-bold mb-4">About This Property</h1>
        <p>{res.data.descriptionEnglish}</p>
        </section>
        <section className='my-8 mx-12 bg-gray-50 p-4 hidden md:block'>
        <h2 className="text-3xl font-bold mb-4">Learn More</h2>

      <div className="flex space-x-4">
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
      </section>
        <section className="my-8 mx-12 bg-gray-50 p-4">
        <h2 className="text-3xl font-bold mb-4">Amenities</h2>
        <ul className="md:grid md:grid-cols-4">
          {res.data.amenities.map((amenity, index) => (
            <li key={index} className='flex space-x-4 py-2 '><FaRegCheckCircle className='text-2xl text-blue-500'/><span>{amenity}</span></li>
          ))}
        </ul>
      </section>
      <section className='my-8 mx-12 bg-gray-50 p-4 hidden md:block'>
      <h2 className="text-3xl font-bold mb-4">Learn More</h2>
      <div className="flex space-x-4">
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
      </section>
      <section className="my-8 mx-12 bg-gray-50 p-4 ">
        <h2 className="text-3xl font-bold mb-4">Price</h2>
        <p className='text-3xl font-semibold	'>{formatNumberWithCommas(res.data.price && res.data.price.toLocaleString())} AED </p>
      </section>
      <section className="my-8 mx-12 bg-gray-50 p-4 ">
        <h2 className="text-3xl font-bold mb-4">Date Posted</h2>
        <p className='text-3xl font-semibold	'>{new Date(res.data.createdAt).toLocaleDateString()}</p>
      </section>
     

      </div>
      <section className='my-8 mx-12 bg-gray-50 p-4 hidden md:block'>
      <h2 className="text-3xl font-bold mb-4"><span className='text-gray-500'>Interested ?</span> Lets Talk Via</h2>
      <div className="flex space-x-4">
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
      </section>
      {/* Amenities */}
   

      {/* Details */}
     

      {/* Call to Action Buttons */}
      <div className='fixed bottom-0 left-0 right-0 bg-gray-500 bg-opacity-25 p-2 md:hidden'>
      <div className="flex justify-between">
        <a href={`https://wa.me/971506144930?text=I'm interested in ${res.data.title}`} target="_blank" rel="noopener noreferrer" className="flex justify-between  items-center bg-green-500 rounded-full text-white px-2 py-2 ">
          WhatsApp
       <span className='mx-1'><FaWhatsapp/></span>

        </a>
        <a href="tel:+971508244755" className="flex justify-between bg-yellow-500 text-white px-4 py-2 rounded-full">
          Call
          <span className='mx-1'><FaPhoneAlt/></span>
        </a>
        <a href="/contact-us" className="flex justify-between bg-gray-500 text-white px-4 py-2 rounded-full">
          Contact us
          <span className='mx-1'><FaMessage/></span>
        </a>
      </div>
      </div>

    </main>



<div className="min-h-screen bg-gray-100 p-6">
<div className="max-w-7xl mx-auto bg-white shadow-lg rounded-lg p-4">
  {/* Header Section */}
  <div className="flex items-center justify-between mb-6">
    <h1 className="text-2xl font-bold">{res.data.title}</h1>
    <div className="flex items-center">
      <img
        src="https://via.placeholder.com/50"
        alt="User Profile"
        className="rounded-full w-10 h-10"
      />
      <span className="ml-2 font-semibold">Johnson</span>
    </div>
  </div>

  {/* Main Content Section */}
  <div className="grid grid-cols-3 gap-6">
    {/* Property Image and Info */}
    <div className="col-span-2">
      <img
        src="https://via.placeholder.com/800x400"
        alt="Property"
        className="w-full h-80 object-cover rounded-lg"
      />

      {/* Property Details */}
      <div className="mt-4">
        <h2 className="text-3xl font-bold">AED {formatNumberWithCommas(res.data.price && res.data.price.toLocaleString())}</h2>
        <p className="text-gray-600">{res.data.address}</p>
        <div className="flex space-x-4 my-2 text-gray-500">
          <span>4 Bed</span>
          <span>4 Baths</span>
          <span>2 Parking</span>
          <span>1254 Sq Ft</span>
        </div>
      </div>

      {/* Property Information */}
      <div className="mt-4">
        <h2 className="text-lg font-semibold">Property Information</h2>
        <p className="text-gray-600">
        {res.data.descriptionEnglish && res.data.descriptionEnglish}
        </p>
      </div>

      {/* Market Trends */}
      <div className="mt-4">
        <h2 className="text-lg font-semibold">Market Trends</h2>
        <div className="bg-gray-100 p-4 rounded-lg">
          <p>Charming lakefront cottage located right on the shoreline</p>
          <div className="mt-2">
            <span className="text-lg font-semibold">Studio rentals</span>: $1,280/mo
          </div>
        </div>
      </div>
    </div>

    {/* Right Sidebar - Agent & Inspection Details */}
    <div className="col-span-1 space-y-4">
      {/* Agent Details */}
      <div className="p-4 border rounded-lg shadow-md">
        <h3 className="font-semibold">Agent Details</h3>
        <p>Mellisa Monroe</p>
        <p>2464 Royal Ln, Mesa, New Jersey</p>
        <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg">
          Contact Agent
        </button>
      </div>

      {/* Inspection Times */}
      <div className="p-4 border rounded-lg shadow-md">
        <h3 className="font-semibold">Inspection Times</h3>
        <p>Inspections are still happening</p>
        <p>Wednesday, 30 Aug - 10:30 am</p>
        <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg">
          Add to Calendar
        </button>
      </div>

      {/* Map */}
      <div className="w-full h-48 bg-gray-200 rounded-lg"></div>
    </div>
  </div>
</div>
</div>

    </>
  );
};

export default PropertyDetailsBeta;

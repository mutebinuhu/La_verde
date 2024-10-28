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
import Link from 'next/link';


 
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
  const cities = [
    { image: 'Alraha.jpg', propertiesCount: 14, cityName: 'Al Raha' },
  ];
  return (
    <>
<div className="min-h-screen bg-gray-100 p-6">
<div className="max-w-7xl mx-auto bg-white shadow-lg rounded-lg p-4">
  {/* Header Section */}
  <div className="flex items-center justify-between mb-6">
    <h1 className="text-lg md:text-2xl font-bold">{res.data.title}</h1>
    <div className="md:flex items-center hidden">
      <img
        src="/la_verde_png.jpg"
        alt="User Profile"
        className="rounded-full w-10 h-10"
      />
      <span className="md:ml-2 text-center font-semibold">La Verde</span>
    </div>
  </div>

  {/* Main Content Section */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {/* Property Image and Info */}
    <div className="col-span-2">
        {/* Image Gallery */}
    <div className='hidden md:block'>
   {<ImagesGallery images={res.data.images} coverImage={res.data.coverImage && res.data.coverImage} />}
    </div>
      <div className='md:hidden'>
      <ImagesSlideShow   images={res.data.images}/>
      </div>

      {/* Property Details */}
      <div className="mt-4">
        <h2 className="text-3xl font-bold">AED {formatNumberWithCommas(res.data.price && res.data.price.toLocaleString())}</h2>
        <p className="text-gray-600">{res.data.address}</p>
        <div className="flex space-x-4 my-2 text-gray-500">
          <span>{res.data.bedrooms}  Bed</span>
          <span>{res.data.bathrooms} Baths</span>
         {/** <span>2 Parking</span> */}
          <span>{res.data.areaSquare} Sq Ft</span>
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
      {/* 
      <div className="mt-4">
        <h2 className="text-lg font-semibold">Market Trends</h2>
        <div className="bg-gray-100 p-4 rounded-lg">
          <p>Charming lakefront cottage located right on the shoreline</p>
          <div className="mt-2">
            <span className="text-lg font-semibold">Studio rentals</span>: $1,280/mo
          </div>
        </div>
      </div>
      */}
      <section className="mt-4">
        <h2 className="text-lg font-semibold">Amenities</h2>
        <div className='bg-gray-100 p-4 rounded-lg'>
        <ul className="grid grid-cols-2 md:grid md:grid-cols-4">
          {res.data.amenities.map((amenity, index) => (
            <li key={index} className='flex space-x-4 py-2 bg-white m-1  p-2 '><FaRegCheckCircle className=' text-blue-500 hidden md:block'/><span>{amenity}</span></li>
          ))}
        </ul>
        </div>
      </section>
      <section className="mt-4">
        <h2 className="text-lg font-semibold py-2">Are You interested <span className='text-gray-500'>Let’s Connect and Make It Happen! Let’s Chat Today</span></h2>
        <div className='bg-gray-100 p-4 rounded-lg'>
        <p>We’re here to help, so don’t hesitate!</p>
        <h2 className="text-lg font-bold mb-4"></h2>
      <div className="flex space-x-6 hidden md:block ">
        <a href={`https://wa.me/971506144930?text=I'm interested in ${res.data.title}`} target="_blank" rel="noopener noreferrer" className="bg-green-500 rounded-3xl  font-bold text-white px-4 py-2 ">
          WhatsApp
        </a>
        <a href={`mailto:marketing@laverde.ae?subject=Inquiry about ${res.data.title}`} className="bg-blue-500 text-white px-4 py-2 rounded-full">
          Email
        </a>
        <a href="tel:+971508244755" className="bg-orange-500 text-white px-4 py-2 rounded-full">
          Call
        </a>
        <a href="/contact-us" className="bg-red-500 text-white px-4 py-2 rounded-full">
          Contact Us
        </a>
        </div>
        <p className='mt-4'>Our team responds quickly</p>
        </div>
      </section>
    </div>

    {/* Right Sidebar - Agent & Inspection Details */}
    <div className="col-span-1 space-y-4 hidden md:block">
      {/* Agent Details */}
      <div className="p-4 border rounded-lg shadow-md">
        <h3 className="font-semibold">Agent Details</h3>
        <p>Amir Moataz</p>
        <p>Office 42, Al Jazeera Towers - Hamdan Bin Mohammed St- Abu Dhabi</p>
       <div className='mt-4'>
       <Link href={`https://wa.me/971506144930?text=Hi, tell me more about this ${res.data.title}`} target="_blank" rel="noopener noreferrer" className=" bg-blue-500 text-white py-2 px-4 rounded-lg">
          Contact Agent
        </Link>
       </div>
      </div>

      {/* Inspection Times */}
      <div className="p-4 border rounded-lg shadow-md">
        <h3 className="font-semibold">Viewing Times</h3>
        <p>Viewings are still happening</p>
        <p>Monday - Saturday</p>
       
        <div className='mt-4'>
       <Link href={`https://wa.me/971506144930?text=hi can we schedule a viewing for this  ${res.data.title}`} target="_blank" rel="noopener noreferrer" className=" bg-blue-500 text-white py-2 px-4 rounded-lg">
          Request Viewing
        </Link>
       </div>
      </div>

      {/* Map */}
      <div className="w-full h-48 bg-gray-200 rounded-lg">
      <Link href={"/properties/668fc00bd8753148863df6f7"}>
        <div className="relative overflow-hidden rounded-lg shadow-md">
      <img src="/baraka/baraka1.png" alt="alt" className={`w-full  object-cover h-56`} />
      <div className="absolute inset-0 flex flex-col justify-between p-4 text-white hover:gray-400 hover:bg-opacity-10">
        <div className='bg-black bg-opacity-10 shadow'>
          <p className="text-sm font-bold">Invest in The Bay Residence 2
          </p>
          <h2 className="text-2xl font-semibold">Starting from 760000</h2>
        </div>
      </div>
    </div>
    </Link>
      </div>
    </div>
  </div>
</div>
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
</div>

    </>
  );
};

export default PropertyDetailsBeta;

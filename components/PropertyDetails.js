"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight, FaEnvelope, FaPhone, FaWhatsapp, FaInfoCircle} from 'react-icons/fa';
import { FaLocationDot } from "react-icons/fa6";
import SlideshowCard from './SlideshowCard';



const PropertyDetails = ({ property }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % property.images.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + property.images.length) % property.images.length);
  };

  return (

    <div className="max-w-4xl md:mx-auto p-4 mt-10 bg-white rounded-lg w-full  overflow-hidden">
      <div className="md:flex ">
        {/* Slideshow Section */}
        <div className="w-full md:w-2/4 relative rounded-lg">
          <img
            src={property.images[currentImageIndex]}
            alt={`Property Image ${currentImageIndex + 1}`}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
          <button
            onClick={handlePrevImage}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full hover:bg-gray-900 transition duration-300"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={handleNextImage}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full hover:bg-gray-900 transition duration-300"
          >
            <FaArrowRight />
          </button>
        </div>

        {/* Details Section */}
        <div className="w-3/4 p-6 border rounded w-full">
          <>
            
              
         <Link href={`/properties/${property._id}/`}>
          <h2 className="text-xl md:text-3xl font-bold mb-4 transition-transform duration-500 hover:scale-105">{property.title}</h2>
         </Link>
          <Link href={`/properties/`}>
          <p className="text-gray-700 mb-2"><span className='flex items-center space-x-2'><FaLocationDot/>{property.address}</span></p>
          <h3 className="text-xl md:text-2xl font-semibold">Amenities:</h3>
          <ul className="flex flex-wrap items-center py-2 text-gray-900 dark:text-white">
            {property.amenities.slice(0,3).map((amenity, index) => (
                
                <>
                |<li className='me-4 hover:underline md:me-6' key={index}>{amenity}</li>
                </>
            ))}
          </ul>
          <p className="text-xl font-semibold mb-2 text-3xl font-bold">Price: AED {property.price}</p>
          </Link>

          <div className="md:flex md:space-x-2 ">
            <Link
              href={`mailto:marketing@laverde.ae?subject=Inquiry about ${property.title}`}
              className="flex mb-2 items-center justify-center bg-blue-500 text-white p-1 md:px-4 md:py-2 rounded hover:bg-blue-700 transition duration-300"
            >
              <FaEnvelope className="mr-2" /> Email
            </Link>
            <Link
              href={`https://wa.me/971506144930?text=I'm interested in ${property.title}`}
              className="flex mb-2 items-center justify-center bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 transition duration-300"
            >
              <FaWhatsapp className="mr-2" /> WhatsApp
            </Link>
            <Link
              href="tel:+971508244755"
              className="flex mb-2  items-center justify-center bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 transition duration-300"
            >
              <FaPhone className="mr-2" /> Call
            </Link>
            <Link
              href="/contact-us"
              className="flex mb-2   items-center justify-center bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-700 transition duration-300"
            >
              <FaInfoCircle className="mr-2" /> Contact Us
            </Link>
          </div>
     
          </>
        </div>
      </div>
    </div>

  );
};

export default PropertyDetails;


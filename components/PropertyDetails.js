import Link from 'next/link';
import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight, FaEnvelope, FaPhone, FaWhatsapp, FaInfoCircle} from 'react-icons/fa';
import { FaBath, FaBed, FaLocationDot, FaRulerCombined } from "react-icons/fa6";
import SlideshowCard from './SlideshowCard';
import ImageCarousel from './ImageCoursel';
import { formatNumberWithCommas } from '@/utils/commons';



export const metadata = {
  title: "La Verde Property Management - Reliable Property Management in Abu Dhabi",
  description: "Looking for reliable property management in Abu Dhabi? La Verde Property Management L.L.C is your trusted partner for buying, selling, and renting properties. Experience exceptional service and personalized solutions. Contact us today!",
};

const PropertyDetails = ({ property }) => {
  {
    /**
     * 
     * 
     * const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % property.images.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + property.images.length) % property.images.length);
  };

     */
  }

  const Details = () =>{
    return(
      <Link href={property.project ? `/projects/${property.title}/`:`/properties/${property._id}/`} className=''>
   
      <div className="max-w-6xl md:mx-auto mb-8  md:border shadow-md  w-full  rounded-2xl  overflow-hidden">
        <div className="md:flex  md:h-72 ">
          {/* Slideshow Section */}
          <div className="w-full md:w-2/4 ">
            <img
              src={property.coverImage ? property.coverImage : property.images[0]}
              alt={`Property Image ${property.coverImage ? property.coverImage : property.images[0]}`}
              className="w-full  md:h-full h-68 object-cover transition-transform duration-500 hover:scale-105"
            />
           {
            /**
             * 
             * 
             *  <button
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
             */
           }
          </div>
  
          {/* Details Section */}
          <div className="w-3/4   relative   px-4 py-2">
            <>
              
                
            <h2 className="text-xl capitalize md:text-3xl font-bold mb-2 transition-transform duration-500 hover:scale-105">{property.title}</h2>
            <p className="text-xl text-gray-700 font-semibold mb-2 text-3xl font-bold">{property.completionStatus=="offPlanPrimary" ? "Prices start from:" :"Price:"} { formatNumberWithCommas(property.price)} AED </p>
       
       
            <p className="text-gray-700 mb-2"><span className='flex items-center space-x-2'><FaLocationDot/>{property.address}</span></p>
            <h3 className="text-xl md:text-2xl font-semibold">Amenities:</h3>
            <ul className="flex flex-wrap items-center py-2 text-gray-900 dark:text-white">
              {property.amenities.slice(0,3).map((amenity, index) => (
                  
                  <>
                  |<li className='me-4 hover:underline md:me-6' key={index}>{amenity}</li>
                  </>
              ))}
            </ul>
           
  
            <div className='absolute bottom-0 hidden md:block '>
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
             
            </div>
            </>
            
          </div>
        </div>
        <div className='md:hidden flex bg-gray-200 justify-between'>
              <Link
                href={`mailto:marketing@laverde.ae?subject=Inquiry about ${property.title}`}
                className="flex m-2 items-center bg-gray-100 rounded-full p-4 justify-center    md:px-4 md:py-2 rounded hover:bg-blue-700 transition duration-300"
              >
                <FaEnvelope className="text-2xl text-blue-500" />
              </Link>
              <Link
                href={`https://wa.me/971506144930?text=I'm interested in ${property.title}`}
                className="flex m-2 items-center bg-gray-100 rounded-full p-4 justify-center    md:px-4 md:py-2 rounded hover:bg-blue-700 transition duration-300"
              >
                <FaWhatsapp className="text-2xl  text-green-500" />
              </Link>
              <Link
                href="tel:+971508244755"
                className="flex m-2 items-center bg-gray-100 rounded-full p-4 justify-center    md:px-4 md:py-2 rounded hover:bg-blue-700 transition duration-300"
              >
                <FaPhone className="text-2xl" /> 
              </Link>
              <Link
                href="/contact-us"
                className="flex m-2 items-center bg-gray-100 rounded-full p-4 justify-center    md:px-4 md:py-2 rounded hover:bg-blue-700 transition duration-300"
              >
                <FaInfoCircle className="text-2xl text-[#164849]" />
              </Link>
              </div>
      </div>
      </Link>
    )
  }
  console.log("property", property)
  return ( 
    
    <>
<Link href={property.project ? `/projects/${property.title}/`:`/properties/${property._id}/`} className='h-full'>
 <div className="max-w-sm h-full rounded mb-4 md:mb-0 w-full overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <div className="relative">
        <img
          className="w-full h-48 object-cover transform hover:scale-105 transition-transform duration-300 ease-in-out"
          src={property.coverImage ? property.coverImage : property.images[0]} // Replace with your image URL
          alt="Property"
        />
        <span className="absolute top-2 left-2 bg-[#104E3E] text-white text-xs font-semibold px-2 py-1 rounded capitalize">
         {property.purpose}
        </span>
      </div>
      <div className="p-4">
        <h2 className="text-sm font-semibold mb-2">{property.title + "  " +property.address}</h2>
        <p className="text-gray-700 text-base mb-4">{property.price && property.price.toLocaleString()} AED</p>
        <div className="flex items-center text-sm justify-between text-gray-600">
          <div className="flex items-center ">
            <FaBed className="mr-1" />
            <span>{property.bedrooms} Bed</span>
          </div>
          <div className="flex items-center">
            <FaBath className="mr-1" />
            <span>{property.bathrooms} Bath</span>
          </div>
          <div className="flex items-center">
            <FaRulerCombined className="mr-1" />
            <span>{property.areaSquare}sqft</span>
          </div>
        </div>
      </div>
    </div>
    </Link>
    
    </>
  );
};

export default PropertyDetails;


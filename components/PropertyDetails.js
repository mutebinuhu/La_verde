"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight, FaEnvelope, FaPhone, FaWhatsapp, FaInfoCircle } from 'react-icons/fa';
import 'tailwindcss/tailwind.css';

const PropertyDetails = ({ property }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % property.images.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + property.images.length) % property.images.length);
  };

  return (
    <div className="max-w-4xl md:mx-auto mx-8 mt-10 bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="md:flex">
        {/* Slideshow Section */}
        <div className="w-full md:w-1/4 relative">
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
        <div className="w-3/4 p-6">
          <h2 className="text-xl md:text-3xl font-bold mb-4 transition-transform duration-500 hover:scale-105">{property.title}</h2>
          <p className="text-gray-700 mb-2">{property.address}</p>
          <p className="text-xl font-semibold mb-4">Price: AED {property.price}</p>
          <h3 className="text-xl md:text-2xl font-semibold mb-2">Amenities:</h3>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            {property.amenities.map((amenity, index) => (
              <li key={index}>{amenity}</li>
            ))}
          </ul>
          <div className="flex space-x-2">
            <a
              href={`mailto:marketing@laverde.ae?subject=Inquiry about ${property.title}`}
              className="flex items-center justify-center bg-blue-500 text-white p-1 md:px-4 md:py-2 rounded hover:bg-blue-700 transition duration-300"
            >
              <FaEnvelope className="mr-2" /> Email
            </a>
            <a
              href={`https://wa.me/971506144930?text=I'm interested in ${property.title}`}
              className="flex items-center justify-center bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 transition duration-300"
            >
              <FaWhatsapp className="mr-2" /> WhatsApp
            </a>
            <a
              href="tel:+971508244755"
              className="flex items-center justify-center bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 transition duration-300"
            >
              <FaPhone className="mr-2" /> Call
            </a>
            <Link
              href="/contact-us"
              className="flex items-center justify-center bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-700 transition duration-300"
            >
              <FaInfoCircle className="mr-2" /> Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;


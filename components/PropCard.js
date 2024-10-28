import React from 'react';
import { FaBed, FaBath, FaWhatsapp, FaPhone, FaEnvelope } from 'react-icons/fa';

const PropCard = ({image}) => {
  return (
    <div className="flex flex-col lg:flex-row bg-white shadow-md rounded-lg overflow-hidden w-full lg:max-w-5xl mx-auto">
      {/* Image Section */}
      <div className="w-full lg:w-1/3">
        <img 
          src={image} 
          alt="Property" 
          className="object-cover w-full h-72"
        />
      </div>

      {/* Content Section */}
      <div className="w-full lg:w-2/3 p-4 flex flex-col justify-between">
        {/* Price and Description */}
        <div>
          <h2 className="text-gray-700 font-semibold text-xl">
            Price AED 74,999
          </h2>
          <p className="text-gray-500 mt-1">UNFURNISHED | SPACIOUS | STUDIO APARTMENT</p>

          {/* Features */}
          <div className="flex items-center space-x-4 mt-2 text-gray-500">
            <div className="flex items-center space-x-1">
              <FaBed />
              <span>Studio</span>
            </div>
            <div className="flex items-center space-x-1">
              <FaBath />
              <span>1 Bath</span>
            </div>
            <div className="flex items-center space-x-1">
              <span>📏</span>
              <span>707 Sqft</span>
            </div>
          </div>

          {/* Location */}
          <div className="mt-2 text-gray-700">
            <span className="font-semibold">Business Bay, Bay Square 9</span>
            <p className="text-sm text-gray-500">Apartment for Rent in Bay Square</p>
          </div>
        </div>

        {/* Contact Icons */}
        <div className="flex space-x-4 mt-4">
          <button className="p-2 rounded-full bg-green-500 text-white hover:bg-green-600">
            <FaWhatsapp />
          </button>
          <button className="p-2 rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300">
            <FaPhone />
          </button>
          <button className="p-2 rounded-full bg-red-500 text-white hover:bg-red-600">
            <FaEnvelope />
          </button>
          <button className="p-2 rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300">
            Follow
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropCard;

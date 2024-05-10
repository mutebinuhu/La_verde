// components/PropertyCard.js
import React from 'react';

const PropertyCard = ({ image, title, description, amenities }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-600 mb-4">{description}</p>
        <ul className="text-gray-600">
          {amenities.map((amenity, index) => (
            <li key={index} className="flex items-center mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-5a1 1 0 011-1h2a1 1 0 011 1v1a1 1 0 01-1 1h-2a1 1 0 01-1-1v-1zm1-7a3 3 0 100-6 3 3 0 000 6zm-1 1a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 01-1 1h-2a1 1 0 01-1-1V7z"
                  clipRule="evenodd"
                />
              </svg>
              {amenity}
            </li>
          ))}
        </ul>
        <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded hover:bg-blue-600">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default PropertyCard;

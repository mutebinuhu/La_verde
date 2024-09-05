import React from 'react';

const PropertyCard = ({ 
  image, 
  title, 
  location, 
  price, 
  pricePerSqFt, 
  bedrooms, 
  bathrooms, 
  garages, 
  area, 
  type, 
  agentName, 
  timeAgo 
}) => {
  return (
    <div className="flex bg-white shadow-md rounded-lg overflow-hidden">
      <img src={image} alt={title} className="w-1/3 object-cover" />

      <div className="w-2/3 p-4 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between">
            <span className="bg-green-500 text-white text-xs px-2 py-1 rounded">FEATURED</span>
            <span className="text-gray-500 text-xs">FOR SALE</span>
          </div>
          <h3 className="text-lg font-semibold mt-2">{title}</h3>
          <p className="text-sm text-orange-500">{location}</p>
        </div>

        <div className="flex items-center mt-2 text-gray-600">
          <div className="flex items-center mr-4">
            <span className="material-icons">hotel</span>
            <span className="ml-1">{bedrooms}</span>
          </div>
          <div className="flex items-center mr-4">
            <span className="material-icons">bathtub</span>
            <span className="ml-1">{bathrooms}</span>
          </div>
          <div className="flex items-center mr-4">
            <span className="material-icons">directions_car</span>
            <span className="ml-1">{garages}</span>
          </div>
          <div className="flex items-center">
            <span className="material-icons">square_foot</span>
            <span className="ml-1">{area} Sq Ft</span>
          </div>
        </div>

        <div className="mt-4">
          <p className="text-sm text-gray-500">{type}</p>
          <div className="text-xl font-semibold text-gray-800">
            {price}
          </div>
          <div className="text-sm text-gray-500">
            {pricePerSqFt}/sq ft
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <div className="text-sm text-gray-500">
            <p>👤 {agentName}</p>
            <p>{timeAgo}</p>
          </div>
          <button className="bg-orange-500 text-white px-4 py-2 rounded">
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;

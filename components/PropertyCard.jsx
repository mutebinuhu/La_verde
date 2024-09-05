import React from 'react';

const PropertyCard = ({ imageUrl, title, description, bedrooms, bathrooms, area, price }) => {
    console.log("image", imageUrl)
  return (
    <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
      {/* Image Section */}
      <div className="md:w-1/4">
        <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
      </div>

      {/* Details Section */}
      <div className="flex-1 p-6 flex flex-col justify-between relative">
        <div>
          <div className="flex justify-between items-start">
            <h2 className="text-xl font-semibold">{title}</h2>
            <span className="text-lg font-bold text-blue-600">{price}</span>
          </div>
          <p className="mt-2 text-gray-600">{description}</p>
          <div className="mt-4">
            <div className="flex items-center">
              <span className="text-gray-700">Bedrooms:</span>
              <span className="ml-2">{bedrooms}</span>
            </div>
            <div className="flex items-center mt-2">
              <span className="text-gray-700">Bathrooms:</span>
              <span className="ml-2">{bathrooms}</span>
            </div>
            <div className="flex items-center mt-2">
              <span className="text-gray-700">Area:</span>
              <span className="ml-2">{area} sqm</span>
            </div>
          </div>
        </div>
        <button className="mt-4 absolute right-0 bottom-0 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default PropertyCard;
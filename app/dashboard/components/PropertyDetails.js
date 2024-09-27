import { MyContext } from '@/context';
import React from 'react';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import { useMyContext } from '../context/MyContext';

const PropertyDetails = ({ property }) => {
    
    const { singleProperty,setSingleProperty } = useMyContext();
    property = singleProperty
    
    if (!property) return null;
  return (
    <div className="max-w-4xl mx-auto p-2 bg-white shadow-md rounded" >
      <div className='flex justify-between '>
                    <h2 className="text-2xl font-semibold mb-6">Property Details</h2>
                    <IoIosCloseCircleOutline className='text-3xl' onClick={()=>setSingleProperty(false)} />
                  </div>
    <div className="flex flex-col justify-between h-screen p-6 bg-gray-50">
      {/* Header Section */}
      <div className="space-y-2">
        <p className="text-gray-600">{property.address}</p>
        <p className="text-gray-600">Price: AED {property.price}</p>
        <p className="text-gray-600">Location: {property.location}</p>
        <p className="text-gray-600">Category: {property.category}</p>
        <p className="text-gray-600">Subcategory: {property.subCategory}</p>
        <p className="text-gray-600">Status: {property.status}</p>
        <p className="text-gray-600">Purpose: {property.purpose}</p>
      </div>

      {/* Image Gallery */}
      <div className="my-6">
        {property.images.length > 0 ? (
          <div className="grid grid-cols-2 gap-4">
            {property.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Property Image ${index + 1}`}
                className="w-full h-48 object-cover rounded-lg"
              />
            ))}
          </div>
        ) : (
          <p>No images available</p>
        )}
      </div>

      {/* Description Section */}
      <div className="flex-1">
        <h2 className="text-xl font-semibold">Description</h2>
        <p className="mt-2 text-gray-700">{property.descriptionEnglish}</p>
      </div>

      {/* Amenities */}
      <div className="mt-4">
        {property.amenities.length > 0 && (
          <div>
            <h2 className="text-xl font-semibold">Amenities</h2>
            <ul className="list-disc list-inside mt-2 text-gray-700">
              {property.amenities.map((amenity, index) => (
                <li key={index}>{amenity}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Footer Section */}
      <div className="mt-6">
        <p className="text-gray-600">Created By: {property.createdBy}</p>
        <p className="text-gray-600">Units Left: {property.unitsLeft || 'N/A'}</p>
      </div>
    </div>
    </div>
  );
};

export default PropertyDetails;

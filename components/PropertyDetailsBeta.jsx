import React from 'react';
import ImagesGallery from './ImagesGallery';
import "../app/globals.css";
import { redirect } from 'next/navigation'
import ImagesSlideShow from './ImagesSlideShow';
 
async function fetchPropertyId(id) {
 
   const res = await fetch(process.env.API_URL+"api/properties/"+id)
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
    <div className="container mx-auto p-4">
      
      {/* Image Gallery */}
    <div className='hidden md:block'>
    <ImagesGallery images={property.images} />
    </div>
      <div className='md:hidden'>
      <ImagesSlideShow   images={property.images}/>
      </div>

      {/* Description */}
      <h1 className="text-4xl font-bold mb-4">Property Details</h1>
      <p>{res.data.title} | {res.data.address}</p>

      <div className="mb-4">
        <h2 className="text-2xl font-semibold mb-2">Description</h2>
        <p>AED {res.data.price}</p>
        <p>{res.data.descriptionEnglish}</p>

      </div>

      {/* Amenities */}
      <div className="mb-4">
        <h2 className="text-2xl font-semibold mb-2">Amenities</h2>
        <ul className="list-disc pl-5">
          {res.data.amenities.map((amenity, index) => (
            <li key={index}>{amenity}</li>
          ))}
        </ul>
      </div>

      {/* Details */}
      <div className="mb-4">
        <h2 className="text-2xl font-semibold mb-2">Details</h2>
        <p><strong>Bedrooms:</strong> {res.data.bedrooms}</p>
        <p><strong>Bathrooms:</strong> {res.data.bathrooms}</p>
        <p><strong>Date Posted:</strong> {new Date(res.data.createdAt).toLocaleDateString()}</p>
      </div>

      {/* Call to Action Buttons */}
      <div className="flex space-x-4">
        <a href="https://wa.me/?text=I'm interested in the property" target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white px-4 py-2 rounded-md">
          WhatsApp
        </a>
        <a href="mailto:info@example.com" className="bg-blue-500 text-white px-4 py-2 rounded-md">
          Email
        </a>
        <a href="tel:+123456789" className="bg-yellow-500 text-white px-4 py-2 rounded-md">
          Call
        </a>
        <a href="/contact-us" className="bg-gray-500 text-white px-4 py-2 rounded-md">
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default PropertyDetailsBeta;

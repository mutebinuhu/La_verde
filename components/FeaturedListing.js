import React from 'react';
import FeaturedItem from './FeaturedItem';



const FeaturedListing = () => {
  const featuredItems = [
    { 
      imageSrc: 'https://res.cloudinary.com/mutebinuhu/image/upload/v1720696815/o6x8z3e3msnvp4vqgmae.jpg',
      tag: 'For Sale',
      title: 'Modern Apartment',
      price: '760,000 AED',
      bedrooms: 3,
      bathrooms: 2,
      squareFeet: 1500,
      url:""
    },
    {
      imageSrc: 'https://via.placeholder.com/300',
      tag: 'For Rent',
      title: 'Luxury Villa',
      price: '$2,500/mo',
      bedrooms: 4,
      bathrooms: 3,
      squareFeet: 2000,
      url:""
    },
    {
      imageSrc: 'https://via.placeholder.com/300',
      tag: 'For Sale',
      title: 'Cozy House',
      price: '$350,000',
      bedrooms: 2,
      bathrooms: 1,
      squareFeet: 1200,
      url:""
    },
  ];

  return (
    <div className="container mx-auto p-4 md:p-12">
      <div className="mb-8">
        <h2 className="text-xl  font-bold text-[#FFA72A] ">Featured Listings</h2>
        <p className="text-gray-600 text-3xl font-bold">Explore our top properties</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredItems.map((item, index) => (
          <FeaturedItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedListing;
import React from 'react';
import FeaturedItem from './FeaturedItem';



const FeaturedListing = () => {
  const featuredItems = [
    { 
      imageSrc: 'mayan.jpg',
      tag: 'For Sale',
      title: 'Spacious studio in Mayan - Yas Island',
      price: '1,400,000 AED',
      bedrooms: 0,
      bathrooms: 1,
      squareFeet: 1500,
      url:"",
      type:"studio"
    },
    {
      imageSrc: 'talatower.jpg',
      tag: 'For Rent',
      title: '3 bedrooms in Marina Square - Alreem Island',
      price: '150,000 AED',
      bedrooms: 3,
      bathrooms: 5,
      squareFeet: 2100,
      url:""
    },
    {
      imageSrc: 'mag5.jpg',
      tag: 'For Rent',
      title: '3 bhk + maid + Kitchen Appliances- Al Reem',
      price: '220,000',
      bedrooms: 3,
      bathrooms: 3,
      squareFeet: 2000,
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
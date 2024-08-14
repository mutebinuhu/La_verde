import React from 'react';

const FeaturedItem = ({ imageSrc, tag, title, price, bedrooms, bathrooms, squareFeet }) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
      <div className="relative">
        <img src={imageSrc} alt={title} className="w-full h-64 object-cover" />
        <div className="absolute top-0 left-0 bg-blue-600 text-white px-3 py-1 text-sm">{tag}</div>
      </div>
      <div className="p-4 bg-white">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-600">{price}</p>
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center text-gray-600">
            <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
            {bedrooms}
          </div>
          <div className="flex items-center text-gray-600">
            <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
            {bathrooms}
          </div>
          <div className="flex items-center text-gray-600">
            <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
            {squareFeet} sq.ft
          </div>
        </div>
      </div>
    </div>
  );
};

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
    },
    {
      imageSrc: 'https://via.placeholder.com/300',
      tag: 'For Rent',
      title: 'Luxury Villa',
      price: '$2,500/mo',
      bedrooms: 4,
      bathrooms: 3,
      squareFeet: 2000,
    },
    {
      imageSrc: 'https://via.placeholder.com/300',
      tag: 'For Sale',
      title: 'Cozy House',
      price: '$350,000',
      bedrooms: 2,
      bathrooms: 1,
      squareFeet: 1200,
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold">Featured Listings</h2>
        <p className="text-gray-600">Explore our top properties</p>
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
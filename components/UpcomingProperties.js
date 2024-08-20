// components/LatestProperties.js
import Link from 'next/link';
import React from 'react';

const properties = [
  {
    id: 1,
    name: ' Gardenia Bay',
    description: " A new waterfront development at Yas Island - Book Unit Now",
    price: '895,000 ',
    image: './gardenia.jpg',
    paymentPlan: '5% down payment, 35/65 Payment Plan',
    link:"https://laverde.ae/properties/665dc6f8da49609585431a40"
  },
  {

    id: 2,
    name: 'Saadiyat Lagoons',
    description: 'A unique residential experience on Saadiyat Island',
    price: '7,750,000',
    image: '/lagoons.webp',
    paymentPlan: '10% down payment, 40/60 payment Plan',
    link:"https://laverde.ae/properties/6662c3eb29282e4ab1d67935"
  },
  {
    id: 3,
    name: 'The Bay Residence 2',
    description: 'Your Exclusive Waterfront Retreat - Secure a Unit Now',
    price: '760,000',
    image: '/thebay2.png',
    paymentPlan: '10% down payment, 40/50 payment plan',
    link:"https://laverde.ae/properties/668fc00bd8753148863df6f7"
  },
  {
    id: 4,
    name: ' Reeman Living | Al Shamkha',
    description: "Your Oasis in Al Shamkha, Abu Dhabi - Book Unit Now",
    price: '400,000',
    image: './Reeman-Living-al-Shamkha-Royallp-4-1024x576.jpg',
    paymentPlan: '5% down payment, 35/65 Payment Plan',
    link:""
  },
  {
    id: 5,
    name: ' Fay Alreeman 2|  Al Shamkhah ',
    description: "Spacious homes with green spaces - Book Unit Now",
    price: '2,700,000',
    image: './ALDAR_AlReeman2PH3_C (1).jpg',
    paymentPlan: '10% down payment, 50/50 Payment Plan',
    link:""
  },
  
  
];

const UpcomingProperties = () => {
  return (

    <div className="sm:py-16 md:px-4 py-12 md:py-20">
      <div className='container px-6 py-12 mx-auto'>
        <div className="mb-8">
          <h2 className="text-xl font-bold text-[#FFA72A]">Up Coming Projects</h2>
          <p className="text-gray-600 text-3xl font-bold">A list of Upcoming projects</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property) => (
            <div key={property.id} className="border rounded-lg shadow-lg p-4 transition-all duration-300 hover:scale-105">
              <img src={property.image} alt={property.name} className="w-full h-48 object-cover rounded-t-lg " />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{property.name}</h3>
                <p className="text-gray-600 mb-4 font-semibold">{property.description}</p>
                <div className="text-sm text-gray-500">{property.paymentPlan}</div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-lg font-bold">{property.price} AED</span>
                  <Link target='_blank' href={property.link} className="bg-[#104E3E] text-white px-4 py-2 rounded-lg hover:bg-[#0c3b2f]">
                    View Details
                  </Link >
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UpcomingProperties;
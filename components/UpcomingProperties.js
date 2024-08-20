// components/LatestProperties.js
import React from 'react';

const properties = [
  {
    id: 1,
    name: 'Saadiyat Lagoons',
    description: 'A unique residential experience on Saadiyat Island',
    price: '7,750,000',
    image: '/lagoons.webp',
    paymentPlan: '50% down payment, 5 years installment'
  },
  {
    id: 2,
    name: 'Gardenia Bay',
    description: 'A new waterfront development at Yas Island - Secure a Unit Now',
    price: '895,000',
    image: '/gardenia.jpg',
    paymentPlan: '30% down payment, 3 years installment'
  },
  {
    id: 3,
    name: 'Tiger Sky Tower',
    description: "World's Largest Residential Tower - Book Unit Now",
    price: '2,200,000',
    image: 'tiger.jpg',
    paymentPlan: '40% down payment, 4 years installment'
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
                  <button className="bg-[#104E3E] text-white px-4 py-2 rounded-lg hover:bg-[#0c3b2f]">
                    View Details
                  </button>
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
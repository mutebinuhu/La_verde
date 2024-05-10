import LeadForm from '@/components/LeadForm';
import { Button } from '@nextui-org/button';
import Link from 'next/link';
import React from 'react';
import { MdLocationCity } from "react-icons/md";
import DetailsTable from './Table';


// components/AmenitiesCard.js
const amenities = [
    {
      id: 1,
      title: 'Swimming Pool',
      icon: (
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-5a1 1 0 011-1h2a1 1 0 011 1v1a1 1 0 01-1 1h-2a1 1 0 01-1-1v-1zm1-7a3 3 0 100-6 3 3 0 000 6zm-1 1a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 01-1 1h-2a1 1 0 01-1-1V7z"
          clipRule="evenodd"
        />
      ),
      description: 'Enjoy a refreshing swim in our state-of-the-art pool.',
    },
    {
      id: 2,
      title: 'Fitness Center',
      icon: (
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-5a1 1 0 011-1h2a1 1 0 011 1v1a1 1 0 01-1 1h-2a1 1 0 01-1-1v-1zm1-7a3 3 0 100-6 3 3 0 000 6zm-1 1a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 01-1 1h-2a1 1 0 01-1-1V7z"
          clipRule="evenodd"
        />
      ),
      description: 'Stay in shape with our fully-equipped fitness center.',
    },
    // Add more amenities as needed
  ];
const AmenitiesCard = ({ title, icon, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-4">
        <div className="flex items-center mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 mr-2 text-blue-500"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            {icon}
          </svg>
          <h2 className="text-xl font-semibold">{title}</h2>
        </div>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const page = () => {
    return (
        <main>
            <section className=''>
                    <div className='md:flex'>
                    <div className='mx-12 bg-white md:grid grid-cols-2 w-1/2 gap-4'>
                        <div className='bg-blue-300  '>
                            image-1
                        </div>
                            <div className='bg-blue-400 h-[275px]'>
                            image-2
                            </div>
                            <div className='bg-green-400 h-[275px]'>
                            image-3
                            </div>
                            <div className='bg-green-400 h-[275px]'>
                            image-4
                            </div>
                            <div className='bg-green-400 h-[275px]'>
                            image-5
                            </div>
                            <div className='bg-green-400 h-[275px]'>
                            image-6
                            </div>

                    </div>
                    <div className='w-1/2 md:flex justify-center '>
                       <div className='py-16'>
                       <h1 className='text-6xl text-bold text-[#104e3e]'>Reportage Tower</h1>
                       <p className='py-6  text-3xl'>Located in Al Maryah Island, Abu Dhabi.</p>
                       <Link href="/contact-us" className='my-6'>
                            <Button className="bg-[#104e3e]  hover:bg-[#104e3e] text-white font-bold p-6 rounded" color="primary">
                                Contact us for Availability
                            </Button>
                        </Link>
                   

                      <div className='py-16'>
                      <DetailsTable/>
                      </div>


                       </div>
                    </div>
                    </div>
                    <div className='md:flex mx-12 space-x-4 relative'>
                        <div className='md:w-2/3' >
                        <section className=''>
                    <h2 className='text-bold text-3xl font-semibold'>About Property</h2>
                    <section className='py-4'>
                    <p>Type : Residential Building</p>
                    <p>Plot Area : 4,361.65 sq.m</p>
                    <p>Total Height : 143.40 m</p>
                    <p>Levels: 2 Basements + Lower Ground + 2 Podiums + Upper Ground + 36 Floors</p>
                    </section>
                   <p className='py-4'>
                   Reportage Tower is a super high-rise residential building with
                    wonderful canal view in Al Maryah Island, Abu Dhabi.
                   </p>
                   <p className='py-4'>
                            Its modern sustainable facade design creates a unique unsurpassed
            look in the centre of the island that is intended to be one of the most
            luxurious destinations in Abu Dhabi. Reportage Tower offers
            contemporary and distinctive high-end residential Apartments,
            delivering the whole luxury lifestyle with close proximity to most of
            Abu Dhabi’s attractions, and is surrounded by promenades, shopping
            malls, hotels, restaurants, cafes, and a sports centre. Reportage Tower
            contains 280 residential units and 12 commercial retails.
                   </p>
                   <p>
                    In terms of design, quality, and space, they have all been built to the
                    highest international standards.
                    </p>
                    </section>
                        </div>
                        <div className=' md:w-1/4  sticky top-0'>
                           <LeadForm/>
                        </div>
                    </div>
                    <section className='mx-12'>
                        <h2 className="text-3xl font-semibold mt-12 mb-8">AMENITIES & SERVICES</h2>
                        <ul className='md:grid grid-col-4'>
                            <li>Access to Al Maryah Promenade</li>
                            <li>Retail shops in Upper Ground floor</li>
                            <li>Restaurants & Cafes in Promenade Level</li>
                            <li>Retail shops in Upper Ground floor </li>
                            <li>Restaurants & Cafes in Promenade Level </li>
                            <li>442 Covered Plot Parking </li>
                            <li>Private Parking for each unit</li>
                            <li>Large Swimming Pool</li>
                            <li>Gymnasium</li>
                            <li>Water Features</li>
                            <li>Retail Shops</li>
                            <li>Shaded Seating Areas</li>
                            <li>Landscape Areas</li> 
                            <li>4 Large Elevators</li>
                            <li>Service Elevator</li>
                        </ul>
      
                    </section>
                    <section className='mx-12'>
                        <h2 className="text-3xl font-semibold mt-12 mb-8">UNIT FEATURES</h2>
                        <ul className='md:grid grid-col-4'>
                            <li>Private Balconies / Terraces as per unit plan</li>
                            <li>Kitchen cabinets and countertops</li>
                            <li>Fully tiled bathrooms, in-suites and guest toilets wherever applicable</li>
                            <li>Double glazed windows </li>
                            <li>Built-in wardrobes in bedrooms </li>
                            <li>Shower in each bathroom </li>
                            <li>Central air conditioning </li>
                            <li>Vanity units & Mirrors</li>
                            <li>Some bedrooms with private bathroom</li>
                            <li>Satellite master antenna and fibre optic connection for high-speed internet access </li>
                            <li>Private Parking for Townhouses</li>
                        </ul>
      
                    </section>
                    <section className='mx-12'>
                        <h2 className="text-3xl font-semibold mt-12 mb-8">LOCATION FEATURES</h2>
                        <ul className='md:grid grid-col-4'>
                            <li>05 minutes walking to The Galleria Al Maryah</li>
                            <li>07 minutes walking to Rosewood Abu Dhabi </li>
                            <li>09 minutes walking to Cleveland Clinic Abu Dhabi</li>
                            <li>03 minutes driving to Four Seasons Hotel </li>
                            <li>05 minutes driving to Al Reem Island </li>
                            <li>05 minutes driving to Beach Rotana Hotel  </li>
                            <li>05 minutes driving to Abu Dhabi Mall </li>
                            <li>05 minutes driving to ACTIVE Al Maryah Sports Centre</li>
                        </ul>
      
                    </section>
            </section>
        </main>
    );
};

export default page;
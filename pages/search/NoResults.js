import { Button } from '@nextui-org/button';
import Link from 'next/link';
import React from 'react';

const NoResults = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="text-center">
        <svg
          className="mx-auto h-12 w-12 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 14l2-2 4 4m0 0l2-2m-2 2V7"
          ></path>
        </svg>
        <h3 className="mt-2 text-6xl py-4 font-medium text-gray-900">No Results Found<span className=''>🤷</span></h3>
        <p className="mt-1 py-4 text-4xl text-gray-500">No worries! Contact us for an updated list tailored just for you.</p>
          <div className='md:flex justify-center items-center'>
          <div className='md:flex space-x-4 py-16'>
        <Link
            isExternal
            showAnchorIcon
            href="/search"
          >
           <Button className='border-2 text-white bg-white bg-[#104e3e]  transform transition-transform hover:scale-105 border-[#104e3e]   py-6 px-6  font-bold rounded'>
                 Home
           </Button>

          </Link>
          <Link
            isExternal
            showAnchorIcon
            href="/contact-us"
          >
           <Button className='border-2 bg-white text-[#104e3e]  transform transition-transform hover:scale-105 border-[#104e3e]   py-6 px-6  font-bold rounded'>
                 Contact Us
           </Button>
           
          </Link>
        </div>
          </div>
      </div>
    </div>
  );
};

export default NoResults;

import Link from 'next/link';
import React from 'react';

const SellComponent = () => {
  return (
    <div className='mx-4'>
        
    <div className="bg-[#104E3E]  container mx-auto  rounded-lg shadow-lg  flex items-center justify-between">
      <div className="flex items-center">
       
        <div className='py-4 md:py-0'>
          {/* Right content */}
          <h2 className="text-xl  font-bold text-[#FFA72A]  py-3 px-6 ">
             Are You Selling ?
          </h2>
          <p className='text-gray-100 text-3xl font-bold py-3 px-6'>
          We deliver accurate property valuation reports
          </p>
          <div className='py-4 px-6 w-full'>
          <Link href="/contact-us" className="font-bold bg-[#FFA72A] mt-2 px-4 py-4 bg-blue-500 text-white rounded hover:bg-[#E09625]">
            Request a Valuation
          </Link>
          </div>
        </div>
      </div>
      <div className='h-full bg-red-200'>
        {/* Image on the extreme right */}
        <img src="https://www.propertyfinder.ae/agent/0/260/200/MODE/5d16dc/258812-84bd8o.webp?ctr=ae" alt="Placeholder" className="hidden md:block " />
      </div>
    </div>
    </div>
  );
};

export default SellComponent;
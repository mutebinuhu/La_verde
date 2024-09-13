"use client"
import Link from 'next/link';
import React from 'react';
import { Fade } from 'react-awesome-reveal';
import FadeImage from './FadeImage';
import { AnimatedButton } from './AnimatedComponents';

const SellComponent = () => {
  return (
    <div className='container md:px-6 py-12 mx-auto'>
        
    <div className="bg-[#104E3E]  container mx-auto  rounded-lg shadow-lg  flex items-center justify-between">
      <div className="flex items-center">
       
        <div className='py-4 md:py-0'>
          {/* Right content */}
          <Fade cascade>
          <h2 className="text-xl  font-bold text-[#FFA72A]   px-6 ">
             Are You Selling ?
          </h2>
          <p className='text-gray-100 text-3xl font-bold py-3 px-6'>
          We deliver accurate property valuation reports
          </p>
          </Fade>
          <div className='py-4 px-6 w-full'>
            <AnimatedButton/>
          </div>
        </div>
      </div>
      <div className='h-full bg-gray-100'>
        {/* Image on the extreme right */}
      <FadeImage url="/workmates/maria.jpeg"/>
      </div>
    </div>
    </div>
  );
};

export default SellComponent;
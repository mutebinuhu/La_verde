import Socials from '@/components/Socials';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaGoogle } from 'react-icons/fa';

const GoogleRating = ({ rating, totalReviews }) => {
  return (
    <div className='md:p-8 p-2 max-w-screen-xl mx-12 md:mx-0 text-center bg-white rounded-lg shadow-md'>
        <p className='text-xl md:text-3xl font-bold py-4'>A Reason To Trust La verde property Management</p>
    <div className="flex flex-col items-center justify-center  md:flex-row md:space-x-4">
      <div className="flex items-center mb-4 md:mb-0">
        <span className="text-4xl font-bold text-yellow-500">{rating}</span>
        <span className="ml-2 text-gray-600">/5</span>
      </div>
      <div className="flex flex-col items-center md:items-start">
        <div className="flex items-center mb-2">
          {[...Array(5)].map((_, index) => (
            <svg
              key={index}
              className={`w-6 h-6 ${
                index < Math.floor(rating) ? 'text-yellow-500' : 'text-gray-300'
              }`}
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
       {/**<p className="text-gray-600">{totalReviews} reviews</p> **/} 
      </div>
      

    </div>
          <Link href="https://www.google.com/search?q=la+verde+property+management&rlz=1C1GCEA_enAE1080AE1109&oq=&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MhIIARAuGCcYrwEYxwEYgAQYigUyBggCEEUYOTIGCAMQRRg7MgcIBBAAGIAEMgcIBRAAGIAEMgYIBhBFGD0yBggHEEUYPNIBCDI1MTBqMGo0qAIIsAIB&sourceid=chrome&ie=UTF-8">
          <div className='flex justify-center items-center'>
        
                <p className='py-2'><Image src="/icons8-google-48.png" className='text-3xl' width={50} height={40}/></p>
            </div>
          </Link>
      <div className='flex justify-center mt-12'>
      <Socials/>
      </div>
    </div>
  );
};

export default GoogleRating;
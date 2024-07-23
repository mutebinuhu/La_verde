import About from '@/components/About';
import React from 'react';
export const metadata = {
    title: "La Verde Property Management | Best Real Estate Agency in Abu Dhabi",
    description: "Trust La Verde Property Management  for all your real estate needs in Abu Dhabi. We provide professional, ethical, and personalized services to ensure a seamless property buying, selling, or renting experience. Get in touch with us now.",
  };
const Page = () => {
    return (
        <div className='bg-gray-200'>
              <h1 className="bg-white text-3xl text-center py-12 leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                About La Verde Property Management
            </h1>
            <About/>
        </div>
    );
}

export default Page;

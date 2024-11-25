import About from '@/components/About';
import React from 'react';
export const metadata = {
    title: "About Us - La Verde Property Management | Best Real Estate Agency in Abu Dhabi",
    description: "Trust La Verde Property Management  for all your real estate needs in Abu Dhabi. We provide professional, ethical, and personalized services to ensure a seamless property buying, selling, or renting experience. Get in touch with us now.",
  };
const Page = () => {
    return (
        <div className='bg-gray-200'>
              
            <About/>
        </div>
    );
}

export default Page;

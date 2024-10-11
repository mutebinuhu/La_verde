import ContactForm from '@/components/Contactus';
import ContactUsMain from '@/components/ContactUsMain';
import Navbar from '@/components/Navbar';
import React from 'react';
export const metadata = {
    title: "La Verde Property Management  - Contact Us",
    description: "Discover exceptional real estate services with La Verde Property Management  in Abu Dhabi. Our experienced team offers personalized solutions for buying, selling, and renting properties. Contact us today to achieve your real estate goals",
  };
const Page = () => {
    return (
        <div className='bg-gray-200'>
             <div className="bg-[#104E3E]">
       <Navbar/>
       </div>
       {/**
        *             <h1 className="bg-white text-3xl text-center py-8 leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">Contact Us Today to Start the Conversation</h1>

        * 
        */}
           {/**
            *  <ContactForm showEmailAndTextBox={true}/>
            */}
            <ContactUsMain/>
        </div>
    );
}

export default Page;

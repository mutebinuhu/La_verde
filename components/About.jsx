import React from 'react';
import LazyYoutube from './LazyYoutube';
import { Button } from '@nextui-org/button';
import Link from 'next/link';
import TeamComponent from './TeamComponent';
import Navbar from './Navbar';

const About = () => {
  return (
    <div className="">
       <div className="bg-[#104e3e]">
       <Navbar/>
       </div>
       
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 ">
        <div className="lg:text-center bg-white py-12">
        
            <section className=' md:flex md:space-x-12 py-12 text-center md:text-left p-8'>
                <div className='md:flex justify-center items-center px-4 bg-white md:w-1/2 ' style={{backgroundImage: "url(" + "baraka/baraka4.png" + ")",
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'}}
                >  
                </div>
                <div className=''>
                <h1 className="bg-white text-3xl text-center py-12 leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                About Us
            </h1>
                    <div className=''>
                  
                  <p className='mt-4 max-w-2xl text-xl py-4 text-justify	 text-gray-700 lg:mx-auto'>
                  La Verde Property Management L.L.C. understands that real estate decisions are some of the most important in life. Based in the heart of Abu Dhabi, our team of seasoned professionals brings extensive market knowledge and experience to deliver tailored real estate solutions. Whether you are buying, selling, or renting, we provide bespoke services designed to meet your specific needs.

                  </p>
                  <p className='mt-4 max-w-2xl text-xl py-4 text-justify	 text-gray-700 lg:mx-auto'>
                  We pride ourselves on building enduring relationships founded on trust, transparency, and integrity. Our commitment to excellence ensures that your interests are always at the forefront of everything we do. By maintaining the highest standards of professionalism and ethics, we aim to exceed your expectations.

                  </p>
                  <p className='mt-4 max-w-2xl text-xl py-4 text-justify	 text-gray-700 lg:mx-auto'>
                  Whether you are a first-time buyer navigating the market, an experienced investor expanding your portfolio, or a property owner seeking reliable management services, La Verde Property Management L.L.C. is dedicated to making your real estate journey smooth and successful. Reach out to us today, and let us help you achieve your real estate goals with confidence and peace of mind.

                  </p>
                  <div className='py-12 flex justify-center items-center'>
                <Link
                  isExternal
                  showAnchorIcon
                  href="/contact-us"
                  >
                <Button className='border-2 bg-white text-[#104e3e] border-[#104e3e]   py-6 px-12  font-bold rounded'>
                      Contact Us
                </Button>
              </Link>
                </div>
                    </div>
                </div>
           
            </section>
            <section>
              <TeamComponent/>
            </section>

        </div>
            
      </div>
    </div>
  );
};
export default About;

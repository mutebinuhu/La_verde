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
       <h1 className="bg-white text-3xl text-center py-12 leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                About La Verde Property Management
            </h1>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 ">
        <div className="lg:text-center bg-white py-12">
        
            <section className=' md:flex md:space-x-12 py-12 text-center md:text-left p-8'>
                <div className='md:flex justify-center items-center px-4 bg-white md:w-1/2 ' style={{backgroundImage: "url(" + "/abudhabi.jpg" + ")",
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'}}
                >  
                </div>
                <div className=''>
                    <div className=''>
                    <p className="mt-4 max-w-2xl text-xl  text-gray-700 lg:mx-auto">
                    At La Verde Property Management L.L.C, we understand that buying, selling, or renting property is a significant decision in your life. Located in the heart of Abu Dhabi, our dedicated team of experienced professionals is committed to providing exceptional customer service and personalized solutions tailored to your unique needs.      
                  </p>
                  <p className='mt-4 max-w-2xl text-xl text-gray-700 lg:mx-auto'>
                  In addition, we believe in building long-lasting relationships with our
                  clients based on trust, transparency, and integrity. We are committed to
                  upholding the highest standards of professionalism and ethics, ensuring
                  that our clients' best interests are always at the forefront. Whether you are
                  a first-time buyer, an experienced investor, or a property owner looking
                  for reliable management services, La Verde Property Management L.L.C
                  is your trusted partner in the Abu Dhabi real estate market Contact us
                  today to discover how we can assist you in achieving your real estate
                  goals.
                  </p>
                  <div className='py-12'>
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

import React from 'react';
import LazyYoutube from './LazyYoutube';
import { Button } from '@nextui-org/button';
import Link from 'next/link';
import TeamComponent from './TeamComponent';

const About = () => {
  return (
    <div className="">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 ">
        <div className="lg:text-center bg-white py-12">
          <h2 className=" text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Who we Are
          </h2>
            <section className=' md:flex space-x-12 py-12  p-8'>
                <div className='md:flex justify-center items-center px-4 bg-white md:w-1/2 ' style={{backgroundImage: "url(" + "/mumbai-skyline-skyscrapers-construction.jpg" + ")",
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'}}
                >  
                </div>
                <div className=''>
                    <div className=''>
                    <p className="mt-4 max-w-2xl text-xl  text-gray-700 lg:mx-auto">
                      At La Verde Property Management L.L.C, we understand that buying, 
                      selling, or renting property can be a significant decision in one's life. 
                      That's why our dedicated team of experienced professionals is committed 
                      to providing exceptional customer service and personalized solutions. We 
                      strive to exceed expectations and ensure that every client's real estate 
                      journey is seamless and rewarding          
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

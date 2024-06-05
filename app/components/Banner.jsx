import React from 'react';
import Link from 'next/link';
import { Button } from '@nextui-org/button';
import Slideshow from './Reusables/Slideshow';


const Banner = () => {
    return (
        <div className='md:flex justify-between items-center md:space-x-12 mx-8'>
            <div className=' w-full md:w-full text-center md:text-left'>
                <h1 className='text-5xl font-semibold text-gray-700	md:mt-12 mt-6 text-normal'>Discover your dream home anywhere in <span className='bg-[#104e3e] text-white px-4 py-2 text-4xl px-2 rounded-lg'>UAE</span> <span className='border-b-4 border-[#104e3e]'>today!</span> </h1>
                <p className='py-8 tracking-wide'>
                    Explore our latest property listings in <span className='text-bold'>Dubai, Abu Dhabi, Sharjah, Ajman, Umm Al Quwain, Ras Al Khaimah</span> and <span className='font-bold'>Fujairah</span>,  and find the perfect place to call your own. Start your journey towards homeownership now!
                </p>
                <div className=''>
                <Link href="/contact-us" className='md:mr-2'>
                <Button className="bg-[#104e3e] -z-10 hover:bg-[#104e3e] text-white font-bold p-8 rounded" color="primary">
                Schedule a viewing
                </Button>
                </Link>
                
                <Link href="/contact-us" className='md:mr-2'>
                <Button className='border bg-white -z-10 border-[#104e3e] mt-4  hover:bg-[#104e3e] hover:text-white font-bold p-8 rounded'>
                Explore Property
                </Button>
                </Link>
                
                </div>


              
                
               <div className=''>
             

               </div>
            
            </div>
            <div className='w-full mt-6 rounded-lg border-[#00df9a]  h-60 md:h-96 ' style={{backgroundImage: "url(" + "https://img.freepik.com/free-photo/hand-holding-keys-outdoors_23-2151015223.jpg?t=st=1715059069~exp=1715062669~hmac=d0210341714255a352dfd2872af427c708052d818db486c2e662d7763b96cc39&w=826" + ")",
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'}}>
  
            </div>
           

        </div>
    );
}

export default Banner;

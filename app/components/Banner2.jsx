import React from 'react';
import Link from 'next/link';
import { Button } from '@nextui-org/button';
import DropdownForm from './Reusables/DropdownForm';
import { nonoSerif } from '@/utils/fonts';
import Slideshow from './Reusables/Slideshow';
import BackgroundSlideshow from './Reusables/BackgroundSlideshow';
const Banner2 = () => {
    return (
              
            <div className='w-full relative border-[#00df9a]    md:h-[700px] '>
             
                <BackgroundSlideshow/>
                <div className='flex justify-center z-70  items-center h-full md:w-full py-12 px-10 md:py-0  '>
                   <div className='bg-[#164849] bg-opacity-75  px-12 rounded-lg'>
                        <h1 className={ `${nonoSerif.className} text-white text-4xl py-4 font-bold`}>Let us Guide you home</h1>
                        <p className='text-white text-xl py-4'>With exclusive offerings in abudhabi with the premier real estate company in the region</p>
                        <div className='md:flex justify-between items-center w-full py-8'>
                        <DropdownForm/>
                        </div>
                        
                   </div>
                </div>
            </div>

    );
}

export default Banner2;

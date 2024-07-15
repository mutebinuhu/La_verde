import React from 'react';
import Link from 'next/link';
import { Button } from '@nextui-org/button';
import DropdownForm from './Reusables/DropdownForm';
import { nonoSerif } from '@/utils/fonts';
import Slideshow from './Reusables/Slideshow';
import BackgroundSlideshow from './Reusables/BackgroundSlideshow';
import SearchForm from '@/components/SearchForm';
import HeaderBar from '@/components/header';
const Banner2 = () => {
    return (
              
        <>

            <div className='w-full relative border-[#00df9a]    md:h-[700px] '>
                <BackgroundSlideshow/>
                <div className='flex justify-center z-70 md:h-[500px] items-center md:w-full py-4  md:py-0  '>
                   <div className='bg-[#164849] bg-opacity-50  px-4 rounded-lg'>
                        <h1 className={`${nonoSerif.className} mt-4 text-white text-3xl md:text-6xl  md:text-3xl  md:py-4 font-bold`}>Let us Guide you home</h1>
                        <p className='text-white text-sm md:text-xl py-2 md:font-bold '>With exclusive offerings in abudhabi with the premier real estate company in the region</p>
                        <div className='md:flex justify-between items-center w-full py-8'>
                        {/**<DropdownForm/> */}
                        <SearchForm/>
                        </div>
                        
                   </div>
                </div>
            </div>
</>
    );
}

export default Banner2;

import React from 'react';
import Link from 'next/link';
import { Button } from '@nextui-org/button';
import DropdownForm from './Reusables/DropdownForm';
import { nonoSerif } from '@/utils/fonts';
const Banner2 = () => {
    return (
              
            <div className='w-full  border-[#00df9a]    md:h-[700px] ' style={{backgroundImage: "url(" + "https://img.freepik.com/free-photo/hand-holding-keys-outdoors_23-2151015223.jpg?t=st=1715059069~exp=1715062669~hmac=d0210341714255a352dfd2872af427c708052d818db486c2e662d7763b96cc39&w=826" + ")",
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'}}>
                <div className='flex justify-center  items-center h-full md:w-full py-12 px-10 md:py-0  '>
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

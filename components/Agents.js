"use client"
import Link from 'next/link';
import React from 'react'
import { Fade } from 'react-awesome-reveal'
import { FaPhone, FaVoicemail } from 'react-icons/fa';
import { MdOutlineMail } from 'react-icons/md';
const ceo =[
  {
    name: 'Ahmad youssef',
    position: 'CEO',
    image: 'workmates/ahmed.jpeg',
    social: {
      twitter: 'https://twitter.com/johndoe',
      linkedin: 'https://linkedin.com/in/johndoe',
    },
  },
]
const teamMembers = [
  {
    name: 'Abdelrahman',
    position: 'Sales Manager',
    image: '/workmates/abdel.jpeg',
    mt:-20,
    social: {
      twitter: 'https://twitter.com/alicejohnson',
      linkedin: 'https://linkedin.com/in/alicejohnson',
    },
  },
  {
    name: 'Maria',
    position: 'Call Center Manager',
    image: '/workmates/maria.jpeg',
    social: {
      twitter: 'https://twitter.com/bobbrown',
      linkedin: 'https://linkedin.com/in/bobbrown',
    },
  },
 
  {
    name: 'Amir',
    position: 'Property Consultant ',
    image: '/workmates/samir.jpeg',
    social: {
      twitter: 'https://twitter.com/charliegreen',
      linkedin: 'https://linkedin.com/in/charliegreen',
    },
  },
  
  {
    name: 'Hazem',
    position: 'Sales Executive',
    image: '/workmates/hr.jpeg',
    social: {
      twitter: 'https://twitter.com/janesmith',
      linkedin: 'https://linkedin.com/in/janesmith',
    },
  },
  {
    name: 'Joy',
    position: 'International Sales',
    image: '/workmates/joy.jpeg',
    social: {
      twitter: 'https://twitter.com/dianawhite',
      linkedin: 'https://linkedin.com/in/dianawhite',
    },
  },
  {
    name: 'Nuhu',
    position: 'Marketing Manager',
    image: '/workmates/mutebi.jpg',
    social: {
      twitter: 'https://twitter.com/charliegreen',
      linkedin: 'https://linkedin.com/in/charliegreen',
    },
  },
  
];

function Agents() {
  return (

    <section class="py-24 bg-gray-50 " id="agents">
    <div class="container px-6 py-12 mx-auto">
        <div class="flex justify-between items-center flex-col lg:flex-row md:mt-20">
            <div class="w-full lg:w-1/2">
            <Fade cascade damping={0.4}>
                <h2
                    class="font-manrope text-5xl text-gray-900 font-bold leading-[4rem] mb-7 text-center lg:text-left">
                    Your Trusted Real Estate Partner</h2>
                <p class="text-lg text-gray-500 mb-16 text-center lg:text-left">We Have a Full Team Of Office Staff and Realtors Ready To Help You
                </p>
                <button class="cursor-pointer py-3 px-8 w-60 bg-[#FFA72A] text-white text-base font-semibold transition-all duration-500 block text-center rounded-full hover:bg-[#dc9314] mx-auto lg:mx-0">Join
                    our team</button>
            </Fade>
            </div>
                <div class="w-full lg:w-1/2 lg:mt-0 md:mt-40 mt-16 max-lg:max-w-2xl">
                <Fade direction='top' delay={1000}>
                <div class="grid grid-cols-1 min-[450px]:grid-cols-2 md:grid-cols-3 gap-8">
                    <div>
                    <img src="https://pagedone.io/asset/uploads/1696238644.png" alt="Team tailwind section"
                        class=" h-56 rounded-2xl object-cover md:mt-20 mx-auto min-[450px]:mr-0" />

                        <div className='flex justify-center items-center '>
                        <Link href={"/"} className=' p-2.5 my-2 font-bold md:mr-2 md:w-1/2 flex text-white justify-between border border-2-[#FFA72A]  bg-[#FFA72A] '><span>Call</span> <span><FaPhone/></span></Link>
                        <Link href={"/"} className='border my-2 border-gray-800 border-2 p-2  md:w-1/2  flex  justify-between'><span>Email</span> <span>< MdOutlineMail/></span></Link>
                        </div>

                    </div>
                   <div>
                   <img src="https://pagedone.io/asset/uploads/1696238665.png" alt="Team tailwind section"
                        class=" h-56 rounded-2xl object-cover mx-auto min-[450px]:ml-0 md:mx-auto" />
                   </div>
                    <div>
                    <img src="https://pagedone.io/asset/uploads/1696238684.png" alt="Team tailwind section"
                        class="h-56 rounded-2xl object-cover md:mt-20 mx-auto min-[450px]:mr-0 md:ml-0" />
                    </div>
                    <div>
                    <img src="https://pagedone.io/asset/uploads/1696238702.png" alt="Team tailwind section"
                        class="h-56 rounded-2xl object-cover mx-auto min-[450px]:ml-0 md:mr-0 md:ml-auto" />
                    </div>
                   <div>
                   <img src="https://pagedone.io/asset/uploads/1696238720.png" alt="Team tailwind section"
                        class="h-56 rounded-2xl object-cover md:-mt-20 mx-auto min-[450px]:mr-0 md:mx-auto" />
                   </div>
                   <div>
                   <img src="https://pagedone.io/asset/uploads/1696238737.png" alt="Team tailwind section"
                        class="h-56 rounded-2xl object-cover mx-auto min-[450px]:ml-0 md:mr-0" />
                   </div>

                </div>
                </Fade>

            </div>
        </div>
    </div>
</section>
                               
  )
}

export default Agents
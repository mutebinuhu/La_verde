"use client"
import Link from 'next/link';
import React from 'react'
import { Fade } from 'react-awesome-reveal'
import { FaEnvelope, FaPhone, FaPhoneAlt, FaVoicemail, FaWhatsapp } from 'react-icons/fa';
import { MdOutlineMail } from 'react-icons/md';
const ceo =[
  
  {
    name: 'Maria',
    position: 'Call Center Manager',
    image: '/workmates/maria.jpeg',
    social: {
      twitter: 'https://twitter.com/bobbrown',
      linkedin: 'https://linkedin.com/in/bobbrown',
    },
    className:"w-full h-56 rounded-2xl object-cover mx-auto min-[450px]:ml-0 md:mx-auto",
    email:"marketing@laverde.ae"
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
    className:"w-full h-56 rounded-t-lg object-cover md:mt-20 mx-auto min-[450px]:mr-0 md:mt-20",
    email:"marketing@laverde.ae",
    whatsapp:"971506144930"

  },
  
  {
    name: 'Ahmad youssef',
    position: 'CEO',
    image: 'workmates/ahmed.jpeg',
    social: {
      twitter: 'https://twitter.com/johndoe',
      linkedin: 'https://linkedin.com/in/johndoe',
    },
    className:"w-full h-56rounded-t-lg  object-cover mx-auto min-[450px]:ml-0 md:mx-auto",
    email:"marketing@laverde.ae",
     whatsapp:"971506144930"

  },
  {
    name: 'Amir',
    position: 'Property Consultant ',
    image: '/workmates/samir.jpeg',
    social: {
      twitter: 'https://twitter.com/charliegreen',
      linkedin: 'https://linkedin.com/in/charliegreen',
    },
    className:"w-full md:mt-20 h-56 rounded-t-lg  object-cover md:mt-20 mx-auto min-[450px]:mr-0 md:ml-0",
    email:"marketing@laverde.ae",
 whatsapp:"971506144930"
  },
  {
    name: 'Joy',
    position: 'International Sales',
    image: '/workmates/joy.jpeg',
    status:"vacant",
    social: {
      twitter: 'https://twitter.com/dianawhite',
      linkedin: 'https://linkedin.com/in/dianawhite',
    },
    className:"w-full h-56  rounded-t-lg  object-cover mx-auto min-[450px]:ml-0 md:mr-0 md:ml-auto",
    email:"marketing@laverde.ae",
     whatsapp:"971506144930"

  },
  {
    name: 'Maria',
    position: 'Call Center Manager',
    image: '/workmates/maria.jpeg',
    social: {
      twitter: 'https://twitter.com/bobbrown',
      linkedin: 'https://linkedin.com/in/bobbrown',
    },
    className:"w-full h-56 rounded-t-lg  object-cover md:-mt-20 mx-auto min-[450px]:mr-0 md:mx-auto",
    email:"marketing@laverde.ae",
     whatsapp:"971506144930"

  },
  {
    name: 'Nuhu',
    position: 'Marketing Manager',
    image: '/workmates/mutebi.jpg',
    social: {
      twitter: 'https://twitter.com/charliegreen',
      linkedin: 'https://linkedin.com/in/charliegreen',
    },
    className:"w-full h-56 rounded-t-lg  object-cover mx-auto min-[450px]:ml-0 md:mr-0",
    email:"marketing@laverde.ae",
     whatsapp:"971506144930"

  },

  
];
const Details = () =>{
  return(
    <div className=" bg-black bg-opacity-50 p-6 text-white">
        <h3 className="text-lg font-semibold">{_.name}</h3>
        <p className="text-sm">{_.position}</p>
        <div className="flex space-x-4 mt-2">
          <a href={`mailto:${_.email}`} className="hover:text-gray-300">
            <FaEnvelope className="w-5 h-5" />
          </a>
          <a href={`https://wa.me/${_.whatsapp}`} target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
            <FaWhatsapp className="w-5 h-5" />
          </a>
          <a href={`tel:${_.phone}`} className="hover:text-gray-300">
            <FaPhoneAlt className="w-5 h-5" />
          </a>
        </div>
    </div>
  )
}

function Agents() {
  return (

    <section class="py-24 bg-gray-70 " id="agents">
    <Fade >
    <div class="container px-6 py-12 mx-auto">
        <div class="flex justify-between items-center flex-col lg:flex-row md:mt-20">
            <div class="w-full lg:w-1/2">
      
                <h2
                    class="font-manrope text-5xl text-gray-900 font-bold leading-[4rem] mb-7 text-center lg:text-left">
                    Your Trusted Real Estate Partner</h2>
                <p class="text-lg text-gray-500 mb-16 text-center lg:text-left">We Have a Full Team Of Office Staff and Realtors Ready To Help You
                </p>
                <p class="text-lg text-gray-500 mb-8 text-center lg:text-left">Just contact any by clicking on the Icons
                </p>
                <Link href={"/careers"} target='_blank' class="cursor-pointer py-3 px-8 w-60 bg-[#FFA72A] text-white text-base font-semibold transition-all duration-500 block text-center rounded-full hover:bg-[#dc9314] mx-auto lg:mx-0">Join
                    our team</Link>
   
            </div>
                <div class="w-full lg:w-1/2 lg:mt-0 md:mt-40 mt-16 max-lg:max-w-2xl">
           
                <div class="grid grid-cols-1 min-[450px]:grid-cols-2 md:grid-cols-3 gap-8">
                   
                    {teamMembers.map((_, index)=>{
                      
                      return(
                        
                       <div>
                        <img src={_.status=="vacant" ? '/Portrait_placeholder.png' :_.image} alt="Team tailwind section"
                        class={_.className} />

                  
                          <div className='bg-black bg-opacity-70 p-4 text-white'>
                        {_.status == "vacant" ?"" : <> <h3 className="text-lg text-center font-semibold">{_.name}</h3>
                        <p className="text-sm text-center">{_.position}</p></> }
        {
          _.status == "vacant" ? (<>
          <div className="flex justify-between mt-2">
          <Link href={"/careers"} target='_blank' class="cursor-pointer py-3 px-8 w-60 bg-[#FFA72A] text-white text-sm font-semibold transition-all duration-500 block text-center rounded-full hover:bg-[#dc9314] mx-auto lg:mx-0">Join
          Fill This Position</Link>
        </div>
          </>)  :  <div className="flex justify-between mt-2">
          <a href={`mailto:${_.email}`} className="hover:text-gray-300">
            <FaEnvelope className="w-5 h-5" />
          </a>
          <a href={`https://wa.me/${_.whatsapp}`} target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
            <FaWhatsapp className="w-5 h-5" />
          </a>
          <a href={`tel:${_.phone}`} className="hover:text-gray-300">
            <FaPhoneAlt className="w-5 h-5" />
          </a>
        </div>
        }
       
                          </div>
                        </div>

                  
                      )
                    })}

                   
             
                   

                </div>
                

            </div>
        </div>
    </div>
    </Fade>
    </section>
                               
  )
}

export default Agents
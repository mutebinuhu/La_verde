import React from "react";
import CustomLink from "./CustomLink";
const OurServices = () =>{
    return(
        <>
          <section>
      {/* Container */}
      <div className="py-12 bg-gray-70 sm:py-16 lg:py-20">
      <div className='container px-6 py-12 mx-auto'>
        {/* Title */}
        <div className="mb-8">
        <h2 className="text-xl font-bold text-[#FFA72A]">
          Our Services
        </h2>
        <p className="text-gray-600 text-3xl font-bold">Some of our services </p>
       
        </div>
        
        {/* List */}
        <ul className="grid gap-5 sm:grid-cols-2 mt-4  md:grid-cols-4 md:gap-0 ">
          <li className="transition-all duration-300 hover:bg-gray-100 flex flex-col items-center gap-6 md:border-r md:px-10 md:py-4 p-8 md:border-gray-300">
            <img
              src="/rent.png"
              alt=""
              className="inline-block h-20 w-20 rounded object-cover"
            />
            <p className="text-xl font-semibold">Rent Home</p>
            <p className="text-center text-sm text-gray-500">
            Lets help you find Your next home. Choose to own a home in any of the seven Emirates from Dubai To Umm Al Quwain
            </p>
          </li>
          <li className="transition-all duration-300 hover:bg-gray-100  flex flex-col items-center gap-6 md:border-r md:px-10 md:py-4 p-8 md:border-gray-300">
            <img
              src="/property.png"
              alt=""
              className="inline-block h-20 w-20 rounded object-cover"
            />
            <p className="text-xl font-semibold">Sell Property</p>
            <p className="text-center text-sm text-gray-500">
            Are You Looking at Selling Your Home  , we can help you navigate a successful sale
            </p>
          </li>
          <li className="transition-all duration-300 hover:bg-gray-100  flex flex-col items-center gap-6 md:border-r md:px-10 md:py-4 p-8 md:border-gray-300">
            <img
              src="/buy.png"
              alt=""
              className="inline-block h-20 w-20 rounded object-cover"
            />
            <p className="text-xl font-semibold">Buy Property</p>
            <p className="text-center text-sm text-gray-500">
            Are you thinking about buying a new home and dont Know where to start. Let our team find You a perfect home worth living
            </p>
          </li>
          <li className="transition-all duration-300 hover:bg-gray-100  flex flex-col items-center gap-6 md:border-r md:px-10 md:py-4 p-8 md:border-gray-300">
            <img
              src="assets.png"
              alt=""
              className="inline-block h-20 w-20 rounded object-cover"
            />
            <p className="text-xl font-semibold">Property Management</p>
            <p className="text-center text-sm text-gray-500">
            Managing property can be stressful, but with La Verde, we make it easy for you. From management to maintenance, trust us – you won't regret it.
            </p>
          </li>
        </ul>
      </div>
      <div className="text-center">
        <CustomLink styles="bg-[#104E3E] py-4 px-4 rounded text-white text-bold" title="Contact Us" href={`/contact-us`}/>
        </div>
      </div>
      
    </section>  
        </>
    )
}

export default OurServices;
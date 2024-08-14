"use client"
import React from "react";
import { useState } from "react";
import PropertySearchForm from "./PropertySearchForm";
const  ButtonGroup = ()=>{
    const [activeButton, setActiveButton] = useState('');
  
    const handleClick = (buttonType) => {
      setActiveButton(buttonType);
    };
  
    return (
      <div className="flex ">
        <button
          onClick={() => handleClick('buy')}
          className={`px-20 py-6 font-semibold rounded-tl-xl  ${activeButton === 'buy' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
        >
          Buy
        </button>
        <button
          onClick={() => handleClick('sell')}
          className={`px-20 py-6 font-semibold  ${activeButton === 'sell' ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-700'}`}
        >
          Sell
        </button>
        <button
          onClick={() => handleClick('rent')}
          className={`px-32 py-6 font-semibold rounded-tr-xl ${activeButton === 'rent' ? 'bg-yellow-500 text-white' : 'bg-gray-200 text-gray-700'}`}
        >
          Rent
        </button>
      </div>
    );
  }
const Hero1 = () =>{
    return(
        <>
            
        
            <section class=" dark:bg-gray-900 md:relative">
    <div class="grid max-w-screen-xl md:px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div class="mr-auto  place-self-center lg:col-span-7">
            <h1 class="max-w-2xl mb-4 p-2 text-gray-700 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Looking for a Home in Abu Dhabi ?</h1>
            <p class="max-w-2xl mb-6 p-2 font-normal  lg:mb-8 md:text-lg lg:text-xl text-gray-600  dark:text-gray-400">Search Confidently With Your trusted Source For Homes to Buy, Rent, Sell in Abu Dhabi for reasonable Price</p>
           <PropertySearchForm/>
        </div>
        <div class="hidden lg:mt-0 lg:col-span-5 lg:flex mx-2 ">
            <img className="rounded-lg" src="https://images.unsplash.com/photo-1722487631997-cf1e0f92c2c4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="mockup" />
        </div>                
    </div>
</section>
        </>
    )
}
export default Hero1;
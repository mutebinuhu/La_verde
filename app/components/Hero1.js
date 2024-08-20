"use client"
import React from "react";
import PropertySearchForm from "./PropertySearchForm";
import { AttentionSeeker } from "react-awesome-reveal";


const Hero1 = () =>{
    return(
        <>
        
            <section class=" dark:bg-gray-900  bg-[#104E3E]   md:relative">
            <div class="grid max-w-screen-xl md:px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                <div class="mr-auto  place-self-center lg:col-span-7">
                    <h1 class="max-w-2xl mb-4 p-2 text-gray-200 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Looking for a Home in Abu Dhabi ?</h1>
                    <p class="max-w-2xl mb-6 p-2 font-normal  lg:mb-8 md:text-lg lg:text-xl text-gray-300  dark:text-gray-400">Search Confidently With Your trusted Source For Homes to Buy, Rent, Sell in Abu Dhabi for reasonable Price</p>
                    
                  <div className="absolute">
                  <PropertySearchForm/>
                  </div>
                </div>
                <div class="hidden lg:mt-0 lg:col-span-5 lg:flex mx-2 w-full h-full z-10 ">
                   <AttentionSeeker effect="pulse" duration={4000} >
                    <div className="w-full h-full">
                      <img className="rounded-lg h-full" src="https://images.unsplash.com/photo-1722487631997-cf1e0f92c2c4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="mockup" />
                      </div>
                   </AttentionSeeker >
                </div>                
            </div>
</section>
        </>
    )
}
export default Hero1;
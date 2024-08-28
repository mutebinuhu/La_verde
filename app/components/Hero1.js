"use client"
import React from "react";
import PropertySearchForm from "./PropertySearchForm";
import { AttentionSeeker } from "react-awesome-reveal";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import HomeWorthForm from "@/components/HomeWorthForm";


const Hero1 = () =>{
    return(
        <>
        
            <section class=" dark:bg-gray-900  bg-gradient-to-l from-[#104E3E]  to-[#3b8e79]   md:relative relative  bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1722487631997-cf1e0f92c2c4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
            <div className="absolute inset-0 bg-[#104E3E] opacity-50"></div>
            <div className="relative">
                <Navbar/>
            </div>
            <div class="grid max-w-screen-xl md:px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 relative z-10">
                <div class="mr-auto  place-self-center lg:col-span-7">
                    <h1 class="max-w-2xl mb-4 p-2 text-white text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Looking for a Home in Abu Dhabi ?</h1>
                    <p class="max-w-2xl mb-3 p-2 font-normal  lg:mb-8 md:text-lg lg:text-xl text-gray-300  dark:text-gray-400">Search Confidently With Your trusted Source For Homes to Buy, Rent, Sell in Abu Dhabi for reasonable Price</p>
                    <div className="py-4">
                    <Link href={"/search"} className="mx-2 px-4 py-4 border border-[#FFA72A] bg-[#FFA72A] hover:bg-[rgb(194,140,66)] text-white font-bold mb-4 rounded">Browse Homes</Link>
                    <Link href={"/#agents"} className="mx-2 px-4 py-4 border border-white  text-white font-bold mb-4 rounded">Talk To Agent</Link>  
                    </div>
                  <div className="absolute">
                  {/**<PropertySearchForm/>**/}
                  </div>
                </div>
                <div class="hidden lg:mt-0 lg:col-span-5 lg:flex mx-2 w-full h-full z-10 ">
                   <AttentionSeeker effect="pulse" duration={4000} >
                    <HomeWorthForm/>
                   </AttentionSeeker >
                </div>                
            </div>
</section>
        </>
    )
}
export default Hero1;
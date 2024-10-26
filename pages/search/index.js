// pages/search.js
"use client"
import "../../app/globals.css"; // Adjust the path as necessary
import { Montserrat } from "next/font/google";
import { useRouter } from 'next/router';
import PropertyDetails from "../../components/PropertyDetails";
import Navbar from "../../components/Navbar";

import NoResults from "./NoResults";
import useSWR from 'swr';
import Filters from "@/components/Filters";
import { useEffect, useState } from "react";
import CityGrid from "@/components/CityCard";
import FooterComponent from "@/app/components/FooterComponent";
export const metadata = {
  title: "Best real estate agency Abu Dhabi",
  description: "Achieve your real estate goals with La Verde Property Management L.L.C. Our expert team in Abu Dhabi offers customized and professional services for property buying, selling, and renting. Reach out to us for a personalized consultation",
};
const montserrat = Montserrat({ subsets: ["latin"] });
const fetcher = (url) => fetch(url).then((res) => res.json());



const Search = () => {
  const [filters, setFilters] = useState({});
  const [dataRes, setRes] = useState(null)

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const router = useRouter();
  const { query } = router;
  //const { data, error } = useSWR(() => query ? `${process.env.NEXT_PUBLIC_API_URL}api/properties/search?${new URLSearchParams(query)}` : null, fetcher);
const { data, error } = useSWR(()=> {
  const searchParams = new URLSearchParams(query);
  Object.entries(filters).forEach(([key, value]) => {
    if (value) {
      searchParams.set(key, value);
    }
  });
  return `/api/properties/search?${searchParams.toString()}`;
}, fetcher);

  if (error) return <div>Failed to load</div>;
  
  if (!data) return(
    <div class="flex w-full h-screen justify-center items-center">
    <div class="w-12 h-12 rounded-full absolute border border-solid border-gray-200"></div>
  
    <div
        class="w-12 h-12 rounded-full animate-spin absolute border border-solid border-cyan-500 border-t-transparent shadow-md">
    </div>
  </div>
  )


  return (
    <>
      <div className={montserrat.className}>
      <div className="bg-[#104E3E]">
       <Navbar/>
       </div>
        <div className="mt-10">
    
          <div className="">
          <div className='md:flex justify-center items-center w-full  '>
              <Filters onFilterChange={handleFilterChange} />

          </div>
          </div>
        
          <div className="container mx-auto py-12 hidden md:block">
          <div className="container mb-8 ">
        <h1 className="text-xl  mx-4 font-bold text-[#FFA72A] ">Featured Cities</h1>
          <p className="text-gray-600 mx-4 text-3xl font-bold">Explore our top Cities</p>
        </div>
            
            <CityGrid  />
         
         
          </div>
          <div className="container  mx-auto w-full ">
          <div className="container mb-8 w-full">
        <h2 className="text-xl mx-4  font-bold  text-[#FFA72A] ">Featured Properties</h2>
          <p className="text-gray-600 text-3xl  mx-4 md:mx-0 font-bold">Explore Our Properties</p>
        </div>
            <>
            <div className={`${data.length > 0 ? 'md:grid grid-cols-4 gap-4 mx-4 md:mx-2':'w-full'  } `}>
            {
              data.length > 0 ? data.map((property) => (
                <PropertyDetails key={property.id} property={property} />
              )) :<div className=""><NoResults/></div>
            }
            </div>
            </>
           {/**
            *  <div className="hidden md:block w-1/2 bg-red-400">
            Map Will Go here
            </div>
            * 
            */}
           
          </div>
        </div>
      </div>
     <div className="py-8">
     <FooterComponent/>
     </div>
    </>
  );
};

export default Search;

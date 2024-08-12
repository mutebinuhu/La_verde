"use client"
import React, { useEffect, useState } from 'react';
import { CiLocationOn } from 'react-icons/ci';
import { FaLocationArrow, FaMapMarker } from 'react-icons/fa';
const SearchList = () =>{
    return(
        <>
<div class="bg-gray-100 rounded-lg">
    <div class=" mx-auto my-10">
        <div class="shadow-lg rounded-lg overflow-hidden w-full">
            <ul class="divide-y divide-gray-200">

                <li class="p-2 flex justify-between items-center user-card">
                    <div class="flex items-center">
                        <CiLocationOn/>
                        <span class="ml-3 font-medium">Mary</span>
                    </div>
                    <div>
                        <button class="text-gray-500 hover:text-gray-700">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        </button>
                    </div>
                </li>
                
            </ul>
        </div>
    </div>
</div>
        </>
    )
}

const CardHero = () => {
  const [selected, setSelected] = useState(null);
  const [locationList, setLocationList] = useState([])
   const [location, setLocation] = useState('');
  const getLocations = async () =>{
    try {
      const res = await fetch(process.env.NEXT_PUBLIC_API_URL + 'api/locations')
      const data = await res.json();
      setLocationList(data.data)
      console.log("locations", data)
    } catch (error) {
      console.log("locerr", error)
    }
  }

  const handleSelect = (option) => {
    setSelected(option);
  };

  const options = [
    { label: 'Rent', value: 'rent' },
    { label: 'Buy', value: 'buy' },
    { label: 'Sell', value: 'sell' },
    { label: 'New Projects', value: 'new-projects' },
  ];
useEffect(()=>{
    getLocations()
}, [])
  return (
    <div className="relative h-[400px] md:h-[600px] flex items-center justify-center bg-cover bg-center rounded-b-lg shadow-lg   md:mx-32" 
      style={{ backgroundImage: "url('Al-Reem-Island-banner.jpg')" }}>
      <div className="flex flex-col items-center text-center space-y-6">
        <div className="flex space-x-4">
          {options.map((option) => (
            <div
              key={option.value}
              onClick={() => handleSelect(option.value)}
              className={`rounded-full px-4 md:px-8 py-2 cursor-pointer transition-transform transform ${
                selected === option.value
                  ? 'bg-blue-600 text-white scale-105'
                  : 'bg-white text-gray-800 hover:bg-blue-400 hover:text-white'
              }`}
            >
              {option.label}
            </div>
          ))}
        </div>
        <div className="w-full max-w-lg">
          <div className="flex items-center border border-gray-300 rounded-full overflow-hidden">
     
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-2 outline-none"
            />
           
       
            <button className=" bg-[#164849] text-white px-4 py-2 rounded-full hover:bg-blue-bg-[#083241]">
              Search
            </button>
          </div>
          <SearchList/>
        </div>
      </div>
    </div>
  );
};

export default CardHero;

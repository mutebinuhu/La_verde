
"use client"
import { Field } from 'formik';
import React, { useState, useEffect } from 'react';

const Filters = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    category: '',
    subCategory: '',
    purpose: '',
    completionStatus: '',
    minPrice: '',
    maxPrice: '',
    bedrooms: '',
    location:'',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onFilterChange(filters);
  };
  const [locationList, setLocationList] = useState([])

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

  useEffect(()=>{
    getLocations();
  }, [])
  return (
    <form onSubmit={handleSubmit} className="my-4 md:mx-72 mx-4 ">
      <div className="flex overflow-x-auto space-x-4 p-4 border border-gray-300 rounded-md">
        <div className="min-w-[100px]">
          <label className="block text-sm font-medium text-gray-700">Category</label>
          <select name="category" value={filters.category} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
            <option value="">Select</option>
            <option value="residential">Residential</option>
            <option value="commercial">Commercial</option>
          </select>
        </div>
        <div className="min-w-[100px]">
          <label className="block text-sm font-medium text-gray-700">Sub Category</label>
          <select name="subCategory" value={filters.subCategory} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
            <option value="">Select</option>
            <option value="villa">Villa</option>
            <option value="studio">Studio</option>
            <option value="apartment">Apartment</option>
            <option value="residentialFloor">Residential Floor</option>
            <option value="residentialPlot">Residential Plot</option>
            <option value="townHouse">Town House</option>
            <option value="residentialBuilding">Residential Building</option>
            <option value="pentHouse">Pent House</option>
            <option value="villaCompound">Villa Compound</option>
          </select>
        </div>
        <div className="min-w-[100px]">
          <label className="block text-sm font-medium text-gray-700">Purpose</label>
          <select name="purpose" value={filters.purpose} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
            <option value="">Select</option>
            <option value="sale">Sale</option>
            <option value="rent">Rent</option>
          </select>
        </div>
        <div className="min-w-[100px]">
          <label className="block text-sm font-medium text-gray-700">Status</label>
          <select name="completionStatus" value={filters.completionStatus} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
            <option value="">Select</option>
            <option value="offPlanPrimary">Off Plan Primary</option>
            <option value="offPlanSecondly">Off Plan Secondly</option>
            <option value="readyPrimary">Ready Primary</option>
            <option value="readySecondary">Ready Secondary</option>
          </select>
        </div>
        <div className="min-w-[100px]">
          <label className="block text-sm font-medium text-gray-700">Min Price</label>
          <input
            type="number"
            name="minPrice"
            value={filters.minPrice}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="min-w-[100px]">
          <label className="block text-sm font-medium text-gray-700">Max Price</label>
          <input
            type="number"
            name="maxPrice"
            value={filters.maxPrice}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="min-w-[100px]">
          <label className="block text-sm font-medium text-gray-700">Bedrooms</label>
          <input
            type="number"
            name="bedrooms"
            value={filters.bedrooms}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="min-w-[100px]">
          <label className="block text-sm font-medium text-gray-700">Location</label>
            <select type='' name='location' onChange={handleChange} className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'>
            <option value="" label="Select Area" className='' />

                  {locationList && locationList.map((loca)=>  <option className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm' value={loca.name} label={loca.name} />)}
            </select>
                
            
          </div>
      </div>
      <div className="mt-4 text-center">
        <button
          type="submit"
          className="mt-4 px-12 py-2 text-2xl font-bold bg-[#164849] text-white py-2 rounded-md"
        >
          Apply Filters
        </button>
      </div>
    </form>
  );
};

export default Filters;

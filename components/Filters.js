
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
    <form onSubmit={handleSubmit} className="mb-6 mx-4">
      <div className="grid grid-cols-4 sm:grid-cols-2 md:grid-cols-8 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Category</label>
          <select name="category" value={filters.category} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
            <option value="">Select</option>
            <option value="residential">Residential</option>
            <option value="commercial">Commercial</option>
          </select>
        </div>
        <div>
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
        <div>
          <label className="block text-sm font-medium text-gray-700">Purpose</label>
          <select name="purpose" value={filters.purpose} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
            <option value="">Select</option>
            <option value="sale">Sale</option>
            <option value="rent">Rent</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Completion Status</label>
          <select name="completionStatus" value={filters.completionStatus} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
            <option value="">Select</option>
            <option value="offPlanPrimary">Off Plan Primary</option>
            <option value="offPlanSecondly">Off Plan Secondly</option>
            <option value="readyPrimary">Ready Primary</option>
            <option value="readySecondary">Ready Secondary</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Min Price</label>
          <input
            type="number"
            name="minPrice"
            value={filters.minPrice}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Max Price</label>
          <input
            type="number"
            name="maxPrice"
            value={filters.maxPrice}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className='w-full'>
          <label className="block text-sm font-medium text-gray-700">Bedrooms</label>
          <input
            type="number"
            name="bedrooms"
            value={filters.bedrooms}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="w-full">
          <label className="block text-sm font-medium text-gray-700">Location</label>
            <select type='' className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'>
            <option value="" label="Select Area" className='' />

                  {locationList && locationList.map((loca)=>  <option className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm' value={loca.name} label={loca.name} />)}
            </select>
                
            
          </div>
      </div>
      <div className="mt-4 text-center">
        <button
          type="submit"
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Apply Filters
        </button>
      </div>
    </form>
  );
};

export default Filters;

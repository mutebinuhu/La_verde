"use client"
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'


const SearchForm = () => {
  const [category, setCategory] = useState('');
  const [subCategory, setSubCategory] = useState('');
  const [purpose, setPurpose] = useState('');
  const [completionStatus, setCompletionStatus] = useState('');
  const [title, setTitle] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [minBedrooms, setMinBedrooms] = useState('');
  const [maxBedrooms, setMaxBedrooms] = useState('');
  const [location, setLocation] = useState('');
  const [minBathrooms, setMinBathrooms] = useState('');
  const [maxBathrooms, setMaxBathrooms] = useState('');
  const [minSize, setMinSize] = useState('');
  const [maxSize, setMaxSize] = useState('');
  const [locationList, setLocationList] = useState([])

  
  const router = useRouter();
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
  const handleSubmit = (e) => {
    e.preventDefault();
    const query = {};

    if (category) query.category = category;
    if (location) query.location = location;

    if (subCategory) query.subCategory = subCategory;
    if (purpose) query.purpose = purpose;
    if (completionStatus) query.completionStatus = completionStatus;
    if (title) query.title = title;
    if (minPrice) query.minPrice = minPrice;
    if (maxPrice) query.maxPrice = maxPrice;
    if (minBedrooms) query.minBedrooms = minBedrooms;
    if (maxBedrooms) query.maxBedrooms = maxBedrooms;
    if (minBathrooms) query.minBathrooms = minBathrooms;
    if (maxBathrooms) query.maxBathrooms = maxBathrooms;
    if (minSize) query.minSize = minSize;
    if (maxSize) query.maxSize = maxSize;
    const newQuery = new URLSearchParams(query).toString();
    // Ensure router.push is receiving correct arguments
    router.push(process.env.NEXT_PUBLIC_API_URL+'/search?'+newQuery);
  };

  return (
    <form onSubmit={handleSubmit} className=" w-full rounded-md">
      <div className="grid grid-cols-3 gap-4 sm:grid-cols-3 lg:grid-cols-6">
     {/** <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="p-2 border rounded-md"
        />
        */} 
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="p-2.5 border rounded-md"
        >
          <option value="">Category</option>
          <option value="residential">Residential</option>
          <option value="commercial">Commercial</option>
        </select>
        <select
          value={subCategory}
          onChange={(e) => setSubCategory(e.target.value)}
          className="p-2.5 border rounded-md"
        >
          <option value="">Sub Category</option>
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
        <select
          value={purpose}
          onChange={(e) => setPurpose(e.target.value)}
          className="p-2.5 border rounded-md"
        >
          <option value="">Purpose</option>
          <option value="sale">Sale</option>
          <option value="rent">Rent</option>
        </select>
        <select
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="p-2 border rounded-md"
        >
          <option value="">Location</option>
            {locationList && locationList.map((loca)=>  <option className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm' value={loca.name} label={loca.name} />)}
          </select>
            {
              /**
               * 
               * 
               * <select
          value={completionStatus}
          onChange={(e) => setCompletionStatus(e.target.value)}
          className="p-2 border rounded-md"
        >
          <option value="">Completion Status</option>
          <option value="offPlanPrimary">Off Plan Primary</option>
          <option value="offPlanSecondly">Off Plan Secondly</option>
          <option value="readyPrimary">Ready Primary</option>
          <option value="readySecondary">Ready Secondary</option>
        </select>
               */
            }
       
        <input
          type="number"
          placeholder="Min Price"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
          className="p-2 border rounded-md"
        />
        <input
          type="number"
          placeholder="Max Price"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          className="p-2 border rounded-md"
        />
      {/**
        * 
        * 
        <input
          type="number"
          placeholder="Min Bedrooms"
          value={minBedrooms}
          onChange={(e) => setMinBedrooms(e.target.value)}
          className="p-2 border rounded-md"
        />
        <input
          type="number"
          placeholder="Max Bedrooms"
          value={maxBedrooms}
          onChange={(e) => setMaxBedrooms(e.target.value)}
          className="p-2 border rounded-md"
        />
      
       <input
          type="number"
          placeholder="Min Bathrooms"
          value={minBathrooms}
          onChange={(e) => setMinBathrooms(e.target.value)}
          className="p-2 border rounded-md"
        />
        <input
          type="number"
          placeholder="Max Bathrooms"
          value={maxBathrooms}
          onChange={(e) => setMaxBathrooms(e.target.value)}
          className="p-2 border rounded-md"
        />
        * 
        */}
        {/**
         * <input
          type="number"
          placeholder="Min Size"
          value={minSize}
          onChange={(e) => setMinSize(e.target.value)}
          className="p-2 border rounded-md"
        />
        <input
          type="number"
          placeholder="Max Size"
          value={maxSize}
          onChange={(e) => setMaxSize(e.target.value)}
          className="p-2 border rounded-md"
        />
         * 
         */}
        
      </div>
     <div className='text-center'>
     <button type="submit" className="mt-4 px-12 py-2 text-2xl font-bold bg-[#164849] text-white py-2 rounded-md">
        Search
      </button>
     </div>
    </form>
  );
};

export default SearchForm;

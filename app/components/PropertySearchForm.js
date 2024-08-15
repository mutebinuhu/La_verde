"use client"
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';


export default function PropertySearchForm() {
  const [location, setLocation] = useState('');
    
  const router = useRouter();

  const [activeButton, setActiveButton] = useState('rent');
  const [locationList, setLocationList] = useState([])

  const [formData, setFormData] = useState({
    location: '',
    propertyType: '',
    maxPrice: '',
  });

  const handleButtonClick = (buttonType) => {
    setActiveButton(buttonType);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const query = {};
    if (formData.propertyType) query.subCategory = formData.propertyType;
    if (formData.location) query.location = formData.location;
    if (formData.maxPrice) query.maxPrice = formData.maxPrice;
    if (activeButton) query.purpose = activeButton;

    console.log("query", query);

    // Handle form submission, e.g., API call with formData and activeButton
    console.log('Form submitted:', formData, 'Type:', activeButton);
    const newQuery = new URLSearchParams(query).toString();
    // Ensure router.push is receiving correct arguments
    router.push(process.env.NEXT_PUBLIC_API_URL+'/search?'+newQuery);

  };

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
    <form onSubmit={handleSubmit} className="">
      <div className="flex">
        <button
          type="button"
          onClick={() => handleButtonClick('rent')}
          className={`px-12 md:px-12 py-6  font-semibold  bg-[#FFA72A]  rounded-tl-xl  text-white`}
        >
          Rent
        </button>
        <button
          type="button"
          onClick={() => handleButtonClick('buy')}
          className={`px-12 py-6 font-semibold border-r border-l border-white ${activeButton === 'buy' ? 'bg-green-500 text-white' : 'bg-gray-100 text-gray-800'}`}
        >
          Buy
        </button>
        <button
          type="button"
          onClick={() => handleButtonClick('sell')}
          className={`px-12 py-6 font-semibold rounded-tr-xl ${activeButton === 'sell' ? 'bg-yellow-500 text-white' : 'bg-gray-100 text-gray-800'}`}
        >
          Sell
        </button>
      </div>

      <div className="bg-white p-1">
          <div className='flex  w-full space-x-2 '>
          <select
          type="text"
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleInputChange}
          className="p-2  w-24 md:w-full rounded border border-gray-400"
        >
          <option value="">Location</option>
            {locationList && locationList.map((loca)=>  <option className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm' value={loca.name} label={loca.name} />)}
       
        </select>
        <select
          type="text"
          name="propertyType"
          placeholder="Type"
          value={formData.propertyType}
          onChange={handleInputChange}
          className="p-2  w-24 md:w-full rounded  border border-gray-400"
        >
           <option value="">Type</option>
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
        <input
          type="number"
          name="maxPrice"
          placeholder="Max Price"
          value={formData.maxPrice}
          onChange={handleInputChange}
          className="p-2 w-24 md:w-full rounded border border-gray-400"
        />
      <div className='w-full'>
      <button className='bg-[#FFA72A]  md:p-6 p-4 w-full rounded  text-white'>
         <span className='flex justify-center space-x-4 items-center'><FaSearch className='text-xl'/> <span>Go</span></span>
        </button>
      </div>
          </div>
        </div>
        
      
    </form>
  );
}

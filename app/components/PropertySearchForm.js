import { useEffect, useState } from 'react';


export default function PropertySearchForm() {
  const [location, setLocation] = useState('');

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
          className={`px-12 md:px-12 py-6 font-semibold  bg-blue-500 rounded-tl-xl  text-white`}
        >
          Rent
        </button>
        <button
          type="button"
          onClick={() => handleButtonClick('buy')}
          className={`px-12 py-6 font-semibold ${activeButton === 'buy' ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-700'}`}
        >
          Buy
        </button>
        <button
          type="button"
          onClick={() => handleButtonClick('sell')}
          className={`px-12 py-6 font-semibold rounded-tr-xl ${activeButton === 'sell' ? 'bg-yellow-500 text-white' : 'bg-gray-200 text-gray-700'}`}
        >
          Sell
        </button>
      </div>

      <div className="bg-white ">
          <div className='flex  w-full '>
          <select
          type="text"
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleInputChange}
          className="p-2  w-24 md:w-full rounded"
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
          className="p-2  w-24 md:w-full rounded"
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
          className="p-2 w-24 md:w-full rounded"
        />
      <div className='w-full'>
      <button className='bg-blue-500 md:p-6 p-4 w-full   text-white'>
          Go
        </button>
      </div>
          </div>
        </div>
        
      
    </form>
  );
}

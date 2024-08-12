import { useState } from 'react';

export default function PropertySearchForm() {
  const [activeButton, setActiveButton] = useState('');
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
    // Handle form submission, e.g., API call with formData and activeButton
    console.log('Form submitted:', formData, 'Type:', activeButton);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex ">
        <button
          type="button"
          onClick={() => handleButtonClick('buy')}
          className={`px-10 md:px-12 py-6 font-semibold rounded-tl-xl  ${activeButton === 'buy' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
        >
          Buy
        </button>
        <button
          type="button"
          onClick={() => handleButtonClick('sell')}
          className={`px-10 py-6 font-semibold ${activeButton === 'sell' ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-700'}`}
        >
          Sell
        </button>
        <button
          type="button"
          onClick={() => handleButtonClick('rent')}
          className={`px-10 py-6 font-semibold rounded-tr-xl ${activeButton === 'rent' ? 'bg-yellow-500 text-white' : 'bg-gray-200 text-gray-700'}`}
        >
          Rent
        </button>
      </div>

      <div className="flex w-72 ">
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleInputChange}
          className="p-2 border rounded"
        />
        <input
          type="text"
          name="propertyType"
          placeholder="Property Type"
          value={formData.propertyType}
          onChange={handleInputChange}
          className="p-2 border rounded"
        />
        <input
          type="number"
          name="maxPrice"
          placeholder="Max Price"
          value={formData.maxPrice}
          onChange={handleInputChange}
          className="p-2 border rounded"
        />
        <button
        type="submit"
        className="flex items-center justify-center px-4 py-2 bg-blue-500 text-white font-semibold rounded"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M13 7H7v2h6V7zM7 9v2h6V9H7zm0 2v2h6v-2H7zm2-6h2V2H9v3zm7.707 4.293a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L9 12.586V2a1 1 0 112 0v10.586l3.293-3.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
        Search
      </button>
      </div>

      
    </form>
  );
}

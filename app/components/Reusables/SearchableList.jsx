import React, { useState } from 'react';
import { MdCancel } from "react-icons/md";

const SearchableList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedItems, setSelectedItems] = useState([]);
  const [isListVisible, setIsListVisible] = useState(false);

  const items = [
    'Al Reem Island',
    'Al Maryah Island',
    'Saadiyat Island',
    'Yas  Island',
    'Al Hudayriat Island',
    'Al Raha '
  ];

  const filteredItems = items.filter(item =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelectItem = (item) => {
    setSelectedItems(prevSelectedItems => 
      prevSelectedItems.includes(item)
        ? prevSelectedItems.filter(i => i !== item)
        : [...prevSelectedItems, item]
    );
    setSearchTerm('');
    setIsListVisible(false);
  };

  const handleRemoveItem = (item) => {
    setSelectedItems(prevSelectedItems => 
      prevSelectedItems.filter(i => i !== item)
    );
  };

  return (
    <div className="my-2 md:my-6 max-w-md mx-auto">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onFocus={() => setIsListVisible(true)}
        className="w-full p-2 mb-2 border rounded"
      />
      {isListVisible && (
        <div className="max-h-60 overflow-y-auto border rounded p-2">
          <ul className="list-none">
            {filteredItems.map((item, index) => (
              <li 
                key={index} 
                className={`py-1 cursor-pointer ${selectedItems.includes(item) ? 'bg-blue-200' : ''}`}
                onClick={() => handleSelectItem(item)}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
      {selectedItems.length > 0 && (
        <div className="mt-4 max-h-60 overflow-y-auto border rounded p-2 w-60 md:w-full">
          <h2 className="text-xl font-bold mb-2 container text-white mx-auto">Selected Areas</h2>
          <ul className="list-none flex justify-center space-x-4 items-center">
            {selectedItems.map((item, index) => (
              <li key={index} className="flex  text-white font-bold items-center justify-between py-1 px-2 border rounded">
                {item}
                <button 
                  className="ml-2 text-red-600"
                  onClick={() => handleRemoveItem(item)}
                >
                  <MdCancel />
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchableList;

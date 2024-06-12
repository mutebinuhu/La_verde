import React from 'react';
import { useField, useFormikContext } from 'formik';
import { MdCancel } from "react-icons/md";

const SearchableList = ({ name }) => {
  const { setFieldValue, values } = useFormikContext();
  const [searchTerm, setSearchTerm] = React.useState('');
  const [isListVisible, setIsListVisible] = React.useState(false);
  
  const items = [
    'Al Reem Island',
    'Al Maryah Island',
    'Saadiyat Island',
    'Yas Island',
    'Al Hudayriyat  Island',
    'Al Raha'
  ];

  const filteredItems = items.filter(item =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelectItem = (item) => {
    const newSelectedItems = values[name].includes(item)
      ? values[name].filter(i => i !== item)
      : [...values[name], item];
    setFieldValue(name, newSelectedItems);
    setSearchTerm('');
    setIsListVisible(false);
  };

  const handleRemoveItem = (item) => {
    setFieldValue(name, values[name].filter(i => i !== item));
  };

  return (
    <div className="my-1 md:my-3 max-w-md mx-auto">
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
          <ul className="list-none text-white">
            {filteredItems.map((item, index) => (
              <li
                key={index}
                className={`py-1 cursor-pointer ${values[name].includes(item) ? 'bg-[#164849]' : ''}`}
                onClick={() => handleSelectItem(item)}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
      {values[name].length > 0 && (
        <div className="mt-4 max-h-60 overflow-y-auto border rounded p-2 w-60 md:w-full">
          <h2 className="text-xl font-bold mb-2 container text-white mx-auto">Selected Areas</h2>
          <ul className="list-none flex justify-center space-x-4 items-center">
            {values[name].map((item, index) => (
              <li key={index} className="flex text-xs bg-white text-[#164849] font-bold items-center justify-between py-1 px-1 border rounded">
                {item}
                <button
                  type="button"
                  className="ml-2 text-red-600"
                  onClick={() => handleRemoveItem(item)}
                >
                  <MdCancel className='text-[#164849]' />
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

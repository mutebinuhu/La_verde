
import React, { useState } from 'react';

const Pills = ({ items }) => {
  const [activeItem, setActiveItem] = useState(items[0]);

  return (
    <div className="flex overflow-x-auto w-full">
      {items.map((item) => (
        <button
          key={item}
          className={`px-4 py-2 rounded-full ${
            item === activeItem ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-600'
          }`}
          onClick={() => setActiveItem(item)}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default Pills;

import React from 'react';

export const Card = ({ imageUrl, title, buttonText }) => {
  return (
    <div className="max-w-md rounded overflow-hidden shadow-lg mx-auto my-4">
      <img className="w-full h-60 object-cover" src={imageUrl} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
      </div>
      <div className="px-6 pb-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          {buttonText}
        </button>
      </div>
    </div>
  );
};



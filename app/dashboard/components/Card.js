import React from 'react';

const Card = ({ title, description, imageUrl, component }) => {
  return (
    <div className="w-full overflow-hidden rounded-lg shadow-lg bg-white p-4 border">
      {imageUrl && (
        <img className="w-full h-48 object-cover" src={imageUrl} alt={title} />
      )}
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <>
        {component}
      </>
      
    </div>
  );
};

export default Card;

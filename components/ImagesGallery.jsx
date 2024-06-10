import React from 'react';

const ImagesGallery = ({ images }) => {
  if (images.length < 3) {
    console.error('Please provide at least 3 images');
    return null;
  }

  return (
    <div className="flex flex-wrap md:flex-nowrap gap-4 mb-4">
      {/* Main Image */}
      <div className="w-full md:w-7/10 md:h-[400px]">
        <img src={images[0]} alt="Main Property" className="w-full h-full object-cover rounded-md transform transition-transform hover:scale-105" />
      </div>
      
      {/* Side Images */}
      <div className="w-full md:w-3/10 flex flex-col gap-4">
        <div className="h-48">
          <img src={images[1]} alt="Property Side 1" className="w-full h-full object-cover rounded-md transform transition-transform hover:scale-105" />
        </div>
        <div className="h-48">
          <img src={images[2]} alt="Property Side 2" className="w-full h-full object-cover rounded-md transform transition-transform hover:scale-105" />
        </div>
      </div>
    </div>
  );
};

export default ImagesGallery;

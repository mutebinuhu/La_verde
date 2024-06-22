"use client"
import React, {useState} from 'react';
import ImageCarousel from './ImageCoursel';
import SwipeImages from './SwipeImages';
const ImagesGallery = ({ images }) => {
  if (images.length < 3) {
    console.error('Please provide at least 3 images');
    return null;
  }
  const imagesList = [
    'https://via.placeholder.com/800x600.png?text=Image+1',
    'https://via.placeholder.com/800x600.png?text=Image+2',
    'https://via.placeholder.com/800x600.png?text=Image+3',
  ];
  const [showImages, setShowImage] = useState(false);
  const handleClick = () =>{
    setShowImage(false)
  }
  return (
    <>
    <div className="flex flex-wrap md:flex-nowrap gap-4 mb-4" onClick={()=>setShowImage(true)}>
      {/* Main Image */}
      <div className="w-full md:w-7/10 md:h-[400px]">
        <img src={images[0]} alt="Main Property" className="w-full h-full object-cover rounded-md transform transition-transform hover:scale-95" />
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
  
   {
     showImages && <SwipeImages images={images} handleClick={handleClick}/>

   }
    </>
  );
};

export default ImagesGallery;

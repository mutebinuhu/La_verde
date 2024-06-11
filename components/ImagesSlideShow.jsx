"use client";
import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
const ImagesSlideShow = ({images}) =>{
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handleNextImage = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
  
    const handlePrevImage = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };
    return(
                  <div className="w-full md:w-2/4 relative rounded-lg">
          <img
            src={images[currentImageIndex]}
            alt={`Property Image ${currentImageIndex + 1}`}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
          <button
            onClick={handlePrevImage}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full hover:bg-gray-900 transition duration-300"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={handleNextImage}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full hover:bg-gray-900 transition duration-300"
          >
            <FaArrowRight />
          </button>
        </div>
    )
}
export default ImagesSlideShow;
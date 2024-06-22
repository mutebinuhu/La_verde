// components/ImageCarousel.js
"use client";
import React, { useState } from 'react';
import { GiCancel } from 'react-icons/gi';
import { useSwipeable } from 'react-swipeable';

const  SwipeImages = ({ images, handleClick }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handlers = useSwipeable({
    onSwipedLeft: nextImage,
    onSwipedRight: prevImage,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });

  return (
    <div
      {...handlers}
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75"
    >
      <button
        className="absolute left-0 p-4 text-white bg-gray-800 bg-opacity-50 hover:bg-opacity-75"
        onClick={prevImage}
      >
        &lt;
      </button>
      <div  onClick={handleClick}>
      <GiCancel className='text-red-500 text-3xl right-0 absolute' />
      <img
        src={images[currentIndex]}
        alt={`Image ${currentIndex + 1}`}
        className="max-h-screen max-w-screen"
      />
      </div>

      <button
        className="absolute right-0 p-4 text-white bg-gray-800 bg-opacity-50 hover:bg-opacity-75"
        onClick={nextImage}
      >
        &gt;
      </button>
    </div>
  );
};

export default SwipeImages;

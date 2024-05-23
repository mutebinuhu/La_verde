"use client"
// src/components/Slideshow.jsx
import React, { useState } from 'react';
import { IoChevronBack, IoChevronForward } from "react-icons/io5";



const Slideshow = ({imageLinks}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? imageLinks.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === imageLinks.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="overflow-hidden relative   w-full h-64 bg-gray-200">
        {imageLinks.map((image, index) => (
          <div
            key={index}
            className={`absolute w-full h-full transition-opacity  duration-1000 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img src={image} alt={`Slide ${index + 1}`} className="object-cover w-full h-full" />
          </div>
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-900  bg-opacity-75 text-white px-2 rounded-full py-2"
      >
          <IoChevronBack/>
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-0 transform -translate-y-1/2  bg-gray-900  bg-opacity-75 text-white px-2 rounded-full py-2"
      >
          <IoChevronForward/>
       
      </button>
    </div>
  );
};

export default Slideshow;

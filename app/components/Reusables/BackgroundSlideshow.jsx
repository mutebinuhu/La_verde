"use client";
import React, { useEffect, useState } from 'react';

const slides = [
  '/reportagetower/3840.jpg', // Add your image paths here
  '/reportagetower/3841.jpg',
  '/reportagetower/3842.jpg',

];

const BackgroundSlideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute -z-50 mb-[300px] w-full h-96  overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute  z-0 w-full h-96 bg-cover bg-center transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url(${slide})` }}
        />
      ))}
    </div>
  );
};

export default BackgroundSlideshow;

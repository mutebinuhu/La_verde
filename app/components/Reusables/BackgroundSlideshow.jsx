"use client";
import React, { useEffect, useState } from 'react';
import Banner2 from '../Banner2';

const slides = [
  '/baraka/baraka1.png', // Add your image paths here
  '/baraka/baraka2.jpg',
  '/baraka/baraka3.jpg',
  '/baraka/baraka4.png',

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
    <div className="absolute -z-50 mb-[300px] w-full h-[500px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute  z-0 w-full h-[500px] bg-cover bg-center transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url(${slide})` }}
        />
      ))}
    </div>
  );
};

export default BackgroundSlideshow;

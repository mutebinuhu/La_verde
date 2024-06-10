// src/components/SlideshowCard.jsx
import React, { useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const images = [
  'https://via.placeholder.com/600x400?text=Slide+1',
  'https://via.placeholder.com/600x400?text=Slide+2',
  'https://via.placeholder.com/600x400?text=Slide+3',
];

const SlideshowCard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-md p-4 bg-white rounded-lg shadow-md">
        <div className="relative overflow-hidden rounded-lg">
          <TransitionGroup>
            <CSSTransition
              key={currentIndex}
              timeout={500}
              classNames="slide"
            >
              <img
                src={images[currentIndex]}
                alt={`Slide ${currentIndex + 1}`}
                className="w-full"
              />
            </CSSTransition>
          </TransitionGroup>
        </div>
        <div className="flex justify-between mt-4">
          <button
            onClick={handlePrevious}
            className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700"
          >
            Previous
          </button>
          <button
            onClick={handleNext}
            className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default SlideshowCard;

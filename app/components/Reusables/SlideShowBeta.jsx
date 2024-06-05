import React, { useEffect, useState } from 'react';

const slides = [
  { id: 1, content: <div className="p-4">Slide 1 Content</div> },
  { id: 2, content: <div className="p-4">Slide 2 Content</div> },
  { id: 3, content: <div className="p-4">Slide 3 Content</div> },
];

const SlideShowBeta = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-96 overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-transform transform ${
            index === currentIndex ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-center w-full h-full bg-gray-800 text-white">
            {slide.content}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SlideShowBeta;

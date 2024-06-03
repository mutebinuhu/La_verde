import { useState } from 'react';
import Image from 'next/image';

const slides = [
  { url: '/10.jpg', title: 'Project One' },
  { url: '/11.jpg', title: 'Project Two' },
  { url: '/MASTER BATHROOM.jpg', title: 'Project Three' },
];

const CampaignBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full h-64 md:h-96">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={slide.url}
            alt={slide.title}
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <h2 className="text-white text-2xl md:text-4xl font-bold">{slide.title}</h2>
          </div>
        </div>
      ))}
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full"
        onClick={prevSlide}
      >
        Prev
      </button>
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full"
        onClick={nextSlide}
      >
        Next
      </button>
    </div>
  );
}
export default CampaignBanner;
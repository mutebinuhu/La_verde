import React from 'react';
import { FaForward } from 'react-icons/fa';
import { FaRightLong } from 'react-icons/fa6';
import MoreDetails from './MoreDetails';
import Link from 'next/link';

const CityCard = ({ image, propertiesCount, cityName, url }) => {
  return (
    <Link href={url}>
        <div className="relative overflow-hidden rounded-lg shadow-md">
      <img src={image} alt={cityName} className="w-full h-64 object-cover" />
      <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-between p-4 text-white hover:gray-400 hover:bg-opacity-10">
        <div>
          <p className="text-sm font-light">{propertiesCount} Properties</p>
          <h2 className="text-2xl font-semibold">{cityName}</h2>
        </div>
        <MoreDetails/>
      </div>
    </div>
    </Link>
  );
};

const CityGrid = () => {
  const cities = [
    { image: 'reem.jpg', propertiesCount: 10, cityName: 'Al Reem Island' },
    { image: 'yas1.jpg', propertiesCount: 15, cityName: 'Yas Island' },
    { image: 'ALD2607_SaadiyatLagoons_S160_Aerial_RetailZone_5k.jpg', propertiesCount: 13, cityName: 'Al Saadiyat Island' },
    { image: 'Alraha.jpg', propertiesCount: 14, cityName: 'Al Raha' },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 py-4 mx-4 md:mx-0">
      {cities.map((city, index) => (
        <CityCard
          key={index}
          image={city.image}
          propertiesCount={city.propertiesCount}
          cityName={city.cityName}
          url={`/search?location=${city.cityName}`}
        />
      ))}
    </div>
  );
};

export default CityGrid;

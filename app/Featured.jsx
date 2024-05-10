import React from "react";
import PropertyCard from "./components/PropertyCard";
const properties = [
    {
      id: 1,
      title: 'Luxury Apartment in Downtown',
      image: '/images/apartment1.jpg',
      description: 'Spacious apartment with stunning views of the city skyline.',
      amenities: ['Swimming Pool', 'Gym', 'Parking', '24/7 Security'],
    },
    {
      id: 2,
      title: 'Modern Condo in Suburbia',
      image: '/images/apartment2.jpg',
      description: 'Contemporary condo with easy access to shopping and dining.',
      amenities: ['Fitness Center', 'Balcony', 'Pet-friendly', 'Laundry'],
    },
    {
      id: 3,
      title: 'Modern Condo in Suburbia',
      image: '/images/apartment2.jpg',
      description: 'Contemporary condo with easy access to shopping and dining.',
      amenities: ['Fitness Center', 'Balcony', 'Pet-friendly', 'Laundry'],
    },
  ];
const Featured = () =>{
    return(
        <div className="container mx-auto mt-8">
            <div className="mx-4">
            <h1 className="text-3xl font-semibold mb-8">Featured Properties</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {properties.map((property) => (
          <PropertyCard
            key={property.id}
            title={property.title}
            image={property.image}
            description={property.description}
            amenities={property.amenities}
          />
        ))}
      </div>
            </div>
    </div>
    )
}

export default Featured;
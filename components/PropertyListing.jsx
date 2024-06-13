import React from 'react';
import axios from 'axios';
import PropertyDetails from './PropertyDetails';
async function getData() {

    const res = await fetch('http://localhost:3000/api/properties')
    
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
    const data = await res.json();
    //console.log("we are here", data);
   
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
   
    return data;
  }
const PropertyListing = async () => {
    const properties = await getData()

  return (
    <div className=" mt-10">
      <h1 className="text-3xl font-bold mb-5 text-center">Property Listings pages</h1>
      <div className="">
        {
            properties.data.map(property => (
         <PropertyDetails property={property}/>
        ))}
          
      </div>
    </div>
  );
};



export default PropertyListing;

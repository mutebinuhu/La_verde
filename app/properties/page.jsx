
import React from "react";
import PropertyCard from "../components/Reusables/PropertyCard";

const Page = async () =>{
    let data, error;

    try {
      const res = await fetch('https://laverde.ae/api/properties', { cache: 'no-store' }); // 'no-store' for fresh data
      if (!res.ok) {
        throw new Error('Failed to fetch data');
      }
      data = await res.json();
      console.log("data===", data)
    } catch (err) {
      error = err.message;
      console.log("errr=====", err)
    }
  
    if (error) {
      return <div>Error: {error}</div>;
    }
    const list = [
        {
          title: "Orange",
          img: "/10.jpeg",
          price: "$5.50",
        },
        {
          title: "Tangerine",
          img: "/11.jpeg",
          price: "$3.00",
        },
        {
          title: "Raspberry",
          img: "/ALD2607_SaadiyatLagoons_S130_EXT_CyclePath.jpeg",
          price: "$10.00",
        },
        {
          title: "Lemon",
          img: "/images/fruit-4.jpeg",
          price: "$5.30",
        },
        {
          title: "Avocado",
          img: "/images/fruit-5.jpeg",
          price: "$15.70",
        },
        {
          title: "Lemon 2",
          img: "/images/fruit-6.jpeg",
          price: "$8.00",
        },
        {
          title: "Banana",
          img: "/images/fruit-7.jpeg",
          price: "$7.50",
        },
        {
          title: "Watermelon",
          img: "/images/fruit-8.jpeg",
          price: "$12.20",
        },
      ];
      //
    return(
        <section className="container mx-auto py-8">
            <h1 className="py-16 text-4xl font-bold px-4 ">Property Listing page</h1>
            <div className="gap-8 grid grid-cols-1 sm:grid-cols-4 px-4">
                {data.data.map((item, index) => (
                  <PropertyCard item={item} src={item.propertyImages[0]}/>
                ))}
        </div>
        
        </section>
    )
}
export default Page;
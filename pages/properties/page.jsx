
import React from "react";
import PropertyListing from "@/components/PropertyListing";
import PropertyDetailsBeta from "@/components/PropertyDetailsBeta";

const Page = async () =>{
    let data, error;

    try {
      const res = await fetch('https://laverde.ae/api/properties', { cache: 'no-store' }); // 'no-store' for fresh data
      if (!res.ok) {
        
        throw new Error('Failed to fetch data');
      }
      data = await res.json();
    } catch (err) {
      console.log("errrr================", err.message)
      error = err.message;
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
        <section className="container  py-8">
             <PropertyListing/>
             <PropertyDetailsBeta/>
        
        </section>
    )
}
export default Page;
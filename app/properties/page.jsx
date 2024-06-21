
import React from "react";
import PropertyListing from "@/components/PropertyListing";
import PropertyDetailsBeta from "@/components/PropertyDetailsBeta";

const Page = async () =>{
    let data, error;

    try {
      const res = await fetch(process.env.NEXT_PUBLIC_API_URL+'api/properties', { cache: 'no-store' }); // 'no-store' for fresh data
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
 
      //
    return(
        <section className="container  py-8">
             <PropertyListing/>
        
        </section>
    )
}
export default Page;
import Navbar from "@/components/Navbar";
import PropertyDetailsBeta from "@/components/PropertyDetailsBeta";
import  React from "react";
const Page = ({params}) =>{
    const {slug} = params;
    return(
        <>
        <div className="bg-[#104e3e]">
        <Navbar/>
        </div>
       <PropertyDetailsBeta propertyId={slug}/>
        </>
    )
}
export default Page;
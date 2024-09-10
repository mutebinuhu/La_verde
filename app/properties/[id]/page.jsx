import Navbar from "@/components/Navbar";
import PropertyDetailsBeta from "@/components/PropertyDetailsBeta";
import  React from "react";
const Page = ({params}) =>{
    const {id} = params;
    return(
        <>
        <div className="bg-[#104e3e]">
        <Navbar/>
        </div>
       <PropertyDetailsBeta propertyId={id}/>
        </>
    )
}
export default Page;
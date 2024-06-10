import PropertyDetailsBeta from "@/components/PropertyDetailsBeta";
import  React from "react";
const Page = ({params}) =>{
    const {id} = params;
    return(
       <PropertyDetailsBeta propertyId={id}/>
    )
}
export default Page;
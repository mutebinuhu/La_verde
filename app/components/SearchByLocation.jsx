import React from "react"
import {Card, CardHeader, CardBody, CardFooter, Image, Button} from "@nextui-org/react";
const PropertyCard = ({imageUrl, location}) =>{
    return(
        <Card  className="h-[600px] md:w-1/3 mt-8 md:mt-0 col-span-12 sm:col-span-5">
<Image
  removeWrapper
  alt="Card example background"
  className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
  src={imageUrl}
/>
<CardFooter className="absolute h-32  bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between bg-gradient-to-t from-[#164849] to-[#288384]">
  <div className="w-full md:flex justify-center">
        <div className="">
        <div className="py-4">
            <p className="text-white font-bold text-lg text-center">{location}</p>
        </div>
        <Button className="text-lg font-bold rounded text-[#164849]"  size="lg">
            View Properties
        </Button>
        </div>
  </div>
</CardFooter>
</Card>
    )
}
const SearchByLocation = ()=>{
    return(
        <section>
               <div className="text-center py-24">
               <h2 className="text-3xl">Search By Location</h2>
                <div className="md:flex justify-between container mx-auto md:space-x-8">
                <PropertyCard imageUrl={'/ALDAR_AlReeman2PH3_CGI20_RearYard_04.jpg'} location="Reem Island"/>
                <PropertyCard imageUrl={'/ALDAR_AlReeman2PH3_CGI20_RearYard_04.jpg'} location="Yas Island"/>
                <PropertyCard imageUrl={'/ALDAR_AlReeman2PH3_CGI20_RearYard_04.jpg'} location="Sadiyaat Island"/>
                </div>
               </div>
        </section>
    )
}
export default SearchByLocation;
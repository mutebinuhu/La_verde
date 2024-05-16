    "use client"
import React, { useState } from "react";
import Carousel from 'react-elastic-carousel';
import SearchByLocation from "../SearchByLocation";
import {Card, CardHeader, CardBody, CardFooter, Image, Button} from "@nextui-org/react";

   
    const breakPoints = [
      { width: 3, itemsToShow: 1 },
      { width: 550, itemsToShow: 1, itemsToScroll: 2 },
      { width: 768, itemsToShow: 2 },
      { width: 1200, itemsToShow: 3 }
    ];
  
  export const Elsatic = () =>{
    const PropertyCard = ({imageUrl, location}) =>{
        return(
            <Card  className="h-[550px]  p-0 mt-8 md:mt-0 col-span-12 mx-4 sm:col-span-5">
           
            <CardBody className="overflow-visible ">
    <Image
      alt="Card background"
      className="object-cover h-[450px]  rounded-xl w-full"
      src={imageUrl}
    />
  </CardBody>
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
    const items=  [
        <PropertyCard imageUrl={'/reem.jpg'} location="Reem Island"/>,
        <PropertyCard imageUrl={'/ALDAR_Ansam2_CGI08_Buildings_07 (2).jpg'} location="Yas Island"/>,
        <PropertyCard imageUrl={'/ALD2607_SaadiyatLagoons_S160_Aerial_RetailZone_5k.jpg'} location="Sadiyaat Island"/>,
        <PropertyCard imageUrl={'/ALDAR_AlReeman2PH3_CGI20_RearYard_04.jpg'} location="Khalidiyah"/>,


      ]
    return(
     <>
        <div className="controls-wrapper bg-green-500">
      
      </div>
      <h2 className="text-3xl text-bold text-center py-16">Search By Location</h2>
      <div className="carousel-wrapper">
      <div>
      <Carousel breakPoints={breakPoints} className="container mx-auto py-0 " >
        {items.map(item =><div className="w-full">{item}</div>)}
      </Carousel>
          </div>
      </div>
     </>
    )
  }

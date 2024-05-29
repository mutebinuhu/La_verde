    "use client"
import React, { useState } from "react";
import SearchByLocation from "../SearchByLocation";
import {Card, CardHeader, CardBody, CardFooter, Image, Button} from "@nextui-org/react";
import Link from "next/link";
import { nonoSerif } from '@/utils/fonts';


   
    const breakPoints = [
      { width: 3, itemsToShow: 1 },
      { width: 550, itemsToShow: 1, itemsToScroll: 2 },
      { width: 768, itemsToShow: 2 },
      { width: 1200, itemsToShow: 3 }
    ];
  
  export const Elsatic = () =>{
    const PropertyCard = ({imageUrl, location}) =>{
        return(
            <Card  className="h-[350px] md:h-[550px]  p-0 mt-8 md:mt-0 mx-4">
           
            <CardBody className="overflow-visible ">
    <Image
      alt="Card background"
      className="object-cover h-[450px]   rounded-xl w-full"
      src={imageUrl}
    />
  </CardBody>
    <CardFooter className="absolute h-24 md:h-32  bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between bg-gradient-to-t from-[#164849] to-[#288384]">
      <div className="w-full md:flex justify-center">
            <div className="">
            <div className="py-4">
                <p className="text-white font-bold text-lg text-center">{location}</p>
            </div>
            <div className="text-center py-4">
            <Link href="/contact-us" className=" bg-white p-4 text-sm font-bold rounded text-[#164849]"  size="lg">
                 View Properties
            </Link>
            </div>
            </div>
      </div>
    </CardFooter>
    </Card>
        )
    }
    const items=  [
        <PropertyCard imageUrl={'/al-reem-island-adgm.jpg'} location="Reem Island"/>,
        <PropertyCard imageUrl={'/yas1.jpg'} location="Yas Island"/>,
        <PropertyCard imageUrl={'/Lq4LqPEX-2013_saadiyat_1_base-1.jpg'} location="Sadiyaat Island"/>



      ]
    return(
     <>
        <div className="controls-wrapper bg-green-500">
      
      </div>



      <h2 className={`${nonoSerif.className} text-4xl text-bold text-center py-16`}>Search By Location</h2>
      <p className="  text-center py-4">Are you dreaming of living on Reem Island with its stunning waterfront views, or being surrounded by world-class entertainment and attractions on Yas Island?</p>
      <p className=" text-center py-2">Let us send you a curated list of properties in your desired area. Your perfect home awaits!</p>

      <div className="py-12 md:mx-48">
      <div className="md:flex " >
        {items.map(item =><div className="w-full">{item}</div>)}
      </div>
      </div>
     </>
    )
  }

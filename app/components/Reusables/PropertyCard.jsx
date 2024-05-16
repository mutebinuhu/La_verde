"use client";
import React from "react";
import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";
const PropertyCard = ({index, src, item}) =>{
    return(
            <>
            <div className="border rounded-t-2xl ">
              <Card shadow="sm" className="" key={index} isPressable onPress={() => console.log("item pressed")}>
                    <CardBody className="overflow-visible rounded p-0 ">
                        <Image
                        shadow="sm"
                        radius="lg"
                        width="100%"
                        alt={item.title}
                        className="w-full object-cover rounded h-[300px]"
                        src={src}
                        />
                    </CardBody>
                    </Card>
                    <div className="text-left py-4 w-full  px-4 ">
                        <div className="flex justify-between py-2">
                        <p className="font-bold text-xl">{item.name}</p>
                        <p className="font-medium  text-xl">{item.price} AED</p>
                        </div>
                        <p>{item.about[0]}</p>
                            <ul className="flex justify-between py-6">
                                <li className="md:flex space-x-2 "><Image
                                className="w-6 h-6 rounded-0"
                                width="100%"
                                alt={item.title} src="/sleeping.png"/>
                                <span>{item.bed}</span>
                                </li>

                                <li className="md:flex space-x-2"><Image
                                className="w-6 h-6 rounded-0"
                                width="100%"
                                alt={item.title} src="/bathroom.png"/>
                                    <span>{item.bath}</span>

                                </li>
                                <li className="md:flex space-x-2"><Image
                                className="w-6 h-6   rounded-0"
                                width="100%"
                                alt={item.title} src="/wide.png"/>
                                    <span>{item.sqft}</span>
                                </li>
                            </ul>
                    </div>
                    </div>
                </>
       
    )
}
export default PropertyCard
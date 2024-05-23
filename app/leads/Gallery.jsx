"use client";
import React from "react";
import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";
const Gallery = ({list}) =>{
    
    return(
      <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
        {list.map((item, index) => (
          <Card shadow="sm" key={index} isPressable onPress={() => console.log("item pressed")}>
            <CardBody className="overflow-visible p-0">
              <Image
                shadow="sm"
                radius="lg"
                width="100%"
                alt={item.title}
                className="w-full object-cover h-[140px] md:h-[280px]"
                src={item.img}
              />
            </CardBody>
            
          </Card>
        ))}
      </div>
    )
  }

  export default Gallery;
  
"use client";
import { Card, CardHeader } from "@nextui-org/card";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";


const CardInnerHeading = ({title, subTitle}) =>{
    return(
        <div className="bg-black px-4 py-2 bg-opacity-75">
            <h4 className="text-white font-medium text-large">{title}</h4>
            <p className="text-tiny text-white/60 uppercase font-bold">STARTING PRICE : {subTitle}</p>
        </div>
    )
}
const PopularServicesComponent = ()=>{
    const sectionRef = useRef(null);
    useEffect(() => {
    
        const section = sectionRef.current;
    
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                section.classList.add('animate-fadeIn');
              } else {
                section.classList.remove('animate-fadeIn');
              }
            });
          },
          { threshold: 0.1 }
        );
    
        if (section) {
          observer.observe(section);
        }
    
        return () => {
          if (section) {
            observer.unobserve(section);
          }
        };
      }, []);
    return(
        <>
         <div id="" ref={sectionRef}>
            <div  className="md:flex mx-4 md:mx-12">
                <div className="w-full md:w-1/3 md:mx-2">   
                <Link href={`${process.env.NEXT_PUBLIC_API_URL}/search?location=Al+Reem+Island`}>
                        <Card className="col-span-12 sm:col-span-4 h-[300px] hover:bg-red-200 ">
                            <CardHeader className="absolute z-10 top-1 flex-col !items-start ">
                                <CardInnerHeading title="Reem Island" subTitle="500,000 AED"/>  
                            </CardHeader>
                        <Image
                            removeWrapper
                            alt="Card background"
                            width={1000}
                            height={1000}
                            className="z-0 w-full h-full object-cover  transition-opacity duration-300 ease-in-out hover:opacity-75"
                            src="/al-reem-island-adgm.jpg"
                        />
                    </Card>
                </Link>
                </div>
                <div className="w-full md:w-2/3 mt-4 md:mt-0">
                <Link href={`${process.env.NEXT_PUBLIC_API_URL}/search?location=Yas+Island`}>

                <Card className="col-span-12 sm:col-span-4 h-[300px]">
                    <CardHeader className="absolute z-10 top-1 flex-col !items-start ">

                        <CardInnerHeading title="Yas Island" subTitle="600,000 AED"/>  
                        
                    </CardHeader>
                    <Image
                        removeWrapper
                        alt="Card background"
                        width={1000}
                        height={1000}
                        className="z-0 w-full h-full object-cover  transition-opacity duration-300 ease-in-out hover:opacity-75"
                        src="/yas1.jpg"
                    />
                </Card>
                </Link>
                </div>
            </div>
            <div  className="md:flex md h-72 mt-4  mx-4 md:mx-12">
                
                <Link href={`${process.env.NEXT_PUBLIC_API_URL}/search?location=Al+Saadiyat+Island`} className="w-full md:w-2/3 md:mx-2">
                <div className="">   
                <Card className="col-span-12 sm:col-span-4 h-[300px]">
                    <CardHeader className="absolute z-10 top-1 flex-col !items-start w-full ">
                        <CardInnerHeading title=" Saadiyaat Island" subTitle="600,000 AED"/>  
                    </CardHeader>
                <Image
                    removeWrapper
                    alt="Card background"
                    width={1000}
                    height={1000}
                    className="z-0 w-full h-full object-cover  transition-opacity duration-300 ease-in-out hover:opacity-75"
                    src="/Lq4LqPEX-2013_saadiyat_1_base-1.jpg"
                />
      </Card>
                </div>
                </Link>
                <Link className="w-full mt-4 md:mt-0 md:w-1/3" href={`${process.env.NEXT_PUBLIC_API_URL}/search?location=Al+Bateen`}>
                <div className="">
                <Card className="col-span-12 sm:col-span-4 h-[300px]">
                    <CardHeader className="absolute z-10 top-1 flex-col !items-start ">
                    <CardInnerHeading title="AL BATEEN" subTitle="178,000 AED"/>  
                    </CardHeader>
                <Image
                    removeWrapper
                    alt="Card background"
                    width={1000}
                    height={1000}
                    className="z-0 w-full h-full object-cover transition-opacity duration-300 ease-in-out hover:opacity-75"
                    src="/al-bateen-area-1.jpg"
                />
      </Card>
                </div>
                </Link>
            </div>
            </div>
        </>
    )
}
export default PopularServicesComponent;
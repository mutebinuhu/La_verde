import { Card, CardHeader } from "@nextui-org/card";
import Image from "next/image";
import React from "react";
import { nonoSerif } from '@/utils/fonts';
const CardInnerHeading = ({title, subTitle}) =>{
    return(
        <div className="bg-black px-4 py-2 bg-opacity-75">
            <h4 className="text-white font-medium text-large">{title}</h4>
            <p className="text-tiny text-white/60 uppercase font-bold">STARTING PRICE : {subTitle}</p>
        </div>
    )
}
const PopularPlaces = () =>{
    return(
        <section className="container mx-auto mx-4 tex-center mb-96 md:mb-0">
            <h2 className={`${nonoSerif.className} text-4xl text-bold text-center py-8`}>Most Popular Areas In Abudhabi</h2>
            <p className='text-center py-8'>Own a home in one of the most popular and luxurious places in Abudhabi. Get yourself a home in <strong>Reem Island,</strong> <strong>Yas Island</strong>, <strong>Sadiyaat  Island, </strong> </p>
            <div  className="md:flex  mx-12">
                <div className="w-full md:w-1/3 md:mx-2">   
                <Card className="col-span-12 sm:col-span-4 h-[300px] hover:bg-red-200 ">
                    <CardHeader className="absolute z-10 top-1 flex-col !items-start ">
                        <CardInnerHeading title="Reem Island" subTitle="500,000 AED"/>  
                    </CardHeader>
                <Image
                    removeWrapper
                    alt="Card background"
                    width={1000}
                    height={1000}
                    className="z-0 w-full h-full object-cover"
                    src="/al-reem-island-adgm.jpg"
                />
      </Card>
                </div>
                <div className="w-full md:w-2/3 mt-4 md:mt-0">
                <Card className="col-span-12 sm:col-span-4 h-[300px]">
                    <CardHeader className="absolute z-10 top-1 flex-col !items-start ">

                        <CardInnerHeading title="Yas Island" subTitle="600,000 AED"/>  
                        
                    </CardHeader>
                <Image
                    removeWrapper
                    alt="Card background"
                    width={1000}
                    height={1000}
                    className="z-0 w-full h-full object-cover"
                    src="/yas1.jpg"
                />
      </Card>
                </div>
            </div>
            <div  className="md:flex md h-72 mt-4  mx-12">
                <div className="w-full md:w-2/3 md:mx-2">   
                <Card className="col-span-12 sm:col-span-4 h-[300px]">
                    <CardHeader className="absolute z-10 top-1 flex-col !items-start w-full ">
                        <CardInnerHeading title=" Saadiyaat Island" subTitle="600,000 AED"/>  
                    </CardHeader>
                <Image
                    removeWrapper
                    alt="Card background"
                    width={1000}
                    height={1000}
                    className="z-0 w-full h-full object-cover"
                    src="/Lq4LqPEX-2013_saadiyat_1_base-1.jpg"
                />
      </Card>
                </div>
                <div className="w-full mt-4 md:mt-0 md:w-1/3">
                <Card className="col-span-12 sm:col-span-4 h-[300px]">
                    <CardHeader className="absolute z-10 top-1 flex-col !items-start ">
                    <CardInnerHeading title="AL BATEEN" subTitle="178,000 AED"/>  
                    </CardHeader>
                <Image
                    removeWrapper
                    alt="Card background"
                    width={1000}
                    height={1000}
                    className="z-0 w-full h-full object-cover"
                    src="/al-bateen-area-1.jpg"
                />
      </Card>
                </div>
            </div>
        </section>
    )
}
export default PopularPlaces;
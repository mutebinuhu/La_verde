import { Card, CardHeader } from "@nextui-org/card";
import Image from "next/image";
import React from "react";
import { nonoSerif } from '@/utils/fonts';
import PopularServicesComponent from "./PopularServicesComponent";

const PopularPlaces = () =>{
    return(
        <section className="container mx-auto mx-4 mt-24 md:-mt-32 tex-center mb-96 md:mb-0">
            <h2 className={`${nonoSerif.className} text-4xl text-bold text-center py-8 mx-4`}>Most Popular Areas In Abudhabi</h2>
            <p className='text-center py-8 text-xl'>Own a home in one of the most popular and luxurious places in Abudhabi. Get yourself a home in <strong>Reem Island,</strong> <strong>Yas Island</strong>, <strong>Sadiyaat  Island, Al Maryah Island, Al Raha, Al Hudayriat Island</strong> </p>
           < PopularServicesComponent/>
        </section>
    )
}
export default PopularPlaces;
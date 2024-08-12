import { Card, CardHeader } from "@nextui-org/card";
import Image from "next/image";
import React from "react";
import { nonoSerif } from '@/utils/fonts';
import PopularServicesComponent from "./PopularServicesComponent";
import Link from "next/link";
import { Button } from "@nextui-org/button";

const PopularPlaces = () =>{
    return(
        <section className="container mx-auto mx-4">
            <h1 className={`${nonoSerif.className} text-4xl text-bold text-center py-8 mx-4`}>Best Areas to stay In Abudhabi</h1>
            <p className='text-center py-8 text-xl'>Own a home in one of the most popular and luxurious places in Abudhabi. Get yourself a home in <strong>Reem Island,</strong> <strong>Yas Island</strong>, <strong>Sadiyaat  Island, Al Maryah Island, Al Raha, Al Hudayriat Island</strong> </p>
           < PopularServicesComponent/>
           
        </section>
    )
}
export default PopularPlaces;
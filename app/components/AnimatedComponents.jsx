"use client"
import Link from "next/link";
import React from "react";
import { Slide } from "react-awesome-reveal";
export const AnimatedButton = ({url}) =>{
    return(
        <Slide direction="up" delay={100}>
            <Link href="/contact-us" className="font-bold bg-[#FFA72A] mt-2 px-4 py-4 text-white rounded hover:bg-[#E09625]">
            Request a Valuation
          </Link>
        </Slide>
    )
}
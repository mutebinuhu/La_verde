import React from 'react';
import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/card";
import Image from 'next/image';
import { Button, Divider } from '@nextui-org/react';
import Link from 'next/link';
import {motion} from "framer-motion";

const ServiceCard = ({info, image, url, callToAction, title}) => {
    return (
        <Card className="md:w-1/3 w-full p-8   mt-6">
        <CardHeader className="flex justify-center">
          <Image
            alt="nextui logo"
            height={200}
            radius="lg"
            src={url}
            width={100}
            className='w-32 h-32 rounded-full'

          />
       
        </CardHeader>
        <div className="">
            <h3 className="text-2xl text-bold">{title}</h3>
            
          </div>
        <CardBody>
          <p className='text-center'>{info}.</p>
        </CardBody>
        <div className='w-full flex justify-center '>
          <div>
          <CardFooter>
          <Link
            isExternal
            showAnchorIcon
            href="/contact-us"
          >
           <Button className='border-2 bg-white text-[#104e3e] border-[#104e3e]   py-6 px-6  font-bold rounded'>
                 {callToAction}
           </Button>
          </Link>
        </CardFooter>
          </div>
        </div>
      </Card>
    );
}

export default ServiceCard;

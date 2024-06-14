import React from 'react';
import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/card";
import Image from 'next/image';
import { Button, Divider } from '@nextui-org/react';
import Link from 'next/link';
import {motion} from "framer-motion";

const ServiceCard = ({info, image, url, callToAction, title}) => {
    return (
        <Card className="md:w-1/3 w-full p-8   mt-6  transform transition-transform hover:scale-105">
        <CardHeader className="flex justify-center">
          <div className=' h-32 md:h-32 rounded-full w-32' style={{backgroundImage: "url(" + url + ")",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'}}
            >

          </div>
       
        </CardHeader>
        <div className="">
            <h3 className="text-2xl font-bold">{title}</h3>
            
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
           <Button className='border-2 bg-white text-[#104e3e]  transform transition-transform hover:scale-105 border-[#104e3e]   py-6 px-6  font-bold rounded'>
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

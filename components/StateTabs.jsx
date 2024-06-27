"use client"
import React from 'react';
import {Tabs, Tab} from "@nextui-org/tabs";
import { Card, CardBody } from '@nextui-org/card';
import AbudhabiProjects from '@/app/components/AbudhabiProjects';
import { nonoSerif } from '@/utils/fonts';
import Link from 'next/link';
import { Button } from '@nextui-org/button';
const StateTabs = () => {
    return (
       
   <section className=' container mx-auto px-4 py-8'>
    <div className='py-12 text-center' >
    <h2 className={`${nonoSerif.className} text-4xl text-bold py-4 md:py-8 `}>Explore Our Upcoming projects in the UAE</h2>
    <p className='text-xl'>Discover the latest off-plan projects in UAE.</p>
    </div>
    <div className="flex w-full flex-col  ">
      <Tabs aria-label="Options" variant="underlined">
      <Tab key="abudhabi" title="Abudhabi">
          <Card className='rounded-none '>
            <CardBody>
              <AbudhabiProjects/>
            </CardBody>
          </Card>  
        </Tab>
        <Tab key="dubai" title="Dubai">
          <Card>
            <CardBody>
             Dubai Coming soon...
            </CardBody>
          </Card>  
        </Tab>

     
        <Tab key="RasAlKhaimah" title="Ras Al Khaimah">
          <Card>
            <CardBody>
             Ras Coming soon...
            </CardBody>
          </Card>  
        </Tab>
      </Tabs>
    </div>  
    <div className="text-center mt-12">
      <Link
            isExternal
            showAnchorIcon
            href="/properties"
            className="mt-32"
          >
           <Button className='border-2 bg-[#104e3e] text-white  transform transition-transform hover:scale-105 border-[#104e3e]   py-6 px-6  font-bold rounded'>
                 Find out More
           </Button>
          </Link>
          <Link
            isExternal
            showAnchorIcon
            href="/properties"
            className="mt-32"
          >
           <Button className='border-2 bg-white text-[#104e3e] md:mx-4 mx-0 transform transition-transform hover:scale-105 border-[#104e3e]   py-6 px-6  font-bold rounded'>
                 Talk To Us
           </Button>
          </Link>
      </div>
   </section>
    );
};

export default StateTabs;
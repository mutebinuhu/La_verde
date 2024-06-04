"use client"
import React from 'react';
import {Tabs, Tab} from "@nextui-org/tabs";
import { Card, CardBody } from '@nextui-org/card';
import AbudhabiProjects from '@/app/components/AbudhabiProjects';
import { nonoSerif } from '@/utils/fonts';
const StateTabs = () => {
    return (
       
   <section className='py-16 container mx-auto px-4'>
    <div className='py-12 text-center' >
    <h2 className={`${nonoSerif.className} text-4xl text-bold py-4 md:py-8`}>Explore new projects in the UAE</h2>
    <p className=''>Discover the latest off-plan and ready properties in UAE.</p>
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
   </section>
    );
};

export default StateTabs;
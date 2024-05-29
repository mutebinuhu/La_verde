"use client"
import React from 'react';
import {Tabs, Tab} from "@nextui-org/tabs";
import { Card, CardBody } from '@nextui-org/card';
import AbudhabiProjects from '@/app/components/AbudhabiProjects';
const StateTabs = () => {
    return (
       
   <section className='py-16 container mx-auto px-4'>
    <div className='py-12' >
    <h2 className='text-4xl font-bold'>Explore new projects in the UAE</h2>
    <p className='py-4'>Discover the latest off-plan and ready properties in UAE.</p>
    </div>
    <div className="flex w-full flex-col  ">
      <Tabs aria-label="Options" variant="underlined">
      <Tab key="abudhabi" title="Abudhabi">
          <Card className='rounded-none p-6'>
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
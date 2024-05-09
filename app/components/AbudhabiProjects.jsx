import React from "react";
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";
const projectDetails =[
    
]
const Project = ({name, image, plan, status, location, units}) =>{
    return(
<Card className="py-4 mt-4">
  <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
    <p className="text-tiny uppercase font-bold">{status}</p>
    <small className="text-default-500"><span className="text-bold">PAYMENT PLAN </span>{plan}</small>
    <h4 className="font-bold text-large">{name}</h4>
    <p>{units} UNITS | {location} </p>
    <p></p>
  </CardHeader>
  <CardBody className="overflow-visible py-2">
    <Image
      alt="Card background"
      className="object-cover rounded-xl w-full"
      src={image}
    />
  </CardBody>
</Card>
);
}

const AbudhabiProjects = () =>{
 
    return(
        <section>
            <h2></h2>
            <div className="md:flex justify-between space-x-4">
            <Project name="Reeman Living" image="10.jpg" status="Under construction" plan="40/60" location="ALSHAMHKA" units={420} />
            </div>
        </section>
    )
}
export default AbudhabiProjects;
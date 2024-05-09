import React from "react";
import {Card, CardHeader, CardBody, Image, image} from "@nextui-org/react";
const abuhdabiProjectDetails =[

    {
        id:0,
        name:"Reeman Living",
        image:"10.jpg",
        plan:"40/60",
        status:"Under construction",
        location:"ALSHAMHKA",
        units:"420"
    },
    {
        id:1,
        name:"Saadiyat Lagoons",
        image:"MASTER BATHROOM.jpg",
        plan:"50/50",
        status:"Under construction",
        location:"SAADIYAT ISLAND",
        units:"207"

    },
    {
        id:2,
        name:"Yas Golf Collection",
        image:"ALDAR_Ansam2_CGI08_Buildings_07.jpg",
        plan:"50/50",
        status:"Under construction",
        location:"YAS ISLAND",
        units:"109"

    },
    {
        id:3,
        name:"Yas Golf Collection",
        image:"ALDAR_Ansam2_CGI08_Buildings_07.jpg",
        plan:"50/50",
        status:"Under construction",
        location:"YAS ISLAND",
        units:"109"

    },
    {
        id:3,
        name:"Yas Golf Collection",
        image:"ALDAR_Ansam2_CGI08_Buildings_07.jpg",
        plan:"50/50",
        status:"Under construction",
        location:"YAS ISLAND",
        units:"109"

    },
    {
        id:4,
        name:"Yas Golf Collection",
        image:"reportage-image.jpg",
        plan:"50/50",
        status:"Under construction",
        location:"YAS ISLAND",
        units:"109"

    }
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
            <div className="md:grid grid-cols-3 gap-4">
                {
                    abuhdabiProjectDetails.map(({name, image, status, plan, location, units})=><Project name={name} image={image} status={status} plan={"40/60"} location={location} units={units} />)
                }
            </div>
        </section>
    )
}
export default AbudhabiProjects;
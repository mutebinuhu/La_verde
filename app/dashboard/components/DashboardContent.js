"use client"
import React from "react";
import { FaTasks } from "react-icons/fa";
import { VscGraph } from "react-icons/vsc";
import { PiBuildingApartmentThin } from "react-icons/pi";
import { MdGppGood } from "react-icons/md";
import { FaMessage } from "react-icons/fa6";
export const dynamic = 'force-dynamic'


function DashboardContent() {
  const StatsCard = ({title,subTitle,count,icon}) =>{
    return(
      <div className="bg-white p-6 rounded-lg shadow">
       <div className="flex items-center space-x-4 h-full justify-between">
        <div className="w-1/6 flex-1 h-full ">
          <div className="flex justify-center items-center h-full">
            <div className="bg-[#104E3E]  text-gray-100 p-4 rounded-full">
            {icon}
            </div>
          </div>
        </div>
      <div className="w-5/6 h-full">
      <h2 className="text-lg font-bold">{title}</h2>
        <p className="text-4xl font-semibold text-[#104E3E] ">{count}</p>
        <p className="text-sm text-gray-500">{subTitle}</p>
      </div>
       </div>
      </div>
    )
  }
  const itemsList = [ 
    {title: "Total Messages", subTitle:"Message", count: 100, icon: <FaMessage className="text-3xl" /> },
   // {title: "TotalInterests", subTitle:"Message", count: 100, icon: <FaMessage className="text-3xl" /> },
    {title: "Total Leads", subTitle:"Leads", count: 300, icon: <VscGraph className="text-3xl" />},
    {title: "Total Properties", subTitle:"Properties", count: 100, icon: <PiBuildingApartmentThin className="text-3xl" /> },
    {title: "Total availabilities", subTitle:"Availabilities", count: 63, icon: <MdGppGood className="text-3xl" /> }
  ]
  return (
    <div className="grid grid-cols-4 gap-6">
       {
        itemsList.map((item, index) => (
          <StatsCard key={index} title={item.title} subTitle={item.subTitle} count={item.count} icon={item.icon}/>
        ))
       }
      {/* You can continue adding more cards as per your needs */}
    </div>
  );
}

export default DashboardContent;

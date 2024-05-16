import LeadForm from "@/components/LeadForm";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import React from "react";
import DetailsTable from "./Table";
import { PiBathtubFill, PiRoadHorizonLight, PiShoppingBag} from "react-icons/pi";
import { CiShop, CiParking1 } from "react-icons/ci";
import { IoIosCafe } from "react-icons/io";
import { FaSquareParking, FaToilet } from "react-icons/fa6";
import { LiaSwimmerSolid } from "react-icons/lia";
import { TbGymnastics, TbParkingOff } from "react-icons/tb";
import { FaBed, FaCar, FaInternetExplorer, FaSatelliteDish, FaShower, FaWalking, FaWater } from "react-icons/fa";
import { MdWbShade, MdOutlineBalcony,  MdBathtub } from "react-icons/md";
import { BiSolidLandscape, BiSolidCabinet  } from "react-icons/bi";
import { PiLadderSimpleBold,  PiLadderSimple } from "react-icons/pi";
import { GiWindow } from "react-icons/gi";
import { TbAirConditioning } from "react-icons/tb";
import { GoMirror } from "react-icons/go";
import { Roboto_Mono, Playfair_Display } from 'next/font/google';





const pF =  Playfair_Display({
  subsets: ['latin'],
  variable: '--font-play-fair',
  
});








// components/AmenitiesCard.js
const amenities = [
  {
    id: 1,
    title: "Swimming Pool",
    icon: (
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm-4a1 1 0 011-1h2a1 1 0 011 1v1a1 1 0 01-1 1h-2a1 1 0 01-1-1v-1zm1-7a3 3 0 100-6 3 3 0 000 6zm-1 1a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 01-1 1h-2a1 1 0 01-1-1V7z"
        clipRule="evenodd"
      />
    ),
    description: "Enjoy a refreshing swim in our state-of-the-art pool.",
  },
  {
    id: 2,
    title: "Fitness Center",
    icon: (
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm-4a1 1 0 011-1h2a1 1 0 011 1v1a1 1 0 01-1 1h-2a1 1 0 01-1-1v-1zm1-7a3 3 0 100-6 3 3 0 000 6zm-1 1a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 01-1 1h-2a1 1 0 01-1-1V7z"
        clipRule="evenodd"
      />
    ),
    description: "Stay in shape with our fully-equipped fitness center.",
  },
  // Add more amenities as needed
];
const AmenitiesCard = ({ title, icon, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-4">
        <div className="flex items-center mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 mr-2 text-blue-500"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            {icon}
          </svg>
          <h2 className="text-xl font-semibold">{title}</h2>
        </div>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const page = () => {
  return (
    <main>
      <section className="">
        <div className="md:flex">
          <div className="mx-12 bg-white md:grid grid-cols-2 w-1/2 gap-4 hidden md:block">
            <div className="bg-blue-300 h-[275px]  " style={{backgroundImage: "url(" + "/reportagetower/3848.jpg" + ")",
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'}}></div>
            <div className="bg-blue-400 h-[275px]" style={{backgroundImage: "url(" + "/reportagetower/3840.jpg" + ")",
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'}}></div>
            <div className="bg-green-400 h-[275px]" style={{backgroundImage: "url(" + "/reportagetower/3841.jpg" + ")",
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'}}></div>
            <div className="bg-green-400 h-[275px]" style={{backgroundImage: "url(" + "/reportagetower/3842.jpg" + ")",
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'}}></div>
            <div className="bg-green-400 h-[275px]" style={{backgroundImage: "url(" + "/reportagetower/3843.jpg" + ")",
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'}}></div>
            <div className="bg-green-400 h-[275px]" style={{backgroundImage: "url(" + "/reportagetower/3844.jpg" + ")",
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'}}></div>
          </div>
          <div className="w-full md:w-1/2 md:flex justify-center ">
            <div className="py-8">
              <h1 className={`text-6xl text-bold text-[#104e3e] px-4 ${pF.variable}`}>
                Reportage Tower
              </h1>
              <p className="py-4 px-4 text-3xl font-bold">
                Located in Al Maryah Island, Abu Dhabi.
              </p>
              <p className="py-4 px-4 text-xl">
                <span className="text-bold">5</span> mins <span className="text-bold">walking distance</span> to <span className="font-bold"> Galleria Al Maryah</span>, <span className="font-bold">Rosewood Abu
                Dhabi</span> and <span className="font-bold">Cleveland Clinic Abu Dhabi</span>{" "}
              </p>
              <p className="py-4 px-4 text-xl">
               <span className="text-bold">5</span> mins <span className="text-bold">driving distance</span>  to <span className="font-bold">Four Seasons Hotel</span> , <span className="font-bold">Al Reem Island</span>,
                <span className="font-bold">Beach Rotana Hotel</span>,<span className="font-bold"> Abu Dhabi Mall</span> and <span className="font-bold"> ACTIVE Al Maryah Sports
                Centre</span>{" "}
              </p>

              <div className="py-4 px-4">
                <Link href="/contact-us" className="">
                  <Button
                    className="bg-[#104e3e] text-2xl py-8 hover:bg-[#104e3e] text-white font-bold px-8 rounded"
                    color="primary"
                  >
                    Contact us for Availability
                  </Button>
                </Link>
              </div>

              <div className="py-6 w-full  md:px-0">
                <h2 className={`text-4xl px-4 font-semibold mt-12 mb-8 ${pF.variable}`}>Total Units 292</h2>
                <DetailsTable />
              </div>
            </div>
          </div>
        </div>
        <div className="md:flex mx-12 space-x-4 relative py-8">
          <div className="">
            <section className="md:mx-36">
              <h2 className={`text-bold text-4xl font-semibold ${pF.variable}`}>
                About Reportage Tower
              </h2>
              <p className="py-3">
                Reportage Tower is an impressive high-rise residential building
                located on Al Maryah Island, Abu Dhabi. Offering stunning canal
                views, it stands on a plot area of 4,361.65 sq.m and reaches a
                total height of 143.40 meters. The tower features 2 basements, a
                lower ground level, 2 podiums, an upper ground level, and 36
                floors, providing luxurious living spaces and unparalleled
                vistas
              </p>

              <p className="py-3">
                The modern and sustainable facade of Reportage Tower creates a
                unique and unsurpassed look in the heart of Al Maryah Island,
                positioning it as one of Abu Dhabi’s most luxurious
                destinations. Reportage Tower offers contemporary and
                distinctive high-end residential apartments, providing a
                complete luxury lifestyle. Located close to Abu Dhabi’s top
                attractions, the tower is surrounded by promenades, shopping
                malls, hotels, restaurants, cafes, and a sports center
              </p>
              <p className="py-3">
                With 280 residential units and 12 commercial retail spaces,
                Reportage Tower is designed to meet the highest international
                standards in terms of design, quality, and space. This
                prestigious development ensures an unparalleled living
                experience, combining modern amenities with exceptional
                proximity to the best of Abu Dhabi
              </p>
            </section>
            <div className="py-4 px-36">
                <Link href="/contact-us" className="">
                  <Button
                    className="bg-[#104e3e]  hover:bg-[#104e3e] text-white font-bold p-6 rounded"
                    color="primary"
                  >
                    Inquire More Info
                  </Button>
                </Link>
              </div>
          </div>
          
          {/** 
                        <div className=' md:w-1/4  sticky top-0'>
                           <LeadForm/>
                        </div>
                        */}
        </div>
        <section className="mx-12">
          <div className="md:mx-36">
            <h2 className={`text-4xl font-semibold mt-12 mb-8 ${pF.variable}`}>
              Building features
            </h2>
           
            <ul className="md:grid grid-cols-4 gap-4">
              <li className="flex   py-4 space-x-2"> < PiRoadHorizonLight className="text-3xl text-gray-500"/> <span>Access to Al Maryah Promenade</span></li>
              <li className="flex   py-4 space-x-4"><CiShop className="text-3xl  text-gray-500"/><span>Retail shops in Upper Ground floor</span></li>
              <li className="flex   py-4 space-x-4" ><IoIosCafe className="text-3xl  text-gray-500"/><span>Restaurants & Cafes in Promenade Level</span></li>
              <li className="flex   py-4 space-x-4">< CiParking1 className="text-3xl  text-gray-500"/><span>442 Covered Plot Parking</span> </li>
              <li className="flex   py-4 space-x-4">< FaSquareParking className="text-3xl text-gray-500"/><span>Private Parking for each unit</span></li>
              <li className="flex   py-4 space-x-4"><LiaSwimmerSolid className="text-3xl text-gray-500"/><span>Large Swimming Pool</span></li>
              <li className="flex   py-4 space-x-4"><TbGymnastics className="text-3xl text-gray-500"/><span> Gymnasium</span></li>
              <li className="flex   py-4 space-x-4"><FaWater className="text-3xl text-gray-500"/><span>Water Features</span></li>
              <li className="flex   py-4 space-x-4"><MdWbShade className="text-3xl text-gray-500"/><span>Shaded Seating Areas</span></li>
              <li className="flex   py-4 space-x-4">< BiSolidLandscape className="text-3xl text-gray-500"/><span>Landscape Areas</span></li>
              <li className="flex   py-4 space-x-4"><PiLadderSimple className="text-3xl text-gray-500"/><span>4 Large Elevators</span></li>
              <li className="flex   py-4 space-x-4"><PiLadderSimpleBold className="text-3xl text-gray-500"/><span>Service Elevator</span></li>
            </ul>
            <div className="py-4">
                <Link href="/contact-us" className="">
                  <Button
                    className="bg-[#104e3e]  hover:bg-[#104e3e] text-white font-bold p-6 rounded"
                    color="primary"
                  >
                    Request For More Building Features
                  </Button>
                </Link>
              </div>
          </div>
        </section>
        <section className="mx-12">
          <div className="md:mx-36">
            <h2 className={`text-4xl font-semibold mt-12 mb-8 ${pF.variable}`}>Unit Features</h2>
            <ul className="md:grid grid-cols-3">
              <li className="flex   py-4 space-x-2"><MdOutlineBalcony className="text-3xl text-gray-500"/><span>Private Balconies / Terraces as per unit plan</span></li>
              <li className="flex   py-4 space-x-2"><BiSolidCabinet className="text-3xl text-gray-500" /><span>Kitchen cabinets and countertops</span></li>
              <li className="flex   py-4 space-x-2"><MdBathtub  className="text-3xl text-gray-500"/><span>Fully tiled bathrooms, in-suites</span></li>
              <li className="flex   py-4 space-x-2"><FaToilet className="text-3xl text-gray-500"/><span>guest toilets wherever applicable</span></li>
              <li className="flex   py-4 space-x-2"><GiWindow  className="text-3xl text-gray-500" /><span>Double glazed windows</span> </li>
              <li className="flex   py-4 space-x-2"><FaBed className="text-3xl text-gray-500"/> <span>Built-in wardrobes in bedrooms</span> </li>
              <li className="flex   py-4 space-x-2"><FaShower className="text-3xl text-gray-500" /><span>Shower in each bathroom</span> </li>
              <li className="flex   py-4 space-x-2"><TbAirConditioning className="text-3xl text-gray-500" /><span>Central air conditioning</span> </li>
              <li className="flex   py-4 space-x-2"><GoMirror className="text-3xl text-gray-500"/><span>Vanity units & Mirrors</span></li>
              <li className="flex   py-4 space-x-2"><PiBathtubFill className="text-3xl text-gray-500"/><span>Some bedrooms with private bathroom</span></li>
              <li className="flex   py-4 space-x-2">
                <FaSatelliteDish className="text-3xl text-gray-500"/>  <span>Satellite master antenna </span>
              </li>
              <li className="flex   py-4 space-x-2"><FaInternetExplorer className="text-3xl text-gray-500"/> <span> fibre optic connection for high-speed internet access</span>{" "}</li>
              <li className="flex   py-4 space-x-2"><TbParkingOff  className="text-3xl text-gray-500"/> <span>Private Parking for Townhouses</span></li>
            </ul>
            <div className="w-full md:w-1/3 md:flex justify-between py-16">
             <div>
             <h2 className={`text-4xl ${pF.variable}`}>
                Do you need more amenities added? 
              </h2>``
             </div>
              <div className="py-4">
                <Link href="/contact-us" className="">
                  <Button
                    className="bg-[#104e3e]  hover:bg-[#104e3e] text-white font-bold p-6 rounded"
                    color="primary"
                  >
                   Ask Now
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="mx-12">
          <div className="md:mx-36">
            <h2 className={`text-bold text-4xl font-semibold ${pF.variable}`}>
              Location Features
            </h2>
            <ul className="md:grid grid-cols-3 py-12">
            <li className="flex   py-4 space-x-2"><FaCar className="text-3xl text-gray-500"/><span>05 minutes driving to ACTIVE Al Maryah Sports Centre</span></li>
              <li className="flex   py-4 space-x-2"><FaWalking className="text-3xl text-gray-500"/><span>07 minutes walking to Rosewood Abu Dhabi </span></li>
              <li className="flex   py-4 space-x-2"><FaWalking className="text-3xl text-gray-500"/><span>09 minutes walking to Cleveland Clinic Abu Dhabi</span></li>
              <li className="flex   py-4 space-x-2"><FaCar className="text-3xl text-gray-500"/><span>03 minutes driving to Four Seasons Hotel</span> </li>
              <li className="flex   py-4 space-x-2"><FaCar className="text-3xl text-gray-500"/><span>05 minutes driving to Al Reem Island</span> </li>
              <li className="flex   py-4 space-x-2"><FaCar className="text-3xl text-gray-500"/><span>05 minutes driving to Beach Rotana Hotel</span> </li>
              <li className="flex   py-4 space-x-2"><FaWalking className="text-3xl text-gray-500"/><span>05 minutes walking to The Galleria Al Maryah</span></li>

              <li className="flex   py-4 space-x-2"><FaCar className="text-3xl text-gray-500"/><span>05 minutes driving to Abu Dhabi Mall</span> </li>
              <li className="flex   py-4 space-x-2"><FaCar className="text-3xl text-gray-500"/><span>05 minutes driving to ACTIVE Al Maryah Sports Centre</span></li>
            </ul>
          </div>
          <div className="md:w-1/3 md:flex justify-between py-16 mx-32">
             <div>
             <h2 className={`text-4xl ${pF.variable}`}>
                Do you need more information? 
              </h2>
             </div>
              <div className="py-4">
                <Link href="/contact-us" className="">
                  <Button
                    className="bg-[#104e3e]  hover:bg-[#104e3e] text-white font-bold p-6 rounded"
                    color="primary"
                  >
                  Lets Talk
                  </Button>
                </Link>
              </div>
            </div>
        </section>
      </section>
    </main>
  );
};

export default page;


import Banner from "./components/Banner";
import About from "@/components/About";
import Services from "@/components/Services";
import Reviews from "@/components/Reviews";
import Latestprojects from "./components/Latestprojects";
import StateTabs from "@/components/StateTabs";
import PropertyCard from "./components/PropertyCard";
import Featured from "./Featured";
import Banner2 from "./components/Banner2";
import SearchByLocation from "./components/SearchByLocation";
import ResponsiveCarousel from "./components/Reusables/ResponsiveCarousel";
import { Elsatic } from "./components/Reusables/Elastic";
import Ad from "./components/Reusables/Ad";
import PopularPlaces from "./components/Reusables/PopularPlaces";
import Link from "next/link";
import { Button } from "@nextui-org/button";
import HeaderBar from "@/components/header";
import CardHero from "@/components/CardHero";
import Map from "@/components/Map";
import Hero1 from "./components/Hero1";
import GoogleRating from "./components/GoogleRating";
import FeaturedListing from "@/components/FeaturedListing";
import SellComponent from "./components/SellComponent";
import OurServices from "@/components/OurServices";
import Testimonial from "@/components/Testmonial";
import ContactUsMain from "@/components/ContactUsMain";
import LatestProperties from "@/components/UpcomingProperties";
import UpcomingProperties from "@/components/UpcomingProperties";
import Agents from "@/components/Agents";
import FooterComponent from "./components/FooterComponent";
import IntentForm from "@/components/IntentForm";

const PopularPlacesComponent = () =>{
  return(
   <div>
    <PopularPlaces/>
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
   </div>

  )
}

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 }
];
export default function Home() {
  return (
    <main className="bg-[#F5F4F0]">
      {/**<Banner/>**/}
 
    
      
        {/**
         * 
         * <Banner2/>
         */}

        
       
      <Hero1/>
      <div className="flex  items-center justify-center bg-gray-100">
      <GoogleRating rating={4.3} totalReviews={120} />
    </div>
    <div className="">
    <div className="pb-12 md:mt-8 ">
      <FeaturedListing />
    </div>
    </div>
    <div className="flex justify-center items-center ">
          <div className="container px-6  mx-auto ">
    <SellComponent />
    </div>
          </div>
          <div className="bg-white">
            <OurServices/>
          </div>
          
              {/* <CardHero/>*/}
                {/** < PopularPlacesComponent/> */}
              {/**  <Services/> */}
            <UpcomingProperties/>

            <Testimonial/>
      {/**
       *             <Latestprojects/>

       * 
       */}
              <div className="w-full">
              <Agents/>
              </div>
              
              <ContactUsMain/>

     {
      /**
       *  <StateTabs/>
       * 
       */
     }
     
      <div className="py-6 md:py-12 hidden">
      <Ad flexDirection={"flex-row-reverse"}  title="Qualified Experts" text="Buying, selling, or renting a house with La Verde is easy: our consultants are qualified professionals who understand luxury and the needs of our clients." action="Lets Talk" imageUrl="/buy-a-home.jpg"/>

      </div>

      {/** <Elsatic/> */}  
      <FooterComponent/>  
    </main>
  );
}

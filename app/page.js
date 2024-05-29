
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



const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 }
];
export default function Home() {
  return (
    <main className="">
      {/**<Banner/>**/}
      <Banner2/>
      <Elsatic/>
      <Latestprojects/>
      <Services/>
      <StateTabs/>
     
      <div className="py-6 md:py-12">
      <Ad flexDirection={"flex-row-reverse"}  title="Qualified Experts" text="Buying, selling, or renting a house with La Verde is easy: our consultants are qualified professionals who understand luxury and the needs of our clients." action="Lets Talk" imageUrl="/buy-a-home.jpg"/>

      </div>

      {/** <Elsatic/> */}    
    </main>
  );
}

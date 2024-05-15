
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



export default function Home() {
  return (
    <main className="">
      {/**<Banner/>**/}
      <Banner2/>
      <SearchByLocation/>
      <Latestprojects/>
      <Services/>
      <StateTabs/>

      <Featured/>
      
      
      
    </main>
  );
}

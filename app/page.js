
import Banner from "./components/Banner";
import About from "@/components/About";
import Services from "@/components/Services";
import Reviews from "@/components/Reviews";
import Latestprojects from "./components/Latestprojects";



export default function Home() {
  return (
    <main className="">
      <Banner/>
      <Latestprojects/>
      <Services/>
      
    </main>
  );
}

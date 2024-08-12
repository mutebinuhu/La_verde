import { Inter, Noto_Sans, Noto_Serif, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {Providers} from "./providers";
import { Analytics } from "@vercel/analytics/react"
import { GoogleAnalytics } from '@next/third-parties/google'
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import FacebookPixel from "./components/FacebookPixel";




const inter = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "La Verde Property Management",
  description: "We sell. Lease. Property Management and Mantainance",
};
const pixelId = 'YOUR_PIXEL_ID';
import 'mapbox-gl/dist/mapbox-gl.css'; // Import Mapbox CSS globally
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css'; // Import Geocoder CSS globally
export default function RootLayout({ children }) {
  return (
   
    <html lang="en">
      <head>
        <FacebookPixel pixelId={1184822549604092}/>
      </head>
      <body className={`${inter.className} relative`}>
           <div className="fixed bottom-0 right-4 z-40">
           <Link
              href={`https://wa.me/971506144930?text=Hello`}
              target="_blank"
              className="flex w-12 h-12 rounded-full  items-center justify-center bg-green-500 text-white px-2 py-2 rounded hover:bg-green-700 transition duration-300"
            >
              <FaWhatsapp className="text-3xl" />
            </Link>
           </div>
      <Providers>
        <Navbar/>
          {children}
        <Footer/>
      </Providers>
      <Analytics />
      <GoogleAnalytics gaId="G-5R8ELRR41Z" />
      </body>
    </html>
  );
}



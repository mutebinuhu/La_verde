import { Inter, Noto_Sans, Noto_Serif, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {Providers} from "./providers";
import { Analytics } from "@vercel/analytics/react"
import { GoogleAnalytics } from '@next/third-parties/google'


const inter = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "La Verde Property Management",
  description: "We sell. Lease. Property Management and Mantainance",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
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

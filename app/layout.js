import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {Providers} from "./providers";
import { Analytics } from "@vercel/analytics/react"



const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "La Verde Property Management",
  description: "We sell. Lease. Property Management and Mantainance",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`relative ${inter.className}`}>
      <Providers>
        <Navbar/>
          {children}
        <Footer/>
      </Providers>
      <Analytics />
      </body>
    </html>
  );
}

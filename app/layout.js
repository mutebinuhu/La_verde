import { Montserrat } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Analytics } from "@vercel/analytics/react";
import { GoogleAnalytics } from '@next/third-parties/google';
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import FacebookPixel from "./components/FacebookPixel";
import { DefaultSeo } from 'next-seo';

const inter = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "La Verde Property Management",
  description: "We sell. Lease. Property Management and Maintenance",
};
const SEO = {
  title: "Your Page Title",
  description: "Your page description.",
  openGraph: {
      title: "Your Open Graph Title",
      description: "Your Open Graph description.",
      url: "https://yourwebsite.com",
      type: 'website',
      images: [
          {
              url: 'https://yourwebsite.com/image.jpg',
              alt: 'Image Alt Text',
          },
      ],
      site_name: 'Your Site Name',
  },
  twitter: {
      handle: '@yourhandle',
      site: '@site',
      cardType: 'summary_large_image',
  },
};

const pixelId = 'YOUR_PIXEL_ID';

import 'mapbox-gl/dist/mapbox-gl.css'; // Import Mapbox CSS globally
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css'; // Import Geocoder CSS globally
import FooterComponent from "./components/FooterComponent";
import Brevo from "./components/Brevo";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="VGhuf4L0i0FUxUOIGDyoOdJ8v_jm3a92HX1p6f7sBJY" />
      </head>
      <body className={`${inter.className} relative`}>
        <FacebookPixel pixelId={1184822549604092} />

        {/* WhatsApp floating button */}
        <div className="fixed bottom-0 right-4 z-40">
          <Link
            href={`https://wa.me/971506144930?text=Hello`}
            target="_blank"
            className="flex w-12 h-12 items-center justify-center bg-green-500 text-white px-2 py-2 rounded hover:bg-green-700 transition duration-300"
          >
            <FaWhatsapp className="text-3xl" />
          </Link>
        </div>

        <Providers>
          {children}
        </Providers>

        <Analytics />
        <GoogleAnalytics gaId="G-5R8ELRR41Z" />
        <Brevo/>

      </body>
    </html>
  );
}

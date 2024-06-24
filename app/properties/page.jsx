// pages/search.js
"use client"
import "../../app/globals.css"; // Adjust the path as necessary
import { Montserrat } from "next/font/google";
import { useRouter } from 'next/navigation';
import PropertyDetails from "../../components/PropertyDetails";
import Navbar from "../../components/Navbar";


import useSWR from 'swr';
import Filters from "@/components/Filters";
import { useState } from "react";
import NoResults from "@/pages/search/NoResults";

const montserrat = Montserrat({ subsets: ["latin"] });
const fetcher = (url) => fetch(url).then((res) => res.json());

const Page = () => {
  const [filters, setFilters] = useState({});
  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const router = useRouter();
  const { query } = router;
  //const { data, error } = useSWR(() => query ? `${process.env.NEXT_PUBLIC_API_URL}api/properties/search?${new URLSearchParams(query)}` : null, fetcher);
const { data, error } = useSWR(()=> {
  const searchParams = new URLSearchParams(query);
  Object.entries(filters).forEach(([key, value]) => {
    if (value) {
      searchParams.set(key, value);
    }
  });
  return `/api/properties/search?${searchParams.toString()}`;
}, fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <>
      <div className={montserrat.className}>
        <div className="mt-10">
          <h1 className="text-3xl font-bold mb-5 text-center">{data.length > 0 && ' Property Listing'}</h1>
          <p className='text-center text-2xl'>Search Results</p>
          <div className="contain mx-auto">
          <div className='md:flex justify-center items-center w-full py-4 '>
              <Filters onFilterChange={handleFilterChange} />
          </div>
          </div>


          <div className="mx-4">
            {
              data.length > 0 ? data.map((property) => (
                <PropertyDetails key={property.id} property={property} />
              )) :<NoResults/>
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;

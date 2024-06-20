// pages/search.js
import "../../app/globals.css"; // Adjust the path as necessary
import { Montserrat } from "next/font/google";
import { useRouter } from 'next/router';
import PropertyDetails from "../../components/PropertyDetails";
import Navbar from "../../components/Navbar";

import NoResults from "./NoResults";
import useSWR from 'swr';

const montserrat = Montserrat({ subsets: ["latin"] });
const fetcher = (url) => fetch(url).then((res) => res.json());

const Search = () => {
  const router = useRouter();
  const { query } = router;
  const { data, error } = useSWR(() => query ? `/api/properties/search?${new URLSearchParams(query)}` : null, fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <>
      <div className={montserrat.className}>
      <Navbar/>
        <div className="mt-10">
          <h1 className="text-3xl font-bold mb-5 text-center">{data.length > 0 && ' Property Listing'}</h1>
          <p className='text-center text-2xl'>Search Results</p>
          <div>
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

export default Search;

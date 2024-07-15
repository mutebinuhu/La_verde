import Link from "next/link";
import { FaEnvelope, FaPhone, FaWhatsapp } from "react-icons/fa";

const HeaderBar = () =>{
    return(
    <>
    <div className="bg-[#104E3E] p-2">
        <ul className="flex mx-24 space-x-4">
            <li>
            <Link
              href={`mailto:info@laverde.ae`}
              target="_blank"
              className="flex items-center justify-center bg-blue-500 text-white p-1 px-2 mx-2 py-2 rounded hover:bg-blue-700 transition duration-300"
            >
              <FaEnvelope className="" />
            </Link>
            </li>
            <li>
            <Link
              href={`https://wa.me/971506144930?text=Hello`}
              target="_blank"
              className="flex  items-center justify-center bg-green-500 text-white px-2 py-2 rounded hover:bg-green-700 transition duration-300"
            >
              <FaWhatsapp className="" />
            </Link>
            </li>
            <li>
            <Link
              href={`tel:971506144930`}
              target="_blank"
              className="flex  items-center justify-center bg-blue-500 text-white px-2 py-2 rounded hover:bg-green-700 transition duration-300"
            >
              <FaPhone className="" />
            </Link>
            </li>
        </ul>
        </div>
    </>
    
)
} 
export default HeaderBar;
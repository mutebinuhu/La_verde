import Link from "next/link";
import { FaEnvelope, FaLocationArrow, FaPhone, FaWhatsapp } from "react-icons/fa";

const HeaderBar = () =>{
    return(
    <>
    <div className="bg-[#104E3E] p-2 flex w-full justify-between">
        <ul className="flex mx-24 space-x-4">
            <li>
            <Link
              href={`mailto:info@laverde.ae`}
              target="_blank"
              className="flex items-center justify-center bg-[#FFA72A] text-white p-1 px-2 mx-2 py-2 rounded hover:bg-[#ebd197] transition duration-300"
            >
              <FaEnvelope className="" />
            </Link>
            </li>
            <li>
            <Link
              href={`https://wa.me/971506144930?text=Hello`}
              target="_blank"
              className="flex  items-center justify-center bg-green-500 text-white px-2 py-2 rounded hover:hover:bg-[#ebd197] transition duration-300"
            >
              <FaWhatsapp className="" />
            </Link>
            </li>
            <li>
            <Link
              href={`tel:971506144930`}
              target="_blank"
              className="flex  items-center justify-center bg-[#FFA72A] text-white px-2 py-2 rounded hover:bg-[#ebd197] transition duration-300"
            >
              <FaPhone className="" />
            </Link>
            </li>
        </ul>

        <ul className="hidden md:block">
            <li>
            <Link
              href={`https://www.google.com/maps/dir/24.4916243,54.365256/la+verde/@24.4915298,54.3626915,17z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3e5e675cb928790d:0x8b137d48f1067886!2m2!1d54.3650786!2d24.4917066?entry=ttu`}
              target="_blank"
              className="flex  items-center justify-center bg-[#FFA72A] text-white px-2 py-2 rounded hover:bg-[#ebd197] transition duration-300"
            >
                 <FaLocationArrow className="mx-4" />  Al Jazeera Tower, Hamdan street
                 </Link>
            </li>
        </ul>
        </div>
    </>
    
)
} 
export default HeaderBar;
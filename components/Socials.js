import React from 'react';
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaSquareXTwitter, FaTiktok, FaYoutube } from "react-icons/fa6";
import Link from 'next/link';





const Socials = () => {
    return (
       <ul className='flex justify-between space-x-8'>
            <li>
                <Link href="https://www.facebook.com/profile.php?id=100093006217955" target='_blank'>
                    <FaFacebookSquare className='md:text-4xl text-2xl text-blue-500' />
                </Link>
            </li>

            <li>
                <Link href="https://www.instagram.com/laverde_ae/?fbclid=IwAR10IWl6XE0jkFvkiBMKhDE0DIQpgTQIL0sXodkIooLYMVjZ2vh8dXt6XCg" target='_blank'>
                  <IoLogoInstagram className='md:text-4xl text-2xl' />
                </Link>
            </li>

            <li>
                <Link href="https://x.com/LaverdeUae" target='_blank'>
                <FaSquareXTwitter className='md:text-4xl text-2xl' />
            </Link>
            </li>

            <li>
            <Link href="https://www.tiktok.com/@laverde.uae" target='_blank'>
                  <FaTiktok className='md:text-4xl text-2xl' />
            </Link>

            </li>
            <li>
            <Link href="https://www.youtube.com/channel/UCXA-SYTGokZMSWrR17lc4VQ" className='text-red-500' target='_blank'>
                  <FaYoutube className='text-4xl' />
            </Link>

            </li>
       </ul>
    );
}

export default Socials;

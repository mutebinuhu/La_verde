import React from 'react';
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaSquareXTwitter } from "react-icons/fa6";





const Socials = () => {
    return (
       <ul className='flex justify-between space-x-8'>
            <li>
                <FaFacebookSquare className='text-4xl text-blue-500' />

            </li>
            <li>
                <IoLogoInstagram className='text-4xl' />

            </li>
            <li>
                <FaSquareXTwitter className='text-4xl' />

            </li>
       </ul>
    );
}

export default Socials;

"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { RiCustomerService2Line } from "react-icons/ri"

const Navbar = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  // Array containing navigation items
  const navItems = [
    { id: 1, text: 'Home', url:'/' },
    { id: 2, text: 'About',  url:'/about-us' },
    { id: 3, text: 'Contact' ,  url:'/contact-us'},

  ];

  return (
    <div className='bg-gray-100  w-full flex justify-between items-center mx-auto px-4 text-white'>
      {/* Logo */}
      <h1 className='w-full text-3xl font-bold'>
        <Image src="/la_verde_logo_rem_bg.png" width={160} height={80} className='py-4' />
      </h1>

      {/* Desktop Navigation */}
      <ul className='hidden md:flex items-center font-bold'>
        {navItems.map(item => (
          <Link href={item.url}>
            <li
            key={item.id}
            className='p-2 hover:bg-[#104E3E] text-[#104E3E] hover:text-white rounded m-2 cursor-pointer duration-300 '
          >
            {item.text}
          </li>
          </Link>
        ))}
        <Link href={"tel:02 583 5025"} className='md:flex py-2 items-center rounded text-[#104E3E] hover:bg-[#104E3E] text-[#104E3E] hover:text-white px-2 '>
        <RiCustomerService2Line className='text-2xl' />
        <p className='px-2'>025835025</p>
        </Link>

      </ul>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className='block md:hidden text-[#104E3E]'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500'
            : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
        }
      >
        {/* Mobile Logo */}
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>Logo</h1>

        {/* Mobile Navigation Items */}
        {navItems.map(item => (
          <li
            key={item.id}
            className='p-4 border-b text-[#104E3E] rounded-xl hover:bg-[##104e3e] duration-300 hover:text-black cursor-pointer border-gray-600'
          >
            {item.text}
          </li>
        ))}
      <div className='p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600 '>
      <Link href={"tel:06767676766"} className='md:flex items-center text-gray'>
        <RiCustomerService2Line />
        <p className=''>06767676766</p>
        </Link>
      </div>

      </ul>
    </div>
  );
};

export default Navbar;
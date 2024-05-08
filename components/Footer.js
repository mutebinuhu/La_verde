
import React from 'react';
import Socials from './Socials';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-bold py-16 border-t">
      <div className="">
       
          <ul className="mx-4 flex justify-between md:hidden">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
      </div>
      <div className='flex justify-center mt-12'>
      <Socials/>
      </div>
      <p className='text-center py-12'>@2024 La Verde Property Management</p>
      <div className='md:flex justify-center'>
      <ul className="mx-4 md:flex justify-between hidden ">
            <li><Link href="/">Home|</Link></li>
            <li><Link href="/about-us">About|</Link></li>
            <li><Link href="#services">Services|</Link></li>
            <li><Link href="/contact-us">Contact</Link></li>
          </ul>
      </div>
    </footer>
  );
};

export default Footer;

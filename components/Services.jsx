import React from 'react';

import ServiceCard from './ServiceCard';


const Services = () => {
    return (
        <div className='mx-4 pt-10  text-center '>
        <h2 className='text-3xl text-bold py-4 '>See how La Verde can help</h2>
        <p className='py-8'>Discover your dream home today! Whether you're ready to browse homes in UAE , sell your house , or find a new place to rent In Dubai, Abu Dhabi, Sharjah, Ajman, Umm Al Quwain, Ras Al Khaimah and Fujairah, let's make your real estate journey seamless and rewarding. Start exploring now!</p>
        <div className='md:flex md:space-x-2 '> 

        <ServiceCard 
        title="Browse Homes"
        url="/home-for-sale.jpg"
        info="We have Homes in different Emirates of UAE. Our Database is full of a thousand Options  for You to Choose Where To Stay" 
        callToAction="View Listing"/>

        <ServiceCard 
        title="Sell A  Home"
        url="/sell-house.jpg"
        info="Are You Looking at Selling Your Home  , we can help you navigate a successful sale"
        callToAction="Lets Talk Now"/>
    
    <ServiceCard 
        title="Rent a home"
        url="/rent-home.jpg"
        info="Lets help you find Your next home. Choose to own a home in any of the seven Emirates from Dubai To Umm Al Quwain "
        callToAction="Rent Home"/>


        </div>
    </div>
    );
}

export default Services;

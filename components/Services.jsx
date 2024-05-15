import React from 'react';

import ServiceCard from './ServiceCard';


const Services = () => {
    return (
        <div className='container  mx-auto  pt-10  text-center p-6 '>
        <h2 className='text-3xl text-bold py-4 '>See how La Verde can help</h2>
        <p className='py-8'>Discover your dream home today! Whether you're ready to browse homes in UAE , sell your house , or find a new place to rent In Dubai, Abu Dhabi, Sharjah, Ajman, Umm Al Quwain, Ras Al Khaimah and Fujairah, let's make your real estate journey seamless and rewarding. Start exploring now!</p>
        <div className='md:flex md:space-x-6 '> 
        <ServiceCard 
        title="Browse Homes"
        url="/build-your-home-concept.jpg"
        info="We have Homes in different Emirates of UAE. Our Database is full of a thousand Options  for You to Choose Where To Stay" 
        callToAction="View Listing"/>
        
        <ServiceCard 
        title="Rent a home"
        url="/rent-a-home.jpg"
        info="Lets help you find Your next home. Choose to own a home in any of the seven Emirates from Dubai To Umm Al Quwain "
        callToAction="Lets Call You"/>


        

        <ServiceCard 
        title="Sell A  Home"
        url="/sell-house.jpg"
        info="Are You Looking at Selling Your Home  , we can help you navigate a successful sale"
        callToAction="Lets Talk Now"/>
    
    
        <ServiceCard 
                title="Buy a home"
                url="/buy-a-home.jpg"
                info="Are you thinking about buying a new home and dont Know where to start. Let our team find You a perfect home worth living "
                callToAction="Get a Call Back"/>




        </div>
    </div>
    );
}

export default Services;

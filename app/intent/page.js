import Footer from '@/components/Footer'
import IntentForm from '@/components/IntentForm'
import Navbar from '@/components/Navbar'
import React from 'react'
import FooterComponent from '../components/FooterComponent'

export default function page() {
  return (
  <>
  <div className="bg-[#104e3e]">
       <Navbar/>
       </div>
    <section className="">
      <h1 className='text-center text-3xl font-bold py-4'>La Verde Property Management Intent Form</h1>
      <div className="container h-full px-6 ">
        <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
          {/* <!-- Left column container with background--> */}
          <div className=" mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
            <IntentForm/>
          </div>
        

          {/* <!-- Right column container with form --> */}
          <div className="md:w-8/12 lg:ml-6 lg:w-5/12">
            <img
              src="/house.webp"
              className="w-full"
              alt="Phone image"
            />
          </div>
        </div>
      </div>
   
    </section>
    <FooterComponent/>
    </>

  );
}
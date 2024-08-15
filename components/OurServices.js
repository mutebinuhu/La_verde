import React from "react";
const OurServices = () =>{
    return(
        <>
          <section>
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
        {/* Title */}
        <h2 className="items-center text-center text-3xl font-bold md:text-5xl">
          See How La Verde Property Management Can Help You
        </h2>
        <p className="mx-auto mb-8 mt-4 max-w-lg text-center text-sm text-gray-500 sm:text-base md:mb-12">
        Discover your dream home today! Whether you're ready to browse homes in UAE , sell your house , or find a new place to rent In Dubai, Abu Dhabi, Sharjah, Ajman, Umm Al Quwain, Ras Al Khaimah and Fujairah, let's make your real estate journey seamless and rewarding. Start exploring now!
        </p>
        {/* List */}
        <ul className="grid gap-5 sm:grid-cols-2 md:grid-cols-4 md:gap-0">
          <li className="flex flex-col items-center gap-6 md:border-r md:px-10 md:py-4 p-8 md:border-gray-300">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPlaceholder%20Image.svg?alt=media&token=375a1ea3-a8b6-4d63-b975-aac8d0174074"
              alt=""
              className="inline-block h-16 w-16 rounded-full object-cover"
            />
            <p className="text-xl font-semibold">Rent Home</p>
            <p className="text-center text-sm text-gray-500">
            Lets help you find Your next home. Choose to own a home in any of the seven Emirates from Dubai To Umm Al Quwain
            </p>
          </li>
          <li className="flex flex-col items-center gap-6 md:border-r md:px-10 md:py-4 p-8 md:border-gray-300">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPlaceholder%20Image.svg?alt=media&token=375a1ea3-a8b6-4d63-b975-aac8d0174074"
              alt=""
              className="inline-block h-16 w-16 rounded-full object-cover"
            />
            <p className="text-xl font-semibold">Sell Property</p>
            <p className="text-center text-sm text-gray-500">
            Are You Looking at Selling Your Home  , we can help you navigate a successful sale
            </p>
          </li>
          <li className="flex flex-col items-center gap-6 md:border-r md:px-10 md:py-4 p-8 md:border-gray-300">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPlaceholder%20Image.svg?alt=media&token=375a1ea3-a8b6-4d63-b975-aac8d0174074"
              alt=""
              className="inline-block h-16 w-16 rounded-full object-cover"
            />
            <p className="text-xl font-semibold">Buy Property</p>
            <p className="text-center text-sm text-gray-500">
            Are you thinking about buying a new home and dont Know where to start. Let our team find You a perfect home worth living
            </p>
          </li>
          <li className="flex flex-col items-center gap-6 md:border-r md:px-10 md:py-4 p-8 md:border-gray-300">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPlaceholder%20Image.svg?alt=media&token=375a1ea3-a8b6-4d63-b975-aac8d0174074"
              alt=""
              className="inline-block h-16 w-16 rounded-full object-cover"
            />
            <p className="text-xl font-semibold">Property Management</p>
            <p className="text-center text-sm text-gray-500">
            Managing property can be stressful, but with La Verde, we make it easy for you. From management to maintenance, trust us – you won't regret it.
            </p>
          </li>
        </ul>
      </div>
    </section>  
        </>
    )
}

export default OurServices;
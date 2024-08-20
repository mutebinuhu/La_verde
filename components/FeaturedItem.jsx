"use client"
import React from "react";
import { Fade } from "react-awesome-reveal";
import { FaBed, FaShower } from "react-icons/fa";
const FeaturedItem = ({ imageSrc, tag, title, price, bedrooms, bathrooms, squareFeet, type }) => {
    return (
      <Fade>
        <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
        <div className="relative">
          <img src={imageSrc} alt={title} className="w-full h-64 object-cover" />
          <div className="absolute top-0 left-0 bg-[#FFA72A] text-white px-3 py-1 text-sm">{tag}</div>
        </div>
        <div className="p-4 bg-white">
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-gray-600">{price}</p>
          <div className="flex items-center justify-between mt-2">
            {
              type=="studio" ?"" :<div className="flex items-center space-x-2 text-gray-600">
              <FaBed/>
             <span>{bedrooms}</span>
            </div>
            }
            <div className="flex items-center space-x-2 text-gray-600">
              <FaShower/>
              <span>{bathrooms}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
              {squareFeet} sq.ft
            </div>
          </div>
        </div>
      </div>
      </Fade>
    );
  };
  export default FeaturedItem;
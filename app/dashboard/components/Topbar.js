import React from "react";
import { FaBell, FaSearch, FaUserCircle } from "react-icons/fa";
export const dynamic = 'force-dynamic'

function Topbar() {
  return (
    <div className="flex justify-between items-center bg-gray-100 px-6 py-4 border-b border-gray-200">
      <div className="relative text-gray-600">
        <input
          type="search"
          name="search"
          placeholder="Search"
          className="bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none"
        />
        <FaSearch className="absolute right-3 top-3 text-gray-400" />
      </div>
      <div className="flex items-center space-x-4">
        <FaBell className="text-gray-600" />
        <FaUserCircle className="text-gray-600" />
      </div>
    </div>
  );
}

export default Topbar;

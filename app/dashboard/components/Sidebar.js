import React from "react";
import { FaChartBar, FaShoppingCart, FaFileInvoiceDollar, FaUserFriends } from "react-icons/fa";
export const dynamic = 'force-dynamic'

function Sidebar() {
  return (
    <div className="w-64 bg-gray-800 text-white h-screen">
      <div className="px-6 py-4">
        <h1 className="text-2xl font-bold text-white">La Verde CRM</h1>
      </div>
      <nav className="px-6 py-4">
        <a href="/dashboard/admin" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">
          <FaChartBar className="inline-block mr-2" /> Dashboard
        </a>
        <a href="/dashboard/leads" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">
          <FaShoppingCart className="inline-block mr-2" /> Leads
        </a>
        <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">
          <FaFileInvoiceDollar className="inline-block mr-2" /> Properties
        </a>
        <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">
          <FaUserFriends className="inline-block mr-2" />Availabilities
        </a>
      </nav>
    </div>
  );
}

export default Sidebar;

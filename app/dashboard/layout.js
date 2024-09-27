"use client"
import React, { useContext } from "react";
import PropertyForm from "@/components/PropertyForm";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import DashboardContent from "./components/DashboardContent";
import PropertyDetails from "./components/PropertyDetails";
import EditPropertyForm from "./components/EditPropertyForm";
import { MyProvider } from "./context/MyContext";
<meta name="robots" content="noindex,nofollow" />

export default function DashboardLayout({
    children, // will be a page or nested layout
  }) 
  {
  
    return (
<MyProvider>
<div className="relative  h-screen">
 <div className="absolute z-40 top-0">
 <PropertyForm/>
 </div>
  <div className="absolute left-0 z-30 top-0">
 <EditPropertyForm />
 </div>
 <div className="absolute left-0 z-30 top-0">
 <PropertyDetails />
 </div>

<div className="flex bg-gray-100">
      <Sidebar />
      <div className="flex flex-col flex-1 w-full">
        <Topbar />
        <main className="flex-1 p-6 bg-white">
        <DashboardContent />
         {children}
        </main>
      </div>
    </div>
</div>
  </MyProvider>

    );
  }
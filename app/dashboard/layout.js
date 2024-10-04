"use client"
import React, { useContext, useEffect, useState } from "react";

import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import DashboardContent from "./components/DashboardContent";
import PropertyDetails from "./components/PropertyDetails";
import EditPropertyForm from "./components/EditPropertyForm";

import PropertyForm from "./components/PropertyForm";
import { MyProvider, useMyContext } from "../context/MyContext";

import { useRouter } from 'next/navigation';
import { checkAuthClient } from "@/utils/auth2";
import LeadForm from "./components/LeadForm";
import LeadDetails from "./leads/LeadDetails";
<meta name="robots" content="noindex,nofollow" />

export const dynamic = 'force-dynamic'

export default function DashboardLayout({children}) 
  
  {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
      const fetchUser = async () => {
        try {
          const user = await checkAuthClient(router);
          setUser(user);
        } catch (error) {
          console.error('Authentication failed:', error);
        } finally {
          setLoading(false);
        }
      };
  
      fetchUser();
    }, [router]);

    if (!user) return(
      <div class="flex w-full h-screen justify-center items-center">
      <div class="w-12 h-12 rounded-full absolute border border-solid border-gray-200"></div>
    
      <div
          class="w-12 h-12 rounded-full animate-spin absolute border border-solid border-cyan-500 border-t-transparent shadow-md">
      </div>
    </div>
    )
    return (
<MyProvider>
<div className="overflow-y-auto  sticky h-screen">
<div className="absolute z-40 w-1/2 top-0 left-0">
      <LeadForm/>
     
      </div>
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
        <Topbar username={user && user.name} />
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
  
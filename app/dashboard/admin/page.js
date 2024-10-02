"use client"
export const dynamic = 'force-dynamic'
import React, {useEffect, useState, useContext} from 'react'
import DashboardContent from '../components/DashboardContent'
import DataTable from 'react-data-table-component';
import Card from '../components/Card';
import Messages from '../components/Messages';
import Link from 'next/link';
import { MyContext } from '@/context';
import ActionsComponent from '../components/ActionsComponent';
import LeadForm from '../components/LeadForm';
import MyProvider from '@/context/MyProvider';
import { useMyContext } from '../../context/MyContext';
import NoSSR from '@/NoSSR';


export default function page() {
  const [data, setData] = useState([]);
  const [messages, setMessages] = useState([]);
  
  const {setShowAddPropertyForm, properties } = useMyContext() || {};

  useEffect(() => {

    setData(properties);
    console.log("data=======xxxxxxxxxxxxxxxxxxxx", properties);
    const getMessages = async () => {
      try {
        const res = await fetch('/api/messages');
        const data = await res.json();
        setMessages(data);  
        console.log("messages", data);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
  }

    getMessages();
  }, []);

  const StatusColor = ({status}) => {
    switch(status) {
      case 'vacant':
        return <div className="bg-green-900 text-white py-0.8 px-1 rounded ">{status}</div>
      case 'upComing':
        return <div className="bg-yellow-500 text-white py-0.8 px-1 rounded">{status}</div>
      case 'occupied':
        return <div className="bg-red-900 text-white py-0.8 px-1 rounded">{status}</div>
      default:
        return <div className="bg-gray-100 text-white py-0.8 px-1 rounded">{status}</div>
    }
  }
  const formattedDate = (date) => {
    
    const dateObj = new Date(date);
    return dateObj.toLocaleString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour12: false, // 24-hour format
      })
      
};
  const columns = [
 
    {
      name: 'Property Type',
      selector: row => <div class="capitalize">{ row.subCategory}</div>,
    },
    {
      name: 'Location',
      selector: row => row.location,
    },
    {
      name: 'Status',
      selector: row => <div class="capitalize flex space-x-2"><StatusColor status={ row.status} /> <span>{row.status == "upComing" && "on " + formattedDate(row.upComingDate) }</span></div>,
    },
    {
      name: 'Price',
      selector: row => row.price,
    },
    {
      name: 'Actions',
      selector: row => <ActionsComponent data={row}/>,
    }
  ];
  const customStyles = {
    headCells: {
      style: {
        backgroundColor: '#f3f4f6',
        color: '#333',
        fontWeight: 'bold',
        borderBottom: '1px solid #ccc',
      },
    },
    cells: {
      style: {
        borderBottom: '1px solid #d1d5db',
        padding: '10px',
        fontSize: '14px',
      },
    },
    rows: {
      style: {
        '&:nth-of-type(even)': {
          backgroundColor: '#f9fafb',
        },
      },
    },
  };


  const {  properties:newData, loading, error } = useMyContext() ||{}; // Destructure context values

  if (loading) return(
    <div class="flex w-full h-screen justify-center items-center">
    <div class="w-12 h-12 rounded-full absolute border border-solid border-gray-200"></div>
  
    <div
        class="w-12 h-12 rounded-full animate-spin absolute border border-solid border-cyan-500 border-t-transparent shadow-md">
    </div>
  </div>
  )
  if (error) return <p>Error: {error}</p>;
 
  return (
<NoSSR>

    <div className="h-screen flex flex-col">
   <div>
    {/**
     * 
     *  <div className='w-full'><LeadForm /></div>
     * 
     */}
   </div>
    <div className="flex-1 md:flex justify-between space-x-8 overflow-y-auto ">
      <div className="w-3/4 py-7">
      
        <div className='flex justify-between'>
        <h2 className='text-3xl font-bold'>Properties List</h2>
        <button className="p-2 bg-[#104E3E] text-white py-0.8 px-1 rounded" onClick={()=>setShowAddPropertyForm(true)}>Add Property</button>
        </div>
        <div className='my-2 '>
        <Card component={<DataTable data={newData.data}  selectableRows columns={columns} pagination customStyles={customStyles} />} />
        </div>
      </div>
      <div className="w-1/4 py-7">
        <Messages messages={messages} />
      </div>
    </div>
  </div>

</NoSSR>
  )
}

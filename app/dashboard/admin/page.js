"use client"
import React, {useEffect, useState} from 'react'
import DashboardContent from '../components/DashboardContent'
import DataTable from 'react-data-table-component';
import Card from '../components/Card';
import Messages from '../components/Messages';

export default function page() {
  const [data, setData] = useState([]);
  const [messages, setMessages] = useState([]);

  useEffect(() => {

    const getData = async () => {
        try {
          const res = await fetch('/api/search');
          const data = await res.json();
          setData(data);  
          console.log("data", data);
        } catch (error) {
          console.error('Error fetching data:', error.message);
        }
    }
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
    getData();
    getMessages();
  }, []);
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
      name: 'Price',
      selector: row => row.price,
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

  return (

    <div className="h-screen flex flex-col">
    <DashboardContent />
    <div className="flex-1 md:flex justify-between space-x-8 overflow-y-auto">
      <div className="w-3/4 py-7">
        <h2>Properties List</h2>
        <Card component={<DataTable data={data}  selectableRows columns={columns} pagination customStyles={customStyles} />} />
      </div>
      <div className="w-1/4 py-7">
        <Messages messages={messages} />
      </div>
    </div>
  </div>

  )
}

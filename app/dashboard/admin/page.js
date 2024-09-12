"use client"
import React, {useEffect, useState} from 'react'
import DashboardContent from '../components/DashboardContent'
import DataTable from 'react-data-table-component';
import Card from '../components/Card';

export default function page() {
  const [data, setData] = useState([]);
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

    getData();
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
  

  return (
    <>
    <DashboardContent/>   
    <div className='w-3/4'>
    <Card component={ <DataTable  data={data && data} columns={columns}  pagination/>} /> 
    </div>
    </>
  )
}

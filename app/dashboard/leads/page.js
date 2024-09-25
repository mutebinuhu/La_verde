"use client"
import React, { useContext } from 'react'
import Card from '../components/Card'
import DataTable from 'react-data-table-component'
import ActionsComponent from '../components/ActionsComponent';
import { MyContext } from '@/context';
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

export default function page() {
  const { leads, loading, error } = useContext(MyContext); // Destructure context values

  return (
    <div>
      <h2>Leads</h2>
      <div className='my-2 '>
        </div>
      </div>
    
  )
}

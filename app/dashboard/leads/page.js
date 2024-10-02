"use client"
export const dynamic = 'force-dynamic'
import React, { useContext } from 'react'
import Card from '../components/Card'
import DataTable from 'react-data-table-component'
import ActionsComponent from '../components/ActionsComponent';
import { MyContext } from '@/context';
import { useMyContext } from '@/app/context/MyContext'

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
  const columns = [
    {
      name: 'Name',
      selector: row => <div class="capitalize">{row.name}</div>,
    },
    {
      name: 'Agent',
      selector: row => <div class="capitalize">{row.agent}</div>,
    },
    {
      name: 'Source',
      selector: row => <div class="capitalize">{row.source}</div>,
    },
    {
      name: 'Status',
      selector: row => <div class="capitalize">{row.status}</div>,
    },
  ];
export default function page() {
  const { leads, loading, error } = useMyContext(); // Destructure context values
  if (loading) return(
    <div class="flex w-full h-screen justify-center items-center">
    <div class="w-12 h-12 rounded-full absolute border border-solid border-gray-200"></div>
  
    <div
        class="w-12 h-12 rounded-full animate-spin absolute border border-solid border-cyan-500 border-t-transparent shadow-md">
    </div>
  </div>
  )
  return (
    <div>
       <div className="w-3/4 py-4"></div>
      <h2 className='text-3xl font-bold'>Leads</h2>
      <div className='my-2 '>
      {
        loading? (
          <div>Loading...</div>
        ) : error? (
          <div>Error: {error.message}</div>
        ) : (
          <Card
            component={
              <DataTable
                data={leads}
                selectableRows
                columns={columns}
                pagination
                customStyles={customStyles}
              />
            }
          />
        )
      }
      </div>
      </div>
    
  )
}

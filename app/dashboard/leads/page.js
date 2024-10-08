"use client"
export const dynamic = 'force-dynamic'
import React, { useContext } from 'react'
import Card from '../components/Card'
import DataTable from 'react-data-table-component'
import ActionsComponent from '../components/ActionsComponent';
import { MyContext } from '@/context';
import { useMyContext } from '@/app/context/MyContext'
import LeadForm from '../components/LeadForm'
import { FaEdit } from 'react-icons/fa'


export default function page() {
  const { leads, loading, error, setShowLeadForm} = useMyContext();

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
        name: 'Lead Status',
        selector: row => <div class="capitalize">{row.status}</div>,
      },
      {
        name: 'Lead Assigned',
        selector: row => <div class="capitalize">{row.agent}</div>,
      },
      {
        name: 'Lead Email',
        selector: row => <div class="capitalize">{row.email}</div>,
      },
      {
        name: 'Lead Phone',
        selector: row => <div class="capitalize">{row.phone}</div>,
      },
      {
        name: 'Lead Date',
        selector: row => <div class="capitalize">{row.createdAt.replace("T", " ").replace("Z", "")}</div>,
      },
      {
        name: 'Actions',
        selector: row =>   <button
        onClick={()=>{setLeadsDetails(row) }}
        className="flex items-center bg-yellow-500 text-white px-3 py-2 rounded hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-300"
        title="Edit"
      >
        <FaEdit className="mr-2" />
    
      </button>
      }
    ];
  if (loading) return(
    <div class="flex w-full h-screen justify-center items-center">
    <div class="w-12 h-12 rounded-full absolute border border-solid border-gray-200"></div>
  
    <div
        class="w-12 h-12 rounded-full animate-spin absolute border border-solid border-cyan-500 border-t-transparent shadow-md">
    </div>
  </div>
  )
  return (
    <div className='relative'>
     
       <div className="w-3/4 py-4"></div>
      <h2 className='text-3xl font-bold'>Leads</h2>

      <div className='my-2 '>
      {
        loading? (
          <div>Loading...</div>
        ) : error? (
          <div>Error: {error.message}</div>
        ) : (
         <>
      
                <div className='text-right py-4'>
                <button className="p-2 bg-[#104E3E] text-white py-0.8 px-1 rounded" onClick={()=>setShowLeadForm(true)}>Add Lead</button>
                </div>

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
         </>
        )
      }
      </div>
      </div>
    
  )
}

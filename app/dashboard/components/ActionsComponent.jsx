
"use client"
import { useMyContext } from '@/app/context/MyContext';
import { MyContext } from '@/context';
import React, {useContext} from 'react';
import { FaEdit, FaTrash, FaEye } from 'react-icons/fa';
import { FcApproval,FcCancel } from "react-icons/fc";

export const dynamic = 'force-dynamic'

const approveListing = async (id, data) => {
  try {
    const response = await fetch(`/api/properties/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error('Failed to approve listing');
    }
    const result = await response.json();
    console.log(result);
    alert("Property Activated successfully")
  } catch (err) {
    console.error(err);
  }
}

const ActionsComponent = ({data}) => {
   // console.log('actions component', data._id);
   const {setShowEditPropertyForm, setSingleProperty, setShowPropertyDetails} = useMyContext();

  return (
    <div className="flex space-x-3">
      {/* View Button */}
      <button
             onClick={()=>{setSingleProperty(data); setShowPropertyDetails(true) }}
        className="flex items-center bg-blue-500 text-white px-3 py-2 rounded border hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
        title="View"
      >
        <FaEye className="mr-2" />
   
      </button>

      {/* Edit Button */}
      <button
        onClick={()=>{setShowEditPropertyForm(true); setSingleProperty(data);setShowPropertyDetails(false) }}
        className="flex items-center bg-yellow-500 text-white px-3 py-2 rounded hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-300"
        title="Edit"
      >
        <FaEdit className="mr-2" />
    
      </button>

  
       {
        !data.approved  &&  <button
        onClick={()=>approveListing(data._id, {approved: true})}
     className="flex items-center bg-green-500 text-white space-x-2 p-1 py-2 rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300"
     title="Activate"
   >
    <FcApproval className='bg-white rounded'/>
 
   </button>
       }
   
   {
    data.approved  && (
      <button
      onClick={()=>approveListing(data._id, {approved: false})}
   className="flex items-center bg-green-500 text-white space-x-2 p-1 py-2 rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300"
   title="Deactivate"
 >
  <FcCancel className='bg-white rounded'/>
 
 </button>
    )
   }
    </div>
  );
};

export default ActionsComponent;

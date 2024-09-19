
import { MyContext } from '@/context';
import React, {useContext} from 'react';
import { FaEdit, FaTrash, FaEye } from 'react-icons/fa';

const ActionsComponent = ({data}) => {
   // console.log('actions component', data._id);
   const {setShowEditPropertyForm, setSingleProperty} = useContext(MyContext);

  return (
    <div className="flex space-x-3">
      {/* View Button */}
      <button
             onClick={()=>{setSingleProperty(data)}}
        className="flex items-center bg-blue-500 text-white px-3 py-2 rounded border hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
        title="View"
      >
        <FaEye className="mr-2" />
        View
      </button>

      {/* Edit Button */}
      <button
        onClick={()=>{setShowEditPropertyForm(true); setSingleProperty(data)}}
        className="flex items-center bg-yellow-500 text-white px-3 py-2 rounded hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-300"
        title="Edit"
      >
        <FaEdit className="mr-2" />
        Edit
      </button>

      {/* Delete Button */}
     {/**
      *  <button
           onClick={()=>alert(data._id)}
        className="flex items-center bg-red-500 text-white px-3 py-2 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300"
        title="Delete"
      >
        <FaTrash className="mr-2" />
        Delete
      </button>
      * 
      */}
    </div>
  );
};

export default ActionsComponent;

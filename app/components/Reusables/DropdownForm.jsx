"use client"
import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { CiSearch } from "react-icons/ci";
import Pills from '@/components/Pills';
import SearchableList from './SearchableList';

const Dropdown = ({ label, name, options, selected }) => (
  <div>
    <label htmlFor={name}>{label}</label>
    <Field as="select" name={name} placeholder={name} className="px-4 md:py-2 py-1 my-1 md:my-0 w-32 rounded font-medium text-[#164849]">
      <option value="" label={selected} />
      {options.map(option => (
        <option key={option.value} value={option.value} label={option.label} />
      ))}
    </Field>
    <ErrorMessage name={name} component="div" className="error" />
  </div>
);

const validationSchema = Yup.object({
   
});

const Dropper = () =>{
const [showDropDown, setShowDropDown] = useState(false)

  return(
    <div>
      <button onClick={()=>setShowDropDown(opened=>!opened)}  id="dropdownDefaultButton" data-dropdown-toggle="dropdown" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Dropdown button <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
       <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
     </svg>
</button>

  {
    showDropDown && 
    <div id="dropdown" class="z-10  bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
      <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
        <li>
          <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
        </li>
        <li>
          <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
        </li>
        <li>
          <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
        </li>
        <li>
          <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
        </li>
      </ul>
  </div>
  }
    </div>
  )
}
const DropdownForm = () => {
  return (
    <Formik
      initialValues={{ option: '' }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          //alert(JSON.stringify(values, null, 2));
          window.location.href="/properties"
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form className='text-center'>
          <div className='md:flex justify-between md:space-x-4'>
          <div className='flex space-x-4 '>
          <Dropdown
            name="buyorsell"
            placeholder="Buy"
            selected={"Buy"}
            options={[
              { value: 'buy', label: 'Buy' },
              { value: 'sell', label: 'Sell' },
            ]}
          />
          <Dropdown
            name="type"
            selected={"Commercial"}
            options={[
              { value: 'commercial', label: 'Commercial' },
              { value: 'residential', label: 'Residential' },
            ]}
          />
          </div>
          <div className='flex space-x-4 '>
          <Dropdown
            label=""
            name="price"
            selected={"Price"}
            options={[
              { value: '50000', label: '50000' },
              { value: '100000', label: '100000' },
              { value: '150000', label: '150000' }
            ]}
          />
           <Dropdown
            label=""
            name="sqfeet"
            selected={"Sq Ft"}
            options={[
              { value: '50000', label: '50000' },
              { value: '100000', label: '100000' },
              { value: '150000', label: '150000' }
            ]}
          />
          </div>
           <div className='flex space-x-4 '>
           <Dropdown
            label=""
            name="studio"
            options={[
              { value: '1', label: '1'},
              { value: '2', label: '2'},
              { value: '3', label: '3'},
              { value: '4', label: '4'}

            ]}
          />
           <Dropdown
            label=""
            name="propertyType"
            options={[
              { value: 'Villa', label: 'villa' },
              { value: 'Apartment', label: 'Apartment' },
              { value: 'villa', label: 'Villa' },
              { value: 'TownHouse', label: 'Town House' },


            ]}
          />
           </div>
          </div>
          <div>
            
          </div>
            {/**
             * 
             * <Field  name="search" className="outline-none border-none px-4 py-2 w-full rounded" placeholder="Search listings by location"></Field>
            <ErrorMessage name="search" component="div" className="error" />
             */}
             <SearchableList/>
          <div className='mt-2 md:mt-6 flex justify-center w-full items-center'>
          <button type="submit"  name='submit' className='bg-white text-lg items-center flex space-x-4  w-full md:w-1/3 font-bold text-[#164849]  rounded py-2 ' disabled={isSubmitting}>
             <span><CiSearch className='text-2xl'/></span>
             <span className=''>Find Your New Home</span>
          </button>
          </div>
          <div className='flex w-full justify-center items-center mt-'>

          </div>

        </Form>
      )}
    </Formik>
  );
};

export default DropdownForm;

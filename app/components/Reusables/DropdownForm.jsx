"use client";
import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { CiSearch } from "react-icons/ci";
import Pills from '@/components/Pills'; // Make sure this path is correct
import SearchableList from './SearchableList'; // Adjust the import path as necessary
import { useRouter, usePathname, useSearchParams } from 'next/navigation'




const Dropdown = ({ label, name, options, selected }) => (
  <div>
    <label htmlFor={name}>{label}</label>
    <Field as="select" name={name} className="px-4 md:py-2 py-1 my-1 md:my-0 w-32 rounded font-medium text-[#164849]">
      <option value="" label={selected} />
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </Field>
    <ErrorMessage name={name} component="div" className="error" />
  </div>
);

const validationSchema = Yup.object({
  // Add your validation schema here if needed
});

const Dropper = () => {
  const [showDropDown, setShowDropDown] = useState(false);

  return (
    <div>
      <button 
        onClick={() => setShowDropDown(opened => !opened)} 
        id="dropdownDefaultButton" 
        data-dropdown-toggle="dropdown" 
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" 
        type="button"
      >
        Dropdown button 
        <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
        </svg>
      </button>

      {showDropDown && 
        <div id="dropdown" className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
            </li>
          </ul>
        </div>
      }
    </div>
  );
}

const DropdownForm = () => {
  const router = useRouter();
  return (
    <Formik
      initialValues={{ 
        buyorsell: '', 
        type: '', 
        price: '', 
        sqfeet: '', 
        category: '', 
        selectedItems: [] 
      }}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting }) => {
        console.log("values",values);
       /* setTimeout(() => {
          // Handle form submission logic
          console.log('Form values:', values);
          //window.location.href = "/properties";
          setSubmitting(false);
        }, 400);
        */
       try {
       /*
 const res = await fetch("http://localhost:3000/api/search?category=residential")
        const data = await res.json();
        console.log("response", data);
       */
        if(values.selectedItems.length>1){
          alert("many items")
        }
        const query = new URLSearchParams(values).toString();
        console.log("query====", query);
        //router.push(`http://localhost:3000/properties?${query}`);
        router.push(`http://localhost:3000/properties`);
       } catch (error) {
        console.log("error", error)
       }
       setSubmitting(false)
      }}
    >
      {({ isSubmitting }) => (
        <Form className='text-center'>
          <div className='md:flex justify-between md:space-x-4'>
            <div className='flex space-x-4 '>
              <Dropdown
                label=""
                name="buyorsell"
                selected={"Buy Or Rent"}
                options={[
                  { value: 'buy', label: 'Buy' },
                  { value: 'rent', label: 'rent' },
                ]}
              />
              <Dropdown
                label=""
                name="category"
                selected={"Select Property Type"}
                options={[
                  { value: 'commercial', label: 'Commercial' },
                  { value: 'residential', label: 'Residential' },
                ]}
              />
            </div>
            <div className='flex space-x-4 '>
              <Dropdown
                label=""
                name="minPrice"
                selected={"Min Price"}
                options={[
                  { value: '50000', label: '50000' },
                  { value: '100000', label: '100000' },
                  { value: '150000', label: '150000' }
                ]}
              />
              <Dropdown
                label=""
                name="maxPrice"
                selected={"Max Price"}
                options={[
                  { value: '500000', label: '500000' },
                  { value: '100000', label: '100000' },
                  { value: '150000', label: '150000' }
                ]}
              />
              
            </div>
            <div className='flex space-x-4 '>
              <Dropdown
                label=""
                name="bedrooms"
                selected={"No Of Bedrooms"}
                options={[
                  { value: '1', label: '1' },
                  { value: '2', label: '2' },
                  { value: '3', label: '3' },
                  { value: '4', label: '4' }
                ]}
              />
              <Dropdown
                label=""
                name="type"
                selected={"Choose Type"}
                options={[
                  { value: 'studio', label: 'Studio' },
                  { value: 'villa', label: 'Villa' },
                  { value: 'apartment', label: 'Apartment' },
                  { value: 'townHouse', label: 'Town House' },
                  {value: 'residentialFloor', label: 'Residential Floor'},
                  { value: 'residentialBuilding', label: 'Residential Building'},
                  { value: 'pentHouse', label: 'Pent House'},
                  {value: 'villaCompound', label: 'Villa Compound'}
        
                ]}
              />
            </div>
            <div className='w-full'>
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
          </div>
          <SearchableList name="selectedItems" />
          <div className='mt-2 md:mt-6 flex justify-center w-full items-center'>
            <button 
              type="submit"  
              name='submit' 
              className='bg-white text-lg items-center flex space-x-4 w-full md:w-1/3 font-bold text-[#164849] rounded py-2' 
              disabled={isSubmitting}
            >
              <span><CiSearch className='text-2xl'/></span>
              <span>Find Your New Home</span>
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default DropdownForm;

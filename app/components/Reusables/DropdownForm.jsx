"use client"
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { CiSearch } from "react-icons/ci";


const Dropdown = ({ label, name, options, selected }) => (
  <div>
    <label htmlFor={name}>{label}</label>
    <Field as="select" name={name} className="px-4 md:py-4 py-2 my-4 md:my-0 w-56 md:w-32 rounded font-medium text-[#164849]">
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
          <Dropdown
            name="buyorsell"
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
           <Dropdown
            label=""
            name="noOfRooms"
            selected={"Rooms"}
            options={[
              { value: '50000', label: '50000' },
              { value: '100000', label: '100000' },
              { value: '150000', label: '150000' }
            ]}
          />
           <Dropdown
            label=""
            name="propertyType"
            selected={"Villa"}
            options={[
              { value: 'flat', label: 'flat' },
            ]}
          />
          </div>
          <div>
            
          </div>
          <div className='flex w-full justify-center items-center mt-8'>
            <Field  name="search" className="outline-none border-none px-4 py-4 w-full rounded" placeholder="Search listings by location"></Field>
            <ErrorMessage name="search" component="div" className="error" />
        </div>
          <div className='mt-8 flex justify-center w-full items-center'>
          <button type="submit"  name='submit' className='bg-white text-lg items-center md:flex space-x-2 px-6 w-full md:w-1/3 font-bold text-[#164849]  rounded py-2 ' disabled={isSubmitting}>
             <span><CiSearch className='text-4xl'/></span>
             <span className=''>Find Your New Home</span>
          </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default DropdownForm;

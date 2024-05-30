"use client";
import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import withAuth from '@/utils/withAuth';
import FileUploadForm from './FileUploadForm';

const PropertyForm = () => {


  const initialValues = {
    category: '',
    subCategory: '',
    purpose: '',
    completionStatus: '',
    title: '',
    areaSquare: '',
    createdBy: 'TEST',
    address: '',
    price: '',
    bedrooms: '',
    bathrooms: '',
    size: '',
    descriptionEnglish: '',
    descriptionArabic: '',
    images: [],
    //features: [],
    //availability: [],
  };

  const validationSchema = Yup.object().shape({
    category: Yup.string().required('Category is required').oneOf(['residential', 'commercial']),
    subCategory: Yup.string().required('Subcategory is required').oneOf(['villa', 'studio', 'apartment', 'residentialFloor', 'residentialPlot', 'townHouse', 'residentialBuilding', 'pentHouse', 'villaCompound']),
    purpose: Yup.string().required('Purpose is required').oneOf(['sale', 'rent']),
    completionStatus: Yup.string().required('Completion status is required').oneOf(['offPlanPrimary', 'offPlanSecondly', 'readyPrimary', 'readySecondary']),
    title: Yup.string().required('Title is required'),
    areaSquare: Yup.number().required('Area in square meters is required'),
    //createdBy: Yup.string().required('Created by is required'),
    address: Yup.string().required('Address is required'),
    price: Yup.number().required('Price is required'),
    bedrooms: Yup.number().required('Number of bedrooms is required'),
    bathrooms: Yup.number().required('Number of bathrooms is required'),
    size: Yup.number().required('Size is required'),
    descriptionEnglish: Yup.string().required('Description in English is required'),
    descriptionArabic: Yup.string().required('Description in Arabic is required'),
    //features: Yup.array().of(Yup.string()),
   // availability: Yup.array().of(Yup.date().required('Availability date is required')),
    images: Yup.array()
    .min(1, 'Please select at least one image')
    .required('Images are required'),
  });
  const [previews, setPreviews] = useState([]);
  const [formSubmitted, setFormSubmitted] = useState(false)


  const handleSubmit = async(values, { setSubmitting, resetForm }) => {
  
    try {
      
      const res = await fetch("http://localhost:3000/api/properties", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body:JSON.stringify(values)
      })
      
      const data = await res.json();
      console.log("res", data);
      if(data.success){
        setFormSubmitted(true)
        setTimeout(()=>{
        setFormSubmitted(false)

        }, 3000)
      }
    } catch (error) {
      console.log("error", error.message)
    }

    setSubmitting(false);
    resetForm();
    setPreviews("");
  };

  const handleFileChange = (event, setFieldValue) => {
    const files = Array.from(event.currentTarget.files);
    setFieldValue('images', files);

    const filePreviews = files.map(file => URL.createObjectURL(file));
    setPreviews(filePreviews);
  };

 

  return (
   <div className='my-12'>
   <h2 className='py-2 px-8 text-3xl font-bold md:text-center'>Add Property</h2>
   {formSubmitted && <p className='bg-[#104e3e] py-4 text-white w-full rounded container mx-auto text-center'>Success !!</p>}
   
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({setFieldValue,isSubmitting, touched,errors }) => (
        <Form className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-md">
            <div className="mb-4 ">
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
            <Field type="text" name="title" className="mt-1 block w-full border border-1 p-2 rounded" />
            <ErrorMessage name="title" component="div" className="text-red-500 text-sm" />
            {errors.images && touched.images ? (
              <div>{errors.images}</div>
            ) : null}
          </div>
            <div className='flex justify-between space-x-4'>
            <div className="mb-4  w-1/2">
            <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
            <Field as="select" name="category" className="mt-1 block w-full border border-1 p-2 rounded">
              <option value="" label="Select category" />
              <option value="residential" label="Residential" />
              <option value="commercial" label="Commercial" />
            </Field>
            <ErrorMessage name="category" component="div" className="text-red-500 text-sm" />
          </div>

          <div className="mb-4 w-1/2">
            <label htmlFor="subCategory" className="block text-sm font-medium text-gray-700">Subcategory</label>
            <Field as="select" name="subCategory" className="mt-1 block w-full border border-1 p-2 rounded">
              <option value="" label="Select subcategory" />
              <option value="villa" label="Villa" />
              <option value="studio" label="Studio" />
              <option value="apartment" label="Apartment" />
              <option value="residentialFloor" label="Residential Floor" />
              <option value="residentialPlot" label="Residential Plot" />
              <option value="townHouse" label="Town House" />
              <option value="residentialBuilding" label="Residential Building" />
              <option value="pentHouse" label="Pent House" />
              <option value="villaCompound" label="Villa Compound" />
            </Field>
            <ErrorMessage name="subCategory" component="div" className="text-red-500 text-sm" />
          </div>
            </div>
            <div className='flex justify-between  space-x-4'>
          <div className="mb-4  w-1/2 ">
            <label htmlFor="purpose" className="block text-sm font-medium text-gray-700 ">Purpose</label>
            <Field as="select" name="purpose" className="mt-1 block w-full border border-1 p-2 rounded">
              <option value="" label="Select purpose" />
              <option value="sale" label="Sale" />
              <option value="rent" label="Rent" />
            </Field>
            <ErrorMessage name="purpose" component="div" className="text-red-500 text-sm" />
          </div>

          <div className="mb-4 w-1/2 ">
            <label htmlFor="completionStatus" className="block text-sm font-medium text-gray-700">Completion Status</label>
            <Field as="select" name="completionStatus" className="mt-1 block w-full border border-1 p-2 rounded">
              <option value="" label="Select completion status" />
              <option value="offPlanPrimary" label="Off Plan Primary" />
              <option value="offPlanSecondly" label="Off Plan Secondly" />
              <option value="readyPrimary" label="Ready Primary" />
              <option value="readySecondary" label="Ready Secondary" />
            </Field>
            <ErrorMessage name="completionStatus" component="div" className="text-red-500 text-sm" />
          </div>
          </div>
          <div className='flex justify-between  space-x-4'>

        
          <div className="mb-4  w-1/2">
            <label htmlFor="size" className="block text-sm font-medium text-gray-700">Size</label>
            <Field type="number" name="size" className="mt-1 block w-full border border-1 p-2 rounded" />
            <ErrorMessage name="size" component="div" className="text-red-500 text-sm" />
          </div>

          <div className="mb-4  w-1/2">
            <label htmlFor="areaSquare" className="block text-sm font-medium text-gray-700">Area Square</label>
            <Field type="number" name="areaSquare" className="mt-1 block w-full border border-1 p-2 rounded" />
            <ErrorMessage name="areaSquare" component="div" className="text-red-500 text-sm" />
          </div>
          </div>  
      
          <div className='flex justify-between  space-x-4'>
          <div className="mb-4 w-1/2">
            <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
            <Field type="text" name="address" className="mt-1 block w-full border border-1 p-2 rounded" />
            <ErrorMessage name="address" component="div" className="text-red-500 text-sm" />
          </div>

          <div className="mb-4  w-1/2">
            <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price</label>
            <Field type="number" name="price" className="mt-1 block w-full border border-1 p-2 rounded" />
            <ErrorMessage name="price" component="div" className="text-red-500 text-sm" />
          </div>
          </div>
          <div className='flex justify-between  space-x-4'>
          <div className="mb-4  w-1/2">
            <label htmlFor="bedrooms" className="block text-sm font-medium text-gray-700">Bedrooms</label>
            <Field type="number" name="bedrooms" className="mt-1 block w-full border border-1 p-2 rounded" />
            <ErrorMessage name="bedrooms" component="div" className="text-red-500 text-sm" />
          </div>

          <div className="mb-4  w-1/2">
            <label htmlFor="bathrooms" className="block text-sm font-medium text-gray-700">Bathrooms</label>
            <Field type="number" name="bathrooms" className="mt-1 block w-full border border-1 p-2 rounded" />
            <ErrorMessage name="bathrooms" component="div" className="text-red-500 text-sm" />
          </div>
        </div>
    
          <div className="mb-4 ">
            <label htmlFor="descriptionEnglish" className="block text-sm font-medium text-gray-700">Description (English)</label>
            <Field as="textarea" name="descriptionEnglish" className="mt-1 block w-full border border-1 p-2 rounded" />
            <ErrorMessage name="descriptionEnglish" component="div" className="text-red-500 text-sm" />
          </div>

          <div className="mb-4">
            <label htmlFor="descriptionArabic" className="block text-sm font-medium text-gray-700">Description (Arabic)</label>
            <Field as="textarea" name="descriptionArabic" className="mt-1 block w-full border border-1 p-2 rounded" />
            <ErrorMessage name="descriptionArabic" component="div" className="text-red-500 text-sm" />
          </div>
          <div>
            <label htmlFor="images">Upload Images</label>
            <input
              id="images"
              name="images"
              type="file"
              multiple
              onChange={event => handleFileChange(event, setFieldValue)}
            />
            {errors.images && touched.images ? (
              <div>{errors.images}</div>
            ) : null}
          </div>
          
          <div>
            {previews && previews.map((src, index) => (
              <img key={index} src={src} alt={`preview ${index}`} width="100" />
            ))}
          </div>

         {/**
          * 
          *  <div className="mb-4">
            <label htmlFor="features" className="block text-sm font-medium text-gray-700">Features</label>
            <Field as="textarea" name="features" className="mt-1 block w-full border border-1 p-2 rounded" />
            <ErrorMessage name="features" component="div" className="text-red-500 text-sm" />
          </div>
          * 
          */}

         {/** 
          * <div className="mb-4">
            <label htmlFor="availability" className="block text-sm font-medium text-gray-700">Availability (Dates)</label>
            <Field as="textarea" name="availability" className="mt-1 block w-full border border-1 p-2 rounded" />
            <ErrorMessage name="availability" component="div" className="text-red-500 text-sm" />
          </div>
          * 
         */} 
          <div className="mb-4">
            <label htmlFor="Images" className="block text-sm font-medium text-gray-700">Images</label>
            
          </div>
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </Form>
      )}
    </Formik>
   </div>
  );
};

export default PropertyForm

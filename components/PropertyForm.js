"use client";
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import withAuth from '@/utils/withAuth';

const PropertyForm = () => {
  const initialValues = {
    category: '',
    subCategory: '',
    purpose: '',
    completionStatus: '',
    title: '',
    areaSquare: '',
    createdBy: '',
    address: '',
    price: '',
    bedrooms: '',
    bathrooms: '',
    size: '',
    descriptionEnglish: '',
    descriptionArabic: '',
    images: [],
    features: [],
    availability: [],
  };

  const validationSchema = Yup.object().shape({
    category: Yup.string().required('Category is required').oneOf(['residential', 'commercial']),
    subCategory: Yup.string().required('Subcategory is required').oneOf(['villa', 'studio', 'apartment', 'residentialFloor', 'residentialPlot', 'townHouse', 'residentialBuilding', 'pentHouse', 'villaCompound']),
    purpose: Yup.string().required('Purpose is required').oneOf(['sale', 'rent']),
    completionStatus: Yup.string().required('Completion status is required').oneOf(['offPlanPrimary', 'offPlanSecondly', 'readyPrimary', 'readySecondary']),
    title: Yup.string().required('Title is required'),
    areaSquare: Yup.number().required('Area in square meters is required'),
    createdBy: Yup.string().required('Created by is required'),
    address: Yup.string().required('Address is required'),
    price: Yup.number().required('Price is required'),
    bedrooms: Yup.number().required('Number of bedrooms is required'),
    bathrooms: Yup.number().required('Number of bathrooms is required'),
    size: Yup.number().required('Size is required'),
    descriptionEnglish: Yup.string().required('Description in English is required'),
    descriptionArabic: Yup.string().required('Description in Arabic is required'),
    images: Yup.array().of(Yup.string().url('Invalid URL')),
    features: Yup.array().of(Yup.string()),
    availability: Yup.array().of(Yup.date().required('Availability date is required')),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    console.log('Form values:', values);
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-md">
            <div className="mb-4 ">
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
            <Field type="text" name="title" className="mt-1 block w-full" />
            <ErrorMessage name="title" component="div" className="text-red-500 text-sm" />
          </div>
            <div className='flex justify-between space-x-4'>
            <div className="mb-4  w-1/2">
            <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
            <Field as="select" name="category" className="mt-1 block w-full">
              <option value="" label="Select category" />
              <option value="residential" label="Residential" />
              <option value="commercial" label="Commercial" />
            </Field>
            <ErrorMessage name="category" component="div" className="text-red-500 text-sm" />
          </div>

          <div className="mb-4">
            <label htmlFor="subCategory" className="block text-sm font-medium text-gray-700">Subcategory</label>
            <Field as="select" name="subCategory" className="mt-1 block w-full">
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
            <label htmlFor="purpose" className="block text-sm font-medium text-gray-700">Purpose</label>
            <Field as="select" name="purpose" className="mt-1 block w-full">
              <option value="" label="Select purpose" />
              <option value="sale" label="Sale" />
              <option value="rent" label="Rent" />
            </Field>
            <ErrorMessage name="purpose" component="div" className="text-red-500 text-sm" />
          </div>

          <div className="mb-4 w-1/2 ">
            <label htmlFor="completionStatus" className="block text-sm font-medium text-gray-700">Completion Status</label>
            <Field as="select" name="completionStatus" className="mt-1 block w-full">
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

        
          <div className="mb-4">
            <label htmlFor="size" className="block text-sm font-medium text-gray-700">Size</label>
            <Field type="number" name="size" className="mt-1 block w-full" />
            <ErrorMessage name="size" component="div" className="text-red-500 text-sm" />
          </div>

          <div className="mb-4">
            <label htmlFor="areaSquare" className="block text-sm font-medium text-gray-700">Area Square</label>
            <Field type="number" name="areaSquare" className="mt-1 block w-full" />
            <ErrorMessage name="areaSquare" component="div" className="text-red-500 text-sm" />
          </div>
          </div>  
      
          <div className='flex justify-between  space-x-4'>
          <div className="mb-4">
            <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
            <Field type="text" name="address" className="mt-1 block w-full" />
            <ErrorMessage name="address" component="div" className="text-red-500 text-sm" />
          </div>

          <div className="mb-4">
            <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price</label>
            <Field type="number" name="price" className="mt-1 block w-full" />
            <ErrorMessage name="price" component="div" className="text-red-500 text-sm" />
          </div>
          </div>
          <div className='flex justify-between  space-x-4'>
          <div className="mb-4">
            <label htmlFor="bedrooms" className="block text-sm font-medium text-gray-700">Bedrooms</label>
            <Field type="number" name="bedrooms" className="mt-1 block w-full" />
            <ErrorMessage name="bedrooms" component="div" className="text-red-500 text-sm" />
          </div>

          <div className="mb-4">
            <label htmlFor="bathrooms" className="block text-sm font-medium text-gray-700">Bathrooms</label>
            <Field type="number" name="bathrooms" className="mt-1 block w-full" />
            <ErrorMessage name="bathrooms" component="div" className="text-red-500 text-sm" />
          </div>
        </div>
    
          <div className="mb-4">
            <label htmlFor="descriptionEnglish" className="block text-sm font-medium text-gray-700">Description (English)</label>
            <Field as="textarea" name="descriptionEnglish" className="mt-1 block w-full" />
            <ErrorMessage name="descriptionEnglish" component="div" className="text-red-500 text-sm" />
          </div>

          <div className="mb-4">
            <label htmlFor="descriptionArabic" className="block text-sm font-medium text-gray-700">Description (Arabic)</label>
            <Field as="textarea" name="descriptionArabic" className="mt-1 block w-full" />
            <ErrorMessage name="descriptionArabic" component="div" className="text-red-500 text-sm" />
          </div>

          <div className="mb-4">
            <label htmlFor="images" className="block text-sm font-medium text-gray-700">Images (URLs)</label>
            <Field as="textarea" name="images" className="mt-1 block w-full" />
            <ErrorMessage name="images" component="div" className="text-red-500 text-sm" />
          </div>

          <div className="mb-4">
            <label htmlFor="features" className="block text-sm font-medium text-gray-700">Features</label>
            <Field as="textarea" name="features" className="mt-1 block w-full" />
            <ErrorMessage name="features" component="div" className="text-red-500 text-sm" />
          </div>

          <div className="mb-4">
            <label htmlFor="availability" className="block text-sm font-medium text-gray-700">Availability (Dates)</label>
            <Field as="textarea" name="availability" className="mt-1 block w-full" />
            <ErrorMessage name="availability" component="div" className="text-red-500 text-sm" />
          </div>

          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default PropertyForm

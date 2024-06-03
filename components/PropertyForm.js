"use client";
import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import withAuth from '@/utils/withAuth';
import FileUploadForm from './FileUploadForm';
import axios from 'axios';
import { TiTick } from "react-icons/ti";
import AmenitiesForm from './AmenitiesForm';

const PropertyForm = () => {
const [images, setImages] = useState([])

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
    amenities: [],
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
    amenities: Yup.array().of(Yup.string()),
   // availability: Yup.array().of(Yup.date().required('Availability date is required')),
    images: Yup.array()
    .min(1, 'Please select at least one image')
    .required('Images are required'),
  });
  const [previews, setPreviews] = useState([]);
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [selectedImages, setSelectedImages] = useState("");

  const [selectedFiles, setSelectedFiles] = useState([]);
  const [imageURLs, setImageURLs] = useState([]);
  const handleFileChange = (event) =>{
    setSelectedFiles(event.target.files);
    setImages(event.target.files)
  
  }
  
  const handleSubmit = async(values, { setSubmitting, resetForm }) => {
    console.log("imagesTo show----", values)
    const formData = new FormData();
    formData.append('file', values.images);
    console.log("imageslist", formData);

    const uploadedImageURLs = [];
    for (let file of selectedFiles) {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', 'jtiqg5os'); // Replace with your upload preset
      //console.log("preset", process.env.REACT_APP_UPLOAD_PRESET )
  
      try {
        const response = await axios.post(
          `https://api.cloudinary.com/v1_1/mutebinuhu/image/upload`,
          formData
        );
        uploadedImageURLs.push(response.data.secure_url);
      } catch (error) {
        console.error('Error uploading image:', error);
      }
    }
    setImageURLs(uploadedImageURLs);
    
    values.images = uploadedImageURLs

    try {
      
      const res = await fetch("http://localhost:3000/api/properties", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body:JSON.stringify(values)
      })


      const data = await res.json();
  
      if(data.success){
        setFormSubmitted(true)
        setTimeout(()=>{
        setFormSubmitted(false)
        resetForm();

        }, 3000)
      }
    } catch (error) {
      console.log("error", error.message)
    }

    resetForm();
    setPreviews("");
    setSubmitting(false)
  };

  /*const handleFileChange = (event, setFieldValue) => {
    const files = Array.from(event.currentTarget.files);
    setSelectedImages(event.currentTarget.files);
    console.log("images", selectedImages)
    setFieldValue('images', files);
    const filePreviews = files.map(file => URL.createObjectURL(file));
    setPreviews(filePreviews);
  };
*/
 

const amenitiesList = [
  'Swimming Pool',
  'Gym',
  'Parking',
  'Garden',
  'Security',
  'Playground',
  'Clubhouse',
  'WiFi',
  'Elevator',
  'Power Backup',
  'Air Conditioning',
  'Balcony',
  'Pet Friendly',
  'Laundry Room',
  'Fireplace',
  'Tennis Court',
  'Basketball Court',
  'Sauna',
  'Hot Tub',
  'Spa',
  'Conference Room',
  'Business Center',
  'Concierge Service',
  'Doorman',
  'Storage Units',
  'Bicycle Storage',
  'Roof Deck',
  'BBQ Area',
  'Library',
  'Game Room',
  'Yoga Studio',
  'Movie Theater',
  'On-site Maintenance',
  'Package Service',
  'Recycling Center',
  'Green Building',
  'Car Wash Area',
  'Guest Suites',
  'Coffee Bar',
  'Resident Lounge',
  'Childcare',
  'Community Kitchen',
  'Dog Park',
  'Pet Washing Station',
  'Electric Vehicle Charging Stations',
  'Golf Simulator',
  'Jogging Path',
  'Lake Access',
  'Marina',
  'Wine Cellar',
  'Sea View'
];
  return (
   <div className='my-12 relative'>
    <div className=''>
   <h2 className='py-2 px-8 text-3xl font-bold md:text-center'>Add Property</h2>
   {formSubmitted && <div className=' w-full rounded bg-gray-700 text-center absolute z-100 h-full w-full opacity-75'>
   <div className='flex justify-center h-full  items-center'>
   <p className='bg-[#104e3e] text-center text-white px-4 py-4'>
   <TiTick className='text-6xl' />
   <span>
   Property Added
   </span>

   </p>
    </div>
  
    </div>}
   
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({setFieldValue,isSubmitting, touched,errors }) => {
        console.log("erros", errors)
        return(
          (
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
             
           {/*   <div>
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
              */}
    
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
               <div>
      
      
          <div className="mb-4">
                <label htmlFor="uploadImages" className="block text-sm font-medium text-gray-700">Upload Images</label>
                <input type="file" id='images' name='images' className='mt-1 block w-full border border-1 p-2 rounded' multiple onChange={(event)=>{
                  setSelectedFiles(event.target.files);
                  setImages(event.target.files)
                  setFieldValue('images', Array.from(event.target.files) )
                }} />
                <ErrorMessage name="images" component="images" className="text-red-500 text-sm" />
              </div>
        </div>
        <div>
        <h3 className="text-2xl text-center py-12 font-bold mb-5">Select Amenities</h3>
        <div className="mb-4 grid grid-cols-4">
              {amenitiesList.map((amenity) => (
                <div key={amenity} className="flex items-center mb-2">
                  <Field
                    type="checkbox"
                    id={amenity}
                    name="amenities"
                    value={amenity}
                    className="mr-2"
                  />
                  <label htmlFor={amenity} className="text-gray-700">
                    {amenity}
                  </label>
                </div>
              ))}
            </div>
        </div>
        <ErrorMessage
              name="amenities"
              component="div"
              className="text-red-500 text-sm mb-4"
            />

              <div className='my-4'>
              <button type="submit" className="bg-[#104e3e] text-white py-2 px-4 rounded-md w-full" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>
              </div>
            </Form>
          )
        )

      }}
    </Formik>
    </div>
   </div>
  );
};

export default PropertyForm

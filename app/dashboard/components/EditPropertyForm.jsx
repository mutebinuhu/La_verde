"use client"
import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import MyProvider from '@/context/MyProvider';
import { MyContext } from '@/context';
import { TbFlagCancel } from 'react-icons/tb';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import SubmittingState from './SubmittingState';
import SubmittedState from './SubmittedState';
import { useMyContext } from '@/app/context/MyContext';

export const dynamic = 'force-dynamic'


const EditPropertyForm = ({data}) => {


  const [upComingDate, setUpComingDate] = useState(false)
  const [hideProjectForm, setHideProjectForm] = useState(false)
  const [locationList, setLocationList] = useState([])
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [showLocationComponent,setShowLocationComponent] = useState(false)
  const [payMtPlanState, setpayMtPlanState] = useState([])
  const [isLoading, setIsLoading] = useState(false)
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
    descriptionEnglish: '',
    descriptionArabic: '',
    images: [],
    amenities: [],
    //area:"",
    location:"",
    unitsLeft:"",
    startSellDate:"",
    noOfBedroomsStart:"",
    noOfBedroomsEnd:"",
    paymentPlan:"",
    lifeStyle:"",
    startingPrice:"",
    developerName:"",
    lat:"",
    lon:"",
    sqftFrom:"",
    sqftTo:"",
    sqMtFrom:"",
    sqMtTo:"",
    nearByPlaces:[],
    priceNotes:"",
    notes:[],
   noOfPayments:"",
   project:false,
   projectLocation:"",
   hondover:"",
   availability:"",
   status:"",
   upComingDate:""

  };
  const validationSchema = Yup.object().shape({
    category: Yup.string().required('Category is required').oneOf(['residential', 'commercial']),
    //subCategory: Yup.string().required('Subcategory is required').oneOf(['villa', 'studio', 'apartment', 'residentialFloor', 'residentialPlot', 'townHouse', 'residentialBuilding', 'pentHouse', 'villaCompound']),
    purpose: Yup.string().required('Purpose is required').oneOf(['sale', 'rent']),
    completionStatus: Yup.string().required('Completion status is required').oneOf(['offPlanPrimary', 'offPlanSecondly', 'readyPrimary', 'readySecondary']),
    title: Yup.string().required('Title is required'),
    //areaSquare: Yup.number().required('Area in square meters is required'),
    address: Yup.string().required('Address is required'),
    //price: Yup.number().required('Price is required'),
    //bedrooms: Yup.number().required('Number of bedrooms is required'),
    //bathrooms: Yup.number().required('Number of bathrooms is required'),
    descriptionEnglish: Yup.string().required('Description in English is required'),
    descriptionArabic: Yup.string().required('Description in Arabic is required'),
    status: Yup.string().required('Availability Status is required'),
    amenities: Yup.array().of(Yup.string()),
    //images: Yup.array().min(1, 'Please select at least one image').required('Images are required'),
  });
  const amenitiesList = [
    'Swimming Pool', 'Gym', 'Parking', 'Garden', 'Security', 'Playground',
    'Clubhouse', 'WiFi', 'Elevator', 'Power Backup', 'Air Conditioning',
    'Balcony', 'Pet Friendly', 'Laundry Room', 'Fireplace', 'Tennis Court',
    'Basketball Court', 'Sauna', 'Hot Tub', 'Spa', 'Conference Room',
    'Business Center', 'Concierge Service', 'Doorman', 'Storage Units',
    'Bicycle Storage', 'Roof Deck', 'BBQ Area', 'Library', 'Game Room',
    'Yoga Studio', 'Movie Theater', 'On-site Maintenance', 'Package Service',
    'Recycling Center', 'Green Building', 'Car Wash Area', 'Guest Suites',
    'Coffee Bar', 'Resident Lounge', 'Childcare', 'Community Kitchen', 'Dog Park',
    'Pet Washing Station', 'Electric Vehicle Charging Stations', 'Golf Simulator',
    'Jogging Path', 'Lake Access', 'Marina', 'Wine Cellar', 'Sea View', 'Mosque'
  ];
  const getLocations = async () =>{
    try {
      const res = await fetch(process.env.NEXT_PUBLIC_API_URL + 'api/locations')
      const data = await res.json();
      setLocationList(data.data)
      console.log("locations", data)
    } catch (error) {
      console.log("locerr", error)
    }
  }

  useEffect(()=>{
    getLocations();
  }, [])


const { showEditPropertyForm, setShowEditPropertyForm, singleProperty} = useMyContext();
  // Function to handle form submission
   const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    const uploadedImageURLs = [];
    setIsLoading(true)
    console.log("Values*****", values)
    try {
      const uploadPromises = Array.from(selectedFiles).map(file => {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset',"jtiqg5os");
  // Add the transformation for the logo overlay
   // Add the transformation for the logo overlay


 // formData.append('transformation', JSON.stringify(transformation));

        return axios.post(
          `https://api.cloudinary.com/v1_1/mutebinuhu/image/upload`,
          formData
        );
      });

      const responses = await Promise.all(uploadPromises);
      responses.forEach(response => {
        uploadedImageURLs.push(response.data.secure_url);
      });

      values.images = uploadedImageURLs;

      const res = await fetch(process.env.NEXT_PUBLIC_API_URL+"api/properties/"+singleProperty._id, {

        method:'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values)
      });

      const data = await res.json();
      console.log("UPDATED*****", data)
      if (data.success) {
       setFormSubmitted(true);
        setIsLoading(false)

        setTimeout(() => {
          setFormSubmitted(false);
          resetForm();
          setShowEditPropertyForm(false);
        }, 3000);
      }
    } catch (error) {
      console.error('Error:', error.message);
      setIsLoading(false)

    }

    setSubmitting(false);
   setIsLoading(false)

  };

console.log('singleProperty**********************************', singleProperty);
const getPropertInfo = (setFieldValue)=>{
 
    // Setting the 'email' field
    
     
 
  
}
if (showEditPropertyForm) getPropertInfo();

  return (
    <>
      {
      isLoading && <SubmittingState/>
      }
        {formSubmitted && (
       <SubmittedState/>
      )}
    {
      showEditPropertyForm && (
        <div className="max-w-4xl mx-auto p-8 bg-white shadow-md rounded" >
                  <div className='flex justify-between '>
                    <h2 className="text-2xl font-semibold mb-6">Edit Property</h2>
                    <IoIosCloseCircleOutline className='text-3xl' onClick={()=>setShowEditPropertyForm(false)} />
                  </div>
      <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      >

        
      {
      ({setFieldValue, errors,isSubmitting, values, touched})=>{

        console.log("touched==", values)
        if(touched.status && values.status == 'upComing'){
          setUpComingDate(true)
        }else{
          setUpComingDate(false)
        }
       useEffect(()=>{
        console.log("testing", singleProperty)
        setFieldValue('title', singleProperty.title);
        setFieldValue('address', singleProperty.address);
        setFieldValue('status', singleProperty.status);
        setFieldValue('location', singleProperty.location);
        setFieldValue('category', singleProperty.category);
        setFieldValue('subCategory', singleProperty.subCategory);
        setFieldValue('purpose', singleProperty.purpose);
        setFieldValue('completionStatus', singleProperty.completionStatus);
        setFieldValue('descriptionEnglish', singleProperty.descriptionEnglish);
        setFieldValue('descriptionArabic', singleProperty.descriptionArabic);
        setFieldValue('bedrooms', singleProperty.bedrooms);
        setFieldValue('bathrooms', singleProperty.bathrooms);
        setFieldValue('price', singleProperty.price);
        setFieldValue('areaSquare', singleProperty.areaSquare);
        setFieldValue('amenities', singleProperty.amenities);
        setFieldValue('upComingDate', singleProperty.upComingDate);
        setFieldValue('images', singleProperty.images);



       }, [setFieldValue]);

       return (
        <>
        <Form>
  <div className='flex justify-between space-x-4 '>
                <div className="mb-4 w-1/2">
                  <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
                  <Field type="text" name="title" className="mt-1 block w-full border  p-2 rounded" />
                  <ErrorMessage name="title" component="div" className="text-red-500 text-sm" />
                </div>
                <div className="mb-4 w-1/2">
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
                    <Field type="text" name="address" className="mt-1 block w-full border  p-2 rounded" />
                    <ErrorMessage name="address" component="div" className="text-red-500 text-sm" />
                  </div>
                  </div>
                  <div className="mb-4 w-full">
                    <label htmlFor="status" className="block text-sm font-medium text-gray-700">Status</label>
                    <Field as="select" name="status" className="mt-1 block w-full border p-2 rounded">
                      <option value="" label="Select status" />
                      <option value="vacant" label="vacant" />
                      <option value="upComing" label="Up Coming" />
                      <option value="occupied" label="Occupied" />
                    </Field>
                    <ErrorMessage name="status" component="div" className="text-red-500 text-sm" />
                  </div>
                 {upComingDate &&  <div className='my-4' >
              <label className="block text-sm font-medium text-red-700">Upcoming Date</label>
              <Field
                name="upComingDate"
                type="date"
                className="mt-1 block w-full border border-red-700 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
              />
            </div>}
                <div className='flex justify-between space-x-4'>
                  {
                    !hideProjectForm && <>
                     <div className="mb-4 w-1/2">
                    <label htmlFor="Area" className="block text-sm font-medium text-gray-700">Locations</label>
                    <Field as="select" name="location" id="area" className="mt-1 block w-full border p-2 rounded">
                    <option value="" label="Select Location" />
    
                      {locationList && locationList.map((loca)=>  <option value={loca.name} label={loca.name} />)}
                    </Field>
                    <ErrorMessage name="location" component="div" className="text-red-500 text-sm" />
                    <div className='my-4'>
                    <button type='button' onClick={()=>setShowLocationComponent(true)} className='bg-[#104e3e] text-white py-2 px-4 rounded hover:bg-blue-600'>Add Area</button>
    
                    </div>
                    
                  </div>
                    </>
                  }
               
                  <div className="mb-4 w-1/2  ">
                    <div className='flex h-full w-full items-center justify-center'>
                      <div>
                      <label className="block text-lg font-bold  text-gray-700 py-4">Is it a Project</label>
                      <Field type="checkbox" name="project"  className="mr-2" onClick={()=>setHideProjectForm(!hideProjectForm)} />
                      <ErrorMessage name="project" component="div" className="text-red-500 text-sm" />
                      </div>
                    </div>
                </div>
                </div>

                 {/** hidden fields */}
    
              
            {/* New form fields */}
            {hideProjectForm &&
            
            <>
             <div className='my-4'>
              <label className="block text-sm font-medium text-gray-700">Units Left</label>
              <Field
                name="unitsLeft"
                type="number"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
    
            <div className='my-4' >
              <label className="block text-sm font-medium text-gray-700">Start Sell Date</label>
              <Field
                name="startSellDate"
                type="date"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
              
            <div className='my-4'>
              <label className="block text-sm font-medium text-gray-700">No of Bedrooms Start</label>
              <Field
                name="noOfBedroomsStart"
                type="number"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
    
            <div className='my-4'>
              <label className="block text-sm font-medium text-gray-700">No of Bedrooms End</label>
              <Field
                name="noOfBedroomsEnd"
                type="number"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
           
            <div className='my-4'>
              <label className="block text-sm font-medium text-gray-700">Payment Plan</label>
              <Field
                name="paymentPlan"
                type="text"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
    
            <div className='my-4'>
              <label className="block text-sm font-medium text-gray-700">Life Style</label>
              <Field
                name="lifeStyle"
                type="text"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
    
            <div className='my-4'>
              <label className="block text-sm font-medium text-gray-700">Starting Price</label>
              <Field
                name="startingPrice"
                type="number"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
    
            <div className='my-4'>
              <label className="block text-sm font-medium text-gray-700">Developer Name</label>
              <Field
                name="developerName"
                type="text"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
    
            <div className='my-4'>
              <label className="block text-sm font-medium text-gray-700">Latitude</label>
              <Field
                name="lat"
                type="number"
                step="any"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
    
            <div className='my-4'>
              <label className="block text-sm font-medium text-gray-700">Longitude</label>
              <Field
                name="lon"
                type="number"
                step="any"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
    
            <div className='my-4'>
              <label className="block text-sm font-medium text-gray-700">Sqft From</label>
              <Field
                name="sqftFrom"
                type="number"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
    
            <div className='my-4'>
              <label className="block text-sm font-medium text-gray-700">Sqft To</label>
              <Field
                name="sqftTo"
                type="number"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
    
            <div className='my-4'>
              <label className="block text-sm font-medium text-gray-700">SqMt From</label>
              <Field
                name="sqMtFrom"
                type="number"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
    
            <div className='my-4'>
              <label className="block text-sm font-medium text-gray-700">SqMt To</label>
              <Field
                name="sqMtTo"
                type="number"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
    
            <div className='my-4'>
              <label className="block text-sm font-medium text-gray-700">Nearby Places</label>
              <Field
                name="nearByPlaces"
                type="text"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
    
            <div className='my-4'>
              <label className="block text-sm font-medium text-gray-700">Price Notes</label>
              <Field
                name="priceNotes"
                type="text"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
    
            <div className='my-4'>
              <label className="block text-sm font-medium text-gray-700">Notes</label>
              <Field
                name="notes"
                type="text"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
    
            <div className='my-4'>
              <label className="block text-sm font-medium text-gray-700">No of Payments</label>
              <Field
                name="noOfPayments"
                type="number"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className='my-4'>
              <label className="block text-sm font-medium text-gray-700">Project Location</label>
              <Field
                name="projectLocation"
                type="text"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
    
            <div className='my-4'>
              <label className="block text-sm font-medium text-gray-700">Handover</label>
              <Field
                name="handover"
                type="text"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            </>
            }
           
                {/** end hidden fields */}
                  
                <div className='flex justify-between space-x-4'>
                  <div className="mb-4 w-1/2">
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
                      <option value="project" label="Project" />

                    </Field>
                    <ErrorMessage name="subCategory" component="div" className="text-red-500 text-sm" />
                  </div>
                </div>
                <div className='flex justify-between space-x-4'>
                  <div className="mb-4 w-1/2">
                    <label htmlFor="purpose" className="block text-sm font-medium text-gray-700">Purpose</label>
                    <Field as="select" name="purpose" className="mt-1 block w-full border border-1 p-2 rounded">
                      <option value="" label="Select purpose" />
                      <option value="sale" label="Sale" />
                      <option value="rent" label="Rent" />
                    </Field>
                    <ErrorMessage name="purpose" component="div" className="text-red-500 text-sm" />
                  </div>
                  <div className="mb-4 w-1/2">
                    <label htmlFor="completionStatus" className="block text-sm font-medium text-gray-700">Completion Status</label>
                    <Field as="select" name="completionStatus" className="mt-1 block w-full border border-1 p-2 rounded">
                      <option value="" label="Select completion status" />
                      <option value="offPlanPrimary" label="Off Plan Primary" />
                      <option value="offPlanSecondly" label="Off Plan Secondary" />
                      <option value="readyPrimary" label="Ready Primary" />
                      <option value="readySecondary" label="Ready Secondary" />
                    </Field>
                    <ErrorMessage name="completionStatus" component="div" className="text-red-500 text-sm" />
                  </div>
                </div>
                {
                  !hideProjectForm && <>
                  
                  <div className='flex justify-between space-x-4'>
                  <div className="mb-4 w-1/2">
                    <label htmlFor="areaSquare" className="block text-sm font-medium text-gray-700">Area in Square feet</label>
                    <Field type="number" name="areaSquare" className="mt-1 block w-full border border-1 p-2 rounded" />
                    <ErrorMessage name="areaSquare" component="div" className="text-red-500 text-sm" />
                  </div>
                  <div className="mb-4 w-1/2">
                    <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price</label>
                    <Field type="number" name="price" className="mt-1 block w-full border border-1 p-2 rounded" />
                    <ErrorMessage name="price" component="div" className="text-red-500 text-sm" />
                  </div>
                </div>
                {
                  values.subCategory == "studio" ? "" :     <div className='flex justify-between space-x-4'>
                  <div className="mb-4 w-1/2">
                    <label htmlFor="bedrooms" className="block text-sm font-medium text-gray-700">Bedrooms</label>
                    <Field type="number" name="bedrooms" className="mt-1 block w-full border border-1 p-2 rounded" />
                    <ErrorMessage name="bedrooms" component="div" className="text-red-500 text-sm" />
                  </div>
                  <div className="mb-4 w-1/2">
                    <label htmlFor="bathrooms" className="block text-sm font-medium text-gray-700">Bathrooms</label>
                    <Field type="number" name="bathrooms" className="mt-1 block w-full border border-1 p-2 rounded" />
                    <ErrorMessage name="bathrooms" component="div" className="text-red-500 text-sm" />
                  </div>
                </div>
                }
            
                  </>
                }
                
                <div className='flex justify-between space-x-4'>
                  
                </div>
                <div className="mb-4">
                  <label htmlFor="descriptionEnglish" className="block text-sm font-medium text-gray-700">Description (English)</label>
                  <Field as="textarea" name="descriptionEnglish" rows="4" className="mt-1 block w-full border border-1 p-2 rounded" />
                  <ErrorMessage name="descriptionEnglish" component="div" className="text-red-500 text-sm" />
                </div>
                <div className="mb-4">
                  <label htmlFor="descriptionArabic" className="block text-sm font-medium text-gray-700">Description (Arabic)</label>
                  <Field as="textarea" name="descriptionArabic" rows="4" className="mt-1 block w-full border border-1 p-2 rounded" />
                  <ErrorMessage name="descriptionArabic" component="div" className="text-red-500 text-sm" />
                </div>
                <div className="mb-4">
                  <label htmlFor="images" className="block text-sm font-medium text-gray-700">Images</label>
                  <input type="file" multiple onChange={(event) => {
                    setSelectedFiles(event.target.files);
                    setFieldValue("images", event.target.files);
                  }} className="mt-1 block w-full border border-1 p-2 rounded" />
                  {errors.images && touched.images && (
                    <div className="text-red-500 text-sm">{errors.images}</div>
                  )}
                </div>
                
                <div className="mb-4">
                  <label className="block text-lg font-bold  text-gray-700 py-4">Amenities</label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {amenitiesList.map((amenity, index) => (
                      <label key={index} className="flex items-center">
                        <Field type="checkbox" name="amenities" value={amenity} className="mr-2" />
                        {amenity}
                      </label>
                    ))}
                  </div>
                  <ErrorMessage name="amenities" component="div" className="text-red-500 text-sm" />
                </div>
               
                <button type="submit" disabled={isSubmitting} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                  Submit
                </button>
                </Form>
        </>
       );
   
      }}
      </Formik>
      </div>
      )
    
    }
    </>
  );
 
};

export default EditPropertyForm;

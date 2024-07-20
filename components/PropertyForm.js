"use client";
import React, { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { TiTick } from "react-icons/ti";
import SubmittingState from './SubmittingState';
import SubmittedState from './SubmittedState';



const PropertyForm = () => {

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [showLocationComponent,setShowLocationComponent] = useState(false)
  const [locationList, setLocationList] = useState([])
  const [payMtPlanState, setpayMtPlanState] = useState([])
  const [hideProjectForm, setHideProjectForm] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const clearField = (fieldName) => {
    
  };

  const handlePaymentPlan = (data)=>{
    //e.preventDefault()
    setpayMtPlanState([...payMtPlanState, data])
    console.log("test====", payMtPlanState);
  }

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
  const AddLocation = ({handleCancel}) => {
    const [location, setLocation] = useState('');
    const handleSubmit = async (e) =>{
      e.preventDefault();
      try {
        const res = await fetch(process.env.NEXT_PUBLIC_API_URL + 'api/locations', {
          method:"POST",
          headers:{
            'Content-Type':'application/json'
          },
          body:JSON.stringify({
            name:location
          })
        });
        const data = await res.json();
        if(data.success){
          alert("Location Added")
          getLocations();
        }
        console.log("res", data)
      } catch (error) {
        console.log("err", error)
      }
    }
  
    return  (
         <>
          <div className='flex justify-center  items-center mx-4'>
          <form onSubmit={handleSubmit} className="p-4 bg-gray-300 shadow-md w-full rounded-md">
        <div className="text-center">
        <input
            type="text"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="p-2 border text rounded-md"
          />
          </div>
          <div className='py-4'>
          <button type="submit"  className="bg-blue-500 mx-2 text-white py-2 px-4 rounded hover:bg-blue-600">
                Submit
              </button>
              <button onClick={handleCancel}  className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600">
                cancel
              </button>
          </div>
          </form>
          </div>
         </>
    )
  }
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
   status:""

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

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    const uploadedImageURLs = [];
    setIsLoading(true)
    try {
      // Upload images concurrently
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

      const res = await fetch(process.env.NEXT_PUBLIC_API_URL+"api/properties", {

        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values)
      });

      const data = await res.json();
      if (data.success) {
        setFormSubmitted(true);
        setIsLoading(false)

        setTimeout(() => {
          setFormSubmitted(false);
          resetForm();
        }, 3000);
      }
    } catch (error) {
      console.error('Error:', error.message);
      setIsLoading(false)

    }

    setSubmitting(false);
    setIsLoading(false)

  };

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
  
  return (
    <div className='my-12 relative'>
      {
      isLoading && <SubmittingState/>
      }
      <h2 className='py-2 px-8 text-3xl font-bold md:text-center'>Add Property</h2>
      {formSubmitted && (
       <SubmittedState/>
      )}
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue, values, isSubmitting, touched, errors }) => {

          console.log("touched==", values)
          return (
            
              <Form className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-md">
                 <div className='flex justify-between space-x-4'>
                <div className="mb-4 w-1/2">
                  <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
                  <Field type="text" name="title" className="mt-1 block w-full border border-1 p-2 rounded" />
                  <ErrorMessage name="title" component="div" className="text-red-500 text-sm" />
                </div>
                <div className="mb-4 w-1/2">
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
                    <Field type="text" name="address" className="mt-1 block w-full border border-1 p-2 rounded" />
                    <ErrorMessage name="address" component="div" className="text-red-500 text-sm" />
                  </div>
                  </div>
                  <div className="mb-4 w-full">
                    <label htmlFor="status" className="block text-sm font-medium text-gray-700">Status</label>
                    <Field as="select" name="status" className="mt-1 block w-full border border-1 p-2 rounded">
                      <option value="" label="Select status" />
                      <option value="vacant" label="vacant" />
                      <option value="notVacant" label="Not Vacant" />

                    </Field>
                    <ErrorMessage name="status" component="div" className="text-red-500 text-sm" />
                  </div>
                <div className='flex justify-between space-x-4'>
                  {
                    !hideProjectForm && <>
                     <div className="mb-4 w-1/2">
                    <label htmlFor="Area" className="block text-sm font-medium text-gray-700">Locations</label>
                    <Field as="select" name="location" id="area" className="mt-1 block w-full border border-1 p-2 rounded">
                    <option value="" label="Select Location" />
    
                      {locationList && locationList.map((loca)=>  <option value={loca.name} label={loca.name} />)}
                    </Field>
                    <ErrorMessage name="location" component="div" className="text-red-500 text-sm" />
                    <div className='my-4'>
                    <button type='button' onClick={()=>setShowLocationComponent(true)} className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600'>Add Area</button>
    
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
                <div className='flex justify-between space-x-4'>
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
          )
        }
        }
      </Formik>
{
  showLocationComponent && <div className='absolute top-0 text-center h-96'><AddLocation handleCancel={()=>setShowLocationComponent(false)}/></div>
}
      
    </div>
  );
};

export default PropertyForm;

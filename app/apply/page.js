"use client"
import React, { useRef } from 'react';
import Loader from '@/components/Loader';
import Navbar from '@/components/Navbar';
import { useState } from 'react';

export default function Home() {
  const formRef = useRef(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    cv: null,
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'cv') {
      setFormData((prevState) => ({
        ...prevState,
        cv: files[0],
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true)

    const form = new FormData();
    form.append('name', formData.name);
    form.append('email', formData.email);
    form.append('phone', formData.phone);
    form.append('position', formData.position);
    form.append('cv', formData.cv);
    console.log("form", form)
    console.log("form data", formData)

    try {
      const response = await fetch(process.env.NEXT_PUBLIC_API_URL+'/api/applications', {
        method:"POST",
        body:form
      });

      if (response.ok) {
        alert('Form submitted successfully!');
      } else {
        alert('Failed to submit the form.');
      }
    } catch (error) {
      
      console.error('Error submitting the form', error);
      setIsLoading(false)

    }finally{
      setIsLoading(false)

    }
    setIsLoading(false)
    setFormData({
      name: '',
      email: '',
      phone: '',
      position: '',
      cv: null,
    })

    formRef.current.reset();

  };

  return (
    <>
      <div className='bg-[#104E3E]'>
        <Navbar/>
      </div>
      <div className="flex justify-center items-center h-screen">
        <form ref={formRef}  onSubmit={handleSubmit} className="w-full max-w-md bg-white p-8 rounded shadow-lg">
          {isLoading && 
          
            <div className='text-center'>
             <p>Submitting...</p>
            </div>
          }
          <h2 className="text-2xl font-bold mb-6 text-center">Application Form</h2>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-3 py-2 border rounded-lg"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-3 py-2 border rounded-lg"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="w-full px-3 py-2 border rounded-lg"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="position">
              Position Applied For
            </label>
            <input
              type="text"
              id="position"
              name="position"
              className="w-full px-3 py-2 border rounded-lg"
              value={formData.position}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cv">
              Upload CV (PDF)
            </label>
            <input
              type="file"
              id="cv"
              name="cv"
              accept=".pdf"
              className="w-full"
              onChange={handleChange}
              required
            />
            <p className='text-red-500 font-bold py-4'>Please make sure the file size is not morethan 8mbs and should be in a pdf format</p>
          </div>

          <button
            type="submit"
            className="w-full bg-[#104E3E] text-white py-2 px-4 rounded hover:bg-[#2ba385]"
          >
            Submit Application
          </button>
        </form>
      </div>
    </>
  );
}

"use client";
import { useMyContext } from '@/app/context/MyContext';
import React, { useState } from 'react';
import { IoIosCloseCircleOutline } from 'react-icons/io';
export const dynamic = 'force-dynamic';

const LeadForm = () => {
  // Array of agents' full names
  const { showLeadForm, setShowLeadForm } = useMyContext();

  const agents = [
    "Joseph ",
    "Samir",
    "Amir",
    "Abelrahman"
  ];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    source: 'Other',
    propertyInterestedIn: '',
    budget: '',
    timeline: 'Immediate',
    comments: '',
    agent: agents[0] // Default to the first agent
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle the form submission, e.g., POST request to your API
    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        alert('Lead submitted successfully!');
        setFormData({
          name: '',
          email: '',
          phone: '',
          source: '',
          propertyInterestedIn: '',
          budget: '',
          timeline: '',
          comments: '',
          agent: "" // Default to the first agent
        });
      } else {
        alert('Failed to submit lead.');
      }
    } catch (error) {
      console.error('Error submitting lead:', error);
    }
  };

  return (
    <>
    {
       showLeadForm &&
       <>
        <form onSubmit={handleSubmit} className=" p-6 bg-white shadow-md rounded-lg">
     <div className='flex justify-between'>
     <h2 className="text-2xl font-semibold mb-4">Lead Form</h2>
     <p> <IoIosCloseCircleOutline className='text-3xl' onClick={()=>setShowLeadForm(false)} /></p>
     </div>
      
      {/* Name Field */}
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Lead Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>

      {/* Email Field */}
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Lead Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>

      {/* Phone Field */}
      <div className="mb-4">
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>

      {/* Source Field */}
      <div className="mb-4">
        <label htmlFor="source" className="block text-sm font-medium text-gray-700">Lead Source</label>
        <select
          name="source"
          value={formData.source}
          onChange={handleChange}
          required
          className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
        >
          <option value="Facebook">Facebook</option>
          <option value="Google">Google</option>
          <option value="Referral">Referral</option>
          <option value="Website">Website</option>
          <option value="Other">Other</option>
        </select>
      </div>

      {/* Property Interested In Field */}
      <div className="mb-4">
        <label htmlFor="propertyInterestedIn" className="block text-sm font-medium text-gray-700">Property Interested In</label>
        <input
          type="text"
          name="propertyInterestedIn"
          value={formData.propertyInterestedIn}
          onChange={handleChange}
          required
          className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>

      {/* Budget Field */}
      <div className="mb-4">
        <label htmlFor="budget" className="block text-sm font-medium text-gray-700">Max Budget</label>
        <input
          type="number"
          name="budget"
          value={formData.budget}
          onChange={handleChange}
          required
          className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>

      {/* Timeline Field */}
      <div className="mb-4">
        <label htmlFor="timeline" className="block text-sm font-medium text-gray-700">Timeline</label>
        <select
          name="timeline"
          value={formData.timeline}
          onChange={handleChange}
          className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
        >
          <option value="Immediate">Immediate</option>
          <option value="1-3 months">1-3 months</option>
          <option value="3-6 months">3-6 months</option>
          <option value="6+ months">6+ months</option>
        </select>
      </div>

      {/* Comments Field */}
      <div className="mb-4">
        <label htmlFor="comments" className="block text-sm font-medium text-gray-700">Comments</label>
        <textarea
          name="comments"
          value={formData.comments}
          onChange={handleChange}
          className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>

      {/* Agent Field */}
      <div className="mb-4">
        <label htmlFor="agent" className="block text-sm font-medium text-gray-700">Agent</label>
        <select
          name="agent"
          value={formData.agent}
          onChange={handleChange}
          required
          className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
        >
          {agents.map((agent, index) => (
            <option key={index} value={agent}>
              {agent}
            </option>
          ))}
        </select>
      </div>

      <button
        type="submit"
        className="w-full bg-[#104E3E] text-white p-2 rounded-md shadow-md hover:bg-[#4d5e5a] focus:outline-none focus:ring-2 focus:hover:bg-[#c7cbcb]"
      >
        Submit Lead
      </button>
    </form>
       </>
    }
   
    </>
  );
};

export default LeadForm;

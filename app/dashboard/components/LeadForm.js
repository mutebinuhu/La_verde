"use client"
import React, { useState } from 'react';
export const dynamic = 'force-dynamic'

const LeadForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    source: 'Other',
    propertyInterestedIn: '',
    budget: '',
    timeline: 'Immediate',
    comments: ''
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
      } else {
        alert('Failed to submit lead.');
      }
    } catch (error) {
      console.error('Error submitting lead:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Lead Form</h2>
      
      {/* Name Field */}
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
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
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
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
        <label htmlFor="source" className="block text-sm font-medium text-gray-700">Source</label>
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
        <label htmlFor="budget" className="block text-sm font-medium text-gray-700">Budget</label>
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

      <button
        type="submit"
        className="w-full bg-indigo-600 text-white p-2 rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        Submit Lead
      </button>
    </form>
  );
};

export default LeadForm;

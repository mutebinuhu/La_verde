"use client";
import React from 'react';

const LeadDetails = ({ lead }) => {
    //const { leads, loading, error, setShowLeadForm,leadsDetails, setLeadsDetails } = useMyContext(); // Destructure context values

  if (!lead) {
    return <p className="text-gray-600">No lead details available.</p>;
  }

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Lead Details</h2>

      {/* Name */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Name:</label>
        <p className="mt-1 p-2 block w-full border border-gray-300 rounded-md">{lead.name}</p>
      </div>

      {/* Email */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Email:</label>
        <p className="mt-1 p-2 block w-full border border-gray-300 rounded-md">{lead.email}</p>
      </div>

      {/* Phone */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Phone:</label>
        <p className="mt-1 p-2 block w-full border border-gray-300 rounded-md">{lead.phone}</p>
      </div>

      {/* Source */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Source:</label>
        <p className="mt-1 p-2 block w-full border border-gray-300 rounded-md">{lead.source}</p>
      </div>

      {/* Property Interested In */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Property Interested In:</label>
        <p className="mt-1 p-2 block w-full border border-gray-300 rounded-md">{lead.propertyInterestedIn}</p>
      </div>

      {/* Budget */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Budget:</label>
        <p className="mt-1 p-2 block w-full border border-gray-300 rounded-md">{lead.budget}</p>
      </div>

      {/* Timeline */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Timeline:</label>
        <p className="mt-1 p-2 block w-full border border-gray-300 rounded-md">{lead.timeline}</p>
      </div>

      {/* Comments */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Comments:</label>
        <p className="mt-1 p-2 block w-full border border-gray-300 rounded-md">{lead.comments || 'N/A'}</p>
      </div>

      {/* Agent */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Agent:</label>
        <p className="mt-1 p-2 block w-full border border-gray-300 rounded-md">{lead.agent}</p>
      </div>
    </div>
  );
};

export default LeadDetails;

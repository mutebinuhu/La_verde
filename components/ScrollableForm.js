import React from 'react';

const ScrollableForm = () => {
  return (
    <div className="flex overflow-x-auto space-x-4 p-4 border border-gray-300 rounded-md">
      <div className="min-w-[200px]">
        <label className="block text-sm font-medium text-gray-700">First Name</label>
        <input type="text" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md" />
      </div>
      <div className="min-w-[200px]">
        <label className="block text-sm font-medium text-gray-700">Last Name</label>
        <input type="text" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md" />
      </div>
      <div className="min-w-[200px]">
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input type="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md" />
      </div>
      <div className="min-w-[200px]">
        <label className="block text-sm font-medium text-gray-700">Phone</label>
        <input type="tel" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md" />
      </div>
      {/* Add more form fields as needed */}
    </div>
  );
}

export default ScrollableForm;

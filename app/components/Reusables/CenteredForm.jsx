import React from 'react';

const CenteredForm = () => {
  return (
    <div className="relative z-10 flex items-center justify-center min-h-screen">
      <form className="bg-white p-8 rounded shadow-lg w-96">
        <h2 className="text-2xl mb-4">Contact Us</h2>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-bold text-gray-700">Name</label>
          <input
            type="text"
            className="w-full px-3 py-2 border rounded"
            placeholder="Your Name"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-bold text-gray-700">Email</label>
          <input
            type="email"
            className="w-full px-3 py-2 border rounded"
            placeholder="Your Email"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-bold text-gray-700">Message</label>
          <textarea
            className="w-full px-3 py-2 border rounded"
            placeholder="Your Message"
          ></textarea>
        </div>
        <button className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
          Send
        </button>
      </form>
    </div>
  );
};

export default CenteredForm;

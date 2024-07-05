"use client";
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

export default function Subscribe() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Fetch query parameters using useSearchParams
  const router = useSearchParams();
  const { name: queryName, email: queryEmail, message: queryMessage } = router;

  // Update form data when query parameters change
  useEffect(() => {
    if (queryName || queryEmail || queryMessage) {
      setFormData({
        name: queryName || '',
        email: queryEmail || '',
        message: queryMessage || '',
      });
    }
  }, [queryName, queryEmail, queryMessage]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert('Subscription successful!');
        setFormData({
            name:'',
            email: '',
            message: '',
          });
      } else {
        alert('Subscription failed.');
      }
    } catch (error) {
      console.error('Error:', error);
      setFormData({
        name:'',
        email: '',
        message: '',
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4">Subscribe</h1>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name ? formData.name : queryName}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mt-1"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mt-1"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mt-1"
            required
          />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Subscribe</button>
      </form>
    </div>
  );
}

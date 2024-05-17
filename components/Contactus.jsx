"use client"
import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required('Name is required'),
  phoneNumber: Yup.string()
    .matches(/^[0-9]+$/, 'Phone number must contain only digits')
    .min(10, 'Phone number must be at least 10 digits')
    .required('Phone number is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
});

const ContactForm = () => {
  const [success, setSuccess] = useState();
  const handleSubmit = async(values, { setSubmitting, resetForm }) => {
    console.log("----", values)
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    });
    const result = await response.json();
    console.log("res", result);
    if (result.success) {
      setSuccess(true);
    resetForm();

    } else {
      setSuccess(false);

    }
  };

  return (
    <div className="max-w-md mx-8 md:mx-auto py-16 ">
      <h2 className="text-xl font-bold mb-4">Get a Call Back from us!</h2>
      <p className='py-4'>Enter your details below for instant call back from our team!</p>
      {success && <p className='py-4 px-4 bg-[#104e3e] text-white my-2 rounded'>Message sent </p>}
      <Formik
        initialValues={{ name: '', phoneNumber: '', email: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <Field
                type="text"
                id="name"
                name="name"
                className="mt-1 p-2 block w-full border-gray-300 border-1 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
              <ErrorMessage name="name" component="div" className="text-red-500 text-sm mt-1" />
            </div>
            <div>
              <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">Phone Number</label>
              <Field
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                className="mt-1 p-2 block w-full border-gray-300 border-1 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
              <ErrorMessage name="phoneNumber" component="div" className="text-red-500 text-sm mt-1" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <Field
                type="email"
                id="email"
                name="email"
                className="mt-1 p-2 block w-full border-gray-300 border-1 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
              <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
            </div>
            <div>
              <label htmlFor="textArea" className="block text-sm font-medium text-gray-700">Message</label>
              <Field
              as="textarea"
                type="text"
                id="textArea"
                name="message"
                className="mt-1 p-2 block w-full border-gray-300 border-1 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
              <ErrorMessage name="textArea" component="div" className="text-red-500 text-sm mt-1" />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-[#104e3e] -z-10 hover:bg-[#104e3e] text-white font-bold p-4 rounded w-full"
            >
              {isSubmitting ? 'Submitting...' : 'Get A Callback'}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;

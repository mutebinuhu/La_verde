"use client"
// components/LeadForm.js
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button } from '@nextui-org/button';

const LeadForm = () => {
  const handleSubmit = (values, { resetForm }) => {
    // Here you can handle form submission, for example, sending data to a server
    console.log(values);
    resetForm();
  };

  const validateForm = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = 'Name is required';
    }
    if (!values.email) {
      errors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }
    return errors;
  };

  return (
    <div className="bg-white  shadow-md overflow-hidden">
      <div className="p-6">
        <h2 className="text-2xl font-semibold mb-4">Contact us for Availability</h2>
        <Formik initialValues={{ name: '', email: '', message: '' }} onSubmit={handleSubmit} validate={validateForm}>
          {({ isSubmitting }) => (
            <Form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                  Name
                </label>
                <Field type="text" name="name" id="name" className="form-input w-full border p-2" />
                <ErrorMessage name="name" component="p" className="text-red-500 mt-1" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                  Email
                </label>
                <Field type="email" name="email" id="email" className="form-input w-full  border p-2" />
                <ErrorMessage name="email" component="p" className="text-red-500 mt-1" />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                  Message
                </label>
                <Field as="textarea" name="message" id="message" rows="4" className="form-textarea  border p-2 w-full" />
              </div>
              <Button  disabled={isSubmitting} type="submit" className="bg-[#104e3e] hover:bg-[#104e3e]  font-bold p-8 rounded w-full " color="primary">
              {isSubmitting ? 'Submitting...' : 'Submit'}
            
                </Button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default LeadForm;

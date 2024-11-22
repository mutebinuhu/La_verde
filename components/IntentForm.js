"use client"
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { databases } from "@/utils/appwrite";

const IntentForm = () => {
  const initialValues = {
    name: "",
    email: "",
    phone: "",
    purpose: "buy",
    location: "",
    propertyType: "",
    budget: "",
    moveInDate: "",
    additionalInfo: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email address").required("Email is required"),
    phone: Yup.string()
      .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
      .required("Phone number is required"),
    location: Yup.string().required("Preferred location is required"),
    propertyType: Yup.string().required("Property type is required"),
    budget: Yup.number()
      .typeError("Budget must be a number")
      .required("Budget is required"),
    moveInDate: Yup.date().required("Move-in date is required"),
  });

  const handleSubmit = async (values, { resetForm }) => {
try {
    //alert(JSON.stringify(values, null, 2)); // Replace with your form submission logic
    const db = await databases.createDocument(
        '67320477003091afb449',
        '673dc75e002b85a5aad7',
        'unique()',
        {
            name: values.name,
            email: values.email,
            phone: values.phone,
            purpose: values.purpose,
            location: values.location,
            type: values.propertyType,
            max_budget: values.budget,
            move_in_date: values.moveInDate,
            additional_info:values.additionalInfo
        })
    resetForm();
} catch (error) {
    console.log("errr>>>>>",error);
}

  };

  return (
    <div className=" p-6 rounded-lg shadow-lg max-w-2xl mx-auto mt-8" id="intent" >
      <h2 className="text-2xl font-bold text-center mb-4 text-gray-800">
      🏠 Looking for Your Dream Home?
      </h2>
      <p className="py-4 font-regular">
      Don’t wait—rental opportunities are disappearing fast! Fill out our form now and let us find the perfect property for you. 📋 Your new home is just a step away!
      </p>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
    
      >
        {({ isSubmitting }) => (
          <Form className="space-y-4 rounded-lg border p-4">
            <div className="flex space-x-4">
                {/* Name */}
            <div className="w-1/2">
              <label htmlFor="name" className="block font-medium text-gray-700">
                Name
              </label>
              <Field
                type="text"
                name="name"
                id="name"
                className="w-full mt-1 p-2 border rounded-md focus:ring focus:ring-blue-300"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            {/* Email */}
            <div className="w-1/2">
              <label htmlFor="email" className="block font-medium text-gray-700">
                Email
              </label>
              <Field
                type="email"
                name="email"
                id="email"
                className="w-full mt-1 p-2 border rounded-md focus:ring focus:ring-blue-300"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
            </div>

            <div className="flex space-x-4">
                {/* Phone */}
            <div className="w-1/2">
              <label htmlFor="phone" className="block font-medium text-gray-700">
                Phone
              </label>
              <Field
                type="text"
                name="phone"
                id="phone"
                className="w-full mt-1 p-2 border rounded-md focus:ring focus:ring-blue-300"
              />
              <ErrorMessage
                name="phone"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            {/* Purpose */}
            <div className="w-1/2">
              <label htmlFor="purpose" className="block font-medium text-gray-700">
                Purpose
              </label>
              <Field
                as="select"
                name="purpose"
                id="purpose"
                className="w-full mt-1 p-2 border rounded-md focus:ring focus:ring-blue-300"
              >
                <option value="buy">Buy</option>
                <option value="rent">Rent</option>
              </Field>
            </div>
            </div>

            <div className="flex space-x-4">
                 {/* Location */}
            <div className="w-full">
              <label htmlFor="location" className="block font-medium text-gray-700">
                Preferred Location
              </label>
              <Field
                type="text"
                name="location"
                id="location"
                className="w-full mt-1 p-2 border rounded-md focus:ring focus:ring-blue-300"
              />
              <ErrorMessage
                name="location"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            {/* Property Type */}
            <div className="w-full">
              <label htmlFor="propertyType" className="block font-medium text-gray-700">
                Property Type
              </label>
              <Field
                as="select"
                name="propertyType"
                id="propertyType"
                className="w-full mt-1 p-2 border rounded-md focus:ring focus:ring-blue-300"
              >
                <option value="">Select Type</option>
                <option value="apartment">Apartment</option>
                <option value="villa">Villa</option>
                <option value="office">Office</option>
              </Field>
              <ErrorMessage
                name="propertyType"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
            </div>

            <div className="flex space-x-4">
                 {/* Budget */}
            <div className="w-1/2">
              <label htmlFor="budget" className="block font-medium text-gray-700">
                Max Budget (AED)
              </label>
              <Field
                type="number"
                name="budget"
                id="budget"
                className="w-full mt-1 p-2 border rounded-md focus:ring focus:ring-blue-300"
              />
              <ErrorMessage
                name="budget"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            {/* Move-in Date */}
            <div className="w-1/2">
              <label htmlFor="moveInDate" className="block font-medium text-gray-700">
                Move-in Date
              </label>
              <Field
                type="date"
                name="moveInDate"
                id="moveInDate"
                className="w-full mt-1 p-2 border rounded-md focus:ring focus:ring-blue-300"
              />
              <ErrorMessage
                name="moveInDate"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
            </div>

            {/* Additional Info */}
            <div>
              <label
                htmlFor="additionalInfo"
                className="block font-medium text-gray-700"
              >
                Additional Information
              </label>
              <Field
                as="textarea"
                name="additionalInfo"
                id="additionalInfo"
                rows="3"
                className="w-full mt-1 p-2 border rounded-md focus:ring focus:ring-blue-300"
              />
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full font-bold py-2 px-4 bg-[#FFA72A] hover:bg-[rgb(194,140,66)] text-white rounded-md  transition"
              >
                Submit Inquiry
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default IntentForm;

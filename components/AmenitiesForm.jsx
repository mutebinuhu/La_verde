import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';


const validationSchema = Yup.object().shape({
  amenities: Yup.array().min(1, 'At least one amenity must be selected').required('Required')
});

const AmenitiesForm = () => {
  return (
    <div className=" mt-10 bg-gray-100">
      <h1 className="text-2xl text-center py-12 font-bold mb-5">Select Amenities</h1>
      <Formik
        initialValues={{ amenities: [] }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          console.log('Form Submitted:', values);
          resetForm();
        }}
      >
        {({ isSubmitting }) => (
          <Form className='px-4'>
      
            <ErrorMessage
              name="amenities"
              component="div"
              className="text-red-500 text-sm mb-4"
            />
           
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AmenitiesForm;

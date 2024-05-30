import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  images: Yup.array()
    .min(1, 'Please select at least one image')
    .required('Images are required'),
});

const FileUploadForm = () => {
  const [previews, setPreviews] = useState([]);

  const handleFileChange = (event, setFieldValue) => {
    const files = Array.from(event.currentTarget.files);
    setFieldValue('images', files);

    const filePreviews = files.map(file => URL.createObjectURL(file));
    setPreviews(filePreviews);
  };

  return (
    <Formik
      initialValues={{ images: [] }}
      validationSchema={validationSchema}
      onSubmit={values => {
        // Handle form submission
        console.log(values.images);
      }}
    >
      {({ setFieldValue, errors, touched }) => (
   <>
          <div>
            <label htmlFor="images">Upload Images</label>
            <input
              id="images"
              name="images"
              type="file"
              multiple
              onChange={event => handleFileChange(event, setFieldValue)}
            />
            {errors.images && touched.images ? (
              <div>{errors.images}</div>
            ) : null}
          </div>
          
          <div>
            {previews.map((src, index) => (
              <img key={index} src={src} alt={`preview ${index}`} width="100" />
            ))}
          </div>

</>
      )}
    </Formik>
  );
};

export default FileUploadForm;

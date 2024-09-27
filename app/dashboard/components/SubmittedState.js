import React from 'react';

const SubmittedState = () => {
  return (
    <div className="fixed inset-0 bg-green-800 bg-opacity-75 flex items-center justify-center z-50">
      <div className="text-center">
        <svg className="h-10 w-10 text-white mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2l4 -4" />
        </svg>
        <p className="text-white text-lg">Form submitted successfully!</p>
      </div>
    </div>
  );
};

export default SubmittedState;

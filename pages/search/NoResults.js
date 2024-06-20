import React from 'react';

const NoResults = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="text-center">
        <svg
          className="mx-auto h-12 w-12 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 14l2-2 4 4m0 0l2-2m-2 2V7"
          ></path>
        </svg>
        <h3 className="mt-2 text-sm font-medium text-gray-900">No Results Found</h3>
        <p className="mt-1 text-sm text-gray-500">Try adjusting your search or filter to find what you're looking for.</p>
      </div>
    </div>
  );
};

export default NoResults;

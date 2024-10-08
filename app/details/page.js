import React from 'react';

const PropertyDetailsPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto bg-white shadow-lg rounded-lg p-4">
        {/* Header Section */}
        <div className="flex items-center justify-between mb-6">
          <div className="text-2xl font-bold">Qoom Realty</div>
          <div className="flex items-center">
            <img
              src="https://via.placeholder.com/50"
              alt="User Profile"
              className="rounded-full w-10 h-10"
            />
            <span className="ml-2 font-semibold">Johnson</span>
          </div>
        </div>

        {/* Main Content Section */}
        <div className="grid grid-cols-3 gap-6">
          {/* Property Image and Info */}
          <div className="col-span-2">
            <img
              src="https://via.placeholder.com/800x400"
              alt="Property"
              className="w-full h-80 object-cover rounded-lg"
            />

            {/* Property Details */}
            <div className="mt-4">
              <h1 className="text-3xl font-bold">$125,650</h1>
              <p className="text-gray-600">2464 Royal Ln, Mesa, New Jersey</p>
              <div className="flex space-x-4 my-2 text-gray-500">
                <span>4 Bed</span>
                <span>4 Baths</span>
                <span>2 Parking</span>
                <span>1254 Sq Ft</span>
              </div>
            </div>

            {/* Property Information */}
            <div className="mt-4">
              <h2 className="text-lg font-semibold">Property Information</h2>
              <p className="text-gray-600">
                Charming lakefront cottage located right on the shoreline of Lake Bellaire! Share 150
                ft of sandy frontage on the west side with six other cottages. Moor your boat right
                in front of your cottage, with or without a hoist. Freshly painted exterior, brand
                new split unit A/C with heat, brand new Amana range.
              </p>
            </div>

            {/* Market Trends */}
            <div className="mt-4">
              <h2 className="text-lg font-semibold">Market Trends</h2>
              <div className="bg-gray-100 p-4 rounded-lg">
                <p>Charming lakefront cottage located right on the shoreline</p>
                <div className="mt-2">
                  <span className="text-lg font-semibold">Studio rentals</span>: $1,280/mo
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar - Agent & Inspection Details */}
          <div className="col-span-1 space-y-4">
            {/* Agent Details */}
            <div className="p-4 border rounded-lg shadow-md">
              <h3 className="font-semibold">Agent Details</h3>
              <p>Mellisa Monroe</p>
              <p>2464 Royal Ln, Mesa, New Jersey</p>
              <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg">
                Contact Agent
              </button>
            </div>

            {/* Inspection Times */}
            <div className="p-4 border rounded-lg shadow-md">
              <h3 className="font-semibold">Inspection Times</h3>
              <p>Inspections are still happening</p>
              <p>Wednesday, 30 Aug - 10:30 am</p>
              <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg">
                Add to Calendar
              </button>
            </div>

            {/* Map */}
            <div className="w-full h-48 bg-gray-200 rounded-lg"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetailsPage;

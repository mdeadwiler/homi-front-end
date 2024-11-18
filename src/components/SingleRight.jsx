import React from 'react';
import { Amenities } from './Amenities';
import { ListingDescription } from './ListingDescription';

export const SingleRight = ({ property }) => {
  return (
    <div className="flex flex-col bg-gray-50 p-6 rounded-lg shadow-lg w-full md:w-full h-full justify-between">
      
      {/* Map Section Placeholder */}
      <div className="relative bg-green-200 h-48 rounded-lg flex items-center justify-center border-2 border-blue-300 mb-8">
        <p className="text-gray-600">Map Placeholder</p>
      </div>
      
      {/* Bottom Section: Amenities on the Bottom Left, ListingDescription on the Bottom Right */}
      <div className="flex justify-between items-end w-full space-x-8">
        
        {/* Left Side: Amenities */}
        <div className="w-1/2">
          <Amenities />
        </div>

        {/* Right Side: Listing Description */}
        <div className="w-1/2 text-right">
          <ListingDescription property={property} />
        </div>
      </div>
    </div>
  );
};



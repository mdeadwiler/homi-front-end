import React from "react";
import { Amenities } from "./Amenities";
import { ListingDescription } from "./ListingDescription";

export const SingleRight = ({ property }) => {
  return (
    <div className="flex flex-col bg-white rounded-lg shadow-lg p-6 space-y-8 w-full">
      {/* I just needed this here to get a full layout of my component. Polina's mao will replace this*/}
      <div className="relative bg-green-200 h-48 rounded-lg flex items-center justify-center border-2 border-blue-300 mb-8">
        <p className="text-gray-600">Map Placeholder</p>
      </div>

      
      
      
      
      {/* This shows the bottom for  Amenities on Left, ListingDescription on the Right */}
      <div className="flex-1 columns-2 md:columns-2 bg-white p-4 rounded-lg shadow border border-teal-500">
        <div className="flex-1 bg-white p-4 rounded-lg">
        
          {/* Left Side: Amenities */}
        
        
        
        <Amenities />

        {/* Right Side: Listing Description */}
        <div className="flex-1 bg-white p-4 rounded-lg shadow border border-teal-500">
        <ListingDescription property={property} />
        </div>
      </div>
    </div>
   </div>
  );
};

import React from "react";
import { FivePicture } from "./FivePicture";
import { MiniListingForm } from "./MiniListingForm";
import { Calendar } from "./Calendar";

export const SingleLeft = () => {
  return (
    <div className="flex flex-col bg-white rounded-lg shadow-lg p-6 space-y-8 w-full">
      {/* FivePicture Section */}
      <div className="p-4 bg-gray-50 rounded-lg shadow">
        <FivePicture />
      </div>





      {/* This shows the the calendar and the listing reserve from from left to right */}
      <div className="flex-1 columns-2 md:columns-2 bg-white p-4 rounded-lg shadow border border-teal-500">
        <div className="flex-1 bg-white p-4 rounded-lg">
        <Calendar />
          </div>

        <div className="flex-1 bg-white p-4 rounded-lg shadow border border-teal-500">
          <MiniListingForm />
        </div>
      </div>
    </div>
  );
};

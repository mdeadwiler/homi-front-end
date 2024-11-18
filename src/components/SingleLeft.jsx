import React from "react";
import { FivePicture } from "./FivePicture";
import { MiniListingForm } from "./MiniListingForm";
import { Calendar } from "./Calendar";

export const SingleLeft = () => {
  return (
    <div className="flex flex-col p-6 space-y-8 w-full">
      {/* FivePicture Section */}
      <div className="rounded-lg p-4">
        <FivePicture />
      </div>

      {/* This shows the calendar and listing form side by side */}
      <div className="flex flex-row space-x-6  p-4 rounded-lg items-stretch">
        {/* Calendar - 2/3 width of the container */}
        <div className="flex w-2/3 p-4 rounded-lg">
          <Calendar />
        </div>

        {/* Mini Listing Form - 1/3 width of the container */}
        <div className="flex w-1/3  p-4 rounded-lg">
          <MiniListingForm />
        </div>
      </div>
    </div>
  );
};

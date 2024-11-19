import React from "react";
import { Amenities } from "./Amenities";
import { ListingDescription } from "./ListingDescription";

export const SingleRight = () => {
  return (
    <div className="flex flex-col p-6 space-y-8 w-full w-1/2 bg-whiteColor p-6 rounded-lg min-h-screen">
      THIS IS FOR THE MAP
      {/* This shows the calendar and listing form side by side */}
      <div className="flex flex-row space-x-6  p-4 rounded-lg items-stretch">
        <Amenities />
        <ListingDescription />
      </div>
    </div>
  );
};

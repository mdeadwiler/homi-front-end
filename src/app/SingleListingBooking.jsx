import React from "react";
import { SingleLeft } from "../components/SingleLeft";
import { SingleRight } from "../components/SingleRight";

export const SingleListingBooking = () => {
  return (
    <div className="w-full">
      {/* Flex container for columns */}
      <div className="flex flex-row gap-x-6">
        <SingleLeft />
        <SingleRight />
      </div>
    </div>
  );
};

import React from "react";
import { SingleLeft } from "../components/SingleLeft";
import { SingleRight } from "../components/SingleRight";



export const SingleListingBooking = () => {
  return (
    <div className=" w-full">
      {" "}
      {/* Apply background color */}
      <div className="flex flex-row h-full gap-x-6  ">
        {" "}
        {/* gap-x-6 for horizontal spacing */}
        {/* Left Column */}
        <div className="w-3/5 bg-whiteColor p-4 rounded-lg ">

          <SingleLeft />
        </div>
        {/* Right Column */}
        <div className="w-2/5 bg-whiteColor p-4 rounded-lg ">
          <SingleRight />
        </div>
      </div>
    </div>
  );
};

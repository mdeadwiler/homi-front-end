import React from "react";
import { SingleLeft } from "../components/SingleLeft";
import { SingleRight } from "../components/SingleRight";


export const SingleListingBooking = () => {
  return (
    <>
  <div className="bg-backgroundColor">
    <h1 className="fixed my-4 top-0 left-0 font-sans text-7xl p-4">homi</h1>
      <div className="flex flex-col md:flex-row bg-white p-8 rounded-lg space-x-8">
        <div className="flex-1">
          <SingleLeft />
        </div>

        <div className="flex-1">
          <SingleRight />
        </div>
      </div>
      </div>
    </>
  );
};

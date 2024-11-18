import React from "react";
import { SingleLeft } from "../components/SingleLeft";
import { SingleRight } from "../components/SingleRight";

export const SingleListingBooking = () => {
  return (
    
    <>
      <h1 className="fixed top-0 left-0 font-sans text-7xl p-4">homi</h1>
      
      {/* Left Section */}
      <div className="flex-col md:flex-row">
      <div className="flex-1 bg-white rounded-lg  p-6">
        <SingleLeft />
      </div>
      
      {/* Right Section */}
      <div className="flex-1 h-lvh bg-white rounded-lg  p-6">
        <SingleRight />
      </div>
      </div>
      </>
  );
};


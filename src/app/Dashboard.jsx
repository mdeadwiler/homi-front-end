import React from "react";
import { MyUserInfo } from "../components/MyUserInfo";
import { HostBookings } from "../components/MyBookingsListings";

export const Dashboard = () => {
  return (
    <div className="flex flex-center h-full gap-x-6">
      {/* Left Column */}
      <div className="w-2/6 bg-whiteColor p-4 rounded-lg">
        <MyUserInfo />
      </div>

      {/* Middle Column */}
      <div className="w-3/6 bg-alternativeColor p-4 rounded-lg">
        <p>Your Active Listing</p>
      </div>

      {/* Right Column */}
      <div className="w-2/6 bg-whiteColor p-4 rounded-lg">
        <HostBookings />
      </div>
    </div>
  );
};

import React from "react";
import { useLocation } from "react-router-dom";
import { MyUserInfo } from "../components/MyUserInfo";
import { HostBookings } from "../components/MyBookingsListings";
import { BookingMap } from "../components/BookingMap";

export const Dashboard = () => {
  const location = useLocation();
  const isHost = location.pathname.includes("host"); // Check if the path is for a host

  return (
    <main className="flex flex-center h-full gap-x-6">
      {/* Left Column */}
      <div className="w-2/6 bg-whiteColor p-4 rounded-lg">
        <MyUserInfo isHost={isHost} />
      </div>

      {/* Middle Column */}
      <div className="w-3/6 bg-alternativeColor p-4 rounded-lg">
        {isHost ? <p>Your Active Listings</p> : <p>Your Favorite Properties</p>}
      </div>

      {/* Right Column */}
      <div className="w-2/6 bg-whiteColor p-4 rounded-lg">
        {isHost ? <HostBookings /> : <BookingMap />}
      </div>
    </main>
  );
};

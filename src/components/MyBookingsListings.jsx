import React from "react";
import { dummyBookingsRB } from "../dummy-data/dummy-bookings-rb";

export const HostBookings = () => {
  // Filter only bookings where the property owner is a host
  const hostBookings = dummyBookingsRB.filter(
    (booking) => booking.prop.user.profile.is_host
  );

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-2xl  mb-4 text-center">Bookings of my listings</h1>
      <div className="flex flex-col space-y-4">
        {hostBookings.map((booking) => (
          <div
            key={booking.id}
            className="border text-left border-[0.5px] border-gray-300 bg-cardColor rounded-lg p-4 shadow-sm"
          >
            <h2 className="text-lg font-semibold mb-2">{booking.prop.title}</h2>
            <p className="text-logoColor">
              Booked by: <strong>{booking.guest.username}</strong>
            </p>
            <p className="text-logoColor">
              {new Date(booking.check_in_date).toLocaleDateString()} to{" "}
              {new Date(booking.check_out_date).toLocaleDateString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

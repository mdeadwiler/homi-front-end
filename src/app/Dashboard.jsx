import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { MyUserInfo } from "../components/MyUserInfo";
import { HostBookings } from "../components/MyBookingsListings";
import { BookingMap } from "../components/BookingMap";
import { ListingCard } from "../components/ListingCard";
import { getUpcoming, getMyProperties } from "../services"; // Import your service

export const Dashboard = () => {
  const location = useLocation();
  const isHost = location.pathname.includes("host"); // Check if the path is for a host
  const [upcomingBookings, setUpcomingBookings] = useState([]);
  const [myProperties, setMyProperties] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  // Fetch upcoming bookings when the component mounts
  useEffect(() => {
    if (!isHost) {
      // Only fetch upcoming bookings if the user is a guest (not a host)
      const fetchUpcomingBookings = async () => {
        try {
          const bookings = await getUpcoming();
          console.log(bookings);
          setUpcomingBookings(bookings);
        } catch (error) {
          console.error("Error fetching upcoming bookings:", error);
        }
      };

      fetchUpcomingBookings();
    }
  }, [isHost]); // Re-run when `isHost` changes

  useEffect(() => {
    if (isHost) {
      const fetchHostProperties = async () => {
        try {
          const properties = await getMyProperties();
          console.log(properties);

          setMyProperties(
            properties.map((prop) => ({
              id: prop.id,
              prop,
            }))
          );
        } catch (error) {
          console.error("Error fetching properties:", error);
          setError("Failed to load properties. Please try again.");
        } finally {
          setLoading(false); // Ensure loading state is updated
        }
      };
      fetchHostProperties();
    }
  }, [isHost]);

  return (
    <main className="flex flex-center h-full gap-x-6">
      {/* Left Column */}
      <div className="w-2/6 bg-whiteColor p-4 rounded-lg">
        <MyUserInfo isHost={isHost} />
      </div>

      {/* Middle Column */}
      <div className="w-3/6 bg-alternativeColor p-4 rounded-lg">
        {isHost ? (
          <div>
            <p>Your Active Listings</p>
            <div className="flex flex-wrap gap-4">
              {loading ? (
                <p>Loading...</p>
              ) : myProperties.length > 0 ? (
                myProperties.map((property) => (
                  <ListingCard key={property.id} listing={property.prop} />
                ))
              ) : (
                <p>No active listings.</p>
              )}
            </div>
          </div>
        ) : (
          <div>
            <p>Your Upcoming Bookings</p>
            <div className="flex flex-wrap gap-4">
              {upcomingBookings.length > 0 ? (
                upcomingBookings.map((booking) => (
                  <ListingCard key={booking.id} listing={booking.prop} />
                ))
              ) : (
                <p>No upcoming bookings.</p>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Right Column */}
      <div className="w-2/6 bg-whiteColor p-4 rounded-lg">
        {isHost ? <HostBookings /> : <BookingMap />}
      </div>
    </main>
  );
};

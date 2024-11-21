import { useContext, useEffect, useState } from "react";
import { SingleContext } from "../app/SingleListingBooking.jsx";
import { useNavigate } from "react-router-dom";
import { FivePicture } from "./FivePicture";
import { MiniListingForm } from "./MiniListingForm";
import { Calendar } from "./Calendar";

import services from "../services/index.js";

export const SingleLeft = ({ listingId }) => {
  // Need to check if we have user
  const user = true;
  const navigate = useNavigate();

  // const { listing } = useContext(SingleContext);
  const [host, setHost] = useState("");
  const [price, setPrice] = useState(0);
  const [bookings, setBookings] = useState([]);
  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPropertyDetails = async (id) => {
    try {
      console.log("Fetching property details for ID:", id);
      const property = await services.getSingleProperty(id); // Use the service function
      setListing(property);
      setHost(property.user_info.username);
      setPrice(property.price_per_night);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching property details:", error.message);
      setError("Failed to load property details.");
      setLoading(false);
    }
  };

  const fetchBookings = async (id) => {
    try {
      console.log("Fetching bookings for property ID:", id);
      const fetchedBookings = await services.getPropBookings(id); // Use your correct service
      setBookings(fetchedBookings);
      console.log("Fetched bookings:", fetchedBookings);
    } catch (error) {
      console.error("Error fetching bookings:", error.message);
    }
  };

  useEffect(() => {
    if (listingId) {
      fetchBookings(listingId);
      fetchPropertyDetails(listingId);
    }
  }, [listingId]);

  // wait for photos to load
  useEffect(() => {
    if (listing) {
      setHost(listing.user_info.username);
      setPrice(listing.price_per_night);
    }
  }, [listing]);

  return (
    <div className="flex flex-col p-6 space-y-3 w-full bg-whiteColor rounded-lg overflow-y-auto">
      <FivePicture />

      <div className="w-full flex flex-col sm:flex-row justify-between mb-6">
        <p>
          Hosted by <span className="text-logoColor font-semibold">{host}</span>
        </p>
        <p>
          <span className="text-alternativeColor font-semibold">${price}</span>{" "}
          per night
        </p>
      </div>

      {/* Flex container for calendar and listing form */}
      <div className="flex flex-col sm:flex-row rounded-lg mt-0 w-full gap-4 sm:gap-6">
        <div className="flex-1">
          <Calendar bookings={bookings} />
        </div>
        <div className="w-full sm:w-[300px]">
          <MiniListingForm bookings={bookings} listing={listing} required />
        </div>
      </div>
    </div>
  );
};

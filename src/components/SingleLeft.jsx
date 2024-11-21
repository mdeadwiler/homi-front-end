import { useContext, useEffect, useState } from "react";
import { SingleContext } from "../app/SingleListingBooking.jsx";
import { useNavigate } from "react-router-dom";
import { FivePicture } from "./FivePicture";
import { MiniListingForm } from "./MiniListingForm";
import { Calendar } from "./Calendar";

export const SingleLeft = ({ listingId }) => {
  // Need to check if we have user
  const user = true;
  const navigate = useNavigate();

  const { listing } = useContext(SingleContext);
  const [host, setHost] = useState("");
  const [price, setPrice] = useState(0);

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
          <Calendar />
        </div>
        <div className="w-full sm:w-[300px]">
          <MiniListingForm />
        </div>
      </div>
    </div>
  );
};

import { useState } from "react";
import { BookingForm } from "./BookingForm";
import { useNavigate } from "react-router-dom";
import { ListingForm } from "../app/ListingForm";
import { EditListingForm } from "../app/EditListingForm";







export const MiniListingForm = ({ bookings, required, listing }) => {
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [total, setTotal] = useState(0);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");

  if (!listing) {
    return <p>Loading listing details...</p>;
  }

  const cleaningFee = listing.cleaning_fee || 0;

  const isDateBlocked = (date) => {
    if (!date || isNaN(date)) return false;
    const formattedDate = date.toISOString().split("T")[0];
    return bookings.some((booking) => booking.check_in_date === formattedDate);
  };

//const navigate = useNavigate(ListingForm)



  const handleCheckInChange = (e) => {
    const date = new Date(e.target.value);
    if (isDateBlocked(date)) {
      setErrorMessage("Selected check-in date is not available.");
    } else {
      setErrorMessage("");
      setCheckInDate(e.target.value);
    }
  };

  const handleCheckOutChange = (e) => {
    const date = new Date(e.target.value);
    if (isDateBlocked(date)) {
      setErrorMessage("Selected check-out date is not available.");
    } else {
      setErrorMessage("");
      setCheckOutDate(e.target.value);

      const checkIn = new Date(checkInDate);
      const checkOut = new Date(e.target.value);

      const nights =
        checkInDate && e.target.value && checkOut > checkIn
          ? (checkOut - checkIn) / (1000 * 60 * 60 * 24)
          : 0;

      const totalCost =
        nights > 0 ? nights * listing.price_per_night + cleaningFee : 0;

      setTotal(totalCost);
    }
  };

  const handleSubmit = () => {
    if (errorMessage) {
      alert("Please fix the errors before reserving.");
      return;
    }
    setIsBookingModalOpen(true);
  };

  return (
    <div className="flex flex-col justify-start items-center p-4 bg-white w-full sm:w-[300px] text-center min-h-[400px] z-50">
      <form className="w-full">
        <label htmlFor="checkInDate" className="block text-sm font-medium mb-1">
          Check-in Date:
        </label>
        <input
          type="date"
          id="checkInDate"
          value={checkInDate}
          onChange={handleCheckInChange}
          required={required}
          className={`border rounded-lg p-2 mb-4 w-full text-center ${
            errorMessage && isDateBlocked(new Date(checkInDate))
              ? "border-red-500"
              : ""
          }`}
        />

        <label
          htmlFor="checkOutDate"
          className="block text-sm font-medium mb-1"
        >
          Check-out Date:
        </label>
        <input
          type="date"
          id="checkOutDate"
          value={checkOutDate}
          onChange={handleCheckOutChange}
          required={required}
          className={`border rounded-lg p-2 mb-4 w-full text-center ${
            errorMessage && isDateBlocked(new Date(checkOutDate))
              ? "border-red-500"
              : ""
          }`}
        />

        {errorMessage && (
          <p className="text-red-500 text-sm mb-4">{errorMessage}</p>
        )}

        <label htmlFor="total" className="block text-sm font-medium mb-1">
          Total:
        </label>
        <input
          type="number"
          id="total"
          value={total}
          readOnly
          required={required}
          className="border rounded-lg p-2 mb-4 w-full text-center bg-gray-100"
        />

        <button
          type="button"
          onClick={handleSubmit}
          className="bg-logoColor text-white font-medium rounded-full py-2 px-6 mt-2 w-full transition-transform transform active:scale-95 hover:bg-backgroundColor"
        >
          Reserve
        </button>
        
      </form>
      

      {isBookingModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-lg p-6 w-96">
            <BookingForm
              onClose={() => setIsBookingModalOpen(false)}
              initialCheckInDate={checkInDate}
              initialCheckOutDate={checkOutDate}
            />
          </div>
        </div>
      )}
    </div>
  );
};


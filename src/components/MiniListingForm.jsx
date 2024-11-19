import React, { useState } from "react";
import { BookingForm } from "./BookingForm";

export const MiniListingForm = ({ required }) => {
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [total, setTotal] = useState(0);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  // Fixed price per night
  // fixed cleaning fee
  //These two are to test to see if it working
  // Will create useEffect data to fetch from the backend
  const pricePerNight = 100;
  const cleaningFee = 50;

  const handleCheckInChange = (e) => {
    setCheckInDate(e.target.value);
  };

  const handleCheckOutChange = (e) => {
    setCheckOutDate(e.target.value);

    // Parse dates from back end python to JS
    const checkIn = new Date(checkInDate);
    const checkOut = new Date(e.target.value);

    // This is the logic that calculates the total cost and cleaning fee included after the click of reservation
    const nights =
      checkInDate && e.target.value && checkOut > checkIn
        ? (checkOut - checkIn) / (1000 * 60 * 60 * 24)
        : 0;

    const totalCost = nights > 0 ? nights * pricePerNight + cleaningFee : 0;

    // grabs the finalized cost
    setTotal(totalCost);
  };

  return (
    <div className="flex justify-self-end border rounded-lg p-4 bg-white w-48 text-center min-h-[400px]">
      <form>
        <label htmlFor="checkInDate" className="block text-sm font-medium mb-1">
          Check-in Date:
        </label>
        <input
          type="date"
          id="checkInDate"
          value={checkInDate}
          onChange={handleCheckInChange}
          required={required}
          className="border rounded-lg p-2 mb-4 text-center"
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
          // From ternary check out handle change
          value={checkOutDate}
          onChange={handleCheckOutChange}
          required={required}
          className="border rounded-lg p-2 mb-4 text-center"
        />

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
          onClick={() => setIsBookingModalOpen(true)}
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

// import React, { useState } from "react";
// import { BookingForm } from "../app/BookingForm";

// export const MiniListingForm = ({ required }) => {
//   const [checkInDate, setCheckInDate] = useState("");
//   const [checkOutDate, setCheckOutDate] = useState("");
//   const [total, setTotal] = useState(0);
//   const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

//   const pricePerNight = 100; // Price per night
//   const cleaningFee = 50; // Fixed cleaning fee

//   const handleCheckInChange = (e) => {
//     setCheckInDate(e.target.value);
//   };

//   const handleCheckOutChange = (e) => {
//     setCheckOutDate(e.target.value);

//     // Parse dates
//     const checkIn = new Date(checkInDate);
//     const checkOut = new Date(e.target.value);

//     // Calculate nights and total cost using ternary logic
//     const nights =
//       checkInDate && e.target.value && checkOut > checkIn
//         ? (checkOut - checkIn) / (1000 * 60 * 60 * 24)
//         : 0;

//     const totalCost = nights > 0 ? nights * pricePerNight + cleaningFee : 0;

//     // Update total
//     setTotal(totalCost);

//   return (
//     <div className="flex justify-self-end border rounded-lg p-4 bg-white w-48 text-center min-h-[400px]">
//       <form>
//         <label htmlFor="checkInDate" className="block text-sm font-medium mb-1">
//           Check-in Date:
//         </label>
//         <input
//           type="date"
//           id="checkInDate"
//           value={checkInDate}
//           onChange={handleCheckInChange}
//           required={required}
//           className="border rounded-lg p-2 mb-4 text-center"
//         />

//         <label
//           htmlFor="checkOutDate"
//           className="block text-sm font-medium mb-1"
//         >
//           Check-out Date:
//         </label>
//         <input
//           type="date"
//           id="checkOutDate"
//           value={checkOutDate}
//           onChange={handleCheckOutChange}
//           required={required}
//           className="border rounded-lg p-2 mb-4 text-center"
//         />

//         <label htmlFor="total" className="block text-sm font-medium mb-1">
//           Total:
//         </label>
//         <input
//           type="number"
//           id="total"
//           value={total}
//           readOnly
//           required={required}
//           className="border rounded-lg p-2 mb-4 w-full text-center bg-gray-100"
//         />

//         <button
//           type="button"
//           onClick={() => {
//             setIsBookingModalOpen(true);
//           }}
//           className="bg-logoColor text-white font-medium rounded-full py-2 px-6 mt-2 w-full transition-transform transform active:scale-95 hover:bg-backgroundColor"
//         >
//           Reserve
//         </button>
//       </form>

//       {isBookingModalOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
//           <div className="bg-white rounded-lg p-6 w-96">
//             <BookingForm
//               onClose={() => setIsBookingModalOpen(false)}
//               initialCheckInDate={checkInDate}
//               initialCheckOutDate={checkOutDate}
//             />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };
// };

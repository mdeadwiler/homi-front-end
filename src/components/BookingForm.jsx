import { useState, useEffect } from "react";

export const BookingForm = ({
  onClose,
  blockedDates,
  initialCheckInDate = "",
  initialCheckOutDate = "",
}) => {
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const [message, setMessage] = useState("");
  const [creditCard, setCreditCard] = useState("");

  useEffect(() => {
    setCheckInDate(initialCheckInDate);
    setCheckOutDate(initialCheckOutDate);
  }, [initialCheckInDate, initialCheckOutDate]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!checkInDate || !checkOutDate) {
      alert("Please select both check-in and check-out dates.");
      return;
    }

    const checkIn = new Date(checkInDate);
    const checkOut = new Date(checkOutDate);

    if (checkOut <= checkIn) {
      alert("Check-out date must be after check-in date.");
      return;
    }

    if (isDateBlocked(checkIn, checkOut)) {
      alert(
        "The selected dates are unavailable. Please choose different dates."
      );
      return;
    }

    alert("Booking submitted successfully!");
    onClose();
  };

  const isDateBlocked = (start, end) => {
    for (const { from, to } of blockedDates || []) {
      const blockedStart = new Date(from);
      const blockedEnd = new Date(to);

      if (
        (start >= blockedStart && start < blockedEnd) ||
        (end > blockedStart && end <= blockedEnd) ||
        (start <= blockedStart && end >= blockedEnd)
      ) {
        return true;
      }
    }
    return false;
  };

  return (
    <div className="relative p-6 bg-white rounded-lg shadow-lg z-80">
      {/* Close button */}
      <button
        onClick={onClose}
        aria-label="Close"
        className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
      >
        ✕
      </button>

      <h2 className="text-xl font-semibold mb-4">Book Your Stay</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="checkInDate"
            className="block text-sm font-medium mb-1"
          >
            Check-in Date:
          </label>
          <input
            type="date"
            id="checkInDate"
            value={checkInDate}
            onChange={(e) => setCheckInDate(e.target.value)}
            className="border rounded-lg p-2 w-full"
            required
          />
        </div>

        <div>
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
            onChange={(e) => setCheckOutDate(e.target.value)}
            className="border rounded-lg p-2 w-full"
            required
          />
        </div>

        <div>
          <label
            htmlFor="numberOfGuests"
            className="block text-sm font-medium mb-1"
          >
            Number of Guests:
          </label>
          <input
            type="number"
            id="numberOfGuests"
            value={numberOfGuests}
            onChange={(e) => setNumberOfGuests(e.target.value)}
            className="border rounded-lg p-2 w-full"
            required
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-1">
            Special Requests:
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="border rounded-lg p-2 w-full"
            rows="3"
          ></textarea>
        </div>

        <div>
          <label
            htmlFor="creditCard"
            className="block text-sm font-medium mb-1"
          >
            Credit Card:
          </label>
          <input
            type="text"
            id="creditCard"
            value={creditCard}
            onChange={(e) => setCreditCard(e.target.value)}
            className="border rounded-lg p-2 w-full"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-logoColor text-white font-medium rounded-full py-2 px-6 mt-4 w-full transition-transform transform active:scale-95 hover:bg-backgroundColor"
        >
          Confirm Booking
        </button>
      </form>
    </div>
  );
};

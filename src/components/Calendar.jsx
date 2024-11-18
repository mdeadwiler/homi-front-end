import React, { useState } from "react";
import {dummyBookings} from "../dummy-data/dummy-bookings" 

export const Calendar = () => {
  const [selectedRange, setSelectedRange] = useState({
    start: null,
    end: null,
  });
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // Check if the date is before today (and prevent clicking on it)
  const isPastDate = (date) => {
    return date && date < today;
  };

  // Check if a date is booked
  //NOTE: THIS IS WHERE WE FETCH API FROM BACKEND TO CONFIRM IF IT IS BOOKED
  const isBooked = (date) => {
    return dummyBookings.some((booking) => {
      const checkIn = new Date(booking.check_in_date);
      const checkOut = new Date(booking.check_out_date);
      return date >= checkIn && date <= checkOut;
    });
  };

  const getDaysInMonth = (year, month) => {
    const firstDayOfMonth = new Date(year, month, 1);
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayIndex = firstDayOfMonth.getDay();

    // This will help create days for the month
    const days = [];
    for (let i = 0; i < firstDayIndex; i++) {
      days.push(null); // Fills the spaces with blank if it's not part of the days of the week
    }
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(new Date(year, month, i)); // Fill in actual dates
    }
    return days;
  };

  // Check if a date falls within the selected range
  const isInRange = (date) => {
    if (!selectedRange.start || !selectedRange.end) return false;
    return date >= selectedRange.start && date <= selectedRange.end;
  };

  // Handle date clicks
  const handleDateClick = (date) => {
    if (isPastDate(date) || isBooked(date)) {
      return; // Prevent selection for past or booked dates
    }
    if (!selectedRange.start || (selectedRange.start && selectedRange.end)) {
      setSelectedRange({ start: date, end: null });
    } else if (date > selectedRange.start) {
      setSelectedRange({ ...selectedRange, end: date });
    } else {
      setSelectedRange({ start: date, end: null });
    }
  };

  // can go before and after months, but only within the month that you are currently on
  const navigateMonth = (direction) => {
    const newMonth = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth() + direction,
      1
    );
    setCurrentMonth(newMonth);
  };

  const monthsToDisplay = [
    currentMonth,
    // new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1),
  ];

  return (
    <div className="max-w-4xl mx-auto p-4 bg-whiteColor shadow-lg rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={() => navigateMonth(-1)}
          className="p-2 rounded hover:bg-buttonColor"
          disabled={currentMonth <= new Date()} // Prevent navigating to past months
        >
          {"<"}
        </button>

        <button
          onClick={() => navigateMonth(1)}
          className="p-2 rounded  hover:bg-buttonColor"
        >
          {">"}
        </button>
      </div>

      <div className="grid grid-cols-1 gap-8">
        {monthsToDisplay.map((month, index) => {
          const days = getDaysInMonth(month.getFullYear(), month.getMonth());
          return (
            <div key={index}>
              <h3 className="text-lg font-medium text-center mb-2 bg-backgroundColor text-textColor">
                {month.toLocaleString("default", {
                  month: "long",
                  year: "numeric",
                })}
              </h3>
              <div className="grid grid-cols-7 gap-2">
                {daysOfWeek.map((day) => (
                  <div
                    key={day}
                    className="text-center font-semibold text-textColor"
                  >
                    {day}
                  </div>
                ))}
                {days.map((date, idx) => (
                  <button
                    key={idx}
                    onClick={() =>
                      date &&
                      !isPastDate(date) &&
                      !isBooked(date) &&
                      handleDateClick(date)
                    } // Disable click on past or booked dates
                    disabled={isPastDate(date) || isBooked(date)} // Disable the button entirely for past or booked dates
                    className={`p-2 rounded-full w-10 h-10 flex items-center justify-center ${
                      selectedRange.start &&
                      selectedRange.start.toDateString() ===
                        date?.toDateString()
                        ? "bg-buttonColor text-white"
                        : selectedRange.end &&
                          selectedRange.end.toDateString() ===
                            date?.toDateString()
                        ? "bg-buttonColor text-white"
                        : isInRange(date)
                        ? "bg-buttonColor text-gray-800"
                        : "text-gray-700 hover:bg-gray-100"
                    } ${
                      isPastDate(date) || isBooked(date)
                        ? "cursor-not-allowed text-gray-300 line-through"
                        : ""
                    }`}
                  >
                    {date ? date.getDate() : null}
                  </button>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

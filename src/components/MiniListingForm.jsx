import { useState } from "react";

// Question: will handle change functions change to python or is python on back-end irrelevant from front-end javaScript

export const MiniListingForm = ({required}) => {
  // This allows input and update for check in dates for reservation
  const [checkInDate, setCheckInDate] = useState("");
  // This allows input and update for checkout date for reservation
  const [checkOutDate, setCheckOutDate] = useState("");
  // This allows default to set for zero for pricing after pricing is inputed then 0 will update to the pricing of the reservation
  const [total, setTotal] = useState(0);

  const handleCheckInChange = (e) => {
    setCheckInDate(e.target.value);
  };
  const handleCheckOutChange = (e) => {
    setCheckOutDate(e.target.value);
  };

  const handleTotalChange = (e) => {
    setTotal(e.target.value);
  }
  // Using javaScript, this will allow us create a price total per night for reservations on the form (however, will use python back-end for this data)
  //**Researched this**

  // const calculatorTotal = () => {
  // const pricePerNight = 0 //set to 0 for now
  // const checkIn = ""
  // const checkOut = ""
  // const oneDay = 3456
  // const nightsTotal = Math.round(Math.abs((checkIn - checkOut) / pricePerNight))
  // }

  return (
   <div className="flex justify-self-end border rounded-lg p-4 bg-white w-72 text-center">
      <form>
        <label htmlFor="checkInDate" className="block text-sm font-medium mb-1">
          check-in date:
        </label>
        <input
          type="date"
          id="checkInDate"
          value={checkInDate}
          onChange={handleCheckInChange}
          required={required}
          className="border rounded-lg p-2 mb-4 w-full text-center"
        />

        <label htmlFor="checkOutDate" className="block text-sm font-medium mb-1">
          check-out date:
        </label>
        <input
          type="date"
          id="checkOutDate"
          value={checkOutDate}
          onChange={handleCheckOutChange}
          required={required}
          className="border rounded-lg p-2 mb-4 w-full text-center"
        />

        <label htmlFor="total" className="block text-sm font-medium mb-1">
          total:
        </label>
        <input
          type="number"
          id="total"
          value={{total}} // maybe make this a 0 for default
          onChange={handleTotalChange}
          required={required}
          className="border rounded-lg p-2 mb-4 w-full text-center"
        />

        <button
          type="button"
          // Had to change this into a function in order for this to functionable. I orgnally had onClick={{total}} with no handlchange
          onClick={() => console.log(total)}
          className="bg-backgroundColor text-white font-medium rounded-full py-2 px-6 mt-2 w-full"
        >
          reserve
        </button>
      </form>
    </div>
  );
};
 




import { Routes, Route } from "react-router-dom";
import { About } from "./app/About";
import { BookingForm } from "./app/BookingForm";
import { Bookings } from "./app/Bookings";
import { Dashboard } from "./app/Dashboard";
import { Landing } from "./app/Landing";
import { Listing } from "./app/Listing";
import { ListingForm } from "./app/ListingForm";
import { SignIn } from "./app/Signin";
import { SignUp } from "./app/SignUp";
import { SingleListingBooking } from "./app/SingleListingBooking";

export function AppRoutes({}) {
  return (
    <Routes>
      {/* separating routes that needs authenticaiton vs public */}
      {/* NOTE: this needs to get changed once we have services file adding {user &&()} */}
      <>
        <Route path="/booking-form" element={<BookingForm />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/listing-form" element={<ListingForm />} />
      </>
      <>
        {/*these are currently public paths*/}
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/listing" element={<Listing />} />
        <Route path="/listing/booking" element={<SingleListingBooking />} />
      </>
    </Routes>
  );
}

// NOTE: SINGLE LISTING BOOKING PATH IS GOING TO CHANGE FROM THIS ONE TO /:listingId/booking after changes are made

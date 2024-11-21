import { Routes, Route } from "react-router-dom";
import { About } from "./app/About";
import { BookingForm } from "./components/BookingForm";
import { Bookings } from "./app/Bookings";
import { Dashboard } from "./app/Dashboard";
import { Landing } from "./app/Landing";
import { Listings } from "./app/Listings";
import { ListingForm } from "./app/ListingForm";
import { EditListingForm } from "./app/EditListingForm";
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
        <Route path="/booking-form/:bookingId" element={<BookingForm />} />
        <Route path="/bookings/guest" element={<Bookings />} />
        <Route path="/bookings/host" element={<Bookings />} />
        <Route path="/dashboard/host" element={<Dashboard />} />
        <Route path="/dashboard/guest" element={<Dashboard />} />
        <Route path="/listing-form" element={<ListingForm />} />
        <Route path="/listing-form/:id/edit" element={<EditListingForm />} />
        <Route
          path="/listing/:listingId/owner"
          element={<SingleListingBooking />}
        />
        <Route path="/listing/:listingId/booking/:bookingId" element={<SingleListingBooking />} />
        <Route path="/mylistings" element={<Listings />} />
      </>
      <>
        {/*these are currently public paths*/}
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/listings" element={<Listings />} />

        <Route path="/listing/:listingId" element={<SingleListingBooking />} />
      </>
      {/* NOTE: Going to DELETE LATER*/}
      <Route path="/listing/booking" element={<SingleListingBooking />} />
      <Route path="/bookings" element={<Bookings />} />
    </Routes>
  );
}

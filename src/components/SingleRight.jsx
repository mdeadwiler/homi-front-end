import { useContext, useEffect, useState } from 'react';
import { SingleContext } from '../app/SingleListingBooking.jsx';
import { Amenities } from "./Amenities";
import { ListingDescription } from "./ListingDescription";
import { ListingMap } from "../components/ListingMap.jsx"

export const SingleRight = () => {

  const { listing } = useContext(SingleContext);
  const [ cityState, setCityState ] = useState('')

  useEffect(() => {

    if (listing) {

      let cityStatestr = `${listing.address.city}, ${listing.address.state}`
      setCityState(cityStatestr)

    }

  }, [listing])


  return (
    <div className="flex flex-col p-6 space-y-8 w-full bg-whiteColor p-6 rounded-lg">
      <p className="text-left pl-4">City: . Exact location will be displayed upon booking</p>
      < ListingMap />
      {/* This shows the calendar and listing form side by side */}
      <div className="flex flex-row space-x-6  p-4 rounded-lg items-stretch">
        <Amenities />
        <ListingDescription />
      </div>
    </div>
  );
};

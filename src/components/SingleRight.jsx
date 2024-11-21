import { useContext, useEffect, useState } from 'react';
import { SingleContext } from '../app/SingleListingBooking.jsx';
import { Amenities } from "./Amenities";
import { ListingDescription } from "./ListingDescription";
import { ListingMap } from "../components/ListingMap.jsx"

export const SingleRight = () => {

  const { listing } = useContext(SingleContext);
  const [ cityState, setCityState ] = useState('N/A')

  useEffect(() => {

    if (listing) {

      let cityStateStr = `${listing.address.city}, ${listing.address.state}`
      setCityState(cityStateStr)

    }

  }, [listing])

  

  return (
    <div className="flex flex-col p-6 space-y-2 w-full bg-whiteColor p-6 rounded-lg">

      <p className="text-left pl-4 italic">City: <span className="text-logoColor font-semibold">{cityState}</span>. Exact location will be displayed upon booking</p>
      < ListingMap />
      <div className="flex flex-row space-x-6  p-4 rounded-lg items-stretch w-full">
        <Amenities />
        <ListingDescription />
      </div>

    </div>
  );
};

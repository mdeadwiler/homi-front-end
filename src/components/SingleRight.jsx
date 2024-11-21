import { useContext, useEffect, useState } from 'react';
import { SingleContext } from '../app/SingleListingBooking.jsx';
import { AppContext } from '../App.jsx';
import { Amenities } from "./Amenities";
import { ListingDescription } from "./ListingDescription";
import { ListingMap } from "../components/ListingMap.jsx"

export const SingleRight = () => {

  const { listing, pageState } = useContext(SingleContext);
  const { user } = useContext(AppContext);
  const [ isOwner, setIsOwner ] = useState(false)
  const [ cityState, setCityState ] = useState('N/A')
  const [ fullAddress, setFullAddress ] = useState('N/A')


  useEffect(() => {

    if (listing) {

      let cityStateStr = `${listing.address.city}, ${listing.address.state}`
      setCityState(cityStateStr)

    }

    if (listing && listing.address) {

      setFullAddress(listing.address.address_string)

    }

    if (listing && user && listing.user) {

      if (listing.user === user.id) {
        setIsOwner(true)
      };

    }

  }, [listing, user])

  

  return (
    <div className="flex flex-col p-6 space-y-2 w-full bg-whiteColor p-6 rounded-lg">

      { pageState === "listing" ? (<p className="text-left pl-4 italic">
        City: <span className="text-logoColor font-semibold">{cityState}</span>. Exact location will be displayed upon booking
      </p>) : ( user && pageState == "booking" ? (<p className="text-left pl-4 italic">
        Property address: <span className="text-logoColor font-semibold">{fullAddress}</span>
      </p>) : ( user && isOwner ? (<p className="text-left pl-4 italic">
        Property address: <span className="text-logoColor font-semibold">{fullAddress}</span>
      </p>) : (<p className="text-left pl-4 italic">
        City: <span className="text-logoColor font-semibold">{cityState}</span>. Exact location will be displayed upon booking
      </p>))) }
      
      < ListingMap />
      <div className="flex flex-row space-x-6  p-4 rounded-lg items-stretch w-full">
        <Amenities />
        <ListingDescription />
      </div>

    </div>
  );
};

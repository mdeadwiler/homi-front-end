import { useState, createContext, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';

import { SingleLeft } from "../components/SingleLeft";
import { SingleRight } from "../components/SingleRight";

import services from "../services/index.js"

const SingleContext = createContext(null);

export const SingleListingBooking = () => {

  const location = useLocation();
  const [listing, setListing] = useState(null);

  // extract id from url :listingId
  const { listingId } = useParams();

  const fetchListing = async (id) => {

    const fetchedListing = await services.getSingleProperty(id)
    setListing(fetchedListing)

  }

  /* USE EFFECT */
  useEffect(() => {

    if (listingId) {
      fetchListing(listingId)
    }

  }, [])

  const singleObject = { listing }

  return (
    <SingleContext.Provider value={singleObject} >

      <main className="w-full flex flex-row gap-x-6">
        <SingleLeft />
        <SingleRight />
      </main>

    </SingleContext.Provider>
  );


};

export { SingleContext }

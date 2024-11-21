import { useState, createContext, useEffect } from 'react';
import { useLocation, useParams, Link } from 'react-router-dom';

import { SingleLeft } from "../components/SingleLeft";
import { SingleRight } from "../components/SingleRight";

import services from "../services/index.js"

const SingleContext = createContext(null);

export const SingleListingBooking = () => {

  const location = useLocation();
  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(true);

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

  }, [location.pathname])


  useEffect(() => {

    if (listing) {
      setLoading(false)
    }
    
  }, [listing])


  const singleObject = { listing }

  return (
    <SingleContext.Provider value={singleObject} >

      <main>
        <div className="w-full flex flex-col sm:flex-row justify-between mb-6">
          {loading ? (null) : (<h1 className="text-left text-2xl">{listing.title}</h1>)}
          <Link to="/listings" className="text-logoColor underline hover:text-textColor">back to listings</Link>
        </div>
        <div className="w-full h-[90%] flex flex-row gap-x-6">
          <SingleLeft listingId={listingId}/>
          <SingleRight />
        </div>
      </main>

    </SingleContext.Provider>
  );


};

export { SingleContext }

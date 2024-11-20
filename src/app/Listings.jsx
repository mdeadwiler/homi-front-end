import { useEffect, useState, useContext } from "react";
import { useLocation } from 'react-router-dom';
import { ListingCard } from "../components/ListingCard.jsx";
import SortBar from "../components/SortBar.jsx";
import { AppContext } from "../App.jsx";

export const Listings = () => {
  let location = useLocation()
  const { properties } = useContext(AppContext)
  console.log("Listings.jsx ", properties)
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sorting, setSorting] = useState(true);

  useEffect(() => {

    if (properties) {

      setListings(properties);
      setLoading(false);
 
    }

  }, [location.pathname, properties, sorting]);

  return (

    <main>
      <h1>Listings</h1>
      <SortBar setListings={setListings} setSorting={setSorting}/>
      {loading ? (<p>No properties yet</p>) : (<div className="listing-cards-container">
        {listings.length &&
          listings.map((listing) => (
            <ListingCard key={listing.id} listing={listing} />
          ))}
      </div>)}
      
    </main>

  );
};

import { useEffect, useState } from "react";
import { ListingCard } from "../components/ListingCard.jsx";
import { getProperties } from "../services/sub_services/propertyServices.js";
import SortBar from "../components/SortBar.jsx";

export const Listings = () => {
  const [listings, setListings] = useState([]);

  const fetchListings = async () => {
    try {
      const propertiesData = await getProperties();
      setListings(propertiesData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchListings();
  }, []);

  return (
    <main>
      <h1>Listings</h1>
      <SortBar setListings={setListings} />
      <div className="listing-cards-container">
        {listings.length &&
          listings.map((listing) => (
            <ListingCard key={listing.id} listing={listing} />
          ))}
      </div>
    </main>
  );
};

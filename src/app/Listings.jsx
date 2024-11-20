import { useEffect, useState, useContext } from "react";
import { useLocation } from 'react-router-dom';
import { ListingCard } from "../components/ListingCard.jsx";
import { SortBar } from "../components/SortBar.jsx";
import { AppContext } from "../App.jsx";
import services from "../services/index.js"

export const Listings = () => {
  let location = useLocation()
  const { properties } = useContext(AppContext)
  console.log("Listings.jsx ", properties)
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sorting, setSorting] = useState(true);

  const whereData = location.state?.whereData;
  console.log("WhereData is ", whereData)

  const fetchWhereData = async (data) => {

    const query = `where=${data}`
    console.log('fetchWhereData is firing ', query)
    const fetchedData = await services.getProperties(query)
    console.log('fetched where data is ', fetchedData)
    setListings(fetchedData)
    return fetchedData

  }

  useEffect(() => {

    if (whereData.length > 0) {

      const whereListings = fetchWhereData(whereData);
      setLoading(false);

    }
    else if (properties) {

      setListings(properties);
      setLoading(false);
 
    }

  }, [location.pathname, properties, sorting, whereData]);

  return (

    <main>
      <h1>Listings</h1>

      <SortBar setListings={setListings} setSorting={setSorting}/>
      {loading ? (<p>No properties yet</p>) : (<div className="listing-cards-container flex flex-row flex-wrap">
        {listings.length &&
          listings.map((listing) => (
            <ListingCard key={listing.id} listing={listing} />
          ))}
      
      </div>)}
      
    </main>

  );
};

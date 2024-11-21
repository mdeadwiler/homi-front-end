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
  const [searchData, setSearchData] = useState('')

  
  const fetchWhereData = async (data) => {
    
    const query = `where=${data}`
    console.log('fetchWhereData is firing ', query)
    const fetchedData = await services.getProperties(query)
    console.log('fetched where data is ', fetchedData)
    setListings(fetchedData)
    
  }

  // restore properties
  useEffect(() => {

    if (!sorting) {
      setListings(properties);
      setSearchData('');
      setLoading(false);
    }

  }, [sorting, properties])

  
  // active searching
  useEffect(() => {
    
    if (location.state) {
      setSearchData(location.state.whereData)
      setSorting(true)
    } 
    
  }, [location.state])

  // fetch or do initial load
  useEffect(() => {

    if (searchData.length > 0) {

      fetchWhereData(searchData);
      setLoading(false);
      
    }
    else if (properties) {

      setListings(properties);
      setLoading(false);
 
    }

  }, [location.pathname, properties, searchData]);


  return (

    <main className="size-fit">
      <h1 className=" text-left mb-6 text-2xl">All Listings</h1>

      <SortBar setListings={setListings} setSorting={setSorting}/>

      {
        loading ? (
          <p>No properties yet...</p>
        ) : (
          <div className="listing-cards-container flex flex-row flex-wrap">
            {listings.length === 0 ? (
              <p>No listings matched your criteria...</p>
            ) : (
              listings.map((listing) => (
                <ListingCard key={listing.id} listing={listing} origin={"listings"} bookingId={null} />
              ))
            )}
          </div>
        )
      }
      
    </main>

  );
};

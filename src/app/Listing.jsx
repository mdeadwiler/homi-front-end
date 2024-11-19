import { useEffect, useState } from "react";

// import getListings API call from services file

export const Listing = () => {
  const [listings, setListings] = useState([
    {
      id: 1,
      title: "House in New York, NY",
      user: 1,
      description: "This is a description for Property 1.",
      price_per_night: 137,
      max_guests: 4,
      property_type: "CA",
      amenities: [
        "Dishes and Silverware",
        "Parking",
        "TV",
        "Kitchen",
        "WiFi",
        "Hot Tub",
        "Pool",
        "Heating",
        "Air Conditioning",
      ],
      is_active: true,
      cleaning_fee: 28,
      cancellation_policy: "Non-Refundable",
      link: "https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=2448&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      title: "House in Los Angeles, CA",
      user: 1,
      description: "This is a description for Property 2.",
      price_per_night: 189,
      max_guests: 6,
      property_type: "LU",
      amenities: ["Gym", "Hair Dryer", "Patio", "WiFi"],
      is_active: true,
      cleaning_fee: 23,
      cancellation_policy: "Moderate",
      link: "https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=2448&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      title: "House in Austin, TX",
      user: 1,
      description: "This is a description for Property 3.",
      price_per_night: 309,
      max_guests: 10,
      property_type: "PR",
      amenities: [
        "Hair Dryer",
        "Backyard",
        "WiFi",
        "Smoke Alarm",
        "Hot Tub",
        "Dishwasher",
      ],
      is_active: true,
      cleaning_fee: 50,
      cancellation_policy: "Non-Refundable",
      link: "https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=2448&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ]);

  // useEffect to make API call to fill our listings state
  // const fetchListings = async () => {
  //   try {
  //     const response = await getListings()
  //     setListings(response)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  // useEffect(()=>{
  //   fetchListings()
  // }, [])

  return (
    <div>
      <h1>Listings</h1>
      <div className="listing-cards-container">
        {listings.map((listing) => (
          <ListingCard listing={listing} />
        ))}
      </div>
    </div>
  );
};

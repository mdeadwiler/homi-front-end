import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export function ListingCard({ listing, origin, bookingId, booking }) {

  const location = useLocation();
  const [dates, setDates] = useState({
    check_in: "N/A",
    check_out: "N/A"
  })


  useEffect(() => {
    console.log('in listing card booking is ', booking)
    console.log('booking id is', bookingId)
    if (bookingId && booking) {
      console.log("inside the block")
      setDates({
        check_in: booking.check_in_date,
        check_out: booking.check_out_date
      })
    }

  }, [booking])


  return (
    <Link
      to={origin === "dashboard" && bookingId ? (
        `/listing/${listing.id}/booking/${bookingId}`) : ( origin === "dashboard-host" ? (
          `/listing/${listing.id}/owner`) : (
          `/listing/${listing.id}`))
        }

      className="block 
        2xl:w-72 2xl:h-72
        w-60 h-60
        rounded-lg overflow-hidden 
        shadow-md hover:shadow-lg 
        transition-shadow m-5
        bg-cardColor z-0"
    >
      <img
        src={listing.first_photo?.link || "../img/defaulthouse.jpg"}
        alt={`Image of ${listing.title}`}
        className="relative w-[90%] h-2/3 object-cover object-center m-3 rounded-lg"
        loading="lazy"
        onError={(e) => (e.target.src = "../img/defaulthouse.jpg")}
      />

      <div className="h-1/3">
        <p
          className="text-sm font-semibold text-gray-900 truncate"
          title={listing.title}
        >
          {listing.title}
        </p>


        { bookingId ? (

            <p className="text-xs text-gray-600 mt-1">
            from{" "}
            <span className="text-alternativeColor font-semibold">
              {dates.check_in}
            </span>{" "}
            to{" "}
            <span className="text-alternativeColor font-semibold">
              {dates.check_out}
            </span>{" "}
            </p> 
          
          ) : (

            <p className="text-xs text-gray-600 mt-1">
            from{" "}
            <span className="text-alternativeColor font-semibold">
              ${listing.price_per_night}
            </span>{" "}
            a day
            </p>
          
          ) 
        }
        


      </div>
    </Link>
  );
}

// max-w-[220px]
// sm:max-w-[240px]
// md:max-w-[260px]

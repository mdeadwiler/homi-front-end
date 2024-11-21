import React from "react";
import { Link } from "react-router-dom";

export function ListingCard({ listing }) {
  // console.log(listing);
  return (
    <Link
      to={`/listing/${listing.id}`}
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

        <p className="text-xs text-gray-600 mt-1">
          from{" "}
          <span className="text-alternativeColor font-semibold">
            ${listing.price_per_night}
          </span>{" "}
          a day
        </p>
      </div>
    </Link>
  );
}

// max-w-[220px]
// sm:max-w-[240px]
// md:max-w-[260px]

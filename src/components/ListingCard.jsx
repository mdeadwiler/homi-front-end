import React from "react";
import { Link } from "react-router-dom";

export function ListingCard({ listing }) {
  console.log(listing);
  return (
    <Link
      to={`/listing/${listing.id}`}
      className="block max-w-[220px] sm:max-w-[240px] md:max-w-[260px] rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow mt-1"
      style={{ backgroundColor: "#D9D9D9" }} // Apply background color directly
    >
      <div className="relative w-full h-36">
        <img
          src={listing.first_photo?.link || "default-image.jpg"}
          alt={`Image of ${listing.title}`}
          className="w-full h-full object-cover object-center"
          loading="lazy"
          onError={(e) => (e.target.src = "default-image.jpg")}
        />
      </div>

      <div className="p-2">
        <p
          className="text-sm font-semibold text-gray-900 truncate"
          title={listing.title}
        >
          {listing.title}
        </p>
        <p className="text-xs text-gray-600 mt-1">
          from ${listing.price_per_night} a day.
        </p>
      </div>
    </Link>
  );
}

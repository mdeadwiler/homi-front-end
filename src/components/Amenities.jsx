import React from "react";
import { dummyAmenities } from "../dummy-data/dummy-amenities";

export const Amenities = () => {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-6 gap-4">
        {dummyAmenities.map((amenity, index) => {

          return <div key={index} className="w-10 h-10">
            <p>{amenity.name}</p>
            <img
              src={amenity.image}
              alt={`amenity ${index}`}
              className="w-full h-full object-cover"
            />
          </div>
          
      })}
      </div>
    </div>
  );
};

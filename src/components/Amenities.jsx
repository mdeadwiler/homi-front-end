import React from "react";
import { dummyAmenities } from "../dummy-data/dummy-amenities";

export const Amenities = () => {
  return (
    <div className="space-y-4">
      {/* Scrollable container */}
      <div className="grid grid-cols-1 gap-4 overflow-y-auto max-h-64 p-2 border rounded-lg">
        {dummyAmenities.map((amenity, index) => {
          return (
            <div
              key={index}
              className="flex items-center justify-between p-2 bg-gray-100 rounded-lg"
            >
              {/* Name of the amenity */}
              <p className="text-sm font-medium text-gray-800">
                {amenity.name}
              </p>

              {/* Icon image */}
              <img
                src={amenity.image}
                alt={`amenity ${index}`}
                className="w-10 h-10 object-cover  "
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

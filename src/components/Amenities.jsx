import React from "react";
import { useState, useEffect } from "react";
//import { dummyAmenities } from "../dummy-data/dummy-amenities";
import axios from "axios";
import { getAmenities } from "../services";







export const Amenities = () => {
  const [amenities, setAmenities] = useState([]);
  //  I am setting a useState error to handle any errors before any rendering

  useEffect(() => {
    const getAmenities = async () => {
      try {
        const response = await axios.get("amenities/");
        console.log("services: getAmenities in the work", response.data);
        return response.data;
      } catch (err) {
        console.log(err.response.data.error);
        throw err;
      }
    };
    getAmenities();
  }),
    [];

  return (
    <div className="space-y-4">
      {/* Scrollable container */}
      <div className="grid grid-cols-1 gap-4 overflow-y-auto max-h-64 p-2 border rounded-lg">
        {amenities.map((amenities, index) => {
          return (
            <div
              key={index}
              className="flex items-center justify-between p-2 bg-gray-100 rounded-lg"
            >
              {/* Name of the amenity */}
              <p className="text-sm font-medium text-gray-800">
                {amenities.name}
              </p>

              {/* Icon image */}
              <img
                src={amenities.image}
                alt={`amenities ${index}`}
                className="w-10 h-10 object-cover  "
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

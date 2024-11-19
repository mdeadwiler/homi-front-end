import React, { useState } from "react";
import { dummyAmenities } from "../dummy-data/dummy-amenities";


export const ListingForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    cancellationPolicy: "",
    maxGuests: "",
    cleaningFee: "",
    pricePerNight: "",
    amenities: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (amenity) => {
    const updatedAmenities = formData.amenities.includes(amenity)
      ? formData.amenities.filter((item) => item !== amenity)
      : [...formData.amenities, amenity];
    setFormData({ ...formData, amenities: updatedAmenities });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Replace with backend API call
  };

  return (
    <div className="flex flex-col min-h-screen">
      <form
        onSubmit={handleSubmit}
        className="flex-grow max-w-4xl mx-auto p-8 text-white rounded-lg shadow-lg space-y-6"
        style={{ backgroundColor: "#204E4A" }} // Form green background
      >
        {/* Title */}
        <div className="grid grid-cols-4 items-center gap-4">
          <label htmlFor="title" className="block text-sm font-bold col-span-1">
            Title:
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full p-2 rounded-md text-gray-900 bg-white focus:outline-none col-span-3"
            placeholder="Enter a descriptive title"
          />
        </div>

        {/* Description */}
        <div className="grid grid-cols-4 items-start gap-4">
          <label
            htmlFor="description"
            className="block text-sm font-bold col-span-1"
          >
            Description:
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full p-2 h-24 rounded-md bg-white text-gray-900 focus:outline-none col-span-3"
            placeholder="Describe the property"
          ></textarea>
        </div>

        {/* Address Fields */}
        <h3 className="font-bold mb-2">Address</h3>
        <div className="grid grid-cols-2 gap-6">
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="street" className="block text-sm font-bold col-span-1">
              Street:
            </label>
            <input
              type="text"
              name="street"
              value={formData.street}
              onChange={handleChange}
              placeholder="Enter street address"
              className="p-2 rounded-md bg-white text-gray-900 focus:outline-none col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="city" className="block text-sm font-bold col-span-1">
              City:
            </label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="Enter city"
              className="p-2 rounded-md bg-white text-gray-900 focus:outline-none col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="state" className="block text-sm font-bold col-span-1">
              State:
            </label>
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              placeholder="Enter state"
              className="p-2 rounded-md bg-white text-gray-900 focus:outline-none col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="zip" className="block text-sm font-bold col-span-1">
              Zip:
            </label>
            <input
              type="text"
              name="zip"
              value={formData.zip}
              onChange={handleChange}
              placeholder="Enter zip code"
              className="p-2 rounded-md bg-white text-gray-900 focus:outline-none col-span-3"
            />
          </div>
        </div>

        {/* Amenities */}
        <div>
          <h3 className="font-bold mb-2">Amenities</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {dummyAmenities.map((amenity) => (
              <label
                key={amenity.name}
                htmlFor={`amenity-${amenity.name}`}
                className="flex items-center p-4 border border-gray-200 rounded-lg bg-white hover:scale-105 transition-transform duration-300 shadow-md cursor-pointer"
              >
                <input
                  type="checkbox"
                  id={`amenity-${amenity.name}`}
                  value={amenity.name}
                  checked={formData.amenities.includes(amenity.name)}
                  onChange={() => handleCheckboxChange(amenity.name)}
                  className="w-4 h-4 text-teal-600 bg-white border-gray-300 rounded focus:ring-teal-500"
                />
                <span className="ml-2 text-sm font-medium text-gray-900">
                  {amenity.name}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-500"
          >
            Submit
          </button>
        </div>
      </form>

      
    </div>
  );
};



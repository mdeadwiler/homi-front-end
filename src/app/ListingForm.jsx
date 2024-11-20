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
    <main className="flex justify-center items-center min-h-screen">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-screen-lg p-8 rounded-lg shadow-lg text-white"
        style={{ backgroundColor: "#204E4A" }}
      >
        <div className="grid grid-cols-2 gap-8">
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
            <label htmlFor="description" className="block text-sm font-bold col-span-1">
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

          {/* Cancellation Policy */}
          <div className="grid grid-cols-4 items-center gap-4">
            <label
              htmlFor="cancellationPolicy"
              className="block text-sm font-bold col-span-1"
            >
              Cancellation Policy:
            </label>
            <select
              id="cancellationPolicy"
              name="cancellationPolicy"
              value={formData.cancellationPolicy}
              onChange={handleChange}
              className="w-full p-2 rounded-md bg-white text-gray-900 focus:outline-none col-span-3"
            >
              <option value="" disabled>
                Select a cancellation policy
              </option>
              <option value="flexible">Flexible: Full refund 1 day prior</option>
              <option value="moderate">Moderate: Full refund 5 days prior</option>
              <option value="strict">Strict: Full refund 7 days prior</option>
            </select>
          </div>

          {/* Address Fields */}
          <div className="col-span-2">
            <h3 className="font-bold mb-2">Address</h3>
            {["Street", "City", "State", "Zip"].map((field) => (
              <div className="grid grid-cols-4 items-center gap-4 mb-4" key={field.toLowerCase()}>
                <label
                  htmlFor={field.toLowerCase()}
                  className="block text-sm font-bold col-span-1"
                >
                  {field}:
                </label>
                <input
                  type="text"
                  name={field.toLowerCase()}
                  value={formData[field.toLowerCase()]}
                  onChange={handleChange}
                  placeholder={`Enter ${field.toLowerCase()}`}
                  className="w-full p-2 rounded-md bg-white text-gray-900 focus:outline-none col-span-3"
                />
              </div>
            ))}
          </div>

          {/* Other Fields */}
          {[
            { label: "Max Guests", name: "maxGuests" },
            { label: "Cleaning Fee", name: "cleaningFee" },
            { label: "Price Per Night", name: "pricePerNight" },
          ].map((field) => (
            <div className="grid grid-cols-4 items-center gap-4" key={field.name}>
              <label htmlFor={field.name} className="block text-sm font-bold col-span-1">
                {field.label}:
              </label>
              <input
                type="number"
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                placeholder={`Enter ${field.label.toLowerCase()}`}
                className="w-full p-2 rounded-md bg-white text-gray-900 focus:outline-none col-span-3"
              />
            </div>
          ))}

          {/* Amenities */}
          <div className="col-span-2">
            <h3 className="font-bold mb-2">Amenities</h3>
            <div className="overflow-y-auto max-h-48 p-4 bg-gray-100 rounded-lg border border-gray-300">
              <div className="grid grid-cols-4 gap-4">
                {dummyAmenities.map((amenity) => (
                  <label
                    key={amenity.name}
                    htmlFor={`amenity-${amenity.name}`}
                    className="flex items-center p-2 border border-gray-200 rounded-md bg-white hover:scale-105 transition-transform duration-300 shadow-md cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      id={`amenity-${amenity.name}`}
                      value={amenity.name}
                      checked={formData.amenities.includes(amenity.name)}
                      onChange={() => handleCheckboxChange(amenity.name)}
                      className="w-4 h-4 text-teal-600 bg-white border-gray-300 rounded focus:ring-teal-500"
                    />
                    <img
                      src={amenity.image}
                      alt={amenity.name}
                      className="w-8 h-8 ml-2"
                    />
                    <span className="ml-2 text-sm font-medium text-gray-900">
                      {amenity.name}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="text-center mt-6">
          <button
            type="submit"
            className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-500"
          >
            Submit
          </button>
        </div>
      </form>
    </main>
  );
};

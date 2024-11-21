import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Rodal from "rodal";
import "rodal/lib/rodal.css";
import { getAmenities } from "../services/sub_services/amenityServices";
import { postProperty } from "../services/sub_services/propertyServices";

export const ListingForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    street: "",
    city: "",
    state: "",
    zip_code: "",
    cancellation_policy: "",
    max_guests: "",
    property_type: "",
    is_active: true,
    cleaning_fee: "",
    price_per_night: "",
    amenities: [],
  });
  const [photos, setPhotos] = useState([{ link: "" }]);
  const [amenities, setAmenities] = useState([]);
  

  const navigate = useNavigate();

  const fetchAmenities = async () => {
    try {
      const amenitiesData = await getAmenities();
      setAmenities(amenitiesData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAmenities();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleCheckboxChange = (amenityId) => {
    const updatedAmenities = formData.amenities.includes(amenityId)
      ? formData.amenities.filter((item) => item.id !== amenityId)
      : [...formData.amenities, amenityId];
    setFormData({ ...formData, amenities: updatedAmenities });
  };
  // Handle input change for a specific index
  const handlePhotoChange = (index, value) => {
    const updatedPhotos = [...photos];
    updatedPhotos[index] = { link: value };
    setPhotos(updatedPhotos);
  };
  // Add a new input field
  const addImageInput = () => {
    if (photos.length < 5) {
      setPhotos((prevPhotos) => [...prevPhotos, { link: "" }]);
    }
  };

  const removeImageInput = (idx) => {
    if (photos.length > 1) {
      const updatedPhotos = [...photos];
      updatedPhotos.splice(idx, 1);
      setPhotos(updatedPhotos);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedFormData = {
      ...formData,
      address: {
        street: formData.street,
        city: formData.city,
        state: formData.state,
        zip_code: formData.zip_code,
      },
    };

    delete updatedFormData.street;
    delete updatedFormData.city;
    delete updatedFormData.state;
    delete updatedFormData.zip_code;

    const propertyTypeLookup = {
      "Entire Place": "EN",
      "Private Room": "PR",
      "Shared Room": "SH",
      "Vacation Home": "VA",
      Loft: "LO",
      Hostel: "HO",
      Mansion: "MA",
      Villa: "VI",
      Castle: "CA",
      "Luxury Apartment": "LU",
    };

    updatedFormData.property_type =
      propertyTypeLookup[updatedFormData.property_type];

    updatedFormData.photos = photos;

    await postProperty(updatedFormData);

    navigate("/dashboard/host");
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-screen-lg p-8 rounded-lg shadow-lg text-white"
        style={{ backgroundColor: "#417367" }}
      >
        <div className="grid grid-cols-2 gap-8">
          {/* Title */}
          <div className="flex items-center">
            <label htmlFor="title" className="block text-sm font-bold w-1/3">
              Title:
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full p-2 rounded-md text-gray-900 bg-white focus:outline-none"
              placeholder="Enter a descriptive title"
            />
          </div>

          {/* Description */}
          <div className="flex items-center">
            <label
              htmlFor="description"
              className="block text-sm font-bold w-1/3"
            >
              Description:
            </label>
            <input
              type="textarea"
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full p-2 rounded-md bg-white text-gray-900 focus:outline-none"
              placeholder="Describe the property"
            />
          </div>

          {/* State Dropdown */}
          <div className="flex items-center mb-4">
            <label
              htmlFor="propertyType"
              className="block text-sm font-bold w-1/3"
            >
              Property Type:
            </label>
            <select
              id="propertyType"
              name="property_type"
              value={formData.property_type}
              onChange={handleChange}
              className="w-full p-2 rounded-md bg-white text-gray-900 focus:outline-none"
            >
              <option value="" disabled>
                Select a Property Type
              </option>
              {[
                "Private Room",
                "Shared Room",
                "Vacation Home",
                "Loft",
                "Hostel",
                "Mansion",
                "Villa",
                "Castle",
                "Luxury Apartment",
              ].map((propertyType) => (
                <option key={propertyType} value={propertyType}>
                  {propertyType}
                </option>
              ))}
            </select>
          </div>

          {/* Address Fields */}
          <div>
            <h3 className="font-bold mb-2">Address</h3>
            <div className="flex items-center mb-4">
              <label htmlFor="street" className="block text-sm font-bold w-1/3">
                Street:
              </label>
              <input
                type="text"
                name="street"
                value={formData.street}
                onChange={handleChange}
                placeholder="Enter street address"
                className="w-full p-2 rounded-md bg-white text-gray-900 focus:outline-none"
              />
            </div>
            <div className="flex items-center mb-4">
              <label htmlFor="city" className="block text-sm font-bold w-1/3">
                City:
              </label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="Enter city"
                className="w-full p-2 rounded-md bg-white text-gray-900 focus:outline-none"
              />
            </div>
            {/* State Dropdown */}
            <div className="flex items-center mb-4">
              <label htmlFor="state" className="block text-sm font-bold w-1/3">
                State:
              </label>
              <select
                id="state"
                name="state"
                value={formData.state}
                onChange={handleChange}
                className="w-full p-2 rounded-md bg-white text-gray-900 focus:outline-none"
              >
                <option value="" disabled>
                  Select a state
                </option>
                {[
                  "Alabama",
                  "Alaska",
                  "Arizona",
                  "Arkansas",
                  "California",
                  "Colorado",
                  "Connecticut",
                  "Delaware",
                  "Florida",
                  "Georgia",
                  "Hawaii",
                  "Idaho",
                  "Illinois",
                  "Indiana",
                  "Iowa",
                  "Kansas",
                  "Kentucky",
                  "Louisiana",
                  "Maine",
                  "Maryland",
                  "Massachusetts",
                  "Michigan",
                  "Minnesota",
                  "Mississippi",
                  "Missouri",
                  "Montana",
                  "Nebraska",
                  "Nevada",
                  "New Hampshire",
                  "New Jersey",
                  "New Mexico",
                  "New York",
                  "North Carolina",
                  "North Dakota",
                  "Ohio",
                  "Oklahoma",
                  "Oregon",
                  "Pennsylvania",
                  "Rhode Island",
                  "South Carolina",
                  "South Dakota",
                  "Tennessee",
                  "Texas",
                  "Utah",
                  "Vermont",
                  "Virginia",
                  "Washington",
                  "West Virginia",
                  "Wisconsin",
                  "Wyoming",
                ].map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex items-center mb-4">
              <label htmlFor="zip" className="block text-sm font-bold w-1/3">
                Zip Code:
              </label>
              <input
                type="text"
                name="zip_code"
                value={formData.zip_code}
                onChange={handleChange}
                placeholder="Enter Zip Code"
                className="w-full p-2 rounded-md bg-white text-gray-900 focus:outline-none"
              />
            </div>
          </div>
          {/* Cancellation Policy */}
          <div className="flex items-center mb-4">
            <label
              htmlFor="cancellationPolicy"
              className="block text-sm font-bold w-1/3"
            >
              Cancellation Policy:
            </label>
            <select
              id="cancellationPolicy"
              name="cancellation_policy"
              value={formData.cancellation_policy}
              onChange={handleChange}
              className="w-full p-2 rounded-md bg-white text-gray-900 focus:outline-none"
            >
              <option value="" disabled>
                Select a cancellation policy
              </option>
              <option value="Flexible">
                Flexible: Full refund 1 day prior
              </option>
              <option value="Moderate">
                Moderate: Full refund 5 days prior
              </option>
              <option value="Strict">Strict: Full refund 7 days prior</option>
              <option value="Long-Term">
                Long-Term: Receive a full refund if canceled at least 30 days
                before check-in; no refund after that
              </option>
              <option value="Super Strict 30 Days">
                Super Strict 30 Days: "You will receive half a refund if
                canceled at least 30 days before check-in; no refund after that
              </option>
              <option value="Super Strict 60 Days">
                Super Strict 60 Days: "You will receive half a refund if
                canceled at least 60 days before check-in; no refund after that
              </option>
              <option value="Non-Refundable">
                No Refund if canceled at any time
              </option>
            </select>
          </div>

          {/* Cleaning Fee */}
          <div className="flex items-center mb-4">
            <label
              htmlFor="cleaningFee"
              className="block text-sm font-bold w-1/3"
            >
              Cleaning Fee ($):
            </label>
            <input
              type="number"
              id="cleaningFee"
              name="cleaning_fee"
              value={formData.cleaning_fee}
              onChange={handleChange}
              placeholder="Enter cleaning fee"
              className="w-full p-2 rounded-md bg-white text-gray-900 focus:outline-none"
            />
          </div>

          {/* Price Per Night */}
          <div className="flex items-center mb-4">
            <label
              htmlFor="pricePerNight"
              className="block text-sm font-bold w-1/3"
            >
              Price Per Night ($):
            </label>
            <input
              type="number"
              id="pricePerNight"
              name="price_per_night"
              value={formData.price_per_night}
              onChange={handleChange}
              placeholder="Enter price per night"
              className="w-full p-2 rounded-md bg-white text-gray-900 focus:outline-none"
            />
          </div>

          {/* Max Guesets */}
          <div className="flex items-center mb-4">
            <label
              htmlFor="maxGuests"
              className="block text-sm font-bold w-1/3"
            >
              Max. Guests:
            </label>
            <input
              type="number"
              id="maxGuests"
              name="max_guests"
              value={formData.max_guests}
              onChange={handleChange}
              placeholder="Enter maximum number of guests"
              className="w-full p-2 rounded-md bg-white text-gray-900 focus:outline-none"
            />
          </div>

          <div className="mb-6">
            <h2 className="text-center text-lg font-bold text-gray-200 mb-4">
              Add Images
            </h2>
            {photos.map((photo, index) => (
              <div key={index} className="flex items-center space-x-4 mb-4">
                <label className="text-sm font-medium text-gray-200 mb-2">
                  Image {index + 1} URL:
                </label>
                <input
                  type="text"
                  value={photo.link}
                  onChange={(e) => handlePhotoChange(index, e.target.value)}
                  placeholder="Enter image URL"
                  className="w-full p-2 rounded-md bg-white text-gray-900 focus:outline-none"
                />
                {index === 0 ? null : (
                  <button
                    type="button"
                    onClick={() => removeImageInput(index)}
                    className="px-2 py-1 bg-red-500 text-white rounded-md hover:bg-red-400"
                  >
                    Remove Photo
                  </button>
                )}
              </div>
            ))}
            {photos.length < 5 && (
              <button
                type="button"
                onClick={addImageInput}
                className="mt-4 px-4 py-2 bg-primary text-white font-semibold rounded-lg shadow-md hover:bg-primary-dark"
              >
                Add Another Image
              </button>
            )}
          </div>

          {/* Amenities */}
          <div className="col-span-2 flex justify-center">
            <div className="w-1/2">
              <h3 className="font-bold mb-4 text-center">Amenities</h3>
              <div
                className="overflow-y-auto max-h-64 p-4 bg-gray-100 rounded-lg"
                style={{
                  border: "2px solid #ccc",
                  borderRadius: "30px",
                  height: 255,
                }}
              >
                <div className="grid grid-cols-3 gap-4">
                  {amenities.map((amenity) => (
                    <label
                      key={amenity.name}
                      htmlFor={`amenity-${amenity.name}`}
                      className="flex flex-col items-center p-4 border border-gray-200 rounded-lg bg-white hover:scale-105 transition-transform duration-300 shadow-md cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        id={`amenity-${amenity.name}`}
                        value={amenity.id}
                        checked={formData.amenities.includes(amenity.id)}
                        onChange={() => handleCheckboxChange(amenity.id)}
                        className="w-5 h-5 mb-3 text-teal-600 bg-white border-gray-300 rounded focus:ring-teal-500"
                      />
                      <img
                        src={amenity.image}
                        alt={amenity.name}
                        className="w-12 h-12 mb-2"
                      />
                      <span className="text-sm font-medium text-gray-900 text-center">
                        {amenity.name}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Submit Button */}

        <div className="text-center mt-6">
          <button
            type="submit"
            className="px-4 py-2 bg-buttonColor text-white rounded-md hover:bg-green-500"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
export default ListingForm;

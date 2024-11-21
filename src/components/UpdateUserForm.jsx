import { useState } from "react";
import { updateUser } from "../services";

export const UpdateUserForm = ({ isOpen, closeModal, user, refreshUser }) => {
  const [formData, setFormData] = useState({
    username: user?.username || "",
    email: user?.email || "",
    first_name: user?.first_name || "",
    last_name: user?.last_name || "",
    profile: {
      profile_pic: user?.profile?.profile_pic || "",
      bio: user?.profile?.bio || "",
    },
    password: "", // Default to an empty string
  });

  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "profile_pic" || name === "bio") {
      // Update nested profile data
      setFormData((prevData) => ({
        ...prevData,
        profile: {
          ...prevData.profile,
          [name]: value,
        },
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError(null); // Clear any previous error

      // Create a copy of formData, excluding password if it is blank
      const dataToSubmit = { ...formData };
      if (!dataToSubmit.password) {
        delete dataToSubmit.password;
      }

      const updatedUser = await updateUser(dataToSubmit);
      console.log("User updated successfully:", updatedUser);

      // Refresh user data in the parent component
      if (refreshUser) {
        refreshUser(updatedUser);
      }

      closeModal();
    } catch (err) {
      console.error("Failed to update user:", err.message);
      setError("Failed to update user profile. Please try again.");
    }
  };

  return (
    isOpen && (
      <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-white rounded-lg p-6 w-full max-w-4xl">
          <h2 className="text-xl font-semibold mb-6">Update Profile</h2>

          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

          <form onSubmit={handleSubmit}>
            {/* Two-Column Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left Column */}
              <div>
                <div className="mb-4">
                  <label
                    htmlFor="username"
                    className="block text-sm text-gray-500"
                  >
                    Username
                  </label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded mt-1"
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-sm text-gray-500"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded mt-1"
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="first_name"
                    className="block text-sm text-gray-500"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="first_name"
                    name="first_name"
                    value={formData.first_name}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded mt-1"
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="last_name"
                    className="block text-sm text-gray-500"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="last_name"
                    name="last_name"
                    value={formData.last_name}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded mt-1"
                  />
                </div>
              </div>

              {/* Right Column */}
              <div>
                <div className="mb-4">
                  <label htmlFor="bio" className="block text-sm text-gray-500">
                    Bio
                  </label>
                  <textarea
                    id="bio"
                    name="bio"
                    value={formData.profile.bio}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded mt-1"
                    rows="4"
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="profile_pic"
                    className="block text-sm text-gray-500"
                  >
                    Profile Picture URL
                  </label>
                  <input
                    type="text"
                    id="profile_pic"
                    name="profile_pic"
                    value={formData.profile.profile_pic}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded mt-1"
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="password"
                    className="block text-sm text-gray-500"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded mt-1"
                  />
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex justify-end gap-4 mt-6">
              <button
                type="button"
                onClick={closeModal}
                className="bg-buttonColor text-gray-700 py-2 px-4 rounded hover:bg-alternativeColor text-sm"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-buttonColor text-white py-2 px-4 rounded hover:bg-alternativeColor text-sm"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  );
};

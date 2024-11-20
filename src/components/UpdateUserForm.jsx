import React, { useState } from "react";

export const UpdateUserForm = ({ isOpen, closeModal, user }) => {
  const [formData, setFormData] = useState({
    username: user?.username || "", // Added username to the form data
    email: user?.email || "",
    first_name: user?.first_name || "",
    last_name: user?.last_name || "",
    profile_pic: user?.profile?.profile_pic || "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, we just log the data
    console.log(formData);
    // On submit, we close the modal for now (No backend connection yet)
    closeModal();
  };

  return (
    isOpen && (
      <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
        <div className="bg-white rounded-lg p-6 w-96">
          <h2 className="text-2xl font-semibold mb-4">Update Profile</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="username" className="block text-sm text-gray-500">
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
              <label htmlFor="email" className="block text-sm text-gray-500">
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
                value={formData.profile_pic}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded mt-1"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="block text-sm text-gray-500">
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

            <div className="flex justify-between mt-4">
              <button
                type="button"
                onClick={closeModal}
                className="bg-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-buttonColor text-white py-2 px-4 rounded hover:bg-alternativeColor"
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

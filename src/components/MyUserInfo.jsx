import React, { useState, useEffect } from "react";
import { verifyToken, updateUser } from "../services";
import { UpdateUserForm } from "./UpdateUserForm";
import { useNavigate, useLocation } from "react-router-dom";

export const MyUserInfo = ({ isHost }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation(); // Get the current URL path

  useEffect(() => {
    loadUserData();
  }, []);

  const loadUserData = async () => {
    try {
      const userData = await verifyToken();
      setUser(userData);
    } catch (err) {
      setError("Failed to load user information.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleBecomeHost = async () => {
    try {
      const updatedUser = await updateUser({
        profile: {
          is_host: true,
        },
      });
      setUser(updatedUser);
      alert("You are now a host!");
    } catch (err) {
      console.error("Error becoming a host:", err);
      setError("Failed to update profile.");
    }
  };

  const handleSwitchView = () => {
    // Switch between 'guest' and 'host' view based on the current URL
    if (location.pathname.includes("guest")) {
      navigate("/dashboard/host");
    } else {
      navigate("/dashboard/guest");
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  // If the path is host-specific and the user is not a host, return a message
  if (isHost && !user?.profile?.is_host) {
    return <p>You do not have access to this page.</p>;
  }

  if (!user) return <p>No user data available.</p>;

  return (
    <div className="max-w-sm mx-auto p-6 bg-white flex flex-col items-center">
      <h2 className="text-l mb-6 text-left text-textColor">
        Welcome {user.username}!
      </h2>
      <img
        src={user.profile?.profile_pic || "default-profile-pic-url.jpg"}
        alt="Profile Pic"
        className="w-32 h-32 rounded-full object-cover mb-4"
      />

      <div className="text-left w-full">
        <div className="mb-4">
          <p className="text-gray-500 text-sm">Email:</p>
          <p className="text-textColor">{user.email}</p>
        </div>

        <div className="mb-4">
          <p className="text-gray-500 text-sm">Name:</p>
          <p className="text-textColor">{`${user.first_name || "update"} ${
            user.last_name || "profile"
          }`}</p>
        </div>

        {user.profile?.bio && (
          <div className="mb-4">
            <p className="text-gray-500 text-sm">Bio:</p>
            <p className="text-textColor">{user.profile.bio}</p>
          </div>
        )}

        {/* Show profits only if the current path is "/dashboard/host" */}
        {location.pathname.includes("host") && user.profile?.is_host && (
          <div className="mb-4">
            <p className="text-gray-500 text-sm">Profits:</p>
            <p className="text-textColor">
              ${user.profile?.profits?.toFixed(2)}
            </p>
          </div>
        )}

        {/* Become a Host button or switch view button */}
        <div className="flex justify-center">
          {user.profile?.is_host ? (
            <button
              onClick={handleSwitchView}
              className="bg-buttonColor text-white py-2 px-4 rounded hover:bg-alternativeColor"
            >
              {location.pathname.includes("guest")
                ? "Switch to Host View"
                : "Switch to Guest View"}
            </button>
          ) : (
            <button
              onClick={handleBecomeHost}
              className="bg-buttonColor text-whiteColor py-2 px-4 rounded hover:bg-alternativeColor"
            >
              Become a Host!
            </button>
          )}
        </div>

        {/* Update Profile Button */}
        <div className="flex justify-center mt-4">
          <button
            onClick={openModal}
            className="bg-buttonColor text-whiteColor py-2 px-4 rounded hover:bg-alternativeColor"
          >
            Update Profile
          </button>
        </div>
      </div>

      {/* Modal */}
      <UpdateUserForm
        isOpen={isModalOpen}
        closeModal={closeModal}
        user={user}
        refreshUser={loadUserData}
      />
    </div>
  );
};

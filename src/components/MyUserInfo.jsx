import React, { useState, useEffect } from "react";
import { verifyToken } from "../services";
import { UpdateUserForm } from "./UpdateUserForm";

export const MyUserInfo = ({ isHost }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  // If the path is host-specific and the user is not a host, return a message
  if (isHost && !user?.profile?.is_host) {
    return <p>You do not have access to this page.</p>;
  }

  if (!user) return <p>No user data available.</p>;

  return (
    <div className="max-w-sm mx-auto p-6 bg-white flex flex-col items-center">
      <h2 className="text-l mb-6 text-left  text-textColor">
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

        <div className="mb-4">
          {user.profile?.is_host ? (
            <>
              <p className="text-gray-500 text-sm">Profits:</p>
              <p className="text-textColor">
                ${user.profile?.profits?.toFixed(2)}
              </p>
            </>
          ) : (
            <div className="flex justify-center">
              <button className="bg-buttonColor text-white py-2 px-4 rounded hover:bg-alternativeColor">
                Become a Host!
              </button>
            </div>
          )}
        </div>

        {/* Update Profile Button */}
        <div className="flex justify-center">
          <button
            onClick={openModal}
            className="bg-buttonColor text-white py-2 px-4 rounded hover:bg-alternativeColor"
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
        refreshUser={loadUserData} // Refresh user data after update
      />
    </div>
  );
};

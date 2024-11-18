import React, { useState } from "react";
import { dummyUser, dummyProfile } from "../dummy-data/dummy-user";

export const MyUserInfo = () => {
  //NOTE: THIS NEEDS TO CHANGE ONCE WE GET API
  const [user] = useState(dummyUser);
  const [profile] = useState(dummyProfile);

  const handleBecomeHost = () => {
    alert("You are now a host!"); // Action for "Become a Host"
  };

  return (
    <div className="max-w-sm mx-auto p-6 bg-white shadow-lg rounded-lg flex flex-col items-center">
      <img
        src={profile.profile_pic}
        alt="Profile"
        className="w-32 h-32 rounded-full object-cover mb-4"
      />

      <h2 className="text-2xl font-semibold mb-6 text-center">
        Account Information
      </h2>

      <div className="text-left w-full">
        <div className="mb-4">
          <p className="text-gray-500 text-sm">Email:</p>
          <p className="text-gray-800">{user.email}</p>
        </div>

        <div className="mb-4">
          <p className="text-gray-500 text-sm">Username:</p>
          <p className="text-gray-800">{user.username}</p>
        </div>

        <div className="mb-4">
          <p className="text-gray-500 text-sm">Name:</p>
          <p className="text-gray-800">{`${user.first_name} ${user.last_name}`}</p>
        </div>

        <div className="mb-4">
          <p className="text-gray-500 text-sm">Bio:</p>
          <p className="text-gray-800">{profile.bio}</p>
        </div>

        {/* Conditional Rendering for Host */}
        {profile.is_host ? (
          <div className="mb-4">
            <p className="text-gray-500 text-sm">Profits:</p>
            <p className="text-gray-800">${profile.profits.toFixed(2)}</p>
          </div>
        ) : (
          <button
            onClick={handleBecomeHost}
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300 mb-4"
          >
            Become a Host
          </button>
        )}
      </div>

      <button className="w-full bg-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-400 transition-colors duration-300">
        Update
      </button>
    </div>
  );
};

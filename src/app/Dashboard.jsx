import React from "react";
import { MyUserInfo } from "../components/MyUserInfo";

export const Dashboard = () => {
  return (
    <div className="flex h-screen gap-x-6">
      {/* Left Column */}
      <div className="w-2/6 bg-whiteColor p-4 rounded-lg">
        <MyUserInfo />
      </div>

      {/* Middle Column */}
      <div className="w-3/6 bg-alternativeColor p-4 rounded-lg">
        <p>Middle Column</p>
      </div>

      {/* Right Column */}
      <div className="w-2/6 bg-whiteColor p-4 rounded-lg">
        <p>Right Column</p>
      </div>
    </div>
  );
};

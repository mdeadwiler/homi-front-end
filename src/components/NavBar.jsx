
import React from "react";
import { FaBars, FaMapMarkedAlt } from "react-icons/fa";

export const NavBar = () => {
  return (
    <nav className="px-4 py-3 flex justify-center">
      <div className="flex items-center text-xl">
        <FaBars className=" text-textColor me-4 cursor-pointer" />
        <span className="text-textColor">Where:</span>
      </div>
      <div className="flex items-center gap-x-5">
        <div className="relative md:w-65">
          <span className="relative md:absolute inset-y-0 left-0 flex items-center pl-2">
            <button className="p-1 focus:outline-none text-textColor md:text-black"><FaMapMarkedAlt /></button></span>
          <input type="text" />
        </div>
      </div>
    </nav>
  );
};


import React from "react";
import { useContext } from 'react';
import { NavLink } from "react-router-dom";
//import { AuthedUserContext } from "../services/sub_services/userServices";

export const Sidebar = ({ setShowRegister, setShowLogin, user }) => {
//const { user } = useContext(AuthedUserContext);

  const authenticatedOptions = (
    <>
      <NavLink className="nav-link" to="/bookings">
        Bookings
      </NavLink>
      <NavLink className="nav-link" to="/listing-form">
        Listing Form
      </NavLink>
      <NavLink className="nav-link" to="booking-form">
        Book a Property
      </NavLink>
      <NavLink className="nav-link" to="listing">
        Listings
      </NavLink>
      <NavLink className="nav-link" to="/sign-out">
        Log Out
      </NavLink>
    </>
  );

  const unauthenticatedOptions = (
    <>
      <ul>
        <li>
          <NavLink className="nav-link" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link" to="/about">
            About homi
          </NavLink>
        </li>
      </ul>
    </>
  );

  return (
    <nav className="absolute top-full left-0 w-full space-y-4 text-lg font-semibold bg-white shadow-md transform transition-transform duration-300 ease-in-out">
      <div className="p-4">
        <ul>
          <li>
            <button onClick={() => setShowRegister(true)}>Register</button>
          </li>
          <li>
            <button onClick={() => setShowLogin(true)}>Log In</button>
          </li>
        </ul>
        <nav>
          {user && <div className="link welcome">Welcome, {user.username}</div>}
          <div className="nav-links">
            {user ? authenticatedOptions : unauthenticatedOptions}
          </div>
        </nav>
      </div>
    </nav>
  );
};

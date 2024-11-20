//import { useContext } from 'react';
import { NavLink } from "react-router-dom";
//import { AuthedUserContext } from "../services/sub_services/userServices";
import services from '../services/index.js'

export const Sidebar = ({ setShowRegister, setShowLogin, user, setOpen }) => {

  const authenticatedOptions = (
    <>
    <ul>
      <li><NavLink className="nav-link" to="/bookings">
        Bookings
     </NavLink></li>
    <li> <NavLink className="nav-link" to="/listing-form">
        Listing Form
      </NavLink></li>
      <li><NavLink className="nav-link" to="listing/booking">
        Book a Property
      </NavLink></li>
     <li><NavLink className="nav-link" to="listing">
        Listings
      </NavLink></li>
      <li><NavLink className="nav-link" to="/" onClick={services.signOut}>
        Log Out
      </NavLink></li>
      </ul>
    </>
  );

  const unauthenticatedOptions = (
    <>
      <ul>
        <li>
          <NavLink className="nav-link" to="/" onClick={() => setOpen(false)}>
            Home
          </NavLink>
        </li>
        <li>

          <NavLink className="nav-link" to="/about" onClick={() => setOpen(false)}></NavLink>

          <NavLink
            className="nav-link"
            to="/about"
            onClick={() => setOpen(false)}
          >

            About homi
          </NavLink>
        </li>
          <li>

            <button onClick={() => {
              setShowRegister(true)
              setOpen(false)
            }}>Register</button>
          </li>
          <li>
            <button onClick={() => {
              setShowLogin(true)
              setOpen(false)
            }}>Log In</button>
          </li>
      </ul>
    </>
  );

  return (
    <nav className="absolute top-full left-0 w-full space-y-4 text-lg font-semibold bg-white shadow-md transform transition-transform duration-300 ease-in-out">
      <div className="p-4">
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

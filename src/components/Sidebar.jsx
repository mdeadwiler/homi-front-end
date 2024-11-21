
//import { useContext } from 'react';
import { NavLink, useNavigate} from "react-router-dom";
//import { AuthedUserContext } from "../services/sub_services/userServices";
import services from '../services/index.js'

export const Sidebar = ({ setShowRegister, setShowLogin, user, setOpen }) => {
  const  navigate = useNavigate();
  const handleLogout = () => {
    services.signOut()
    setOpen(false)
    navigate('/')
  }

  const authenticatedOptions = (
    <>
    <ul className="flex-col w-rounded-lg  p-4">
    <li>
          <NavLink className="nav-link" to="/dashboard/guest" onClick={() => setOpen(false)}>
            Home
          </NavLink>
          </li>
      <li><NavLink className="nav-link" to="/bookings" onClick={() => setOpen(false)}>
        Bookings
     </NavLink></li>
    <li> <NavLink className="nav-link" to="/listing-form" onClick={() => setOpen(false)}>
        Listing Form
      </NavLink></li>
      
     <li><NavLink className="nav-link" to="listings" onClick={() => setOpen(false)}>
        Book a listing
      </NavLink></li>
      <li><NavLink className="nav-link" to="/" onClick={handleLogout}>
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
    <li><NavLink className="nav-link" to="listings">
        Listings
      </NavLink></li>

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
    <nav className={`absolute top-20 right-20 h-full w-1/4 max-w-sm font-serif text-whiteColor bg-alternativeColor rounded-2xl shadow-md transform transition-transform duration-300 ease-in-out  ${
      setOpen ? "translate-y-6" : "translate-x-full"
    }`}>
      <div className=" bg-alternativeColor rounded-2xl p-6">
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

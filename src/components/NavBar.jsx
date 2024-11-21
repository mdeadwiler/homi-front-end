import { useState, useRef, useEffect } from "react";
import { Twirl as Hamburger } from "hamburger-react";
import { FaSearch } from "react-icons/fa";
import { Sidebar } from "./Sidebar";
import { NavLink, Link, useNavigate } from "react-router-dom";

export const Navbar = ({ setShowRegister, setShowLogin, user }) => {

  const navigate = useNavigate();
  const [isOpen, setOpen] = useState(false);
  const [whereData, setWhereData] = useState('')
  const navbarRef = useRef(null);

  // Close the sidebar when clicking outside
  const handleClickOutside = (event) => {
    if (navbarRef.current && !navbarRef.current.contains(event.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    // Cleanup the event listener on unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);
  
  const handleWhereChange = (e) => setWhereData(e.target.value)
  const handleSubmit = (e) => {

    e.preventDefault();
    console.log('in navbar where data is ', whereData)
    navigate("/listings", { state: { whereData } })
    setWhereData('')

  }

  return (
    <nav ref={navbarRef} className="flex justify-evenly items-center w-full fixed top-0 left-0 bg-backgroundColor  z-10 px-4 py-3">

      <NavLink to="/" className="text-5xl text-logoColor">
        homi
      </NavLink>

      <form className="flex items-center gap-x-2" onSubmit={handleSubmit}>
        <label htmlFor="search-bar">Where: </label>
        <input
          id="search-bar"
          type="text"
          value={whereData}
          onChange={handleWhereChange}
          className="w-full px-4 py-1 pl-2 rounded shadow outline-none"
        />
        <button className="p-1 focus:outline-none text-textColor md:text-black" 
        type="submit">
            <FaSearch />
        </button>
      </form>

      {/* will design the the open navbar */}
      <Hamburger toggled={isOpen} toggle={setOpen} />
      {isOpen && (
        <Sidebar
          setOpen={setOpen}
          setShowRegister={setShowRegister}
          setShowLogin={setShowLogin}
          user={user}
        />

      )}
    </nav>
  );
};

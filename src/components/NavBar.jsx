import { useState } from 'react';
import { Twirl as Hamburger } from 'hamburger-react'
import { FaSearch } from 'react-icons/fa';
import { Sidebar } from './Sidebar';

export const Navbar = ({setShowRegister, setShowLogin}) => {
  const [isOpen, setOpen] = useState(false)
  

  return (
     <nav className="flex justify-evenly relative">
      <h1 className="text-4xl">homi</h1>
      <div className="flex items-center gap-x-2">
          <label htmlFor='search-bar'>Where: </label>
          <input
            id='search-bar'
            type="text"
            className=" w-full px-4 py-1 pl-12 rounded shadow outline-none"
          />
          <button className="p-1 focus:outline-none text-textColor md:text-black">
            <FaSearch />
          </button>
      </div>
      {/* will design the the open navbar */}
      <Hamburger toggled={isOpen} toggle={setOpen} />
      {isOpen && <Sidebar setShowRegister={setShowRegister} setShowLogin={setShowLogin}/>}
    </nav> 
  );
};







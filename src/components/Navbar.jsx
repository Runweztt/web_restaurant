import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";


const Navbar = () => {
  const navigate = useNavigate();
  const [showmenu, setShowmenu] = useState(false);

  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400">
      {/* Logo */}
      <img
        onClick={() => navigate("/")}
        className="w-44 cursor-pointer"
        src=''
        alt="logo"
      />

      {/* Desktop Links */}
      <ul className="hidden md:flex items-center gap-5 font-medium">
        <li>
          <NavLink to="/" className="hover:text-primary">Home</NavLink>
        </li>
        <li>
          <NavLink to="/About" className="hover:text-primary">About</NavLink>
        </li>
        <li>
          <NavLink to="/Booking" className="hover:text-primary">Booking</NavLink>
        </li>
      </ul>

      {/* Right section: Sign in + menu icon */}
      <div className="flex items-center gap-4">
        <button
          onClick={() => navigate("/Login")}
          className="bg-primary text-white px-6 py-2 rounded-full font-light hidden md:block"
        >
          Sign In
        </button>

        {/* Mobile menu toggle */}
        <div className="text-2xl md:hidden cursor-pointer">
          {showmenu ? (
            <FaTimes onClick={() => setShowmenu(false)} />
          ) : (
            <FaBars onClick={() => setShowmenu(true)} />
          )}
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 right-0 h-full w-full bg-white z-50 transform transition-transform duration-500 ease-in-out md:hidden ${
            showmenu ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between px-5 py-6 border-b">
            <img className="w-36" src='' alt="logo" />
            <FaTimes
              className="text-2xl cursor-pointer"
              onClick={() => setShowmenu(false)}
            />
          </div>

          <ul className="flex flex-col items-center gap-4 mt-5 text-lg font-medium">
            <li>
              <NavLink to="/" onClick={() => setShowmenu(false)}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/About" onClick={() => setShowmenu(false)}>About</NavLink>
            </li>
            <li>
              <NavLink to="/Booking" onClick={() => setShowmenu(false)}>Booking</NavLink>
            </li>
            <li>
              <button
                onClick={() => {
                  setShowmenu(false);
                  navigate("/Login");
                }}
                className="bg-primary hover:bg-blue-700 transition text-white px-6 py-2 rounded-full "
              >
                Sign In
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

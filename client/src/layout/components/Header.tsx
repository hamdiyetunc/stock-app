import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import {
  FaHome,
  FaBoxOpen,
  FaStore,
  FaMapMarkerAlt,
  FaInfoCircle,
} from "react-icons/fa";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="bg-[#74dddd] bg-gradient-to-r from-[#0077b6] via-[#74dddd] to-[#0077b6] text-white shadow-md sticky top-0 rounded-b-2xl z-50">
      <div className="container mx-auto flex items-center justify-between p-4 sm:p-6">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <Link to="/home">
            <img
              src={logo}
              alt="Logo"
              className="h-12 w-12 sm:h-14 sm:w-14 lg:h-16 lg:w-16"
            />
          </Link>
          <span className="text-2xl sm:text-2xl font-extrabold bg-gradient-to-r from-[#0077b6] via-[#74dddd] to-[#0077b6] text-transparent bg-clip-text drop-shadow-md">
            ST Management
          </span>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={handleMenuToggle}
          className="md:hidden text-white hover:text-dark-aqua transition-all duration-300 transform hover:scale-125"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-8 w-8 transition-all duration-300 ${
              menuOpen ? "rotate-90" : ""
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Mobile Menu */}
        <div
          className={`${
            menuOpen
              ? "translate-x-0 opacity-100"
              : "translate-x-full opacity-0"
          } md:hidden fixed top-0 right-0 w-2/4 h-full bg-gradient-to-t from-[#0077b6] via-[#74dddd] to-[#74dddd] transition-all duration-500 ease-in-out rounded-l-3xl flex flex-col items-center py-6 z-50`}
        >
          {/* Menu Items */}
          <div className="flex flex-col flex-grow items-center mt-10">
            <Link to="/home" className="text-white py-4">
              <FaHome className="h-8 w-8" />
            </Link>
            <Link to="/stocks" className="text-white py-4">
              <FaBoxOpen className="h-8 w-8" />
            </Link>
            <Link to="/stores" className="text-white py-4">
              <FaStore className="h-8 w-8" />
            </Link>
            <Link to="/map" className="text-white py-4">
              <FaMapMarkerAlt className="h-8 w-8" />
            </Link>
            <Link to="/aboutus" className="text-white py-4">
              <FaInfoCircle className="h-8 w-8" />
            </Link>
          </div>

          {/* Close Button */}
          <button
            onClick={closeMenu}
            className="text-white mb-6 text-5xl hover:text-dark-aqua transition-all duration-300 transform hover:scale-125 absolute bottom-0 w-full"
          >
            &times;
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

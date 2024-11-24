import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { RiProductHuntFill } from "react-icons/ri";
import { IoMdMail } from "react-icons/io";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
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

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6">
          <a
            href="/products"
            className="font-extrabold bg-gradient-to-r from-[#0077b6] via-[#74dddd] to-[#0077b6] text-transparent bg-clip-text drop-shadow-md hover:text-[#a5e0fd] text-lg sm:text-xl transition duration-300 transform hover:scale-105"
          >
            Products
          </a>
          <a
            href="/contact"
            className="font-extrabold bg-gradient-to-r from-[#0077b6] via-[#74dddd] to-[#0077b6] text-transparent bg-clip-text drop-shadow-md hover:text-[#a5e0fd] text-lg sm:text-xl transition duration-300 transform hover:scale-105"
          >
            Contact
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={handleMenuToggle}
          className="md:hidden text-white transition-all duration-300 transform"
        >
          <div
            className={`relative w-6 h-6 flex justify-center items-center transition-transform duration-500 ${
              menuOpen ? "" : ""
            }`}
          >
            {/* Top Line */}
            <span
              className={`absolute w-6 h-1 bg-white rounded-full transition-all duration-500 ${
                menuOpen ? "rotate-45 translate-y-0" : "translate-y-[-6px]"
              }`}
            ></span>
            {/* Middle Line */}
            <span
              className={`absolute w-6 h-1 bg-white rounded-full transition-all duration-500 ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            {/* Bottom Line */}
            <span
              className={`absolute w-6 h-1 bg-white rounded-full transition-all duration-500 ${
                menuOpen ? "-rotate-45 translate-y-0" : "translate-y-[6px]"
              }`}
            ></span>
          </div>
        </button>

        {/* Mobile Menu */}
        <div
          className={`${
            menuOpen
              ? "translate-y-[80px] opacity-100"
              : "-translate-y-full opacity-0"
          } fixed top-0 left-0 w-full bg-gradient-to-r from-[#0077b6] via-[#74dddd] to-[#0077b6] transition-all duration-500 ease-in-out flex flex-col items-center py-6 z-50`}
        >
          {/* Menu Items */}
          <div className="flex flex-row space-x-24 flex-grow items-center">
            <Link
              to="/products"
              onClick={() => setMenuOpen(false)}
              className="text-white py-4 hover:scale-125"
            >
              <RiProductHuntFill className="h-8 w-8" />
            </Link>
            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="text-white py-4 hover:scale-125"
            >
              <IoMdMail className="h-8 w-8" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

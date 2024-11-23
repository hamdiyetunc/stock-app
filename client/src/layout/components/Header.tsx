import React, { useState } from "react";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

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
          <img
            src={logo}
            alt="Logo"
            className="h-12 w-12 sm:h-14 sm:w-14 lg:h-16 lg:w-16"
          />
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
            href="#"
            className="font-extrabold bg-gradient-to-r from-[#0077b6] via-[#74dddd] to-[#0077b6] text-transparent bg-clip-text drop-shadow-md hover:text-[#a5e0fd] text-lg sm:text-xl transition duration-300 transform hover:scale-105"
          >
            Contact
          </a>
        </nav>

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
        {menuOpen && (
          <nav className="md:hidden absolute">
            <Link to="/" className="block text-white py-2">
              Home
            </Link>
            <Link to="/stocks" className="block text-white py-2">
              Stocks
            </Link>
            <Link to="#" className="block text-white py-2">
              Contact
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;

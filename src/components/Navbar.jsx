import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll to change navbar style on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className={`bg-white shadow-sm py-4 z-40 font-custom sticky top-0 transition-all duration-300 ${
        isScrolled ? "text-white shadow-md" : ""
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link
            to="#home"
            className="text-gray-800 hover:text-gray-600 text-sm font-semibold transition duration-300"
          >
            Home
          </Link>
          <Link
            to="#event"
            className="text-gray-800 hover:text-gray-600 text-sm font-semibold transition duration-300"
          >
            Event
          </Link>
          <Link
            to="#activity"
            className="text-gray-800 hover:text-gray-600 text-sm font-semibold transition duration-300"
          >
            Activity
          </Link>
          <Link
            to="#trainer"
            className="text-gray-800 hover:text-gray-600 text-sm font-semibold transition duration-300"
          >
            Trainer
          </Link>
          <Link
            to="#about"
            className="text-gray-800 hover:text-gray-600 text-sm font-semibold transition duration-300"
          >
            About
          </Link>
        </div>

        {/* Hamburger Menu (Mobile Only) */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="text-gray-800 focus:outline-none"
            aria-controls="mobile-menu"
            aria-expanded={isOpen ? "true" : "false"}
          >
            <span className="sr-only">Open main menu</span>
            <i className="fas fa-bars text-lg"></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-6 py-4 space-y-4 bg-white rounded-lg shadow-lg absolute top-16 left-1/2 transform -translate-x-1/2 w-full max-w-xs">
          <Link
            to="#home"
            className="block text-gray-800 hover:text-gray-600 text-base font-medium rounded-lg p-2 transition duration-300"
          >
            Home
          </Link>
          <Link
            to="#event"
            className="block text-gray-800 hover:text-gray-600 text-base font-medium rounded-lg p-2 transition duration-300"
          >
            Event
          </Link>
          <Link
            to="#activity"
            className="block text-gray-800 hover:text-gray-600 text-base font-medium rounded-lg p-2 transition duration-300"
          >
            Activity
          </Link>
          <Link
            to="#trainer"
            className="block text-gray-800 hover:text-gray-600 text-base font-medium rounded-lg p-2 transition duration-300"
          >
            Trainer
          </Link>
          <Link
            to="#about"
            className="block text-gray-800 hover:text-gray-600 text-base font-medium rounded-lg p-2 transition duration-300"
          >
            About
          </Link>
        </div>
      )}
    </section>
  );
}

export default Navbar;

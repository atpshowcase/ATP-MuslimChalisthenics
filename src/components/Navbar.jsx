import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

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

  // Function to scroll to section
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsOpen(false); // Close mobile menu after clicking a link
    }
  };

  return (
    <section
      className={`bg-white shadow-sm py-4 z-40 font-custom sticky top-0 transition-all duration-300 ${isScrolled ? "text-white shadow-md" : ""
        }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <button
            onClick={() => scrollToSection("home")}
            className="text-gray-800 hover:text-gray-600 text-sm font-semibold transition duration-300"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("events")}
            className="text-gray-800 hover:text-gray-600 text-sm font-semibold transition duration-300"
          >
            Events
          </button>
          <button
            onClick={() => scrollToSection("activity")}
            className="text-gray-800 hover:text-gray-600 text-sm font-semibold transition duration-300"
          >
            Activity
          </button>
          <button
            onClick={() => scrollToSection("trainer")}
            className="text-gray-800 hover:text-gray-600 text-sm font-semibold transition duration-300"
          >
            Trainer
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="text-gray-800 hover:text-gray-600 text-sm font-semibold transition duration-300"
          >
            About
          </button>
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


      {/* Mobile Menu with Animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }} // Start invisible and above
            animate={{ opacity: 1, y: 0 }} // Fade in and slide down
            exit={{ opacity: 0, y: -20 }} // Fade out and slide up
            transition={{ duration: 0.4, ease: "easeInOut" }} // Smooth transition
            className="md:hidden px-6 py-4 space-y-4 bg-white rounded-lg shadow-lg absolute top-16 left-1 right-1/2 "
          >
            {["home", "events", "activity", "trainer", "about"].map((section) => (
              <motion.button
                key={section}
                onClick={() => scrollToSection(section)}
                whileHover={{ scale: 1.05 }} // Slight scale on hover
                whileTap={{ scale: 0.95 }} // Slight shrink when tapped
                className="w-full text-gray-800 hover:text-gray-600 text-lg font-medium rounded-lg p-3 transition duration-300 transform focus:outline-none focus:ring-2 focus:ring-gray-600"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}

export default Navbar;

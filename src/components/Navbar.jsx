import { useState } from "react";
import { Link } from "react-router-dom";
import { logo } from "../assets/muscal";
import Container from "./Container";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="py-2 z-40">
      <Container>
        <div className="flex items-center justify-center h-16 relative">
          {/* Logo and title */}
          <div className="flex items-center gap-4 absolute left-4 md:static">
            {/* Uncomment if the logo is required */}
            <img
              className="h-4 md:h-20 w-auto"
              src={logo}
              alt="Workflow"
            />
            <br/>
  
          </div>

          <div className="text-center">
              <p className="text-lg py-4 font-bold">
                We Are Nothing Without Allah
              </p>
            </div>
          {/* Centered title */}

          {/* Hamburger menu */}
          <div className="-mr-2 flex md:hidden absolute right-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <i className="fas fa-bars"></i>
            </button>
          </div>
        </div>
      </Container>
    </nav>
  );
}

export default Navbar;

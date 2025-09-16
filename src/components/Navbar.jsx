import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <div className="text-2xl font-bold cursor-pointer">
              <Link to="main" smooth={true} duration={500}>
                Khushi Gupta
              </Link>
            </div>
          </div>

          <div className="hidden md:block">
            <ul className="ml-10 flex items-center space-x-8">
              <li>
                <Link
                  to="main"
                  smooth={true}
                  duration={500}
                  className="font-medium hover:text-red-500 cursor-pointer"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="about"
                  smooth={true}
                  duration={500}
                  className="font-medium hover:text-red-500 cursor-pointer"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="skill"
                  smooth={true}
                  duration={500}
                  className="font-medium hover:text-red-500 cursor-pointer"
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  to="project"
                  smooth={true}
                  duration={500}
                  className="font-medium hover:text-red-500 cursor-pointer"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link to="contact" smooth={true} duration={500}>
                  <button className="bg-red-600 px-4 py-2 rounded-lg text-white font-semibold hover:bg-red-700 transition-colors">
                    Contact Me
                  </button>
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-neutral-900">
          <ul className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center">
            <li>
              <Link
                onClick={toggleMenu}
                to="main"
                smooth={true}
                duration={500}
                className="block px-3 py-2 rounded-md text-base font-medium hover:text-red-500 cursor-pointer"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                onClick={toggleMenu}
                to="about"
                smooth={true}
                duration={500}
                className="block px-3 py-2 rounded-md text-base font-medium hover:text-red-500 cursor-pointer"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                onClick={toggleMenu}
                to="skill"
                smooth={true}
                duration={500}
                className="block px-3 py-2 rounded-md text-base font-medium hover:text-red-500 cursor-pointer"
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                onClick={toggleMenu}
                to="project"
                smooth={true}
                duration={500}
                className="block px-3 py-2 rounded-md text-base font-medium hover:text-red-500 cursor-pointer"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                onClick={toggleMenu}
                to="contact"
                smooth={true}
                duration={500}
                className="block px-3 py-4 rounded-md text-base font-medium text-red-500 cursor-pointer"
              >
                Contact Me
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

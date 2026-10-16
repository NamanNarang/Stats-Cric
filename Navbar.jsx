import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'; // Icons for hamburger and close

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to handle hamburger menu toggle

  // Toggle the menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-900 shadow-md">
      <div className="flex items-center justify-between p-4">
        {/* Brand Name */}
        <div className="text-3xl font-extrabold text-white">
          STATS-CRIC
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="sm:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
          </button>
        </div>

        {/* Links for larger screens */}
        <div className="hidden sm:flex space-x-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? 'text-blue-400 px-3 py-2 text-md font-medium'
                : 'text-gray-300 hover:text-blue-400 px-3 py-2 text-md font-medium'
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/find-matches"
            className={({ isActive }) =>
              isActive
                ? 'text-blue-400 px-3 py-2 text-md font-medium'
                : 'text-gray-300 hover:text-blue-400 px-3 py-2 text-md font-medium'
            }
          >
            Find Matches
          </NavLink>
          <NavLink
            to="/compare-players"
            className={({ isActive }) =>
              isActive
                ? 'text-blue-400 px-3 py-2 text-md font-medium'
                : 'text-gray-300 hover:text-blue-400 px-3 py-2 text-md font-medium'
            }
          >
            Compare Players
          </NavLink>
          <NavLink
            to="/news"
            className={({ isActive }) =>
              isActive
                ? 'text-blue-400 px-3 py-2 text-md font-medium'
                : 'text-gray-300 hover:text-blue-400 px-3 py-2 text-md font-medium'
            }
          >
            News
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? 'text-blue-400 px-3 py-2 text-md font-medium'
                : 'text-gray-300 hover:text-blue-400 px-3 py-2 text-md font-medium'
            }
          >
            About
          </NavLink>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="sm:hidden bg-gray-800 text-white flex flex-col space-y-4 py-4 px-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? 'text-blue-400 py-2 text-md font-medium'
                : 'text-gray-300 hover:text-blue-400 py-2 text-md font-medium'
            }
            onClick={toggleMenu} // Close menu when a link is clicked
          >
            Home
          </NavLink>
          <NavLink
            to="/find-matches"
            className={({ isActive }) =>
              isActive
                ? 'text-blue-400 py-2 text-md font-medium'
                : 'text-gray-300 hover:text-blue-400 py-2 text-md font-medium'
            }
            onClick={toggleMenu}
          >
            Find Matches
          </NavLink>
          <NavLink
            to="/compare-players"
            className={({ isActive }) =>
              isActive
                ? 'text-blue-400 py-2 text-md font-medium'
                : 'text-gray-300 hover:text-blue-400 py-2 text-md font-medium'
            }
            onClick={toggleMenu}
          >
            Compare Players
          </NavLink>
          <NavLink
            to="/news"
            className={({ isActive }) =>
              isActive
                ? 'text-blue-400 py-2 text-md font-medium'
                : 'text-gray-300 hover:text-blue-400 py-2 text-md font-medium'
            }
            onClick={toggleMenu}
          >
            News
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? 'text-blue-400 py-2 text-md font-medium'
                : 'text-gray-300 hover:text-blue-400 py-2 text-md font-medium'
            }
            onClick={toggleMenu}
          >
            About
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

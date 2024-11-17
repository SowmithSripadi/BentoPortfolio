// src/components/NavBar.jsx

import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <header>
      <nav className="flex items-center lg:p-2 p-10">
        <div className="ml-auto flex  md:space-x-20 mt-10  md:mr-20 mr-10 space-x-12">
          <Link
            to="/about"
            className="cursor-pointer hover:text-gray-500 text-sm"
            aria-label="Navigate to About"
          >
            About
          </Link>
          <Link
            to="/experience"
            className="cursor-pointer hover:text-gray-500 text-sm"
            aria-label="Navigate to Experience"
          >
            Experience
          </Link>
          <Link
            to="/projects"
            className="cursor-pointer hover:text-gray-500 text-sm"
            aria-label="Navigate to Projects"
          >
            Projects
          </Link>
          <Link
            to="/"
            className="cursor-pointer hover:text-gray-500 text-sm"
            aria-label="Navigate to Home"
          >
            Home
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;

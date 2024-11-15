import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <header>
      <nav className="flex items-center p-4">
        <div className="ml-auto flex lg:space-x-36 md:space-x-36 mt-10 lg:mr-20 md:mr-20 mr-10 space-x-12">
          <Link
            to="/section1"
            className="cursor-pointer hover:text-gray-500"
            aria-label="Navigate to Heading 1"
          >
            Heading 1
          </Link>
          <Link
            to="/section2"
            className="cursor-pointer hover:text-gray-500"
            aria-label="Navigate to Heading 2"
          >
            Heading 2
          </Link>
          <Link
            to="/section3"
            className="cursor-pointer hover:text-gray-500"
            aria-label="Navigate to Heading 3"
          >
            Heading 3
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;

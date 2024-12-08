// src/components/NavBar.jsx

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Switch from "./ToggleButton";

function NavBar() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "Light");
  const [isChecked, setIsChecked] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
      setIsChecked(true);
    } else {
      root.classList.remove("dark");
      setIsChecked(false);
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleThemeChange = () => {
    setTheme((prev) => (prev === "Light" ? "dark" : "Light"));
    setIsChecked((prev) => !prev);
  };
  return (
    <header>
      <nav className="flex items-center justify-center lg:p-1 p-10 overflow-hidden">
        <div className="md:ml-auto flex md:space-x-20 mt-10  md:mr-20 space-x-6">
          <Link
            to="/"
            className="cursor-pointer hover:text-gray-500 text-[18px]  font-OldStandardTT"
            aria-label="Navigate to Home"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="cursor-pointer hover:text-gray-500 text-[18px]  font-OldStandardTT"
            aria-label="Navigate to About"
          >
            About
          </Link>
          <Link
            to="/experience"
            className="cursor-pointer hover:text-gray-500 text-[18px]  font-OldStandardTT"
            aria-label="Navigate to Experience"
          >
            Experience
          </Link>
          <Link
            to="/projects"
            className="cursor-pointer hover:text-gray-500 text-[18px]  font-OldStandardTT"
            aria-label="Navigate to Projects"
          >
            Projects
          </Link>
          <div className="flex items-center justify-center">
            <Switch
              handleThemeChange={handleThemeChange}
              isChecked={isChecked}
            />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;

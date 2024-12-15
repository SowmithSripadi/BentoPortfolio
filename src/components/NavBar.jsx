// src/components/NavBar.jsx

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Switch from "./ToggleButton";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { MdDarkMode } from "react-icons/md";

function NavBar() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "Light");
  const [isChecked, setIsChecked] = useState(
    localStorage.getItem("theme") === "dark"
  );
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen((prev) => !prev);
  };

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
      <nav className="flex justify-end p-12 w-full">
        {/* Mobile Menu Button */}
        <div className="md:hidden flex flex-col items-center">
          <button
            onClick={toggle}
            type="button"
            className="z-50 cursor-pointer p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            aria-label="Toggle menu"
          >
            {open ? (
              <IoMdCloseCircleOutline className="h-8 w-8 text-gray-800 dark:text-white" />
            ) : (
              <RxHamburgerMenu className="h-8 w-8 text-gray-800 dark:text-white" />
            )}
          </button>

          {/* Mobile Menu */}
          <div
            className={`z-40 fixed top-0 right-0 w-full h-screen dark:bg-black bg-white flex flex-col items-center justify-center transform ${
              open ? "translate-x-0" : "translate-x-full"
            } transition-transform duration-300 ease-in-out gap-8`}
          >
            <Link
              to="/"
              className="text-2xl font-semibold text-gray-800 dark:text-white hover:text-gray-500"
              onClick={toggle}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-2xl font-semibold text-gray-800  dark:text-white hover:text-gray-500"
              onClick={toggle}
            >
              About
            </Link>
            <Link
              to="/experience"
              className="text-2xl font-semibold text-gray-800 dark:text-white hover:text-gray-500"
              onClick={toggle}
            >
              Experience
            </Link>
            <Link
              to="/projects"
              className="text-2xl font-semibold text-gray-800 dark:text-white hover:text-gray-500"
              onClick={toggle}
            >
              Projects
            </Link>
            <div className="mt-8 flex gap-3">
              <Switch
                handleThemeChange={handleThemeChange}
                isChecked={isChecked}
              />
              <MdDarkMode className="w-6 h-6" />
            </div>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex md:items-center md:space-x-8 mt-2 mr-4 md:gap-8">
          <Link
            to="/"
            className="text-lg font-OldStandardTT text-gray-800 hover:text-gray-500 dark:text-white"
            aria-label="Navigate to Home"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-lg font-OldStandardTT text-gray-800 hover:text-gray-500 dark:text-white"
            aria-label="Navigate to About"
          >
            About
          </Link>
          <Link
            to="/experience"
            className="text-lg font-OldStandardTT text-gray-800 hover:text-gray-500 dark:text-white"
            aria-label="Navigate to Experience"
          >
            Experience
          </Link>
          <Link
            to="/projects"
            className="text-lg font-OldStandardTT text-gray-800 hover:text-gray-500 dark:text-white"
            aria-label="Navigate to Projects"
          >
            Projects
          </Link>
          <div className="flex items-center gap-4">
            <Switch
              handleThemeChange={handleThemeChange}
              isChecked={isChecked}
            />
            <MdDarkMode className="w-5 h-5" />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;

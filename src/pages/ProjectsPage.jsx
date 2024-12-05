import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import ImageSlider from "../components/ImageSlider.jsx";

import {
  instaFoodImages,
  todoImages,
  tictactoe,
  passwordGenerator,
  currencyConverter,
} from "../config/imagesData.js";

const projectDescriptions = {
  Instafood: [
    "Built a responsive food-ordering website using Vanilla HTML, CSS, and JavaScript, focusing on user-friendly design and seamless interaction.",
    "Optimized website performance by leveraging lightweight CSS techniques and compressing image assets, achieving faster load times and improved user retention.",
    "Leveraged pure JavaScript to build reusable components, streamlining development and enhancing code maintainability.",
  ],
  Todo: [
    "To-Do List Application: Created a responsive web app allowing users to add, delete, and mark tasks as completed.",
    "Dark Mode Feature: Implemented a dark mode toggle using CSS variables and JavaScript for better user experience.",
    "Data Persistence: Used localStorage to save tasks, ensuring they remain available across browser sessions.",
  ],
  TicTacToe: [
    "Tic-Tac-Toe Game: Developed an interactive web application of the classic Tic-Tac-Toe game, allowing two players to compete by marking X and O on a 3x3 grid.",
    "Game Logic and Winning Conditions: Implemented dynamic game logic to handle player turns, detect winning combinations or a draw, and display corresponding messages with a restart option.",
    "Dark Mode Feature: Added a dark mode toggle using CSS variables and JavaScript to enhance user experience, along with responsive design for various screen sizes.",
  ],
  PasswordGenerator: [
    "Password Generator Application: Built a React application that generates random passwords, allowing users to create secure passwords easily.",
    "Customizable Features: Users can adjust the password length and choose to include numbers and special characters to meet different security requirements.",
    "Copy to Clipboard: Implemented functionality to copy the generated password directly to the clipboard for user convenience.",
  ],
  CurrencyConverter: [
    "Currency Converter Application: Created a React application that allows users to convert amounts between different currencies by selecting the desired currencies and entering an amount.",
    "Real-Time Conversion: Implemented functionality to fetch current exchange rates, ensuring accurate and up-to-date conversion results for various currencies.",
    "Interactive Features: Added features like swapping currencies and disabling input fields for converted amounts to enhance user experience and prevent input errors.",
  ],
};

function ProjectsPage() {
  const [showMiniProjects, setShowMiniProjects] = useState(false);
  const toggleMiniProjects = () => {
    setShowMiniProjects((prev) => !prev);
  };

  return (
    <motion.div
      className="min-h-screen sm:py-16 py-8 px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="lg:text-[35px] text-2xl font-Tangerine text-center text-gray-800 sm:mb-[60px] mb-10 ">
        Projects
      </h1>
      <div className="flex flex-col gap-8 ">
        <div className="bg-gray-200 p-8 rounded-3xl">
          <div className="flex flex-col">
            <div className="font-Tangerine text-[1.6rem] mb-12 flex flex-col  gap-0 items-center">
              <p>InstaFood</p>
              <div className="flex gap-4">
                <a
                  href="https://instafoodorder.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline text-sm"
                >
                  Live Demo
                </a>
                <a
                  href="https://github.com/SowmithSripadi/Instafood"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline text-sm"
                >
                  GitHub
                </a>
              </div>
            </div>

            <div className="flex w-full justify-center md:gap-[70px] gap-4 flex-col lg:flex-row lg:mb-8">
              <div className="lg:w-1/2 flex lg:justify-end w-full justify-center mx-auto lg:mx-0 ">
                <div className="xl:w-[600px] md:w-[500px] md:h-[300px] w-[370px] h-[250px] pl-8">
                  <ImageSlider images={instaFoodImages} />
                </div>
              </div>
              <div className="lg:w-1/2 flex justify-center w-full">
                <div className="lg:w-[600px] w-[400px] flex flex-col md:gap-6 gap-3 px-6 md:px-0 text-gray-700 list-inside">
                  {projectDescriptions["Instafood"].map((desc, idx) => (
                    <li key={idx}>{desc}</li>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Toggle Button */}
        <div className="flex justify-center my-8">
          <button
            onClick={toggleMiniProjects}
            className="flex items-center text-blue-600 hover:scale-110 transition-all duration-300 text-md font-Tangerine bg-gray-300 p-3 rounded-lg"
            aria-expanded={showMiniProjects}
            aria-controls="mini-projects-section"
          >
            {showMiniProjects ? "Hide Mini Projects" : "View Mini Projects"}
            <FaChevronDown
              className={`ml-2 transition-transform duration-300 ${
                showMiniProjects ? "transform rotate-180" : ""
              }`}
            />
          </button>
        </div>
        {/* Mini Projects */}
        <AnimatePresence initial={false}>
          {showMiniProjects && (
            <motion.div
              id="mini-projects-section"
              key="mini-projects"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="overflow-hidden grid md:grid-cols-2 grid-cols-1 w-full gap-4 md:p-8 p-4"
            >
              <div className="">
                <div className="flex flex-col">
                  <div className="font-Tangerine text-[1.2rem] mb-4 flex flex-col  gap-0 items-center">
                    <p>Todo App</p>
                    <div className="flex gap-4">
                      <a
                        href="https://todoapp-darkmode.netlify.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline text-sm"
                      >
                        Live Demo
                      </a>
                      <a
                        href="https://github.com/SowmithSripadi/TodoApp"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline text-sm"
                      >
                        GitHub
                      </a>
                    </div>
                  </div>

                  <div className="flex flex-col w-full justify-center ">
                    <div className=" flex justify-center mb-2">
                      <div className="w-[450px] h-[250px] overflow-hidden">
                        <ImageSlider images={todoImages} />
                      </div>
                    </div>
                    <div className="md:p-6 p-2 pt-0 flex justify-center">
                      <div className="w-[450px] flex flex-col gap-2 text-gray-700 list-inside justify-center">
                        {projectDescriptions["Todo"].map((desc, idx) => (
                          <li className="text-sm" key={idx}>
                            {desc}
                          </li>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="flex flex-col">
                  <div className="font-Tangerine text-[1.2rem] mb-4 flex flex-col  gap-0 items-center">
                    <p>Tic Tac Toe</p>
                    <div className="flex gap-4">
                      <a
                        href="https://tictactoeminimal.netlify.app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline text-sm"
                      >
                        Live Demo
                      </a>
                      <a
                        href="https://github.com/SowmithSripadi/Tic-Tac-Toe"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline text-sm"
                      >
                        GitHub
                      </a>
                    </div>
                  </div>

                  <div className="flex flex-col w-full justify-center ">
                    <div className=" flex justify-center">
                      <div className="w-[450px] h-[250px] overflow-hidden">
                        <ImageSlider images={tictactoe} />
                      </div>
                    </div>
                    <div className="md:p-6 p-2 pt-0 flex justify-center">
                      <div className="w-[450px] flex flex-col gap-2 text-gray-700 list-inside justify-center">
                        {projectDescriptions["TicTacToe"].map((desc, idx) => (
                          <li className="text-sm" key={idx}>
                            {desc}
                          </li>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="flex flex-col">
                  <div className="font-Tangerine text-[1.2rem] mb-4 flex flex-col  gap-0 items-center">
                    <p>Password Generator</p>
                    <div className="flex gap-4">
                      <a
                        href="https://passwordtextgenerator.netlify.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline text-sm"
                      >
                        Live Demo
                      </a>
                      <a
                        href="https://github.com/SowmithSripadi/React-projects"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline text-sm"
                      >
                        GitHub
                      </a>
                    </div>
                  </div>

                  <div className="flex flex-col w-full justify-center ">
                    <div className=" flex justify-center">
                      <div className="w-[450px] h-[250px] overflow-hidden">
                        <ImageSlider images={passwordGenerator} />
                      </div>
                    </div>
                    <div className="md:p-6 p-2 pt-0 flex justify-center">
                      <div className="w-[450px] flex flex-col gap-2 text-gray-700 list-inside justify-center">
                        {projectDescriptions["PasswordGenerator"].map(
                          (desc, idx) => (
                            <li className="text-sm" key={idx}>
                              {desc}
                            </li>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="flex flex-col">
                  <div className="font-Tangerine text-[1.2rem] mb-4 flex flex-col  gap-0 items-center">
                    <p>Currency Converterr</p>
                    <div className="flex gap-4">
                      <a
                        href="https://currencyconvertermoney.netlify.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline text-sm"
                      >
                        Live Demo
                      </a>
                      <a
                        href="https://github.com/SowmithSripadi/React-projects"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline text-sm"
                      >
                        GitHub
                      </a>
                    </div>
                  </div>

                  <div className="flex flex-col w-full justify-center ">
                    <div className=" flex justify-center">
                      <div className="w-[450px] h-[250px] overflow-hidden">
                        <ImageSlider images={currencyConverter} />
                      </div>
                    </div>
                    <div className="md:p-6 p-2 pt-0 flex justify-center">
                      <div className="w-[450px] flex flex-col gap-2 text-gray-700 list-inside justify-center">
                        {projectDescriptions["CurrencyConverter"].map(
                          (desc, idx) => (
                            <li className="text-sm" key={idx}>
                              {desc}
                            </li>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default ProjectsPage;

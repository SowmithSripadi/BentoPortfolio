import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

import ProjectTile from "../components/ProjectTile.jsx";
import FeaturedProjectTile from "../components/FeaturedProjectTile.jsx";

import {
  instaFoodImages,
  todoImages,
  tictactoe,
  passwordGenerator,
  currencyConverter,
  socialCartImages,
  triedAndTestedImages,
} from "../config/ImagesData.js";

const projectDescriptions = {
  "Social Cart": [
    "Real-Time Collaborative Shopping: Implemented a feature that allows two users to add items simultaneously to a shared cart, ensuring updates are reflected in real-time.",
    "Live Chat Integration: Utilized Socket.io and Redux to enable users to communicate directly within the shared cart session, enhancing user engagement and coordination.",
    "Optimized Data Storage: Leveraged MongoDB with Mongoose to store product data efficiently, including images, categories, and pricing, ensuring quick and streamlined data retrieval.",
  ],
  "Tried And Tested": [
    "User-Driven Solutions: Developed a blogging platform enabling users to share and discover solutions to real-world problems.",
    "AI-Generated Visuals: Integrated AI to dynamically generate images based on blog content, improving the visual appeal and context of posts.",
    "Scalable Backend Architecture: Built RESTful APIs with a modular structure for enhanced scalability, maintainability, and future feature expansions.",
    "Robust Middleware: Added middleware for request handling, user authentication, and data validation, strengthening security and maintaining application stability.",
  ],
  "Insta Food": [
    "Built a responsive food-ordering website using Vanilla HTML, CSS, and JavaScript, focusing on user-friendly design and seamless interaction.",
    "Optimized website performance by leveraging lightweight CSS techniques and compressing image assets, achieving faster load times and improved user retention.",
    "Leveraged pure JavaScript to build reusable components, streamlining development and enhancing code maintainability.",
  ],
  "To do": [
    "To-Do List Application: Created a responsive web app allowing users to add, delete, and mark tasks as completed.",
    "Dark Mode Feature: Implemented a dark mode toggle using CSS variables and JavaScript for better user experience.",
    "Data Persistence: Used localStorage to save tasks, ensuring they remain available across browser sessions.",
  ],
  "Tic Tac Toe": [
    "Tic-Tac-Toe Game: Developed an interactive web application of the classic Tic-Tac-Toe game, allowing two players to compete by marking X and O on a 3x3 grid.",
    "Game Logic and Winning Conditions: Implemented dynamic game logic to handle player turns, detect winning combinations or a draw, and display corresponding messages with a restart option.",
    "Dark Mode Feature: Added a dark mode toggle using CSS variables and JavaScript to enhance user experience, along with responsive design for various screen sizes.",
  ],
  "Password Generator": [
    "Password Generator Application: Built a React application that generates random passwords, allowing users to create secure passwords easily.",
    "Customizable Features: Users can adjust the password length and choose to include numbers and special characters to meet different security requirements.",
    "Copy to Clipboard: Implemented functionality to copy the generated password directly to the clipboard for user convenience.",
  ],
  "Currency Converter": [
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
      <h1 className="lg:text-[35px] text-2xl font-OldStandardTT text-center text-gray-800 sm:mb-[60px] mb-10">
        Projects
      </h1>
      <div className="flex flex-col gap-8 w-full">
        {/* Main Project: InstaFood */}
        <FeaturedProjectTile
          name="Social Cart"
          imageData={socialCartImages}
          projectDescriptions={projectDescriptions}
          githubLink={"https://github.com/SowmithSripadi/SocialCart"}
        />
        <FeaturedProjectTile
          name="Tried And Tested"
          imageData={triedAndTestedImages}
          projectDescriptions={projectDescriptions}
          githubLink={"https://github.com/SowmithSripadi/TriedandTested"}
        />

        {/* Toggle Button */}
        <div className="flex justify-center my-8">
          <button
            onClick={toggleMiniProjects}
            className="flex items-center text-blue-600 transition-all duration-300 text-md font-OldStandardTT bg-gray-300 px-6 py-4 rounded-lg w-[210px]"
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
              className="overflow-hidden grid md:grid-cols-2 grid-cols-1 w-full gap-4 md:p-8 p-4 gap-y-12 xl:px-40"
            >
              {/* Todo App */}
              <ProjectTile
                name="To do"
                imageData={todoImages}
                projectDescriptions={projectDescriptions}
                demoLink={"https://todoapp-darkmode.netlify.app"}
                githubLink={"https://github.com/SowmithSripadi/TodoApp"}
              />

              {/* Tic Tac Toe */}
              <ProjectTile
                name="Tic Tac Toe"
                imageData={tictactoe}
                projectDescriptions={projectDescriptions}
                demoLink={"https://tictactoeminimal.netlify.app"}
                githubLink={"https://github.com/SowmithSripadi/Tic-Tac-Toe"}
              />

              {/* Password Generator */}
              <ProjectTile
                name="Password Generator"
                imageData={passwordGenerator}
                projectDescriptions={projectDescriptions}
                demoLink={"https://passwordtextgenerator.netlify.app/"}
                githubLink={"https://github.com/SowmithSripadi/React-projects"}
              />

              {/* Currency Converter */}
              <ProjectTile
                name="Currency Converter"
                imageData={currencyConverter}
                projectDescriptions={projectDescriptions}
                demoLink={"https://currencyconvertermoney.netlify.app"}
                githubLink={"https://github.com/SowmithSripadi/React-projects"}
              />
              {/* Insta food web page */}
              <ProjectTile
                name="Insta Food"
                imageData={instaFoodImages}
                projectDescriptions={projectDescriptions}
                demoLink={"https://instafoodorder.netlify.app/"}
                githubLink={"https://github.com/SowmithSripadi/Instafood"}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default ProjectsPage;

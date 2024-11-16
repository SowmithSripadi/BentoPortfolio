// src/pages/About.jsx

import React from "react";
import { motion } from "framer-motion";
import { FaDownload, FaReact, FaNodeJs, FaDatabase } from "react-icons/fa"; // Example icons
import {
  SiMongodb,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
} from "react-icons/si"; // Example icons

function About() {
  return (
    <motion.div
      className="min-h-screen py-16 px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-4xl md:text-6xl font-Tangerine text-center text-gray-800 mb-12">
        About Me
      </h1>

      <div className="max-w-4xl mx-auto bg-white  rounded-lg overflow-hidden">
        <div className="md:flex">
          {/* Profile Image */}
          <div className="md:flex-shrink-0">
            <img
              className="h-48 w-full object-cover md:w-48"
              src="/path-to-your-image.jpg" // Replace with your image path
              alt="Profile"
            />
          </div>

          <div className="p-8">
            <motion.p
              className="text-lg text-gray-700 mb-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Hello! I'm <span className="font-semibold">Sowmith Sripadi</span>,
              a passionate{" "}
              <span className="font-semibold">Full Stack Developer</span> based
              in <span className="font-semibold">Florida, USA</span>. With a
              keen interest in building scalable web applications and a strong
              foundation in computer science, I strive to deliver high-quality
              projects that make a difference.
            </motion.p>

            <motion.p
              className="text-lg text-gray-700 mb-6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              I hold a{" "}
              <span className="font-semibold">
                Master's in Computer Science
              </span>{" "}
              from{" "}
              <span className="font-semibold">
                Florida International University
              </span>{" "}
              and a{" "}
              <span className="font-semibold">
                Bachelor's in Computer Science and Engineering
              </span>{" "}
              from{" "}
              <span className="font-semibold">MVSR Engineering College</span>.
              My experience includes working with renowned companies like{" "}
              <span className="font-semibold">Accenture</span>, where I honed my
              skills in developing robust applications using the MERN stack.
            </motion.p>

            <motion.p
              className="text-lg text-gray-700 mb-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              When I'm not coding, I enjoy{" "}
              <span className="font-semibold">hiking</span> and{" "}
              <span className="font-semibold">photography</span>, which help me
              stay creative and inspired.
            </motion.p>

            {/* Skills Section */}
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Skills
              </h2>
              <ul className="list-none grid grid-cols-2 md:grid-cols-3 gap-4">
                <li className="flex items-center">
                  <FaReact className="text-blue-500 mr-2" size={24} />
                  React.js
                </li>
                <li className="flex items-center">
                  <FaNodeJs className="text-green-500 mr-2" size={24} />
                  Node.js
                </li>
                <li className="flex items-center">
                  <SiMongodb className="text-green-600 mr-2" size={24} />
                  MongoDB
                </li>
                <li className="flex items-center">
                  <SiTailwindcss className="text-teal-500 mr-2" size={24} />
                  Tailwind CSS
                </li>
                <li className="flex items-center">
                  <FaDatabase className="text-yellow-500 mr-2" size={24} />
                  SQL / NoSQL
                </li>
                <li className="flex items-center">
                  <SiJavascript className="text-yellow-300 mr-2" size={24} />
                  JavaScript
                </li>
                <li className="flex items-center">
                  <SiTypescript className="text-blue-600 mr-2" size={24} />
                  TypeScript
                </li>
                <li className="flex items-center">
                  <FaDownload className="text-gray-500 mr-2" size={24} />
                  Git & GitHub
                </li>
                <li className="flex items-center">
                  <FaDownload className="text-gray-500 mr-2" size={24} />
                  RESTful APIs
                </li>
                {/* Add more skills with icons as needed */}
              </ul>
            </motion.div>

            {/* Download Resume Button */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              <a
                href="/Sowmith_Sripadi_Resume.pdf" // Replace with your resume path
                download
                className="inline-flex items-center bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
              >
                <FaDownload className="mr-2" />
                Download Resume
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default About;

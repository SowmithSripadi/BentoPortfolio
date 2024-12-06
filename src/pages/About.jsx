// src/pages/About.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  FaDownload,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGithub,
  FaPython,
} from "react-icons/fa"; // Example icons
import { TbBrandCpp } from "react-icons/tb";
import { GrMysql } from "react-icons/gr";
import { SiPostman } from "react-icons/si";
import {
  SiMongodb,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
} from "react-icons/si"; // Example icons
import ResumeButton from "../ui/ResumeButton";
import Image from "../components/Image";

function About() {
  return (
    <motion.div
      className="min-h-screen md:py-16 py-8 px-4 sm:px-6 lg:px-8 md:px-14 relative"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="lg:text-[35px] text-2xl font-OldStandardTT text-center text-gray-800 md:mb-[100px] mb-12 ">
        About Me
      </h1>

      <div className="absolute left-[120px] top-0 h-full border-r-[1.5px] border-gray-300 xl:block hidden"></div>
      <div className="max-w-[900px] mx-auto bg-white rounded-lg overflow-hidden ">
        <div className="md:flex items-start gap-16 mb-14">
          {/* Profile Image */}
          <div className="md:w-1/3 flex-shrink-0">
            <Image
              className="md:h-full md:w-full object-cover rounded-lg h-[300px] mx-auto md:mb-0 mb-12"
              src="../images/Potrait.jpg"
              alt="Profile"
            />
          </div>

          {/* Content Section */}
          <div className="md:w-2/3 md:p-8 md:pt-0 p-8 pb-0 ">
            <motion.p
              className="text-md text-gray-700 mb-8"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Hello! I'm <span className="font-semibold">Sowmith Sripadi</span>,
              a <span className="font-semibold">Full Stack Developer</span> with
              a passion for building scalable and efficient web applications. I
              bring expertise in crafting seamless user experiences and robust
              backend systems.
            </motion.p>

            <motion.div
              className="text-md text-gray-700 mb-8"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <ul className="list-disc list-inside space-y-6">
                <li>
                  <span className="font-semibold">Master's</span> in Computer
                  Science at{" "}
                  <span className="font-semibold">
                    Florida International University
                  </span>
                </li>
                <li>
                  Bachelor's in Computer Science and Engineering from MVSR
                  Engineering College
                </li>
              </ul>
              <div className="mt-8">
                My professional experience includes delivering impactful
                solutions at <span className="font-semibold">Accenture</span>,
                leveraging technologies like React, Node.js, and MongoDB.
              </div>
            </motion.div>

            <motion.p
              className="text-md text-gray-700 mb-8"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              Beyond coding, I enjoy spending time at the{" "}
              <span className="font-semibold">gym</span> to stay fit and enhance
              my creativity through{" "}
              <span className="font-semibold">drawing</span>. These activities
              keep me balanced and motivated.
            </motion.p>
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-8">
        <motion.div
          className="mb-[20px] sm:mx-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <h2 className="text-xl font-semibold text-gray-800 mb-12">Skills</h2>
          <ul className="list-none grid grid-cols-2 md:grid-cols-3  md:gap-x-[200px] gap-y-6 gap-x-14 ">
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
              <FaGithub className="text-gray-500 mr-2" size={24} />
              Git & GitHub
            </li>
            <li>
              <TbBrandCpp className=" mr-2" size={28} />
            </li>
            <li className="flex items-center">
              <GrMysql className="text-[#00758f] mr-2" size={24} />
              MySQL
            </li>
            <li className="flex items-center">
              <SiPostman className="text-[#EF5B25] mr-2" size={24} />
              Postman
            </li>
            <li className="flex items-center">
              <FaPython className=" mr-2" size={24} />
              Python
            </li>
            <li className="flex items-center">
              <FaDownload className="text-gray-500 mr-2" size={24} />
              RESTful APIs
            </li>
          </ul>
        </motion.div>
      </div>
      <motion.div
        className="text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <ResumeButton name={"Download Resume"} />
      </motion.div>
    </motion.div>
  );
}

export default About;

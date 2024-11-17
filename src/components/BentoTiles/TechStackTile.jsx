import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaDatabase,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiPostman,
  SiMysql,
  SiTailwindcss,
  SiCplusplus,
} from "react-icons/si";
import { motion } from "framer-motion";
import { itemVariants } from "../../animation/animateVariants";

function TechStackTile() {
  return (
    <motion.div
      className="grid-item bg-[#F8A9C0] p-[18px] flex flex-col gap-4"
      variants={itemVariants}
    >
      <p className="font-Tangerine text-xl tracking-wide text-center">
        Tech Stack
      </p>

      {/* Icons Container with Flex Wrap */}
      <div className="flex flex-wrap justify-center gap-4">
        {/* MERN Stack Icons */}
        <SiMongodb
          size={23}
          color="#4DB33D"
          title="MongoDB"
          className="transition-transform transform hover:scale-110"
          aria-label="MongoDB"
        />
        <SiExpress
          size={23}
          color="#000000"
          title="Express.js"
          className="transition-transform transform hover:scale-110"
          aria-label="Express.js"
        />
        <FaReact
          size={23}
          color="#61DBFB"
          title="React.js"
          className="transition-transform transform hover:scale-110"
          aria-label="React.js"
        />
        <FaNodeJs
          size={23}
          color="#68A063"
          title="Node.js"
          className="transition-transform transform hover:scale-110"
          aria-label="Node.js"
        />

        {/* Additional Technologies */}
        <SiPostman
          size={23}
          color="#FF6C37"
          title="Postman"
          className="transition-transform transform hover:scale-110"
          aria-label="Postman"
        />
        <SiMysql
          size={23}
          color="#00758F"
          title="MySQL"
          className="transition-transform transform hover:scale-110"
          aria-label="MySQL"
        />
        <SiTailwindcss
          size={23}
          color="#38B2AC"
          title="Tailwind CSS"
          className="transition-transform transform hover:scale-110"
          aria-label="Tailwind CSS"
        />
        <SiCplusplus
          size={23}
          color="#00599C"
          title="C++"
          className="transition-transform transform hover:scale-110"
          aria-label="C++"
        />
        <FaPython
          size={23}
          color="#306998"
          title="Python"
          className="transition-transform transform hover:scale-110"
          aria-label="Python"
        />
        <FaHtml5
          size={23}
          color="#E34C26"
          title="HTML5"
          className="transition-transform transform hover:scale-110"
          aria-label="HTML5"
        />
        <FaCss3Alt
          size={23}
          color="#264DE4"
          title="CSS3"
          className="transition-transform transform hover:scale-110"
          aria-label="CSS3"
        />
      </div>
    </motion.div>
  );
}

export default TechStackTile;

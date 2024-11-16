import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaGithub,
  FaGlobe,
} from "react-icons/fa"; // Example icons from React Icons
import { motion } from "framer-motion";
import { itemVariants } from "../../animation/animateVariants";

function ContactTile() {
  return (
    <motion.div
      className="grid-item bg-[#FEEDAE] p-8 cursor-pointer hover:bg-opacity-90 transition duration-300"
      tabIndex="0"
      role="button"
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          handleNavigate();
        }
      }}
      aria-label="Navigate to Contact"
      variants={itemVariants}
    >
      <p className="font-Tangerine text-2xl tracking-wide mb-4">Contact</p>

      <div className="space-y-2">
        {/* Email */}
        <div className="flex items-center">
          <FaEnvelope className="text-red-500 mr-2" />
          <a
            href="mailto:sowmithsripadi1@gmail.com"
            className="text-gray-700 hover:underline"
          >
            sowmithsripadi1@gmail.com
          </a>
        </div>

        {/* LinkedIn */}
        <div className="flex items-center">
          <FaLinkedin className="text-blue-700 mr-2" />
          <a
            href="https://www.linkedin.com/in/sowmithsripadi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:underline"
          >
            LinkedIn Profile
          </a>
        </div>

        {/* GitHub */}
        <div className="flex items-center">
          <FaGithub className="text-gray-800 mr-2" />
          <a
            href="https://github.com/SowmithSripadi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:underline"
          >
            GitHub Profile
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default ContactTile;

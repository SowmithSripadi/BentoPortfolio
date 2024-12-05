import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaGithub,
  FaGlobe,
} from "react-icons/fa"; // Example icons from React Icons
import { MdEmail } from "react-icons/md";
import { motion } from "framer-motion";
import { itemVariants } from "../../animation/animateVariants";

function ContactTile() {
  return (
    <motion.div
      className="grid-item bg-yellow p-8 cursor-pointer hover:bg-opacity-90 transition duration-300"
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
      <p className="font-Tangerine text-xl tracking-wide mb-2 text-darkBrown">
        Contact
      </p>

      <div className="space-y-2">
        <div className="flex items-center">
          <FaGithub className="text-gray-800 mr-2" />
          <a
            href="https://github.com/SowmithSripadi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:underline text-sm"
          >
            GitHub Profile
          </a>
        </div>
        <div className="flex items-center">
          <FaLinkedin className="text-blue-700 mr-2" />
          <a
            href="https://www.linkedin.com/in/sowmithsripadi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:underline text-sm"
          >
            LinkedIn Profile
          </a>
        </div>

        <div className="flex items-center">
          <div>
            <MdEmail className="mr-2" />
          </div>
          <a
            href="mailto:sowmithsripadi1@gmail.com"
            className="text-gray-700 hover:underline text-sm   "
          >
            sowmithsripadi1@gmail.com
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default ContactTile;

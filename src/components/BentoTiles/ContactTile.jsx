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
      className="grid-item dark:bg-darkTileColor bg-yellow p-8 cursor-pointer hover:bg-opacity-90 transition duration-300 no-hover"
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
      <p className="font-OldStandardTT text-xl tracking-wide mb-2 text-darkBrown dark:text-lightBrown">
        Contact
      </p>

      <div className="space-y-2">
        <div className="flex items-center">
          <FaGithub className="text-gray-800 mr-2 dark:text-darkSecondaryText" />
          <a
            href="https://github.com/SowmithSripadi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:underline text-sm dark:text-darkSecondaryText"
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
            className="text-gray-700 hover:underline text-sm dark:text-darkSecondaryText"
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
            className="text-gray-700 hover:underline text-sm dark:text-darkSecondaryText"
          >
            sowmithsripadi1@gmail.com
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default ContactTile;

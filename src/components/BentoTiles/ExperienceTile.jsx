import React from "react";
import { motion } from "framer-motion";
import { itemVariants } from "../../animation/animateVariants";

import { useNavigate } from "react-router-dom";

function ExperienceTile() {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/experience");
  };
  return (
    <motion.div
      className="grid-item lg:col-span-2 md:col-span-2 bg-lime dark:bg-darkTileColor p-8"
      onClick={handleNavigate}
      variants={itemVariants}
      whileHover={{
        y: -10, // Translate upwards by 10 pixels
        x: -10,
        boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)", // Add a deeper shadow
      }}
    >
      <p className="font-OldStandardTT text-xl tracking-wide mb-2 text-green dark:text-lightGreen">
        Professional Experience
      </p>
      <p className="text-sm text-green dark:text-lightGreen">
        <span className="font-semibold text-sm">
          Florida International University
        </span>{" "}
        | Software Developer
      </p>
      <span className="text-sm text-gray-600 dark:text-darkSecondaryText">
        May 2024 - Dec 2024
      </span>
      <p className="text-sm text-green dark:text-lightGreen">
        <span className="font-semibold text-sm">Accenture</span> | Software
        Engineer
      </p>
      <span className="text-sm text-gray-600 dark:text-darkSecondaryText">
        August 2021 - Dec 2022
      </span>
      <p className="text-sm text-green dark:text-lightGreen">
        <span className="font-semibold text-sm">Infor</span> | Software Engineer
      </p>
      <span className="text-sm text-gray-600 dark:text-darkSecondaryText">
        July 2020 - August 2021
      </span>
    </motion.div>
  );
}

export default ExperienceTile;

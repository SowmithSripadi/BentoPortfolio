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
      className="grid-item lg:col-span-2 md:col-span-2 bg-lime p-8"
      onClick={handleNavigate}
      variants={itemVariants}
      whileHover={{
        y: -10, // Translate upwards by 10 pixels
        x: -10,
        boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)", // Add a deeper shadow
      }}
    >
      <p className="font-OldStandardTT text-xl tracking-wide mb-2 text-green">
        Professional Experience
      </p>

      <p className="text-sm text-green">
        <span className="font-semibold text-sm">Accenture</span> | Software
        Engineer
      </p>
      <span className="text-sm text-gray-600">August 2021 - Dec 2022</span>
      <p className="text-sm text-green">
        <span className="font-semibold text-sm">
          Florida International University
        </span>{" "}
        | Teaching Assistant
      </p>
      <span className="text-sm text-gray-600">May 2021 - Present</span>
    </motion.div>
  );
}

export default ExperienceTile;

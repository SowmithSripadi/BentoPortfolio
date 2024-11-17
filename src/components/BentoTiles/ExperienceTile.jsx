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
      className="grid-item lg:col-span-2 md:col-span-2 bg-[#D9E3B9] p-8"
      onClick={handleNavigate}
      variants={itemVariants}
      whileHover={{
        y: -10, // Translate upwards by 10 pixels
        x: -10,
        boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)", // Add a deeper shadow
      }}
    >
      <p className="font-Tangerine text-xl tracking-wide mb-2">
        Professional Experience
      </p>

      <p className="text-sm">
        <span className="font-semibold text-sm">Accenture</span> | Application
        Development Associate
      </p>
      <span className="text-sm text-gray-600">August 2021 - Dec 2022</span>
      <p className="text-sm">
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

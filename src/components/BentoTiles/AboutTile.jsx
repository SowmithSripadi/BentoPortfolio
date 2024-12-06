import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { itemVariants } from "../../animation/animateVariants";

function AboutTile() {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/about");
  };
  return (
    <motion.div
      className="grid-item lg:row-span-2 md:row-span-2 bg-blue p-8  "
      onClick={handleNavigate}
      variants={itemVariants}
      whileHover={{
        y: -10, // Translate upwards by 10 pixels
        x: -10,
        boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)", // Add a deeper shadow
      }}
    >
      <p className="font-OldStandardTT text-xl tracking-wide text-indigo">
        About
      </p>
      <div className="flex flex-col lg:gap-8  gap-2 lg:mt-4">
        <div>
          <span className="text-indigo text-sm font-semibold">
            Full Stack Developer{" "}
          </span>
          <p className="text-sm text-text-indigo font-semibold">
            Sowmith Sripadi
          </p>
        </div>
        <div>
          <p className="text-sm hidden sm:block text-indigo">
            Florida International University
          </p>
          <p className="text-sm sm:hidden text-indigo">
            FIU{" "}
            <span className="text-sm text-gray-600 ">
              (Master's in Computer Science)
            </span>
          </p>
          <span className="text-sm text-gray-600 hidden sm:block ">
            Master's in Computer Science
          </span>
        </div>
        <div>
          <p className="text-sm hidden sm:block text-indigo">MVSR</p>
          <span className="text-sm text-gray-600 hidden sm:block">
            Bachelor's in Computer Science and Engineering
          </span>
          <p className="text-sm sm:hidden">
            MVSR{" "}
            <span className="text-sm text-gray-600">
              (Bachelor's in Computer Science and Engineering)
            </span>
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default AboutTile;

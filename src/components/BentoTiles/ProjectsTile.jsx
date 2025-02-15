import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { itemVariants } from "../../animation/animateVariants";

function ProjectsTile() {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/projects");
  };

  return (
    <motion.div
      className="grid-item lg:col-span-2 md:col-span-2 dark:bg-darkTileColor bg-wisteria md:px-8 md:p-6 px-8 py-6 cursor-pointer hover:bg-opacity-90 transition duration-300"
      onClick={handleNavigate}
      tabIndex="0"
      role="button"
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          handleNavigate();
        }
      }}
      aria-label="Navigate to Projects"
      variants={itemVariants}
      whileHover={{
        y: -10, // Translate upwards by 10 pixels
        x: -10,
        boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)", // Add a deeper shadow
      }}
    >
      <p className="font-OldStandardTT text-xl tracking-wide mb-2 text-palatinate dark:text-palatinateLight">
        Projects
      </p>

      {/* SocialCart Project */}
      <div className="mb-2">
        <h3 className="text-sm font-semibold text-palatinate dark:text-palatinateLight">
          SocialCart
        </h3>
        <p className="text-gray-700 text-sm mb-1 dark:text-darkSecondaryText">
          Developed a real-time collaborative shopping feature in an ecommerce
          app.
        </p>
      </div>

      {/* TriedAndTested Project */}
      <div>
        <h3 className="text-sm font-semibold text-palatinate dark:text-palatinateLight">
          TriedAndTested
        </h3>
        <p className="text-gray-700 text-sm mb-1 dark:text-darkSecondaryText">
          Developed a blogging app for user-driven solutions to real-world
          problems.
        </p>
      </div>
    </motion.div>
  );
}

export default ProjectsTile;

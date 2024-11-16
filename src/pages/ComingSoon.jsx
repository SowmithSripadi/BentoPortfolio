// src/components/ComingSoon.jsx

import React from "react";
import { motion } from "framer-motion";
import { FaClock } from "react-icons/fa"; // Optional: An icon for visual appeal

function ComingSoon({ title }) {
  return (
    <motion.div
      className="min-h-screen flex flex-col items-center  lg:mt-[250px] mt-[100px]  p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <FaClock className="text-6xl text-blue-500 mb-6 animate-pulse" />
      <motion.h1
        className="text-4xl md:text-6xl font-Tangerine text-gray-800 mb-4"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        {title} - Coming Soon!
      </motion.h1>
      <motion.p
        className="text-lg text-gray-700 text-center max-w-2xl"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        Working on {title.toLowerCase()} page.
      </motion.p>
    </motion.div>
  );
}

export default ComingSoon;

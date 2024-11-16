import React from "react";
import { containerVariants } from "../animation/animateVariants";
import { motion } from "framer-motion";
import {
  AboutTile,
  ExperienceTile,
  TechStackTile,
  ProjectsTile,
  ContactTile,
  ImageTile,
} from "../components";

function Bentogrid() {
  return (
    <div className="flex justify-center">
      <motion.div
        className="grid lg:grid-cols-3 grid-cols-1 lg:p-0 p-8 md:grid-cols-3 lg:gap-[30px] md:gap-[20px] gap-10 max-w-[1000px] max-h-[1000px]"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <AboutTile />
        <ExperienceTile />
        <ImageTile />
        <TechStackTile />
        <ProjectsTile />
        <ContactTile />
      </motion.div>
    </div>
  );
}

export default Bentogrid;

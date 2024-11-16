import React from "react";
import { motion } from "framer-motion";
import { itemVariants } from "../../animation/animateVariants";

function ImageTile() {
  return (
    <motion.div
      className="grid-item overflow-hidden max-h-[228px] max-w-[320px] ml-auto mr-auto sm:ml-0 sm:mr-0"
      variants={itemVariants}
    >
      <img
        src="/images/Potrait.jpg"
        alt="profile picture"
        className="w-full h-full object-cover "
        style={{ objectPosition: "50% 30%" }}
      />
    </motion.div>
  );
}

export default ImageTile;

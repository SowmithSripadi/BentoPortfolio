import React from "react";
import NavBar from "./NavBar";
import { Bentogrid } from "../pages";
import { motion } from "framer-motion";

function Home() {
  return (
    <>
      <motion.div
        className="mt-10 lg:text-[50px] text-[60px] cursor-pointer text-center font-Tangerine lg:mb-[100px] md:mb-[100px] mb-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Home
      </motion.div>
      <Bentogrid />
    </>
  );
}

export default Home;

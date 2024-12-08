import React from "react";

import { Bentogrid } from "../pages";
import { motion } from "framer-motion";

function Home() {
  return (
    <>
      <motion.div
        className="mt-10 lg:text-[35px] text-[40px] text-center font-OldStandardTT mb-14 "
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

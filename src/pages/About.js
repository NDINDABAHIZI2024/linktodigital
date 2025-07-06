// src/pages/About.js
import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      className="w-full min-h-screen flex items-center justify-center bg-gradient-to-r from-orange-400 via-yellow-500 to-[#21bf73] text-white text-center px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-3xl">
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-4"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          About LinkToDigital
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Technology should empower, not overwhelm. I believe in building simple,
          powerful, and human-centered solutions that make a real difference.
        </motion.p>
      </div>
    </motion.section>
  );
};

export default About;

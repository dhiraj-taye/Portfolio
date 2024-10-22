import React from "react";
import { motion } from "framer-motion";
import GridItem from "./GridItem";

const Hero = () => {
  const handleContactClick = () => {
    window.location.href = "mailto:dhirajtaye01@gmail.com";
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        className="h-screen w-full lg:w-3/4 pb-8 lg:pb-32 flex flex-col justify-center items-start text-white px-6 lg:px-0"
      >
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-4xl lg:text-5xl mb-2 lg:mb-4 font-light"
        >
          Hello
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="text-4xl lg:text-5xl mb-2 lg:mb-4 font-light"
        >
          I'm Dhiraj Taye
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 1 }}
          className="w-full lg:w-2/3 mb-4 lg:mb-6 leading-7 text-base lg:text-lg"
        >
          Hey there! 👋 I'm Dhiraj, a recent BTech Computer Science grad with a
          passion for creating meaningful digital experiences...
        </motion.p>
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:bg-gradient-to-r hover:from-purple-700 hover:to-indigo-700 text-white font-bold py-3 px-6 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transition duration-300"
          onClick={handleContactClick}
        >
          Contact Me
        </motion.button>
      </motion.div>
      <GridItem />
    </>
  );
};

export default Hero;

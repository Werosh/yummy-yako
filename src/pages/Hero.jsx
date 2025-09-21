import React, { useState } from "react";
import { motion } from "framer-motion";

import Background from "../assets/images/back.png";
import Logo from "../assets/images/logos/logo1.png";
import Truck from "../assets/images/others/truck.png";
import Dessert from "../assets/images/others/food3.png";

const Hero = () => {
  // Animation variants
  const fadeInUp = {
    initial: { y: 60, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const scaleIn = {
    initial: { scale: 0.8, opacity: 0 },
    animate: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${Background}')`,
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 "></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-start py-4 px-4 sm:py-6 md:py-8">
        {/* Top Section - Logo */}
        <motion.div
          className="flex items-center justify-center pt-4 mb-6 sm:pt-6 sm:mb-8 md:pt-8"
          initial="initial"
          animate="animate"
          variants={fadeInUp}
        >
          <div className="backdrop-blur-xs rounded-2xl p-2 max-w-xs sm:p-3 sm:max-w-sm md:p-4 md:max-w-2xl mt-16 sm:mt-24 md:mt-32">
            <div className="text-center">
              <img
                src={Logo}
                alt="Yako Logo"
                className="w-full h-auto mx-auto object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* Middle Section - Two Images */}
        <motion.div
          className="flex flex-col gap-6 mb-6 w-full max-w-sm sm:gap-8 sm:mb-8 sm:max-w-md md:flex-row md:gap-12 md:max-w-4xl lg:gap-52 lg:max-w-7xl"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {/* Food Truck Image */}
          <motion.div variants={fadeInUp} className="flex-1">
            <div className="bg-white/15 backdrop-blur-md rounded-4xl overflow-hidden shadow-xl border-3 border-white relative">
              <img
                src={Truck}
                alt="Photo of Food Truck"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Desserts Image */}
          <motion.div variants={fadeInUp} className="flex-1">
            <div className="bg-white/15 backdrop-blur-md rounded-4xl overflow-hidden shadow-xl border-3 border-white  relative">
              <img
                src={Dessert}
                alt="Photo of Desserts"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Section - Three Buttons */}
        <motion.div
          className="flex flex-col gap-4 w-full max-w-xs sm:gap-6 sm:max-w-sm md:flex-row md:gap-12 md:max-w-2xl lg:gap-96 lg:max-w-4xl"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {/* Find Us Button */}
          <motion.div variants={scaleIn} className="flex-1">
            <motion.button
              className="w-full bg-gradient-to-r from-[#80f7fb] to-[#23dfe6] text-white font-bold py-2.5 px-4 rounded-full shadow-lg text-sm border-2 border-blue-100 sm:py-3 sm:px-5 sm:text-base md:px-6"
              whileHover={{
                scale: 1.05,
                y: -2,
                boxShadow: "0 15px 30px rgba(59,130,246,0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              Find Us
            </motion.button>
          </motion.div>

          {/* Our Menu Button */}
          <motion.div variants={scaleIn} className="flex-1">
            <motion.button
              className="w-full bg-gradient-to-r from-[#80f7fb] to-[#23dfe6] text-white font-bold py-2.5 px-4 rounded-full shadow-lg text-sm border-2 border-blue-100 sm:py-3 sm:px-5 sm:text-base md:px-6"
              whileHover={{
                scale: 1.05,
                y: -2,
                boxShadow: "0 15px 30px rgba(59,130,246,0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              Our Menu
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Floating background elements for ambiance */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`floating-${i}`}
            className="absolute rounded-full bg-white/10 backdrop-blur-sm"
            style={{
              width: `${Math.random() * 30 + 20}px`,
              height: `${Math.random() * 30 + 20}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: Math.random() * 4 + 4,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;

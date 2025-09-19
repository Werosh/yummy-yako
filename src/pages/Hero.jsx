"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BackImg from "../assets/images/Image_fx-back.png";
import VanIMg from "../assets/images/others/van.png";

const Hero = () => {
  const bubbleVariants = {
    animate: {
      y: [-20, -100],
      opacity: [0.7, 0],
      scale: [0.5, 1.2],
      transition: { duration: 4, repeat: Infinity, ease: "easeOut" },
    },
  };

  const floatingVariants = {
    animate: {
      y: [0, -10, 0],
      rotate: [0, 2, -2, 0],
      transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
    },
  };

  const sparkleVariants = {
    animate: {
      rotate: 360,
      scale: [1, 1.3, 1],
      opacity: [0.5, 1, 0.5],
      transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
    },
  };

  // Animation variant for the right side image coming from far away
  const imageFromDistanceVariants = {
    initial: {
      x: 500,
      scale: 0.3,
      opacity: 0,
      rotateY: -45,
    },
    animate: {
      x: 0,
      scale: 1,
      opacity: 1,
      rotateY: 0,
      transition: {
        delay: 2.5,
        duration: 1.5,
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  //     <motion.div
  //       className="fixed inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-100 flex items-center justify-center z-50"
  //       exit={{ opacity: 0, scale: 0.8 }}
  //       transition={{ duration: 0.8 }}
  //     >
  //       <div className="text-center">
  //         <motion.div
  //           className="relative mb-8"
  //           animate={{ rotate: 360 }}
  //           transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
  //         >
  //           <div className="w-24 h-24 border-4 border-blue-200 rounded-full"></div>
  //           <div className="absolute top-0 left-0 w-24 h-24 border-4 border-transparent border-t-blue-400 rounded-full animate-spin"></div>
  //         </motion.div>

  //         <motion.h2
  //           className="text-3xl font-bold text-blue-400 mb-4"
  //           animate={{ scale: [1, 1.1, 1] }}
  //           transition={{ duration: 1.5, repeat: Infinity }}
  //         >
  //           Yummy Yako
  //         </motion.h2>

  //         <motion.div
  //           className="flex justify-center space-x-2"
  //           animate={{ opacity: [0.4, 1, 0.4] }}
  //           transition={{ duration: 1.2, repeat: Infinity }}
  //         >
  //           {[0, 1, 2].map((i) => (
  //             <motion.div
  //               key={i}
  //               className="w-3 h-3 bg-blue-400 rounded-full"
  //               animate={{ y: [0, -10, 0] }}
  //               transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.2 }}
  //             />
  //           ))}
  //         </motion.div>
  //       </div>
  //     </motion.div>
  //   );

  return (
    <div className="relative min-h-screen overflow-hidden mr-5 ml-5 mb-8 rounded-b-[70px] shadow-lg">
      {/* Background - Fixed the image reference */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-100"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <div
          className="absolute inset-0 opacity-100 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${BackImg})`,
          }}
        />
      </motion.div>

      {/* Animated Bubbles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`bubble-${i}`}
          className="absolute w-6 h-6 bg-blue-200 rounded-full opacity-60"
          style={{ left: `${Math.random() * 100}%`, bottom: `-24px` }}
          variants={bubbleVariants}
          animate="animate"
          transition={{ delay: Math.random() * 3 }}
        />
      ))}

      {/* Sparkles */}
      {/* {[...Array(6)].map((_, i) => (
        <motion.div
          key={`sparkle-${i}`}
          className="absolute text-2xl"
          style={{
            top: `${20 + Math.random() * 60}%`,
            left: `${10 + Math.random() * 80}%`,
          }}
          variants={sparkleVariants}
          animate="animate"
        >
          ✨
        </motion.div>
      ))} */}

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-between px-8 lg:px-16">
        {/* Left */}
        <motion.div
          className="flex-1 max-w-2xl"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 1, type: "spring", bounce: 0.3 }}
        >
          <motion.div
            className="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-full px-6 py-2 mb-6 shadow-lg border border-blue-100"
            whileHover={{ scale: 1.05 }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.2, type: "spring" }}
          >
            <span className="text-2xl mr-2">🍦</span>
            <span className="text-blue-600 font-semibold">
              Sweet Dreams Come True
            </span>
          </motion.div>

          <motion.h1
            className="text-6xl lg:text-9xl font-bold text-gray-800 mb-4 leading-tight tracking-[10px] font-[Chewy-Regular]"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.8 }}
          >
            <motion.span className="block" whileHover={{ color: "#60a5fa" }}>
              Yummy
            </motion.span>
            <motion.span
              className="block text-blue-400"
              animate={{
                textShadow: [
                  "0 0 10px rgba(96,165,250,0.3)",
                  "0 0 20px rgba(96,165,250,0.6)",
                  "0 0 10px rgba(96,165,250,0.3)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Yako
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.6, duration: 0.8 }}
          >
            Bringing you the most delicious desserts on wheels! <br />
            <motion.span
              className="text-blue-500 font-semibold"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Sweet treats, made with love 💙
            </motion.span>
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.8, duration: 0.8 }}
          >
            <motion.button
              className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-4 px-8 rounded-full shadow-lg transition-all"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(96,165,250,0.3)",
                y: -2,
              }}
              whileTap={{ scale: 0.95 }}
            >
              Find Our Truck 🚚
            </motion.button>
            <motion.button
              className="bg-white/80 backdrop-blur-sm hover:bg-white text-blue-600 font-bold py-4 px-8 rounded-full shadow-lg border border-blue-100 transition-all"
              whileHover={{ scale: 1.05, borderColor: "#60a5fa", y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              View Menu 📋
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Right - Updated with animated image from distance */}
        <motion.div
          className="flex-1 flex justify-center items-center relative"
          variants={imageFromDistanceVariants}
          initial="initial"
          animate="animate"
        >
          <motion.div
            className="relative w-96 h-96 lg:w-[500px] lg:h-[500px]"
            variants={floatingVariants}
            animate="animate"
            whileHover={{
              scale: 1.08,
              rotateY: 5,
              transition: { duration: 0.3 },
            }}
            style={{
              transformStyle: "preserve-3d",
              perspective: "1000px",
            }}
          >
            {/* Main image container */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div className="w-full h-full rounded-3xl flex items-center justify-center overflow-hidden">
                <img
                  src={VanIMg}
                  alt="Yummy Yako Dessert"
                  className="w-full h-full object-cover rounded-3xl"
                />
              </motion.div>
            </div>

            {/* Floating decorative elements */}
            <motion.div
              className="absolute -top-8 -left-8 text-4xl"
              animate={{
                rotate: [0, 15, -15, 0],
                y: [0, -5, 0],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              🍰
            </motion.div>
            <motion.div
              className="absolute -bottom-6 -right-6 text-3xl"
              animate={{
                y: [0, -10, 0],
                rotate: [0, 10, 0],
                x: [0, 5, 0],
              }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
            >
              🧁
            </motion.div>
            <motion.div
              className="absolute top-4 -right-8 text-3xl"
              animate={{
                scale: [1, 1.3, 1],
                rotate: [0, 20, 0],
                y: [0, -3, 0],
              }}
              transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
            >
              🍦
            </motion.div>
            <motion.div
              className="absolute -left-6 top-1/2 text-2xl"
              animate={{
                rotate: [0, -10, 10, 0],
                x: [0, -3, 3, 0],
              }}
              transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
            >
              🍩
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Wave */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-100 to-transparent"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <svg
          className="absolute bottom-0 left-0 right-0 w-full h-16"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="rgba(96,165,250,0.1)"
            animate={{
              d: [
                "M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z",
                "M321.39,46.44c58-5.79,114.16-20.13,172-31.86,82.39-11.72,168.19-12.73,250.45,4.61C823.78,36,906.67,77,985.66,97.83c70.05,23.48,146.53,31.09,214.34,8V0H0V32.35A600.21,600.21,0,0,0,321.39,46.44Z",
                "M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z",
              ],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>
      </motion.div>
    </div>
  );
};

export default Hero;

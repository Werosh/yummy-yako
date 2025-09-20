import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import LogoImg from "../assets/images/logos/Logo.png";
import TruckImg from "../assets/images/others/truck.png";

const Hero = () => {
  // Professional floating animation for elements
  const floatingElements = {
    animate: {
      y: [0, -12, 0],
      rotate: [0, 2, -2, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  // Smooth entrance for main content
  const contentSlide = {
    initial: { x: -60, opacity: 0 },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2,
      },
    },
  };

  // Professional text reveal
  const textReveal = {
    initial: { y: 30, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  // Truck entrance with professional timing
  const truckEntrance = {
    initial: { x: 100, opacity: 0, scale: 0.9 },
    animate: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
        delay: 0.4,
      },
    },
  };

  // Cream drip reveal
  const creamReveal = {
    initial: { scaleY: 0, transformOrigin: "top" },
    animate: {
      scaleY: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut",
        delay: 0.6,
      },
    },
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Metallic base with professional gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-slate-200 to-slate-300"></div>

      {/* Main aqua-turquoise professional background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-cyan-500 to-teal-500">
        {/* Subtle professional texture overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(255,255,255,0.2),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(255,255,255,0.15),transparent_50%)]"></div>
      </div>

      {/* Professional floating background elements */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`bg-element-${i}`}
          className="absolute rounded-full bg-white/20 backdrop-blur-sm"
          style={{
            width: `${Math.random() * 20 + 15}px`, // Smaller for mobile
            height: `${Math.random() * 20 + 15}px`, // Smaller for mobile
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: Math.random() * 4 + 4,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Top cream drip - professional styling */}
      <motion.div
        className="absolute top-0 left-0 right-0 z-20"
        variants={creamReveal}
        initial="initial"
        animate="animate"
      >
        <div className="h-16 sm:h-20 lg:h-24 bg-white relative">
          <svg
            className="absolute bottom-0 w-full h-10 sm:h-12 lg:h-16"
            viewBox="0 0 1200 80"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0 L1200,0 L1200,15 C1150,45 1100,60 1050,55 C1000,50 950,35 900,40 C850,45 800,60 750,55 C700,50 650,35 600,40 C550,45 500,60 450,55 C400,50 350,35 300,40 C250,45 200,60 150,55 C100,50 50,35 0,40 Z"
              fill="white"
            />
          </svg>

          {/* Professional drip accents */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={`top-drip-${i}`}
              className="absolute bg-white rounded-full hidden sm:block"
              style={{
                width: `${12 + Math.random() * 8}px`,
                height: `${20 + Math.random() * 15}px`,
                left: `${i * 240 + Math.random() * 80 + 80}px`,
                bottom: `-10px`,
              }}
              animate={{
                y: [0, 8, 0],
                scaleY: [1, 1.1, 1],
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* Main content container */}
      <div className="relative z-10 min-h-screen flex flex-col lg:flex-row items-center justify-center px-4 sm:px-6 lg:px-8 xl:px-20 pt-20 sm:pt-24 lg:pt-32 pb-8">
        {/* Left content - Professional layout */}
        <motion.div
          className="w-full lg:flex-1 lg:max-w-2xl order-2 lg:order-1"
          variants={contentSlide}
          initial="initial"
          animate="animate"
        >
          {/* Professional main title */}
          <motion.div
            variants={textReveal}
            className="flex justify-center lg:justify-start mb-6 sm:mb-8 lg:mb-0"
          >
            <motion.img
              src={LogoImg}
              alt="Sweet Treats Logo"
              className="w-[250px] sm:w-[300px] lg:w-[350px] xl:w-[500px] object-contain"
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>

          {/* Professional description */}
          <motion.div
            className="bg-white/30 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8 lg:mb-10 shadow-xl border border-white/50 mx-auto lg:mx-0 max-w-lg lg:max-w-none"
            variants={textReveal}
            whileHover={{
              scale: 1.01,
              boxShadow: "0 20px 50px rgba(0,0,0,0.1)",
            }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-base sm:text-lg lg:text-xl text-cyan-800 font-medium leading-relaxed mb-3 sm:mb-4 text-center lg:text-left">
              Premium artisanal desserts crafted with passion and served fresh
              from our mobile kitchen.
            </p>
            <motion.p
              className="text-sm sm:text-base lg:text-lg text-pink-600 font-semibold text-center lg:text-left"
              animate={{ opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              Quality ingredients • Exceptional taste • Memorable experiences
            </motion.p>
          </motion.div>

          {/* Professional CTA buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start"
            variants={textReveal}
          >
            <a href="#location">
              <motion.button
                className="bg-gradient-to-r from-pink-500 to-pink-600 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 lg:px-10 rounded-full shadow-lg text-base sm:text-lg border-2 border-pink-400 w-full sm:w-auto"
                style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
                whileHover={{
                  scale: 1.03,
                  y: -2,
                  boxShadow: "0 15px 35px rgba(236,72,153,0.4)",
                  background: "linear-gradient(to right, #ec4899, #db2777)",
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                Locate Our Truck
              </motion.button>
            </a>
            <a href="/menu">
              <motion.button
                className="bg-white/95 backdrop-blur-sm text-cyan-700 font-bold py-3 sm:py-4 px-6 sm:px-8 lg:px-10 rounded-full shadow-lg text-base sm:text-lg border-2 border-cyan-300 w-full sm:w-auto"
                style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
                whileHover={{
                  scale: 1.03,
                  y: -2,
                  backgroundColor: "rgba(255,255,255,1)",
                  borderColor: "#0891b2",
                  color: "#0e7490",
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                Explore Menu
              </motion.button>
            </a>
          </motion.div>
        </motion.div>

        {/* Right side - Professional truck showcase */}
        <motion.div
          className="w-full lg:flex-1 flex justify-center items-center relative order-1 lg:order-2 mt-20 lg:mb-0"
          variants={truckEntrance}
          initial="initial"
          animate="animate"
        >
          <motion.div
            className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] lg:w-[450px] lg:h-[450px] xl:w-[550px] xl:h-[550px]"
            variants={floatingElements}
            animate="animate"
          >
            {/* Main professional container */}
            <div className="w-full sm:w-[400px] lg:w-[600px] xl:w-[800px] max-w-none">
              <div className="w-full h-full rounded-2xl flex items-center justify-center overflow-hidden relative">
                {/* Replace emojis with your truck image */}
                <motion.img
                  src={TruckImg}
                  alt="Dessert Truck"
                  className="w-full h-full object-contain"
                  animate={{
                    scale: [1, 1.05, 1],
                    y: [0, -10, 0],
                    rotate: [0, 1, -1, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;

"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Chefs from "../assets/images/others/chefs.png";

// You can replace these with your actual image imports
const galleryImages = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR-TUxTlB2nMB0fMaaIyOUpd0Kl0kzhN9GmA&s", // Image 1
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwdSk0hrTmx-spxgBAPpDx48rsi8f-vZiTZQ&s", // Image 2 - replace with your actual image import
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU5I_svs_ws8uGhPMWqB6U75Nd-B-es8lz-w&s", // Image 3 - replace with your actual image import
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-31gVuWxy_2XnkucfaOwaliQ3ZOIWNJHYkw&s", // Image 4 - replace with your actual image import
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdVmU08GIaghp6NTAC_gcGEmpi3_WeovfdHQ&s", // Image 5 - replace with your actual image import
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzCOEciIsNnriqDSMCOD4RZZVOXJ4OTmVH3Q&s", // Image 6 - replace with your actual image import
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGkt-1q5zJrL24jJCOlQ3q1tMeE6UojaIQLQ&s", // Image 7 - replace with your actual image import
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh41p-IfTuYJIzUrpv3J1LfD9kKqwTETx2tA&s", // Image 8 - replace with your actual image import
];

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("about-section");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  // Floating bubble animation
  const bubbleFloat = {
    animate: {
      y: [0, -30, 0],
      x: [0, 15, -15, 0],
      scale: [1, 1.1, 0.9, 1],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  // Cream drip animation
  const dripAnimation = {
    initial: { scaleY: 0, originY: 0 },
    animate: {
      scaleY: [0, 1, 0.95, 1],
      transition: {
        duration: 2,
        ease: "easeOut",
        delay: 0.5,
      },
    },
  };

  // Bouncy card entrance
  const cardBounce = {
    initial: { scale: 0, rotate: -10 },
    animate: (i) => ({
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        bounce: 0.6,
        duration: 1.2,
        delay: i * 0.3,
      },
    }),
  };

  // Wobble animation for icons
  const wobble = {
    animate: {
      rotate: [0, 5, -5, 0],
      scale: [1, 1.1, 1],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  // Image float animations
  const imageFloat = {
    animate: (i) => ({
      y: [0, -20, 0],
      x: [0, 10, -10, 0],
      rotate: [0, 3, -3, 0],
      scale: [1, 1.05, 1],
      transition: {
        duration: 3 + i * 0.5,
        repeat: Infinity,
        ease: "easeInOut",
        delay: i * 0.3,
      },
    }),
  };

  // Stagger animation for images
  const imageStagger = {
    initial: { scale: 0, opacity: 0, y: 100 },
    animate: (i) => ({
      scale: 1,
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1,
        delay: 1 + i * 0.2,
      },
    }),
  };

  return (
    <div
      id="about-section"
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#80f7fb] via-cyan-300 to-[#55a9ac]"
    >
      {/* Metallic Base Effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-200/30 to-gray-300/20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      />

      {/* Floating Marshmallow Bubbles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={`bubble-${i}`}
          className="absolute rounded-full bg-white/40 backdrop-blur-sm shadow-lg"
          style={{
            width: Math.random() * 60 + 30,
            height: Math.random() * 60 + 30,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          variants={bubbleFloat}
          animate="animate"
          transition={{ delay: Math.random() * 4 }}
        />
      ))}

      {/* Cream Drips from Top */}
      <motion.div className="absolute top-0 left-0 w-full z-10 min-h-screen ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 200"
          preserveAspectRatio="none"
          className="w-full h-32"
        >
          <motion.path
            d="M0,0 L1200,0 L1200,60 Q1100,90 1000,70 Q900,50 800,80 Q700,110 600,75 Q500,40 400,85 Q300,130 200,80 Q100,30 0,70 Z"
            fill="white"
            variants={dripAnimation}
            initial="initial"
            animate={isVisible ? "animate" : "initial"}
          />
          <motion.path
            d="M0,0 L1200,0 L1200,40 Q1150,65 1050,50 Q950,35 850,60 Q750,85 650,55 Q550,25 450,70 Q350,115 250,65 Q150,15 50,55 L0,55 Z"
            fill="white"
            opacity="0.8"
            variants={dripAnimation}
            initial="initial"
            animate={isVisible ? "animate" : "initial"}
            transition={{ delay: 0.3 }}
          />
        </svg>
      </motion.div>

      {/* Main Content */}
      <div className="relative z-20  flex items-center justify-center px-6 ">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <motion.div
            className="text-center mb-5"
            initial={{ y: 100, opacity: 0 }}
            animate={isVisible ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 1.2, type: "spring", bounce: 0.4 }}
          >
            {/* Bubbly Title */}
            <motion.h1
              className="text-5xl lg:text-5xl font-about text-white mt-20    leading-tight  "
              initial={{ scale: 0.5, opacity: 0 }}
              animate={isVisible ? { scale: 1, opacity: 1 } : {}}
              transition={{
                delay: 0.4,
                duration: 1,
                type: "spring",
                bounce: 0.3,
              }}
            >
              About{" "}
              <motion.span
                className="relative inline-block"
                transition={{ duration: 3, repeat: Infinity }}
              >
                Yako
              </motion.span>
            </motion.h1>

            <motion.p
              className="text-xl lg:text-xl text-[#015a5e]  max-w-5xl mx-auto leading-relaxed font-bold font-serif"
              initial={{ y: 50, opacity: 0 }}
              animate={isVisible ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 0.6, duration: 1 }}
              style={{
                textShadow: "2px 2px 8px rgba(0,0,0,0.3)",
                fontFamily: "sans-serif",
              }}
            >
              Spreading sweetness and smiles, one bubbly treat at a time!
            </motion.p>
          </motion.div>

          {/* Bubbly Cards Grid with Background */}
          <div className="relative mb-10">
            <div className="relative z-10 grid md:grid-cols-3 gap-8 ">
              {[
                {
                  icon: "🚚",
                  title: "Mobile Magic",
                  description:
                    "Our bubbly truck brings dessert dreams to your doorstep with style!",
                  image:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfYvHPPyauL_F0I-s-irZaxDMCnWgh8nQh2g&s", // background image for card 1
                },
                {
                  icon: "🎂",
                  title: "Handcrafted Happiness",
                  description:
                    "Every treat is made with love and a sprinkle of magic dust!",
                  image:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeWBJDCSVNqIIPLpb0gyfvL3_CJb6ETpUQCw&s", // background image for card 2
                },
                {
                  icon: "💖",
                  title: "Community Sweetness",
                  description:
                    "We're not just a truck - we're your neighborhood happiness makers!",
                  image:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnQlodnCI9z_lnes6ON9oa6bpqDPfLY3_9Zg&s", // background image for card 3
                },
              ].map((card, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  variants={cardBounce}
                  initial="initial"
                  animate={isVisible ? "animate" : "initial"}
                  className="relative rounded-3xl p-2 shadow-2xl border-4 border-white overflow-hidden"
                  whileHover={{
                    scale: 1.05,
                    rotate: 2,
                    transition: { type: "spring", bounce: 0.4 },
                  }}
                  style={{
                    backgroundImage: `url(${card.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  {/* Overlay for readability */}
                  <div className="absolute inset-0 bg-white/0 backdrop-blur-sm rounded-3xl" />

                  {/* Card Content */}
                  <div className="relative z-10">
                    <motion.div
                      className="text-4xl mb-6 inline-block"
                      variants={wobble}
                      animate="animate"
                      transition={{ delay: index * 0.5 }}
                    >
                      {card.icon}
                    </motion.div>

                    <h3 className="text-2xl font-black text-[#5ce7f8] leading-tight">
                      {card.title}
                    </h3>

                    <p className="text-gray-200 text-lg font-semibold leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Continuous Slideshow Gallery */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex space-x-8 p-10 whitespace-nowrap"
          animate={{
            x: ["0%", "-100%"],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
        >
          {/* First Set of Images */}
          {galleryImages.map((imageSrc, index) => (
            <motion.div
              key={`slide-${index}`}
              className="relative flex-shrink-0"
              custom={index}
              variants={imageFloat}
              animate="animate"
            >
              <div
                className={`
            ${index % 3 === 0 ? "w-80 h-44" : ""}
            ${index % 3 === 1 ? "w-64 h-40" : ""}
            ${index % 3 === 2 ? "w-72 h-46" : ""}
          `}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white via-cyan-50 to-cyan-100 rounded-3xl shadow-2xl border-6 border-white overflow-hidden">
                  <img
                    src={imageSrc}
                    alt={`Gallery Image ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          ))}

          {/* Duplicate Set for Seamless Loop */}
          {galleryImages.map((imageSrc, index) => (
            <motion.div
              key={`slide-duplicate-${index}`}
              className="relative flex-shrink-0"
              custom={index}
              variants={imageFloat}
              animate="animate"
            >
              <div
                className={`
            ${index % 3 === 0 ? "w-80 h-44" : ""}
            ${index % 3 === 1 ? "w-64 h-40" : ""}
            ${index % 3 === 2 ? "w-72 h-46" : ""}
          `}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white via-cyan-50 to-cyan-100 rounded-3xl shadow-2xl border-6 border-white overflow-hidden">
                  <img
                    src={imageSrc}
                    alt={`Gallery Image ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Gradient fade edges */}
        <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-cyan-400 to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-cyan-400 to-transparent z-10 pointer-events-none" />
      </div>

      {/* Bottom Cream Drips */}
      <motion.div className="absolute bottom-0 left-0 w-full z-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 200"
          preserveAspectRatio="none"
          className="w-full h-32 rotate-180"
        >
          <motion.path
            d="M0,0 L1200,0 L1200,60 Q1100,90 1000,70 Q900,50 800,80 Q700,110 600,75 Q500,40 400,85 Q300,130 200,80 Q100,30 0,70 Z"
            fill="white"
            variants={dripAnimation}
            initial="initial"
            animate={isVisible ? "animate" : "initial"}
            transition={{ delay: 1.5 }}
          />
        </svg>
      </motion.div>
    </div>
  );
};

export default About;

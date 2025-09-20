"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Chefs from "../assets/images/others/chefs.png";

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

  // Marshmallow bounce
  const marshmallowBounce = {
    animate: {
      y: [0, -20, 0],
      scale: [1, 1.05, 1],
      transition: {
        duration: 2.5,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div
      id="about-section"
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-cyan-400 via-cyan-300 to-teal-400"
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
      <motion.div className="absolute top-0 left-0 w-full z-10 ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 200"
          preserveAspectRatio="none" // 🔑 Forces stretching full width
          className="w-full h-32" // Full width, fixed height
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
      <div className="relative z-20 min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <motion.div
            className="text-center mb-16"
            initial={{ y: 100, opacity: 0 }}
            animate={isVisible ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 1.2, type: "spring", bounce: 0.4 }}
          >
            {/* Bubbly Badge */}
            <motion.div
              className="inline-flex items-center bg-white/90 backdrop-blur-sm rounded-full px-8 py-4 mb-8 shadow-xl border-4 border-white"
              variants={marshmallowBounce}
              animate="animate"
            >
              <motion.span
                className="text-4xl mr-4"
                variants={wobble}
                animate="animate"
              >
                🍭
              </motion.span>
              <span className="text-cyan-600 font-black text-xl tracking-wider">
                OUR SWEET STORY
              </span>
            </motion.div>

            {/* Bubbly Title */}
            <motion.h1
              className="text-6xl lg:text-8xl font-black text-white mb-6 leading-tight"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={isVisible ? { scale: 1, opacity: 1 } : {}}
              transition={{
                delay: 0.4,
                duration: 1,
                type: "spring",
                bounce: 0.3,
              }}
              style={{
                fontFamily: "system-ui, -apple-system, sans-serif",
                textShadow:
                  "4px 4px 12px rgba(0,0,0,0.3), 0 0 20px rgba(255,255,255,0.2)",
              }}
            >
              About{" "}
              <motion.span
                className="relative inline-block"
                animate={{
                  textShadow: [
                    "0 0 20px rgba(255,255,255,0.8)",
                    "0 0 40px rgba(255,255,255,0.9)",
                    "0 0 20px rgba(255,255,255,0.8)",
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Yummy Yako
                {/* Sparkle effects */}
                <motion.div
                  className="absolute -top-4 -right-4 text-3xl"
                  animate={{
                    rotate: [0, 360],
                    scale: [0.5, 1.2, 0.5],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  ✨
                </motion.div>
              </motion.span>
            </motion.h1>

            <motion.p
              className="text-2xl lg:text-3xl text-white/90 max-w-4xl mx-auto leading-relaxed font-bold"
              initial={{ y: 50, opacity: 0 }}
              animate={isVisible ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 0.6, duration: 1 }}
              style={{ textShadow: "2px 2px 8px rgba(0,0,0,0.3)" }}
            >
              Spreading sweetness and smiles, one bubbly treat at a time! 🎈
            </motion.p>
          </motion.div>

          {/* Bubbly Cards Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: "🚚",
                title: "Mobile Magic",
                description:
                  "Our bubbly truck brings dessert dreams to your doorstep with style!",
              },
              {
                icon: "🎂",
                title: "Handcrafted Happiness",
                description:
                  "Every treat is made with love and a sprinkle of magic dust!",
              },
              {
                icon: "💖",
                title: "Community Sweetness",
                description:
                  "We're not just a truck - we're your neighborhood happiness makers!",
              },
            ].map((card, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={cardBounce}
                initial="initial"
                animate={isVisible ? "animate" : "initial"}
                className="relative bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border-4 border-white"
                whileHover={{
                  scale: 1.05,
                  rotate: 2,
                  transition: { type: "spring", bounce: 0.4 },
                }}
              >
                {/* Card Drip Effect */}
                <div className="absolute -top-2 left-6 right-6 h-4 bg-white rounded-full shadow-lg" />

                <motion.div
                  className="text-6xl mb-6 inline-block"
                  variants={wobble}
                  animate="animate"
                  transition={{ delay: index * 0.5 }}
                >
                  {card.icon}
                </motion.div>

                <h3 className="text-3xl font-black text-cyan-600 mb-4 leading-tight">
                  {card.title}
                </h3>

                <p className="text-gray-700 text-lg font-semibold leading-relaxed">
                  {card.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Center Illustration */}
          <motion.div
            className="flex justify-center"
            initial={{ scale: 0, rotate: -20 }}
            animate={isVisible ? { scale: 1, rotate: 0 } : {}}
            transition={{
              delay: 1,
              duration: 1.5,
              type: "spring",
              bounce: 0.5,
            }}
          >
            <motion.div
              className="relative w-80 h-80 lg:w-96 lg:h-96"
              variants={marshmallowBounce}
              animate="animate"
            >
              {/* Main Bubble */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-white via-cyan-50 to-cyan-100 rounded-full shadow-2xl border-8 border-white flex items-center justify-center overflow-hidden"
                animate={{
                  boxShadow: [
                    "0 20px 60px rgba(0,200,255,0.3)",
                    "0 30px 80px rgba(0,200,255,0.5)",
                    "0 20px 60px rgba(0,200,255,0.3)",
                  ],
                }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <motion.img
                  src={Chefs} // replace with your image path
                  alt="Ice Cream"
                  className="max-w-full max-h-full object-contain"
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </motion.div>

              {/* Center Content */}
              {/* <div className="absolute inset-8 bg-gradient-to-br from-cyan-400 to-teal-400 rounded-full flex items-center justify-center shadow-inner">
                <motion.img
                  src={Chefs}
                  alt="Ice Cream"
                  className="w-28 h-28 lg:w-full lg:h-auto object-contain overflow-hidden bg-amber-300"
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </div> */}

              {/* Floating Treats */}
              {[
                { emoji: "🧁", position: "top-0 left-0", delay: 0 },
                { emoji: "🍪", position: "top-0 right-0", delay: 0.5 },
                { emoji: "🍰", position: "bottom-0 left-0", delay: 1 },
                { emoji: "🍭", position: "bottom-0 right-0", delay: 1.5 },
              ].map((treat, index) => (
                <motion.div
                  key={index}
                  className={`absolute ${treat.position} transform -translate-x-1/2 -translate-y-1/2 text-4xl bg-white rounded-full p-3 shadow-lg`}
                  animate={{
                    y: [0, -15, 0],
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: treat.delay,
                    ease: "easeInOut",
                  }}
                >
                  {treat.emoji}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Cream Drips */}
      <motion.div className="absolute bottom-0 left-0 w-full z-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 200"
          preserveAspectRatio="none" // 🔑 Force full width stretch
          className="w-full h-32 rotate-180" // Full width, rotated drip
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

"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BackImg from "../assets/images/about.jpg";
import ChefImg from "../assets/images/others/chefs.png";

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

  const bubbleVariants = {
    animate: {
      y: [-20, -100],
      opacity: [0.7, 0],
      scale: [0.5, 1.2],
      transition: { duration: 5, repeat: Infinity, ease: "easeOut" },
    },
  };

  const floatingVariants = {
    animate: {
      y: [0, -15, 0],
      rotate: [0, 3, -3, 0],
      transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
    },
  };

  const cardVariants = {
    hidden: { y: 60, opacity: 0, scale: 0.8 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        type: "spring",
        bounce: 0.4,
      },
    }),
  };

  const imageVariants = {
    hidden: { x: -100, opacity: 0, rotateY: -20 },
    visible: {
      x: 0,
      opacity: 1,
      rotateY: 0,
      transition: {
        delay: 0.5,
        duration: 1.2,
        type: "spring",
        stiffness: 80,
      },
    },
  };

  return (
    <div
      id="about-section"
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 m-8 rounded-[70px] shadow-2xl"
    >
      {/* Animated Background Elements */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`about-bubble-${i}`}
          className="absolute w-4 h-4 bg-purple-200 rounded-full opacity-40"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          variants={bubbleVariants}
          animate="animate"
          transition={{ delay: Math.random() * 4 }}
        />
      ))}

      {/* Sparkles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`about-sparkle-${i}`}
          className="absolute text-xl opacity-60"
          style={{
            top: `${15 + Math.random() * 70}%`,
            left: `${5 + Math.random() * 90}%`,
          }}
          animate={{
            rotate: 360,
            scale: [1, 1.4, 1],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 3,
          }}
        >
          ✨
        </motion.div>
      ))}

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-8 lg:px-16 py-20">
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
        <div className="max-w-7xl mx-auto z-30">
          {/* Section Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ y: -50, opacity: 0 }}
            animate={isVisible ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 1, type: "spring", bounce: 0.3 }}
          >
            <motion.div
              className="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-full px-8 py-3 mb-8 shadow-lg border border-purple-100"
              whileHover={{ scale: 1.05 }}
              animate={isVisible ? { scale: 1 } : { scale: 0 }}
              transition={{ delay: 0.2, type: "spring" }}
            >
              <span className="text-3xl mr-3">👨‍🍳</span>
              <span className="text-purple-600 font-bold text-lg">
                Our Story
              </span>
            </motion.div>

            <motion.h2
              className="text-5xl lg:text-7xl font-bold text-gray-800 mb-6 leading-tight"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={isVisible ? { scale: 1, opacity: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              About{" "}
              <motion.span
                className="text-[#60a5fa]"
                animate={{
                  textShadow: [
                    "0 0 10px rgba(168,85,247,0.3)",
                    "0 0 20px rgba(168,85,247,0.6)",
                    "0 0 10px rgba(168,85,247,0.3)",
                  ],
                }}
                transition={{ duration: 2.5, repeat: Infinity }}
              >
                Yummy Yako
              </motion.span>
            </motion.h2>

            <motion.p
              className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ y: 30, opacity: 0 }}
              animate={isVisible ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Born from a passion for bringing smiles to every neighborhood, one
              sweet treat at a time.
            </motion.p>
          </motion.div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Story Cards */}
            <div className="space-y-8">
              {[
                {
                  emoji: "🚚",
                  title: "Mobile Magic",
                  description:
                    "We bring the dessert shop to your doorstep! Our colorful truck travels through neighborhoods, parks, and events, spreading joy wherever we go.",
                },
                {
                  emoji: "🎂",
                  title: "Handcrafted Happiness",
                  description:
                    "Every dessert is made with love using premium ingredients. From creamy ice creams to decadent cakes, we craft each treat to perfection.",
                },
                {
                  emoji: "💝",
                  title: "Community Love",
                  description:
                    "More than just a dessert truck, we're part of your community. We celebrate birthdays, festivals, and those special moments that matter.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  variants={cardVariants}
                  initial="hidden"
                  animate={isVisible ? "visible" : "hidden"}
                  className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300"
                  whileHover={{
                    scale: 1.03,
                    y: -5,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                  }}
                >
                  <motion.div
                    className="text-5xl mb-4 inline-block"
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.5,
                    }}
                  >
                    {item.emoji}
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Right - Animated Illustration */}
            <motion.div
              className="flex justify-center items-center"
              variants={imageVariants}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
            >
              <motion.div
                className="relative w-96 h-96 lg:w-[550px] lg:h-[550px]"
                variants={floatingVariants}
                animate="animate"
              >
                {/* Main circular background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-purple-200 via-pink-100 to-blue-200 rounded-full opacity-80"
                  animate={{
                    rotate: 360,
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                    scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                  }}
                />

                {/* Inner content circle */}
                <div className="absolute inset-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg border border-purple-100 overflow-hidden">
                  <motion.img
                    src={ChefImg} // replace with your image path
                    alt="Dessert"
                    className="w-full h-full object-cover rounded-full"
                    animate={{
                      scale: [1, 1.05, 1],
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                </div>

                {/* Floating dessert icons */}
                <motion.div
                  className="absolute -top-4 -left-4 text-4xl"
                  animate={{
                    y: [0, -15, 0],
                    rotate: [0, 15, 0],
                  }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                >
                  🍭
                </motion.div>
                <motion.div
                  className="absolute -top-8 -right-8 text-3xl"
                  animate={{
                    y: [0, -10, 0],
                    x: [0, 10, 0],
                    rotate: [0, -20, 0],
                  }}
                  transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                >
                  🎂
                </motion.div>
                <motion.div
                  className="absolute -bottom-4 -right-4 text-4xl"
                  animate={{
                    scale: [1, 1.3, 1],
                    rotate: [0, 25, 0],
                  }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                >
                  🍪
                </motion.div>
                <motion.div
                  className="absolute -bottom-8 -left-8 text-3xl"
                  animate={{
                    y: [0, -8, 0],
                    x: [0, -8, 0],
                    rotate: [0, 10, 0],
                  }}
                  transition={{ duration: 2.8, repeat: Infinity, delay: 1.5 }}
                >
                  🧁
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Top Wave Transition */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-blue-100 to-transparent"
        initial={{ y: -100 }}
        animate={isVisible ? { y: 0 } : {}}
        transition={{ duration: 1 }}
      >
        <svg
          className="absolute top-0 left-0 right-0 w-full h-16 rotate-180"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="rgba(168,85,247,0.1)"
            animate={{
              d: [
                "M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z",
                "M321.39,46.44c58-5.79,114.16-20.13,172-31.86,82.39-11.72,168.19-12.73,250.45,4.61C823.78,36,906.67,77,985.66,97.83c70.05,23.48,146.53,31.09,214.34,8V0H0V32.35A600.21,600.21,0,0,0,321.39,46.44Z",
                "M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z",
              ],
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>
      </motion.div>
    </div>
  );
};

export default About;

"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";

// Import food images
import NutellaKnafeh from "../assets/images/foods/Nutella Knafeh Fried Ice Cream.webp";
import PistachioKnafeh from "../assets/images/foods/Pistachio Knafeh Fried Ice Cream.webp";
import BiscoffKnafeh from "../assets/images/foods/Biscoff Knafeh Fried Ice Cream.webp";
import YummyPancake from "../assets/images/foods/Yummy Dutch Pancake.webp";

const DessertHero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, 100]);
  const y2 = useTransform(scrollY, [0, 300], [0, -50]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("hero-section");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const featuredItems = [
    {
      id: 1,
      name: "NUTELLA KNAFEH FRIED ICE CREAM",
      price: "$14.00",
      description: "Topped with Nutella, Oreo Crumbs & Nutella Biscuit",
      image: NutellaKnafeh,
    },
    {
      id: 2,
      name: "PISTACHIO KNAFEH FRIED ICE CREAM",
      price: "$16.50",
      description: "Topped with Pistachio Sauce & Pistachio Nuts",
      image: PistachioKnafeh,
    },
    {
      id: 3,
      name: "BISCOFF KNAFEH FRIED ICE CREAM",
      price: "$14.00",
      description:
        "Topped with Biscoff Sauce, Biscoff Crumbs & Biscoff Cream Biscuit",
      image: BiscoffKnafeh,
    },
    {
      id: 4,
      name: "Dutch Pancakes (Choice of Sauce)",
      price: "$10.00",
      description:
        "Mini pancakes topped with strawberries, banana & ice cream.",
      image: YummyPancake,
    },
  ];

  // Floating bubble animation
  const bubbleVariants = {
    float: {
      y: [0, -20, 0],
      x: [0, 5, -5, 0],
      scale: [1, 1.1, 1],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div
      id="hero-section"
      className="relative overflow-hidden bg-gradient-to-br from-cyan-50 via-teal-50 to-emerald-50"
    >
      {/* Animated Background with Cream Drips */}
      <motion.div className="absolute inset-0" style={{ y: y2 }}></motion.div>

      {/* Floating Bubbles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`bubble-${i}`}
          className="absolute rounded-full bg-white opacity-20"
          style={{
            width: `${20 + Math.random() * 40}px`,
            height: `${20 + Math.random() * 40}px`,
            top: `${10 + Math.random() * 80}%`,
            left: `${5 + Math.random() * 90}%`,
          }}
          variants={bubbleVariants}
          animate="float"
          transition={{ delay: i * 0.5 }}
        />
      ))}

      {/* Main Content */}
      <div className="relative z-10  px-6 lg:px-16 ">
        <div className="max-w-7xl mx-auto">
          {/* Hero Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ y: -100, opacity: 0 }}
            animate={isVisible ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 1.2, type: "spring", stiffness: 100 }}
          >
            {/* Main Title */}
            <motion.h1
              className="text-4xl lg:text-6xl  font-black text-gray-800 mb-4 leading-tight"
              initial={{ scale: 0.3, opacity: 0 }}
              animate={isVisible ? { scale: 1, opacity: 1 } : {}}
              transition={{
                delay: 0.6,
                duration: 1.2,
                type: "spring",
                bounce: 0.4,
              }}
            >
              Best{" "}
              <motion.span
                className="relative inline-block"
                whileHover={{ scale: 1.05 }}
              >
                <motion.span
                  className="text-transparent bg-gradient-to-r from-teal-500 via-cyan-500 to-emerald-500 bg-clip-text"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                  style={{
                    backgroundSize: "200% auto",
                  }}
                >
                  Sellers
                </motion.span>
                {/* Decorative underline */}
                <motion.div
                  className="absolute -bottom-2 left-0 h-2 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 1.5, duration: 1, ease: "easeOut" }}
                />
              </motion.span>
            </motion.h1>

            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium"
              initial={{ y: 50, opacity: 0 }}
              animate={isVisible ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 0.9, duration: 1 }}
              style={{
                fontFamily: "sans-serif",
              }}
            >
              Handcrafted gourmet desserts made with premium ingredients,
              bringing artisanal sweetness directly to your neighborhood.
            </motion.p>
          </motion.div>

          {/* Featured Items Grid */}
          <div className="grid lg:grid-cols-4 gap-8 ">
            {featuredItems.map((item, index) => (
              <motion.div
                key={item.id}
                className="group relative"
                initial={{ y: 100, opacity: 0, scale: 0.9 }}
                animate={isVisible ? { y: 0, opacity: 1, scale: 1 } : {}}
                transition={{
                  delay: 1.2 + index * 0.2,
                  duration: 0.8,
                  type: "spring",
                  bounce: 0.3,
                }}
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
                whileHover={{ y: -10 }}
              >
                {/* Card Container */}
                <motion.div
                  className="relative bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl border border-gray-100"
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 25px 50px rgba(20, 184, 166, 0.15)",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Image Section */}
                  <div className="relative h-44 overflow-hidden">
                    <motion.img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    />

                    {/* Price Badge */}
                    <motion.div
                      className={`absolute top-4 right-4 px-4 py-1 rounded-full bg-[#5ce7f8] text-white font-bold text-lg shadow-lg`}
                      initial={{ scale: 0, rotate: -90 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 1.5 + index * 0.1, type: "spring" }}
                      whileHover={{
                        scale: 1.1,
                        rotate: [0, 5, -5, 0],
                      }}
                    >
                      {item.price}
                    </motion.div>

                    {/* Floating Sparkles on Hover */}
                    {hoveredItem === item.id && (
                      <>
                        {[...Array(4)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="absolute text-white text-2xl"
                            style={{
                              top: `${20 + Math.random() * 60}%`,
                              left: `${10 + Math.random() * 80}%`,
                            }}
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{
                              scale: [0, 1, 0],
                              opacity: [0, 1, 0],
                              y: [0, -20],
                              rotate: [0, 180],
                            }}
                            transition={{
                              duration: 1.5,
                              delay: i * 0.2,
                              repeat: Infinity,
                              repeatDelay: 2,
                            }}
                          >
                            ✨
                          </motion.div>
                        ))}
                      </>
                    )}
                  </div>

                  {/* Content Section */}
                  <motion.div
                    className="p-6"
                    animate={{
                      backgroundColor:
                        hoveredItem === item.id
                          ? "rgba(255,255,255,0.95)"
                          : "rgba(255,255,255,0.9)",
                    }}
                  >
                    <motion.h3
                      className="text-xl  font-bold text-[#015a5e] mb-3"
                      animate={{
                        color: hoveredItem === item.id ? "#59a9af" : "#015a5e",
                      }}
                    >
                      {item.name}
                    </motion.h3>

                    <motion.p
                      className="text-gray-600 leading-relaxed text-sm lg:text-base"
                      animate={{
                        opacity: hoveredItem === item.id ? 1 : 0.8,
                      }}
                      style={{
                        fontFamily: "sans-serif",
                      }}
                    >
                      {item.description}
                    </motion.p>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div className="text-center  mb-5">
            <Link to="/menu">
              <motion.button
                className="inline-flex items-center bg-gradient-to-r from-teal-500 via-cyan-500 to-emerald-500 hover:from-teal-600 hover:via-cyan-600 hover:to-emerald-600 text-white font-bold py-1 px-12 rounded-full shadow-2xl text-xl lg:text-xl  mt-15"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 25px 50px rgba(20, 184, 166, 0.4)",
                  y: -3,
                }}
                style={{
                  fontFamily: "sans-serif",
                }}
              >
                Explore Our Full Menu
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default DessertHero;

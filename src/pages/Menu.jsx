"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BackImg from "../assets/images/Image_fx-back.png";

const Menu = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("menu-section");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const featuredItems = [
    {
      id: 1,
      name: "Rainbow Ice Cream Cone",
      price: "$4.50",
      description:
        "Three magical scoops of our signature flavors - creamy vanilla, sweet strawberry, and refreshing mint chocolate chip, all perfectly nestled in a golden crispy waffle cone.",
      image:
        "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=600&h=600&fit=crop&crop=center",
      emoji: "🍦",
      color: "from-pink-400 to-purple-500",
    },
    {
      id: 2,
      name: "Strawberry Cupcake Delight",
      price: "$2.95",
      description:
        "Fluffy cloud-like vanilla cupcake topped with silky strawberry buttercream frosting and crowned with a candied strawberry that sparkles like a jewel.",
      image:
        "https://images.unsplash.com/photo-1587668178277-295251f900ce?w=600&h=600&fit=crop&crop=center",
      emoji: "🧁",
      color: "from-rose-400 to-pink-500",
    },
    {
      id: 3,
      name: "Double Chocolate Chip Cookie",
      price: "$2.50",
      description:
        "Warm, gooey chocolate chip cookie loaded with dark and white chocolate chips, baked to golden perfection and served fresh from our mobile oven.",
      image:
        "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=600&h=600&fit=crop&crop=center",
      emoji: "🍪",
      color: "from-amber-400 to-orange-500",
    },
  ];

  const bubbleVariants = {
    animate: {
      y: [-20, -120],
      opacity: [0.6, 0],
      scale: [0.4, 1.3],
      transition: { duration: 6, repeat: Infinity, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { y: 100, opacity: 0, scale: 0.8 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.3,
        duration: 0.8,
        type: "spring",
        bounce: 0.4,
      },
    }),
  };

  return (
    <div
      id="menu-section"
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-pink-50 via-white to-orange-50 m-8 rounded-[70px] shadow-2xl"
    >
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
      {/* Animated Background Elements */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={`menu-bubble-${i}`}
          className="absolute w-4 h-4 bg-pink-200 rounded-full opacity-30"
          style={{
            left: `${Math.random() * 100}%`,
            bottom: `-20px`,
          }}
          variants={bubbleVariants}
          animate="animate"
          transition={{ delay: Math.random() * 5 }}
        />
      ))}

      {/* Food Sparkles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={`menu-sparkle-${i}`}
          className="absolute text-2xl opacity-40"
          style={{
            top: `${10 + Math.random() * 80}%`,
            left: `${5 + Math.random() * 90}%`,
          }}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.4, 1],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 4 + Math.random() * 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 4,
          }}
        >
          {["🌟", "✨", "💫", "⭐", "🎉", "🎈"][Math.floor(Math.random() * 6)]}
        </motion.div>
      ))}

      {/* Main Content */}
      <div className="relative z-10 min-h-screen px-4 lg:px-12 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ y: -60, opacity: 0 }}
            animate={isVisible ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 1, type: "spring", bounce: 0.3 }}
          >
            <motion.div
              className="inline-flex items-center bg-white/90 backdrop-blur-sm rounded-full px-6 py-2 mb-6 shadow-lg border border-pink-200"
              whileHover={{ scale: 1.05, rotate: [0, 2, -2, 0] }}
              animate={isVisible ? { scale: 1 } : { scale: 0 }}
              transition={{ delay: 0.2, type: "spring" }}
            >
              <motion.span
                className="text-2xl mr-2"
                animate={{
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                🍽️
              </motion.span>
              <span className="text-pink-600 font-bold text-lg">
                Featured Treats
              </span>
            </motion.div>

            <motion.h2
              className="text-4xl lg:text-6xl font-bold text-gray-800 mb-4 leading-tight"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={isVisible ? { scale: 1, opacity: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Sweet{" "}
              <motion.span
                className="text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-orange-500 bg-clip-text"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 3, repeat: Infinity }}
                style={{
                  backgroundSize: "200% auto",
                }}
              >
                Dreams
              </motion.span>
            </motion.h2>

            <motion.p
              className="text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
              initial={{ y: 30, opacity: 0 }}
              animate={isVisible ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Handcrafted with love, served with smiles ✨
            </motion.p>
          </motion.div>

          {/* Featured Items */}
          <div className="space-y-12">
            {featuredItems.map((item, index) => (
              <motion.div
                key={item.id}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image Section */}
                <motion.div
                  className="flex-1 relative"
                  onMouseEnter={() => setHoveredItem(item.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                  whileHover={{ scale: 1.02 }}
                >
                  <motion.div
                    className="relative rounded-3xl overflow-hidden shadow-2xl"
                    animate={{
                      boxShadow:
                        hoveredItem === item.id
                          ? "0 30px 60px rgba(0,0,0,0.25)"
                          : "0 20px 40px rgba(0,0,0,0.15)",
                    }}
                  >
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-20 z-10`}
                      animate={{
                        opacity: hoveredItem === item.id ? 0.4 : 0.2,
                      }}
                    />

                    <motion.img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-64 lg:h-80 object-cover"
                      animate={{
                        scale: hoveredItem === item.id ? 1.1 : 1,
                      }}
                      transition={{ duration: 0.6 }}
                    />

                    {/* Floating Emoji */}
                    <motion.div
                      className="absolute top-4 right-4 text-4xl z-20"
                      animate={{
                        rotate: hoveredItem === item.id ? [0, 15, -15, 0] : 0,
                        scale: hoveredItem === item.id ? [1, 1.2, 1] : 1,
                        y: hoveredItem === item.id ? [0, -5, 0] : 0,
                      }}
                      transition={{
                        duration: 0.8,
                        repeat: hoveredItem === item.id ? Infinity : 0,
                      }}
                    >
                      {item.emoji}
                    </motion.div>

                    {/* Sparkle Effect */}
                    <AnimatePresence>
                      {hoveredItem === item.id && (
                        <>
                          {[...Array(6)].map((_, i) => (
                            <motion.div
                              key={i}
                              className="absolute text-2xl z-30"
                              style={{
                                top: `${20 + Math.random() * 60}%`,
                                left: `${10 + Math.random() * 80}%`,
                              }}
                              initial={{ scale: 0, opacity: 0 }}
                              animate={{
                                scale: [0, 1, 0],
                                opacity: [0, 1, 0],
                                rotate: [0, 180, 360],
                              }}
                              exit={{ scale: 0, opacity: 0 }}
                              transition={{
                                duration: 2,
                                delay: i * 0.2,
                                repeat: Infinity,
                              }}
                            >
                              ✨
                            </motion.div>
                          ))}
                        </>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </motion.div>

                {/* Content Section */}
                <motion.div
                  className="flex-1 space-y-4"
                  animate={{
                    x: hoveredItem === item.id ? (index % 2 === 0 ? 5 : -5) : 0,
                  }}
                >
                  <motion.div
                    className="space-y-3"
                    animate={{
                      scale: hoveredItem === item.id ? 1.01 : 1,
                    }}
                  >
                    <motion.h3
                      className="text-2xl lg:text-3xl font-bold text-gray-800"
                      animate={{
                        color: hoveredItem === item.id ? "#ec4899" : "#1f2937",
                      }}
                    >
                      {item.name}
                    </motion.h3>

                    <motion.div
                      className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${item.color} text-white font-bold text-xl shadow-lg`}
                      whileHover={{ scale: 1.1, rotate: [0, 3, -3, 0] }}
                      animate={{
                        boxShadow:
                          hoveredItem === item.id
                            ? "0 8px 20px rgba(236,72,153,0.4)"
                            : "0 4px 12px rgba(236,72,153,0.2)",
                      }}
                    >
                      {item.price}
                    </motion.div>
                  </motion.div>

                  <motion.p
                    className="text-base lg:text-lg text-gray-600 leading-relaxed"
                    animate={{
                      opacity: hoveredItem === item.id ? 1 : 0.8,
                      y: hoveredItem === item.id ? -2 : 0,
                    }}
                  >
                    {item.description}
                  </motion.p>
                </motion.div>
              </motion.div>
            ))}
          </div>
          <div className=" flex items-center justify-center mt-10 flex-col">
            <motion.button
              className="items-center flex justify-center bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 hover:from-orange-500 hover:via-pink-600 hover:to-purple-700 text-white font-bold py-5 px-12 rounded-full shadow-xl text-xl"
              whileHover={{
                scale: 1.08,
                boxShadow: "0 20px 40px rgba(236,72,153,0.5)",
                y: -5,
              }}
              whileTap={{ scale: 0.95 }}
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                backgroundPosition: { duration: 3, repeat: Infinity },
                type: "spring",
              }}
              style={{
                backgroundSize: "200% auto",
              }}
            >
              View Full Menu ✨
            </motion.button>

            <motion.div
              className="flex justify-center gap-4 mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
            >
              {["🍰", "🍪", "🧁", "🍦", "🥧"].map((emoji, i) => (
                <motion.span
                  key={i}
                  className="text-3xl"
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{
                    duration: 2,
                    delay: i * 0.2,
                    repeat: Infinity,
                    repeatDelay: 3,
                  }}
                >
                  {emoji}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Decorative Wave */}
      {/* <motion.div
        className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-purple-50 to-transparent"
        initial={{ y: -100 }}
        animate={isVisible ? { y: 0 } : {}}
        transition={{ duration: 1.5 }}
      >
        <svg
          className="absolute top-0 left-0 right-0 w-full h-16 rotate-180"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="rgba(236,72,153,0.15)"
            animate={{
              d: [
                "M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z",
                "M321.39,46.44c58-5.79,114.16-20.13,172-31.86,82.39-11.72,168.19-12.73,250.45,4.61C823.78,36,906.67,77,985.66,97.83c70.05,23.48,146.53,31.09,214.34,8V0H0V32.35A600.21,600.21,0,0,0,321.39,46.44Z",
                "M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z",
              ],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>
      </motion.div> */}
    </div>
  );
};

export default Menu;

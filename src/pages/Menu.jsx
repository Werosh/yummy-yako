"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Menu = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");
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

  const menuItems = [
    {
      id: 1,
      name: "Rainbow Ice Cream Cone",
      category: "ice-cream",
      price: "$4.50",
      description:
        "Three scoops of our signature flavors - vanilla, strawberry, and mint chocolate chip, served in a crispy waffle cone.",
      image:
        "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&h=400&fit=crop&crop=center",
      popular: true,
      emoji: "🍦",
    },
    {
      id: 2,
      name: "Chocolate Fudge Brownie",
      category: "cakes",
      price: "$3.75",
      description:
        "Rich, dense chocolate brownie topped with warm fudge sauce and a sprinkle of powdered sugar.",
      image:
        "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&h=400&fit=crop&crop=center",
      popular: false,
      emoji: "🍰",
    },
    {
      id: 3,
      name: "Strawberry Cupcake Delight",
      category: "cupcakes",
      price: "$2.95",
      description:
        "Fluffy vanilla cupcake with fresh strawberry buttercream frosting and a candied strawberry on top.",
      image:
        "https://images.unsplash.com/photo-1587668178277-295251f900ce?w=400&h=400&fit=crop&crop=center",
      popular: true,
      emoji: "🧁",
    },
    {
      id: 4,
      name: "Cookies & Cream Milkshake",
      category: "drinks",
      price: "$5.25",
      description:
        "Thick and creamy milkshake blended with vanilla ice cream and crushed chocolate cookies, topped with whipped cream.",
      image:
        "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=400&fit=crop&crop=center",
      popular: false,
      emoji: "🥤",
    },
    {
      id: 5,
      name: "Fresh Fruit Tart",
      category: "cakes",
      price: "$4.25",
      description:
        "Buttery pastry shell filled with vanilla custard and topped with seasonal fresh fruits and a glossy glaze.",
      image:
        "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=400&h=400&fit=crop&crop=center",
      popular: true,
      emoji: "🥧",
    },
    {
      id: 6,
      name: "Cotton Candy Cloud",
      category: "special",
      price: "$3.50",
      description:
        "Fluffy pink and blue cotton candy that melts in your mouth, served in a decorative cone.",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop&crop=center",
      popular: false,
      emoji: "🍭",
    },
    {
      id: 7,
      name: "Double Chocolate Chip Cookie",
      category: "cookies",
      price: "$2.50",
      description:
        "Warm, gooey chocolate chip cookie with dark and white chocolate chips, served fresh from our mobile oven.",
      image:
        "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400&h=400&fit=crop&crop=center",
      popular: true,
      emoji: "🍪",
    },
    {
      id: 8,
      name: "Tropical Smoothie Bowl",
      category: "special",
      price: "$6.75",
      description:
        "Frozen smoothie bowl with mango, pineapple, and coconut, topped with granola, berries, and coconut flakes.",
      image:
        "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?w=400&h=400&fit=crop&crop=center",
      popular: false,
      emoji: "🥥",
    },
    {
      id: 9,
      name: "Classic Vanilla Sundae",
      category: "ice-cream",
      price: "$4.95",
      description:
        "Three scoops of premium vanilla ice cream with hot fudge, caramel sauce, whipped cream, and a cherry on top.",
      image:
        "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=400&fit=crop&crop=center",
      popular: true,
      emoji: "🍨",
    },
  ];

  const categories = [
    { id: "all", name: "All Treats", emoji: "🍽️" },
    { id: "ice-cream", name: "Ice Cream", emoji: "🍦" },
    { id: "cakes", name: "Cakes & Tarts", emoji: "🍰" },
    { id: "cupcakes", name: "Cupcakes", emoji: "🧁" },
    { id: "cookies", name: "Cookies", emoji: "🍪" },
    { id: "drinks", name: "Drinks", emoji: "🥤" },
    { id: "special", name: "Specials", emoji: "✨" },
  ];

  const filteredItems =
    selectedCategory === "all"
      ? menuItems
      : menuItems.filter((item) => item.category === selectedCategory);

  const bubbleVariants = {
    animate: {
      y: [-20, -120],
      opacity: [0.6, 0],
      scale: [0.4, 1.3],
      transition: { duration: 6, repeat: Infinity, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { y: 80, opacity: 0, scale: 0.8 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        type: "spring",
        bounce: 0.3,
      },
    }),
  };

  return (
    <div
      id="menu-section"
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-pink-50 via-white to-orange-50"
    >
      {/* Animated Background Elements */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={`menu-bubble-${i}`}
          className="absolute w-5 h-5 bg-pink-200 rounded-full opacity-40"
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
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={`menu-sparkle-${i}`}
          className="absolute text-lg opacity-50"
          style={{
            top: `${10 + Math.random() * 80}%`,
            left: `${5 + Math.random() * 90}%`,
          }}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 4 + Math.random() * 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 4,
          }}
        >
          {["🌟", "✨", "💫", "⭐"][Math.floor(Math.random() * 4)]}
        </motion.div>
      ))}

      {/* Main Content */}
      <div className="relative z-10 min-h-screen px-8 lg:px-16 py-20">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ y: -60, opacity: 0 }}
            animate={isVisible ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 1, type: "spring", bounce: 0.3 }}
          >
            <motion.div
              className="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-full px-8 py-3 mb-8 shadow-lg border border-pink-100"
              whileHover={{ scale: 1.05 }}
              animate={isVisible ? { scale: 1 } : { scale: 0 }}
              transition={{ delay: 0.2, type: "spring" }}
            >
              <span className="text-3xl mr-3">🍽️</span>
              <span className="text-pink-600 font-bold text-lg">
                Delicious Menu
              </span>
            </motion.div>

            <motion.h2
              className="text-5xl lg:text-7xl font-bold text-gray-800 mb-6 leading-tight"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={isVisible ? { scale: 1, opacity: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Sweet{" "}
              <motion.span
                className="text-pink-500"
                animate={{
                  textShadow: [
                    "0 0 10px rgba(236,72,153,0.3)",
                    "0 0 20px rgba(236,72,153,0.6)",
                    "0 0 10px rgba(236,72,153,0.3)",
                  ],
                }}
                transition={{ duration: 2.5, repeat: Infinity }}
              >
                Treats
              </motion.span>
            </motion.h2>

            <motion.p
              className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ y: 30, opacity: 0 }}
              animate={isVisible ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Handcrafted desserts made with love and the finest ingredients
            </motion.p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ y: 40, opacity: 0 }}
            animate={isVisible ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "bg-pink-500 text-white shadow-lg"
                    : "bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-pink-100 border border-pink-100"
                }`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="mr-2">{category.emoji}</span>
                {category.name}
              </motion.button>
            ))}
          </motion.div>

          {/* Menu Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              key={selectedCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  custom={index}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  className="bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden shadow-lg border border-pink-100 hover:shadow-xl transition-all duration-300"
                  whileHover={{
                    scale: 1.02,
                    y: -8,
                    boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
                  }}
                  onMouseEnter={() => setHoveredItem(item.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  {/* Popular Badge */}
                  {item.popular && (
                    <motion.div
                      className="absolute top-4 right-4 z-10 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                    >
                      Popular ⭐
                    </motion.div>
                  )}

                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <motion.img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    />
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: hoveredItem === item.id ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                    />
                    <motion.div
                      className="absolute bottom-4 right-4 text-4xl"
                      animate={{
                        rotate: hoveredItem === item.id ? [0, 10, -10, 0] : 0,
                        scale: hoveredItem === item.id ? 1.2 : 1,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {item.emoji}
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <motion.h3
                        className="text-xl font-bold text-gray-800"
                        animate={{
                          color:
                            hoveredItem === item.id ? "#ec4899" : "#1f2937",
                        }}
                      >
                        {item.name}
                      </motion.h3>
                      <motion.span
                        className="text-2xl font-bold text-pink-500"
                        whileHover={{ scale: 1.1 }}
                      >
                        {item.price}
                      </motion.span>
                    </div>

                    <motion.p
                      className="text-gray-600 text-sm leading-relaxed mb-4"
                      animate={{
                        opacity: hoveredItem === item.id ? 1 : 0.8,
                      }}
                    >
                      {item.description}
                    </motion.p>

                    <motion.button
                      className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300"
                      whileHover={{
                        scale: 1.02,
                        boxShadow: "0 8px 20px rgba(236,72,153,0.3)",
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Add to Order 🛒
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Call to Action */}
          <motion.div
            className="text-center mt-20"
            initial={{ y: 60, opacity: 0 }}
            animate={isVisible ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <motion.div
              className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-pink-100 max-w-2xl mx-auto"
              whileHover={{ scale: 1.02 }}
            >
              <motion.div
                className="text-5xl mb-4"
                animate={{
                  rotate: [0, 5, -5, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                🎉
              </motion.div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Can't find your truck?
              </h3>
              <p className="text-gray-600 mb-6">
                Follow us on social media or call us to find out where we'll be
                next!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Track Our Truck 📍
                </motion.button>
                <motion.button
                  className="bg-white hover:bg-gray-50 text-pink-600 font-bold py-3 px-8 rounded-full shadow-lg border border-pink-200 transition-all"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Call Us 📞
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Top Wave Transition */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-purple-50 to-transparent"
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
            fill="rgba(236,72,153,0.1)"
            animate={{
              d: [
                "M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z",
                "M321.39,46.44c58-5.79,114.16-20.13,172-31.86,82.39-11.72,168.19-12.73,250.45,4.61C823.78,36,906.67,77,985.66,97.83c70.05,23.48,146.53,31.09,214.34,8V0H0V32.35A600.21,600.21,0,0,0,321.39,46.44Z",
                "M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z",
              ],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>
      </motion.div>
    </div>
  );
};

export default Menu;

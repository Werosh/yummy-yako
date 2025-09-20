import React, { useState } from "react";
import { motion } from "framer-motion";
import { Star, Clock, ChefHat, Award, Heart } from "lucide-react";

// Demo dessert images (using placeholder for demo - replace with actual images)
const dessertImages = {
  cupcake:
    "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?w=400&h=300&fit=crop",
  cake: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop",
  icecream:
    "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=400&h=300&fit=crop",
};

const MenuPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    { id: "All", name: "All Items", icon: "🍰" },
    { id: "Knafeh", name: "Knafeh Items", icon: "🧁" },
    { id: "Pancakes", name: "Dutch Pancakes", icon: "🥞" },
    { id: "Extras", name: "Extras", icon: "🍓" },
  ];

  const menuItems = [
    {
      id: 1,
      name: "Nutella Knafeh Fried Ice Cream",
      category: "Knafeh",
      price: "$14.00",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQsTwfGPwodm4rkQhV4lQ3Xmlan5yBk2oCAQ&s", // replace with actual image
      description:
        "Fried ice cream topped with Nutella, Oreo crumbs & Nutella biscuit.",
      rating: 4.9,
      prepTime: "10 min",
      featured: true,
    },
    {
      id: 2,
      name: "Biscoff Knafeh Fried Ice Cream",
      category: "Knafeh",
      price: "$14.00",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxQN1lJRwsOPjd2-ODmbCR7AH_r83DKn0sog&s",
      description:
        "Fried ice cream topped with Biscoff sauce, Biscoff crumbs & Biscoff cream biscuit.",
      rating: 4.8,
      prepTime: "10 min",
      featured: false,
    },
    {
      id: 3,
      name: "Pistachio Knafeh Fried Ice Cream",
      category: "Knafeh",
      price: "$16.50",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8HuT25N3S-1YU5QClPoJ1Dka3QP_gmNR5ug&s",
      description:
        "Fried ice cream topped with pistachio sauce & pistachio nuts.",
      rating: 5.0,
      prepTime: "10 min",
      featured: true,
    },
    {
      id: 4,
      name: "Yummys Knafeh Fried Ice Cream",
      category: "Knafeh",
      price: "$15.00",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmeFqDEZRFOvas0A-o4wYOcnrSNWPYDxEp8A&s",
      description:
        "Fried ice cream topped with signature sauce, Oreo crumbs & Bueno.",
      rating: 4.7,
      prepTime: "10 min",
      featured: false,
    },
    {
      id: 5,
      name: "Dutch Pancakes (Choice of Sauce)",
      category: "Pancakes",
      price: "$10.00",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRzIWmd7O5zeuJYfSHdoxHLuoBWQFTj-hvow&s",
      description:
        "Mini pancakes topped with strawberries, banana & ice cream.",
      rating: 4.6,
      prepTime: "12 min",
      featured: false,
    },
    {
      id: 6,
      name: "Pistachio Dutch Pancakes",
      category: "Pancakes",
      price: "$12.00",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkmYRsoqI3gXEesy0_YJCkZBLrbvmQEAFsEg&s",
      description:
        "Mini pancakes topped with strawberries, banana & ice cream with pistachio drizzle.",
      rating: 4.8,
      prepTime: "12 min",
      featured: true,
    },
    {
      id: 7,
      name: "Knafeh",
      category: "Knafeh",
      price: "$11.00",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_K0h5zf6s9MrV1yPQN9K8Ek3yTcx4yvVHLg&s",
      description:
        "Traditional homemade knafeh topped with strawberries & banana.",
      rating: 4.9,
      prepTime: "15 min",
      featured: true,
    },
    {
      id: 8,
      name: "Strawberry Cup",
      category: "Extras",
      price: "$17.00",
      image:
        "https://cdn.shopify.com/s/files/1/0703/4231/2189/files/9999_480x480.jpg?v=1717362152",
      description: "Fresh strawberries served with your choice of sauce.",
      rating: 4.7,
      prepTime: "5 min",
      featured: false,
    },
    // Extras (sauces & toppings)
    {
      id: 9,
      name: "Nutella Sauce",
      category: "Extras",
      price: "$2.00",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqsbjCrahh_smX_FG7-TZ0F4Pumk-Id34wsw&s",
      description: "Rich Nutella drizzle.",
      rating: 5.0,
      prepTime: "1 min",
      featured: false,
    },
    {
      id: 10,
      name: "Biscoff Sauce",
      category: "Extras",
      price: "$2.00",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRzYfexH8DNdLv786Oltg12vys-timjfMDEw&s",
      description: "Smooth Biscoff drizzle.",
      rating: 4.8,
      prepTime: "1 min",
      featured: false,
    },
    {
      id: 11,
      name: "Pistachio Sauce",
      category: "Extras",
      price: "$3.50",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRimksmw-RCJu0LRfp4CTTTxsz_Gm6e79kUlA&s",
      description: "Creamy pistachio sauce.",
      rating: 4.9,
      prepTime: "1 min",
      featured: false,
    },
    {
      id: 12,
      name: "Yummys Sauce",
      category: "Extras",
      price: "$3.50",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLPGE3whYemG3eaTCBjmkvkV52b7z2yd2UNQ&s",
      description: "Signature house sauce.",
      rating: 4.8,
      prepTime: "1 min",
      featured: false,
    },
    {
      id: 13,
      name: "Strawberries",
      category: "Extras",
      price: "$0.50",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm3jFWGKHucgSVFKi_hv9422Ee8zGKkQOdsA&s",
      description: "Fresh strawberries topping.",
      rating: 4.9,
      prepTime: "1 min",
      featured: false,
    },
    {
      id: 14,
      name: "Banana",
      category: "Extras",
      price: "$0.50",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZlhFbIfx5hueeG21LJqj_ynf5PlUZk0F9Ww&s",
      description: "Fresh banana slices.",
      rating: 4.7,
      prepTime: "1 min",
      featured: false,
    },
    {
      id: 15,
      name: "Ice Cream",
      category: "Extras",
      price: "$2.00",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbtGheck-9XK8d2SI2tuIiSh7cE3Kz-MDh1w&s",
      description: "Vanilla ice cream scoop.",
      rating: 5.0,
      prepTime: "1 min",
      featured: false,
    },
    {
      id: 16,
      name: "Pistachio Nuts",
      category: "Extras",
      price: "$1.00",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFfBefUAChM1lnuBfN-1f4D1h6WDO6hkh4gw&s",
      description: "Crunchy pistachio topping.",
      rating: 4.8,
      prepTime: "1 min",
      featured: false,
    },
  ];

  const filteredItems =
    activeCategory === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const categoryVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  const floatingVariants = {
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

  const pulseVariants = {
    animate: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Professional aqua-turquoise background */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-400 via-cyan-500 to-transparent">
        {/* Subtle professional texture overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(255,255,255,0.2),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(255,255,255,0.15),transparent_50%)]"></div>
      </div>

      {/* Professional floating background elements */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={`bg-element-${i}`}
          className="absolute rounded-full bg-white/20 backdrop-blur-sm"
          style={{
            width: `${Math.random() * 25 + 20}px`,
            height: `${Math.random() * 25 + 20}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.7, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: Math.random() * 6 + 6,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Top cream drip */}
      <motion.div
        className="absolute top-0 left-0 right-0 z-20"
        initial={{ scaleY: 0, transformOrigin: "top" }}
        animate={{
          scaleY: 1,
          transition: {
            duration: 1.2,
            ease: "easeOut",
            delay: 0.3,
          },
        }}
      >
        <div className="h-20 lg:h-24 bg-white relative">
          <svg
            className="absolute bottom-0 w-full h-12 lg:h-16"
            viewBox="0 0 1200 80"
            preserveAspectRatio="none"
          >
            <motion.path
              d="M0,0 L1200,0 L1200,15 C1150,45 1100,60 1050,55 C1000,50 950,35 900,40 C850,45 800,60 750,55 C700,50 650,35 600,40 C550,45 500,60 450,55 C400,50 350,35 300,40 C250,45 200,60 150,55 C100,50 50,35 0,40 Z"
              fill="white"
              animate={{
                d: [
                  "M0,0 L1200,0 L1200,15 C1150,45 1100,60 1050,55 C1000,50 950,35 900,40 C850,45 800,60 750,55 C700,50 650,35 600,40 C550,45 500,60 450,55 C400,50 350,35 300,40 C250,45 200,60 150,55 C100,50 50,35 0,40 Z",
                  "M0,0 L1200,0 L1200,20 C1150,40 1100,55 1050,50 C1000,45 950,30 900,35 C850,40 800,55 750,50 C700,45 650,30 600,35 C550,40 500,55 450,50 C400,45 350,30 300,35 C250,40 200,55 150,50 C100,45 50,30 0,35 Z",
                  "M0,0 L1200,0 L1200,15 C1150,45 1100,60 1050,55 C1000,50 950,35 900,40 C850,45 800,60 750,55 C700,50 650,35 600,40 C550,45 500,60 450,55 C400,50 350,35 300,40 C250,45 200,60 150,55 C100,50 50,35 0,40 Z",
                ],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </svg>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <motion.div
            className="text-center mb-16"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6"
              animate={{
                scale: [1, 1.02, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              Yako Menu
            </motion.h1>

            <motion.p
              className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Handcrafted with premium ingredients and served fresh from our
              mobile kitchen
            </motion.p>
          </motion.div>

          {/* Categories */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-12"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-white text-cyan-700 shadow-lg"
                    : "bg-white/30 text-white hover:bg-white/40"
                } backdrop-blur-md border border-white/20`}
                variants={categoryVariants}
                whileHover={{
                  scale: 1.05,
                  y: -2,
                  boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category.id)}
                style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </motion.button>
            ))}
          </motion.div>

          {/* Menu Items Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            key={activeCategory}
          >
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                className="relative bg-white/95 backdrop-blur-lg rounded-3xl overflow-hidden shadow-xl border border-white/50"
                variants={itemVariants}
                whileHover={{
                  scale: 1.02,
                  y: -8,
                  boxShadow: "0 25px 50px rgba(0,0,0,0.2)",
                }}
                transition={{ duration: 0.3 }}
              >
                {item.featured && (
                  <motion.div
                    className="absolute top-4 right-4 z-10 bg-gradient-to-r from-pink-500 to-pink-600 text-white px-3 py-1 rounded-full text-sm font-bold"
                    variants={pulseVariants}
                    animate="animate"
                  >
                    <Award className="w-4 h-4 inline mr-1" />
                    Featured
                  </motion.div>
                )}

                <div className="relative h-64 overflow-hidden">
                  <motion.img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <motion.h3
                      className="text-xl font-bold text-gray-800 leading-tight"
                      style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
                    >
                      {item.name}
                    </motion.h3>
                    <motion.span
                      className="text-2xl font-bold text-cyan-600 ml-2"
                      whileHover={{ scale: 1.1 }}
                      style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
                    >
                      {item.price}
                    </motion.span>
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {item.description}
                  </p>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className="flex items-center mr-4">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-semibold text-gray-700 ml-1">
                          {item.rating}
                        </span>
                      </div>
                      <div className="flex items-center text-gray-500">
                        <Clock className="w-4 h-4 mr-1" />
                        <span className="text-sm">{item.prepTime}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action Section */}
          <motion.div
            className="text-center mt-16"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <motion.div
              className="bg-white/80 backdrop-blur-md rounded-3xl p-8 max-w-2xl mx-auto"
              whileHover={{
                scale: 1.02,
                boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
              }}
            >
              <h3 className="text-2xl font-bold text-blue-400 mb-4">
                Can't find what you're craving?
              </h3>
              <p className="text-blue-400 mb-6">
                We specialize in custom orders for special occasions. Let us
                create something unique just for you!
              </p>
              <a href="tel:+">
                <motion.button
                  className="bg-gradient-to-r from-pink-500 to-pink-600 text-white font-bold py-3 px-8 rounded-full shadow-lg"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 15px 35px rgba(236,72,153,0.4)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact for Custom Orders
                </motion.button>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom cream drip */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          className="w-full h-16"
          viewBox="0 0 1200 64"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M0,64 L0,40 C200,20 400,35 600,25 C800,15 1000,30 1200,22 L1200,64 Z"
            fill="white"
            animate={{
              d: [
                "M0,64 L0,40 C200,20 400,35 600,25 C800,15 1000,30 1200,22 L1200,64 Z",
                "M0,64 L0,35 C200,25 400,20 600,30 C800,20 1000,15 1200,28 L1200,64 Z",
                "M0,64 L0,40 C200,20 400,35 600,25 C800,15 1000,30 1200,22 L1200,64 Z",
              ],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </svg>
      </div>
    </div>
  );
};

export default MenuPage;

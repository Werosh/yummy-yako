import React, { useState } from "react";
import { motion } from "framer-motion";

import Background from "../assets/images/back.png";
import Logo from "../assets/images/logos/Logo.png";

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

        {/* Gradient overlay for depth */}
        {/* <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30"></div> */}
      </div>

      {/* Content Container */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-between py-8 px-4">
        {/* Top Section - Logo */}
        <motion.div
          className="flex-1 flex items-center justify-center pt-16"
          initial="initial"
          animate="animate"
          variants={fadeInUp}
        >
          <div className=" backdrop-blur-xs rounded-2xl p-8   max-w-2xl mt-20">
            <div className="text-center">
              {/* Image Section */}
              <img
                src={Logo} // <-- Replace with your image path
                alt="Sweet Treats"
                className="w-full h-auto mx-auto mb-6  object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* Middle Section - Button */}
        <motion.div
          className="flex-shrink-0 my-5"
          variants={scaleIn}
          initial="initial"
          animate="animate"
        >
          <motion.button
            className="bg-gradient-to-r from-[#80f7fb] to-[#23dfe6] text-white font-bold py-4 px-12 rounded-full shadow-2xl text-lg border-2 border-blue-100"
            whileHover={{
              scale: 1.05,
              y: -3,
              boxShadow: "0 20px 40px rgba(59,130,246,0.4)", // blue-500 glow
              background: "linear-gradient(to right, #3b82f6, #2563eb)", // from blue-500 to blue-600
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            Find Our Truck
          </motion.button>
        </motion.div>

        {/* Bottom Section - Three Images */}
        {/* <motion.div
          className="flex-1 flex items-end justify-center w-full max-w-6xl pb-8"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 w-full max-w-4xl">
            <motion.div variants={fadeInUp} className="relative group">
              <div className="bg-white/15 backdrop-blur-md rounded-xl overflow-hidden shadow-xl border border-white/20 aspect-square">
                <img
                  src="https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Gourmet Cupcakes"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                  <p className="text-white font-semibold p-4 text-sm md:text-base">
                    Gourmet Cupcakes
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="relative group">
              <div className="bg-white/15 backdrop-blur-md rounded-xl overflow-hidden shadow-xl border border-white/20 aspect-square">
                <img
                  src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Artisan Donuts"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                  <p className="text-white font-semibold p-4 text-sm md:text-base">
                    Artisan Donuts
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="relative group">
              <div className="bg-white/15 backdrop-blur-md rounded-xl overflow-hidden shadow-xl border border-white/20 aspect-square">
                <img
                  src="https://images.unsplash.com/photo-1488477181946-6428a0291777?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Premium Ice Cream"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                  <p className="text-white font-semibold p-4 text-sm md:text-base">
                    Premium Ice Cream
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div> */}

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

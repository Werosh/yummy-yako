"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Google Reviews Data
const googleReviews = [
  {
    name: "Gavin Jonesi",
    initial: "G",
    rating: 5,
    review:
      "Yummy Yako is a delightful spot for anyone craving bold flavors and hearty portions. The food is consistently fresh, with a great balance of spices and textures that leave a lasting impression. Their signature dishes are...",
    timeAgo: "5 months ago",
    color: "bg-blue-500",
  },
  {
    name: "Johnny (jman)",
    initial: "J",
    rating: 5,
    review:
      "Mind-blowing dessert alert! 🚨🔥 Yummy Yako at Carnes Hill isn’t just a food truck—it’s a deep-fried paradise for anyone who loves knafeh and ice cream taken to epic new heights! If you’re a fan of Duo Duo fried ice cream, prepare to …",
    timeAgo: "4 months ago",
    color: "bg-pink-500",
  },
  {
    name: "melzy phan",
    initial: "M",
    rating: 5,
    review:
      "Super yum. I liked the pancakes with their pistachio sauce! The fried icecream in the yummy sauce was nice and thick, I found the skin a bit …",
    timeAgo: "6 month ago",
    color: "bg-green-500",
  },
  {
    name: "Gavin Jones",
    initial: "G",
    rating: 5,
    review:
      "Yummy Yako is a delightful spot for anyone craving bold flavors and hearty portions. The food is consistently fresh, with a great balance of spices and textures that leave a lasting impression. Their signature dishes are packed with flavor, …",
    timeAgo: "5 month ago",
    color: "bg-purple-500",
  },
  {
    name: "Elle Tee",
    initial: "E",
    rating: 5,
    review:
      "Desserts were delicious. Dutch pancakes were soft and tasty. Everything went well together. Fried ice cream was also good. Strawberry cup portion was generous. Staff were friendly. Will be back",
    timeAgo: "4 month ago",
    color: "bg-orange-500",
  },
  {
    name: "umair khan",
    initial: "U",
    rating: 5,
    review:
      "Got the pistachio knafeh and definitely did not disappoint!The combination of textures and flavours go together incredibly. Arguably the best fried icecream iv ever had. …",
    timeAgo: "3 month ago",
    color: "bg-teal-500",
  },
  {
    name: "kylie du",
    initial: "K",
    rating: 5,
    review:
      "Tried this for the first time and wow blew my mind, the knafeh is such a unique creation that went so well and the ice cream was not melted like other fried ice creams. Not to mention the service was so genuine. Already planning the next visit back 😍",
    timeAgo: "2 week ago",
    color: "bg-teal-500",
  },
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
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfYvHPPyauL_F0I-s-irZaxDMCnWgh8nQh2g&s",
                },
                {
                  icon: "🎂",
                  title: "Handcrafted Happiness",
                  description:
                    "Every treat is made with love and a sprinkle of magic dust!",
                  image:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeWBJDCSVNqIIPLpb0gyfvL3_CJb6ETpUQCw&s",
                },
                {
                  icon: "💖",
                  title: "Community Sweetness",
                  description:
                    "We're not just a truck - we're your neighborhood happiness makers!",
                  image:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnQlodnCI9z_lnes6ON9oa6bpqDPfLY3_9Zg&s",
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

      {/* Google Reviews Slideshow */}
      <div className="relative w-full overflow-hidden py-16">
        <motion.div
          className="flex space-x-6 px-10"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {/* First Set of Reviews */}
          {googleReviews.map((review, index) => (
            <motion.div
              key={`review-${index}`}
              className="relative flex-shrink-0 w-96"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 h-full">
                {/* Google Review Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        fill="#4285F4"
                      />
                      <path
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        fill="#34A853"
                      />
                      <path
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                        fill="#FBBC05"
                      />
                      <path
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                        fill="#EA4335"
                      />
                    </svg>
                    <span className="font-semibold text-gray-700">
                      Google Review
                    </span>
                  </div>
                  <div className="flex">
                    {[...Array(review.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                </div>

                {/* Review Text */}
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  "{review.review}"
                </p>

                {/* Reviewer Info */}
                <div className="flex items-center space-x-3 pt-4 border-t border-gray-100">
                  <div
                    className={`${review.color} w-10 h-10 rounded-full flex items-center justify-center text-white font-bold`}
                  >
                    {review.initial}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">{review.name}</p>
                    <p className="text-gray-500 text-sm">{review.timeAgo}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Duplicate Set for Seamless Loop */}
          {googleReviews.map((review, index) => (
            <motion.div
              key={`review-duplicate-${index}`}
              className="relative flex-shrink-0 w-96"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 h-full">
                {/* Google Review Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        fill="#4285F4"
                      />
                      <path
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        fill="#34A853"
                      />
                      <path
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                        fill="#FBBC05"
                      />
                      <path
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                        fill="#EA4335"
                      />
                    </svg>
                    <span className="font-semibold text-gray-700">
                      Google Review
                    </span>
                  </div>
                  <div className="flex">
                    {[...Array(review.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                </div>

                {/* Review Text */}
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  "{review.review}"
                </p>

                {/* Reviewer Info */}
                <div className="flex items-center space-x-3 pt-4 border-t border-gray-100">
                  <div
                    className={`${review.color} w-10 h-10 rounded-full flex items-center justify-center text-white font-bold`}
                  >
                    {review.initial}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">{review.name}</p>
                    <p className="text-gray-500 text-sm">{review.timeAgo}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
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

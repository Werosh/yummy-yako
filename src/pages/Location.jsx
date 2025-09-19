import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Clock,
  Phone,
  Heart,
  Truck,
  Star,
  Navigation,
} from "lucide-react";
import BackImg from "../assets/images/location2.jpg";

const MapPage = () => {
  const [isMapLoaded, setIsMapLoaded] = useState(false);
  const [showLocationDetails, setShowLocationDetails] = useState(false);

  // Single location data
  const location = {
    id: 1,
    name: "Yummy Yako Food Truck",
    address: "123 Rainbow Street, Sugarland District",
    hours: "10:00 AM - 8:00 PM",
    phone: "(555) YUMMY-01",
    status: "Currently Here!",
    specialNote: "Fresh cupcakes available now! 🧁",
    rating: "4.9/5",
  };

  const bubbleVariants = {
    animate: {
      y: [-20, -150],
      opacity: [0.6, 0],
      scale: [0.3, 1.5],
      transition: { duration: 5, repeat: Infinity, ease: "easeOut" },
    },
  };

  const floatingVariants = {
    animate: {
      y: [0, -15, 0],
      rotate: [0, 3, -3, 0],
      transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
    },
  };

  const heartbeatVariants = {
    animate: {
      scale: [1, 1.1, 1],
      transition: { duration: 1.5, repeat: Infinity, ease: "easeInOut" },
    },
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsMapLoaded(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden m-8 rounded-[70px] shadow-2xl">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${BackImg})`,
        }}
      />

      {/* Cute Floating Elements */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`bubble-${i}`}
          className="absolute rounded-full opacity-50"
          style={{
            width: `${20 + Math.random() * 30}px`,
            height: `${20 + Math.random() * 30}px`,
            background:
              i % 2 === 0
                ? "linear-gradient(45deg, #FFB6C1, #FFC0CB)"
                : "linear-gradient(45deg, #E6F3FF, #B8D4F1)",
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          variants={bubbleVariants}
          animate="animate"
          transition={{ delay: Math.random() * 4 }}
        />
      ))}

      {/* Floating Cute Icons */}
      {["🍰", "🧁", "🍭", "🍪", "🎂", "🍬"].map((emoji, i) => (
        <motion.div
          key={`emoji-${i}`}
          className="absolute text-3xl z-5"
          style={{
            top: `${10 + Math.random() * 80}%`,
            left: `${5 + Math.random() * 90}%`,
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 3,
          }}
        >
          {emoji}
        </motion.div>
      ))}

      {/* Header */}
      <motion.div
        className="relative z-10 text-center py-12"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="inline-flex items-center bg-white/90 backdrop-blur-md rounded-full px-8 py-4 mb-6 shadow-xl border-2 border-pink-200"
          whileHover={{ scale: 1.05, rotateZ: 2 }}
          variants={floatingVariants}
          animate="animate"
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="mr-3"
          >
            🚚
          </motion.div>
          <span className="text-pink-600 font-bold text-xl">
            Find Our Sweet Spot!
          </span>
        </motion.div>

        <motion.h1
          className="text-5xl lg:text-7xl font-bold mb-4"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <span className="bg-gradient-to-r from-[#60a5fa] via-blue-500 to-blue-400 bg-clip-text text-transparent">
            Yummy Yako
          </span>
          <br />
          <span className="text-4xl lg:text-5xl text-gray-700">Location</span>
        </motion.h1>

        <motion.p
          className="text-2xl text-gray-600 font-medium"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Your favorite treats are waiting for you! ✨
        </motion.p>
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Location Card - Smaller and Cuter */}
          <motion.div
            className="lg:col-span-2 flex flex-col justify-center"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            {/* Main Location Card */}
            <motion.div
              className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl border-3 border-pink-200 p-8 mb-6"
              whileHover={{
                scale: 1.02,
                y: -8,
                boxShadow: "0 25px 50px rgba(255,182,193,0.3)",
              }}
              variants={floatingVariants}
              animate="animate"
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <motion.h3
                    className="text-2xl font-bold text-gray-800 mb-2"
                    variants={heartbeatVariants}
                    animate="animate"
                  >
                    {location.name}
                  </motion.h3>
                  <motion.div
                    className="inline-flex items-center bg-green-100 border-2 border-green-300 text-green-600 px-4 py-2 rounded-full text-sm font-bold"
                    animate={{
                      scale: [1, 1.05, 1],
                      boxShadow: [
                        "0 0 0 0 rgba(34, 197, 94, 0.4)",
                        "0 0 0 10px rgba(34, 197, 94, 0)",
                        "0 0 0 0 rgba(34, 197, 94, 0)",
                      ],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                    {location.status}
                  </motion.div>
                </div>
                <motion.div
                  animate={{ rotate: [0, 15, -15, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="text-4xl"
                >
                  🏪
                </motion.div>
              </div>

              <div className="space-y-4 mb-6">
                <motion.div
                  className="flex items-center bg-pink-50 rounded-xl p-3"
                  whileHover={{ scale: 1.02 }}
                >
                  <MapPin size={20} className="mr-3 text-pink-500" />
                  <span className="text-gray-700 font-medium">
                    {location.address}
                  </span>
                </motion.div>

                <motion.div
                  className="flex items-center bg-blue-50 rounded-xl p-3"
                  whileHover={{ scale: 1.02 }}
                >
                  <Clock size={20} className="mr-3 text-blue-500" />
                  <span className="text-gray-700 font-medium">
                    {location.hours}
                  </span>
                </motion.div>

                <motion.div
                  className="flex items-center bg-purple-50 rounded-xl p-3"
                  whileHover={{ scale: 1.02 }}
                >
                  <Phone size={20} className="mr-3 text-purple-500" />
                  <span className="text-gray-700 font-medium">
                    {location.phone}
                  </span>
                </motion.div>
              </div>

              <motion.div
                className="bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-200 rounded-2xl p-4 mb-6"
                animate={{
                  borderColor: ["#FDE047", "#F59E0B", "#FDE047"],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <Star className="text-yellow-400 mr-2" size={18} />
                    <span className="font-bold text-gray-700">
                      {location.rating}
                    </span>
                  </div>
                  <motion.div
                    animate={{ rotate: [0, 20, -20, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    ⭐
                  </motion.div>
                </div>
                <p className="text-orange-600 font-semibold text-center">
                  {location.specialNote}
                </p>
              </motion.div>

              <div className="flex gap-3">
                <motion.button
                  className="flex-1 bg-gradient-to-r from-pink-400 to-purple-400 text-white px-6 py-3 rounded-2xl font-bold shadow-lg"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 10px 25px rgba(219, 39, 119, 0.3)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Navigation className="inline mr-2" size={18} />
                  Get Directions
                </motion.button>

                <motion.button
                  className="bg-white border-2 border-pink-300 text-pink-600 px-4 py-3 rounded-2xl font-bold"
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "#FDF2F8",
                    borderColor: "#F472B6",
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowLocationDetails(!showLocationDetails)}
                >
                  <Heart className="inline" size={18} />
                </motion.button>
              </div>
            </motion.div>

            {/* Cute Additional Cards */}
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 text-center border-2 border-green-200 shadow-lg"
                whileHover={{ scale: 1.05, rotate: 2 }}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.2 }}
              >
                <motion.div
                  className="text-3xl mb-2"
                  animate={{ bounce: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  🎯
                </motion.div>
                <h4 className="font-bold text-green-700 text-sm">
                  Live Location
                </h4>
                <p className="text-green-600 text-xs">Real-time updates!</p>
              </motion.div>

              <motion.div
                className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 text-center border-2 border-yellow-200 shadow-lg"
                whileHover={{ scale: 1.05, rotate: -2 }}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.3 }}
              >
                <motion.div
                  className="text-3xl mb-2"
                  animate={{ rotate: [0, 15, -15, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                >
                  🔔
                </motion.div>
                <h4 className="font-bold text-yellow-700 text-sm">
                  Notifications
                </h4>
                <p className="text-yellow-600 text-xs">Never miss us!</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Map Container - Larger */}
          <motion.div
            className="lg:col-span-3"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl border-3 border-blue-200 overflow-hidden">
              <div className="p-6 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400">
                <h3 className="text-3xl font-bold text-white flex items-center">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="mr-4 text-4xl"
                  >
                    🗺️
                  </motion.div>
                  Find Us Here!
                </h3>
                <p className="text-pink-100 mt-2 text-lg">
                  Your sweet adventure starts here ✨
                </p>
              </div>

              <div className="relative h-96 lg:h-[600px] bg-gradient-to-br from-blue-50 to-pink-50">
                <AnimatePresence>
                  {!isMapLoaded && (
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-pink-50 via-white to-blue-50"
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="text-center">
                        <motion.div
                          className="relative mb-8"
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                        >
                          <div className="w-20 h-20 border-4 border-pink-200 rounded-full"></div>
                          <div className="absolute top-0 left-0 w-20 h-20 border-4 border-transparent border-t-pink-400 rounded-full animate-spin"></div>
                          <div className="absolute top-2 left-2 w-16 h-16 border-4 border-transparent border-t-purple-400 rounded-full animate-spin"></div>
                        </motion.div>

                        <motion.h3
                          className="text-2xl font-bold text-pink-600 mb-4"
                          animate={{ scale: [1, 1.05, 1] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          Loading Sweet Location... 🍭
                        </motion.h3>

                        <motion.div
                          className="flex justify-center space-x-2"
                          animate={{ opacity: [0.4, 1, 0.4] }}
                          transition={{ duration: 1.2, repeat: Infinity }}
                        >
                          {[0, 1, 2].map((i) => (
                            <motion.div
                              key={i}
                              className="w-3 h-3 rounded-full"
                              style={{
                                background:
                                  i === 0
                                    ? "#F472B6"
                                    : i === 1
                                    ? "#A855F7"
                                    : "#60A5FA",
                              }}
                              animate={{ y: [0, -12, 0] }}
                              transition={{
                                duration: 0.8,
                                repeat: Infinity,
                                delay: i * 0.2,
                              }}
                            />
                          ))}
                        </motion.div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <motion.div
                  className="w-full h-full"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{
                    opacity: isMapLoaded ? 1 : 0,
                    scale: isMapLoaded ? 1 : 0.95,
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1635959988000!5m2!1sen!2s"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Yummy Yako Location"
                    className="rounded-b-3xl"
                  ></iframe>
                </motion.div>

                {/* Cute floating decorations on map */}
                <motion.div
                  className="absolute top-4 left-4 text-3xl z-10 bg-white/80 rounded-full p-2"
                  animate={{
                    rotate: [0, 15, -15, 0],
                    y: [0, -5, 0],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  🎂
                </motion.div>
                <motion.div
                  className="absolute bottom-6 right-6 text-3xl z-10 bg-white/80 rounded-full p-2"
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, -10, 0],
                  }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                >
                  🧁
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Love Message */}
        <motion.div
          className="mt-12 text-center"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <motion.div
            className="inline-block bg-white/90 backdrop-blur-md border-3 border-pink-300 rounded-full px-12 py-6 shadow-2xl"
            variants={floatingVariants}
            animate="animate"
            whileHover={{ scale: 1.05, rotate: 1 }}
          >
            <motion.div
              variants={heartbeatVariants}
              animate="animate"
              className="flex items-center justify-center"
            >
              <Heart className="text-pink-500 mr-3" size={28} />
              <span className="text-pink-600 font-bold text-xl">
                Made with Love, Served with Joy!
              </span>
              <motion.span
                className="ml-2 text-2xl"
                animate={{ rotate: [0, 20, -20, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                💕
              </motion.span>
            </motion.div>
            <p className="text-pink-500 font-semibold mt-2">
              Follow us for daily sweet surprises! 🌟
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom decorative elements */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-24"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ delay: 1.8, duration: 1 }}
      >
        <svg
          className="absolute bottom-0 left-0 right-0 w-full h-20"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-58.82,11.73-114.9,31-172.9,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            fill="rgba(255,182,193,0.2)"
            animate={{
              d: [
                "M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-58.82,11.73-114.9,31-172.9,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z",
                "M985.66,82.83C906.67,62,823.78,21,743.84,4.19c-82.26-27.34-168.06-26.33-250.45-9.61-58.82,1.73-114.9,21-172.9,31.86A600.21,600.21,0,0,1,0,17.35V120H1200V85.8C1132.19,108.92,1055.71,101.31,985.66,82.83Z",
                "M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-58.82,11.73-114.9,31-172.9,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z",
              ],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>
      </motion.div>
    </div>
  );
};

export default MapPage;

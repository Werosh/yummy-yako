import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Clock,
  Phone,
  Star,
  Navigation,
  Truck,
  Heart,
} from "lucide-react";

const MapPage = () => {
  const [isMapLoaded, setIsMapLoaded] = useState(false);
  const [showLocationDetails, setShowLocationDetails] = useState(false);

  // Single location data
  const location = {
    id: 1,
    name: "Yummy Yako Food Truck",
    address: "Cnr Cumberland Drive &, Kurrajong Rd, Carnes Hill NSW 2170",
    hours: "02:00 pM - 11:00 PM",
    phone: "(555) YUMMY-01",
    status: "Currently Here!",
    specialNote: "Fresh artisan cupcakes available now!",
    rating: "4.9/5",
  };

  // Framer Motion variants
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const floatingAnimation = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const pulseAnimation = {
    animate: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const dripAnimation = {
    animate: {
      scaleY: [1, 1.1, 1],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsMapLoaded(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      id="location"
      className=" bg-gradient-to-br from-cyan-50 to-teal-50 relative overflow-hidden"
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating bubbles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={`bubble-${i}`}
            className="absolute rounded-full opacity-20"
            style={{
              width: `${30 + Math.random() * 60}px`,
              height: `${30 + Math.random() * 60}px`,
              background:
                i % 3 === 0
                  ? "linear-gradient(135deg, #06b6d4, #0891b2)"
                  : i % 3 === 1
                  ? "linear-gradient(135deg, #22d3ee, #06b6d4)"
                  : "linear-gradient(135deg, #67e8f9, #22d3ee)",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Cream Drip Header Effect */}
      <div className="relative">
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white to-transparent z-10"></div>
        <motion.div
          className="absolute top-0 left-0 right-0 h-24 bg-white  "
          variants={dripAnimation}
          animate="animate"
          style={{
            clipPath:
              "polygon(0 0, 100% 0, 100% 60%, 95% 80%, 85% 70%, 75% 85%, 65% 75%, 55% 90%, 45% 75%, 35% 85%, 25% 70%, 15% 80%, 5% 60%, 0 70%)",
          }}
        />
      </div>

      <div className="relative z-20 px-6  py-20 lg:px-8 pt-5 ">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={fadeUpVariants}
            className="text-4xl lg:text-4xl font-bold mb-6 mt-16 leading-tight"
          >
            <span className="text-[#5ebbbe]">Find Our</span>

            <span className="text-[#015a5e] relative">
              Sweet Spot
              {/* Decorative underline drip */}
              <motion.div
                className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-3 bg-gradient-to-r from-cyan-300 to-teal-400 rounded-full"
                variants={pulseAnimation}
                animate="animate"
              />
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUpVariants}
            className="text-xl text-slate-600 max-w-2xl mx-auto font-medium"
          >
            Discover where artisan desserts meet culinary excellence
          </motion.p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="grid lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {/* Location Information Card */}
            <motion.div variants={fadeUpVariants} className="lg:col-span-1">
              <motion.div
                className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl border border-cyan-100 p-8 "
                variants={floatingAnimation}
                animate="animate"
                whileHover={{
                  y: -8,
                  boxShadow: "0 32px 64px -12px rgba(6, 182, 212, 0.15)",
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Header */}
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <h3 className="text-1xl font-bold text-[#015a5e]  mb-3  tracking-wider">
                      {location.name}
                    </h3>
                    <motion.div
                      className="inline-flex items-center bg-emerald-50 border border-emerald-200 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold"
                      variants={pulseAnimation}
                      animate="animate"
                    >
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2" />
                      {location.status}
                    </motion.div>
                  </div>
                  <motion.div
                    className="text-3xl p-3 bg-gradient-to-br from-cyan-100 to-teal-100 rounded-2xl"
                    whileHover={{ rotate: 15, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    🏪
                  </motion.div>
                </div>

                {/* Location Details */}
                <div className="space-y-4 mb-8">
                  <motion.div
                    className="flex items-center bg-slate-50 rounded-xl p-1 hover:bg-slate-100 transition-colors"
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="w-10 h-10  rounded-lg flex items-center justify-center mr-4">
                      <MapPin size={18} className="text-gray-600" />
                    </div>
                    <span className="text-slate-700 font-medium">
                      {location.address}
                    </span>
                  </motion.div>

                  <motion.div
                    className="flex items-center bg-slate-50 rounded-xl p-1 hover:bg-slate-100 transition-colors"
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center mr-4">
                      <Clock size={18} className="text-slate-700" />
                    </div>
                    <span className="text-slate-700 font-medium">
                      {location.hours}
                    </span>
                  </motion.div>

                  <motion.div
                    className="flex items-center bg-slate-50 rounded-xl p-1 hover:bg-slate-100 transition-colors"
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="w-10 h-10  rounded-lg flex items-center justify-center mr-4">
                      <Phone size={18} className="text-slate-700" />
                    </div>
                    <span className="text-slate-700 font-medium">
                      {location.phone}
                    </span>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>

            {/* Map Container */}
            <motion.div variants={fadeUpVariants} className="lg:col-span-2">
              <motion.div
                className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl border border-cyan-100 overflow-hidden"
                whileHover={{
                  boxShadow: "0 32px 64px -12px rgba(6, 182, 212, 0.15)",
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Map Header */}
                <div className="bg-gradient-to-r from-cyan-500 via-teal-500 to-cyan-600 p-8 relative overflow-hidden">
                  <div className="absolute inset-0 opacity-10">
                    {/* Decorative pattern */}
                    {[...Array(20)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-4 h-4 bg-white rounded-full"
                        style={{
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                          scale: [0.5, 1, 0.5],
                          opacity: [0.3, 0.7, 0.3],
                        }}
                        transition={{
                          duration: 3 + Math.random() * 2,
                          repeat: Infinity,
                          delay: Math.random() * 2,
                        }}
                      />
                    ))}
                  </div>

                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-white  flex items-center">
                      <motion.span
                        className="mr-4 text-4xl"
                        animate={{ rotate: [0, 360] }}
                        transition={{
                          duration: 10,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      >
                        🗺️
                      </motion.span>
                      Interactive Location Map
                    </h3>
                  </div>
                </div>

                {/* Map Content */}
                <div className="relative h-96 lg:h-[370px]">
                  <AnimatePresence>
                    {!isMapLoaded && (
                      <motion.div
                        className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-cyan-50 to-teal-50"
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
                            <div className="w-16 h-16 border-4 border-cyan-200 rounded-full"></div>
                            <div className="absolute top-0 left-0 w-16 h-16 border-4 border-transparent border-t-cyan-500 rounded-full"></div>
                          </motion.div>

                          <h3 className="text-2xl font-bold text-cyan-600 mb-4">
                            Loading Premium Location
                          </h3>

                          <motion.div
                            className="flex justify-center space-x-2"
                            animate={{ opacity: [0.4, 1, 0.4] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          >
                            {[0, 1, 2].map((i) => (
                              <motion.div
                                key={i}
                                className="w-3 h-3 rounded-full bg-gradient-to-r from-cyan-400 to-teal-500"
                                animate={{ y: [0, -8, 0] }}
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
                    transition={{ duration: 0.8 }}
                  >
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4124.7167962321055!2d150.8446697!3d-33.9381045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12933b6de6cde1%3A0x64b4e543bd717b53!2sYummy%20Yako!5e0!3m2!1sen!2slk!4v1758354258262!5m2!1sen!2slk"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Yummy Yako Location"
                      className="w-full h-full"
                    />
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Decorative Drip */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-32 bg-white"
        initial={{ y: 50 }}
        animate={{ y: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
        style={{
          clipPath:
            "polygon(0 100%, 100% 100%, 100% 40%, 95% 60%, 85% 50%, 75% 65%, 65% 55%, 55% 70%, 45% 60%, 35% 75%, 25% 65%, 15% 80%, 5% 70%, 0 85%)",
        }}
      />
    </div>
  );
};

export default MapPage;

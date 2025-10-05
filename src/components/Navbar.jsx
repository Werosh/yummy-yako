import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HashLink } from "react-router-hash-link";

import {
  Home,
  Menu,
  Calendar,
  Phone,
  X,
  AlignRight,
  PhoneCall,
  Truck,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

import logoIMG from "../assets/images/logos/logo1.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home", icon: Home },
    { path: "/menu", label: "Menu", icon: Menu },
    { path: "/event", label: "Events", icon: Calendar },
    { path: "/contact", label: "Contact", icon: Phone },
    { path: "/career", label: "Career", icon: Truck },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Framer Motion Variants
  const navbarVariants = {
    initial: { y: -100, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, type: "spring", bounce: 0.3 },
    },
  };

  const logoVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.3, type: "spring" },
    },
    tap: { scale: 0.95 },
  };

  const dripVariants = {
    animate: {
      scaleY: [1, 1.1, 1],
      transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
    },
  };

  const navItemVariants = {
    hover: {
      scale: 1.05,
      y: -2,
      transition: { duration: 0.2, type: "spring" },
    },
    tap: { scale: 0.95 },
  };

  const iconVariants = {
    hover: {
      rotate: 15,
      scale: 1.2,
      transition: { duration: 0.3 },
    },
  };

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.3 },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, staggerChildren: 0.1 },
    },
  };

  const mobileItemVariants = {
    closed: { opacity: 0, x: -20 },
    open: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3 },
    },
  };

  const bubbleVariants = {
    animate: {
      y: [0, -10, 0],
      scale: [1, 1.1, 1],
      opacity: [0.4, 0.7, 0.4],
      transition: {
        duration: 3 + Math.random() * 2,
        repeat: Infinity,
        ease: "easeInOut",
        delay: Math.random() * 2,
      },
    },
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl shadow-2xl border-b border-cyan-100"
          : "bg-gradient-to-b from-white/95 to-transparent "
      }`}
      variants={navbarVariants}
      initial="initial"
      animate="animate"
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Bubbles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`bubble-${i}`}
            className="absolute rounded-full bg-gradient-to-br from-cyan-200/30 to-teal-300/30"
            style={{
              width: `${12 + Math.random() * 20}px`,
              height: `${12 + Math.random() * 20}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            variants={bubbleVariants}
            animate="animate"
          />
        ))}

        {/* Cream Drip Pattern */}
        <motion.div
          className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-cyan-300 via-teal-300 to-cyan-300"
          variants={dripVariants}
          animate="animate"
        />

        {/* Drip Elements */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`drip-${i}`}
            className="absolute top-2 bg-gradient-to-b from-cyan-300 to-white"
            style={{
              left: `${15 + i * 15}%`,
              width: "8px",
              height: "12px",
              borderRadius: "0 0 50% 50%",
            }}
            animate={{
              scaleY: [1, 1.2, 1],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 mt-1">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-4 group cursor-pointer"
            variants={logoVariants}
          >
            <motion.div className="relative">
              {/* Replace Gradient Box with Image */}
              <div className="relative w-43   overflow-hidden  p-1 ">
                <motion.img
                  src={logoIMG}
                  alt="Yummy Yako Logo"
                  className="w-full h-full object-cover"
                />

                {/* Sparkle Effect */}
                <motion.div
                  className="absolute top-1 right-1 w-2 h-2 bg-white rounded-full"
                  animate={{
                    scale: [0, 1, 0],
                    opacity: [0, 1, 0],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item, index) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <motion.div
                  key={item.path}
                  variants={navItemVariants}
                  whileHover="hover"
                  whileTap="tap"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: { delay: 0.1 * index, duration: 0.5 },
                  }}
                >
                  <Link
                    to={item.path}
                    className={`relative flex items-center px-6 py-3 rounded-2xl font-semibold transition-all duration-300 cursor-pointer ${
                      isActive
                        ? "text-white bg-gradient-to-r from-cyan-500 to-teal-400 shadow-xl border border-cyan-300"
                        : "text-cyan-700 hover:text-cyan-600 hover:bg-cyan-50/80 hover:shadow-lg"
                    }`}
                    onClick={() => setIsOpen(false)} // closes mobile menu on click
                  >
                    <motion.div
                      className="mr-3"
                      variants={iconVariants}
                      whileHover="hover"
                    >
                      <Icon size={18} />
                    </motion.div>
                    {item.label}
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden relative w-12 h-12 bg-gradient-to-br from-cyan-500 to-teal-400 rounded-2xl shadow-lg flex items-center justify-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
          >
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isOpen ? (
                <X size={22} className="text-white" />
              ) : (
                <AlignRight size={22} className="text-white" />
              )}
            </motion.div>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl shadow-2xl border-b border-cyan-100"
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <div className="max-w-md mx-auto px-6 py-8 space-y-3">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                return (
                  <motion.div key={item.path} variants={mobileItemVariants}>
                    <Link
                      to={item.path}
                      className={`flex items-center w-full px-6 py-4 rounded-2xl font-semibold transition-all duration-300 cursor-pointer ${
                        isActive
                          ? "text-white bg-gradient-to-r from-cyan-500 to-teal-400 shadow-lg"
                          : "text-cyan-700 hover:text-cyan-600 hover:bg-cyan-50 hover:shadow-md"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      <motion.div
                        className={`mr-4 p-2 rounded-xl ${
                          isActive ? "bg-white/20" : "bg-cyan-100"
                        }`}
                        whileHover={{ scale: 1.1, rotate: 10 }}
                      >
                        <Icon size={20} />
                      </motion.div>
                      {item.label}
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;

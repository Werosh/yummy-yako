import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  Menu,
  Calendar,
  Phone,
  X,
  AlignRight,
  Heart,
  MapPin,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home", icon: Home },
    { path: "/menu", label: "Menu", icon: Menu },
    { path: "/events", label: "Events", icon: Calendar },
    { path: "/contact", label: "Contact", icon: Phone },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Floating animation variants
  const floatingVariants = {
    animate: {
      y: [0, -5, 0],
      transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
    },
  };

  const bubbleVariants = {
    animate: {
      scale: [1, 1.2, 1],
      opacity: [0.3, 0.6, 0.3],
      transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
    },
  };

  const menuVariants = {
    closed: { opacity: 0, y: -20 },
    open: { opacity: 1, y: 0 },
  };

  const itemVariants = {
    closed: { opacity: 0, y: -10 },
    open: { opacity: 1, y: 0 },
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? " backdrop-blur-md shadow-xl border-b border-blue-100"
          : "md:bg-transparent "
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
      variants={floatingVariants}
    >
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`nav-bubble-${i}`}
            className="absolute rounded-full"
            style={{
              width: `${10 + Math.random() * 15}px`,
              height: `${10 + Math.random() * 15}px`,
              background:
                i % 2 === 0
                  ? "linear-gradient(45deg, #E0F2FE, #BAE6FD)"
                  : "linear-gradient(45deg, #F0F9FF, #DBEAFE)",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            variants={bubbleVariants}
            animate="animate"
            transition={{ delay: Math.random() * 2 }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-3 group"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              className="relative"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="w-12 h-12 bg-gradient-to-br from-blue-400 via-blue-300 to-blue-200 rounded-2xl flex items-center justify-center shadow-lg"
                animate={{
                  boxShadow: [
                    "0 4px 20px rgba(59, 130, 246, 0.3)",
                    "0 8px 25px rgba(59, 130, 246, 0.4)",
                    "0 4px 20px rgba(59, 130, 246, 0.3)",
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <motion.span
                  className="text-2xl"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  🧁
                </motion.span>
              </motion.div>
            </motion.div>

            <div>
              <motion.h1
                className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 bg-clip-text text-transparent"
                whileHover={{ scale: 1.05 }}
              >
                Yummy Yako
              </motion.h1>
              <motion.p
                className="text-xs text-blue-400 font-medium"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Sweet Dreams Come True
              </motion.p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <motion.div key={item.path} className="relative">
                  <Link
                    to={item.path}
                    className={`relative flex items-center px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                      isActive
                        ? "text-blue-600 bg-blue-50 shadow-lg border-2 border-blue-200"
                        : "text-gray-600 hover:text-blue-500 hover:bg-blue-50/70"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    <motion.div whileHover={{ scale: 1.1, rotate: 5 }}>
                      <Icon size={18} className="mr-2" />
                    </motion.div>
                    {item.label}
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden relative w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-300 rounded-2xl shadow-lg flex items-center justify-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
          >
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isOpen ? (
                <X size={24} className="text-white" />
              ) : (
                <AlignRight size={24} className="text-white" />
              )}
            </motion.div>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-2xl border-b border-blue-100"
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <div className="max-w-md mx-auto px-4 py-6 space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                return (
                  <motion.div key={item.path} variants={itemVariants}>
                    <Link
                      to={item.path}
                      className={`flex items-center w-full px-6 py-4 rounded-2xl font-semibold transition-all duration-300 ${
                        isActive
                          ? "text-blue-600 bg-gradient-to-r from-blue-50 to-blue-100 shadow-lg border-2 border-blue-200"
                          : "text-gray-600 hover:text-blue-500 hover:bg-blue-50"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        className={`mr-4 p-2 rounded-xl ${
                          isActive ? "bg-blue-200" : "bg-gray-100"
                        }`}
                      >
                        <Icon size={20} />
                      </motion.div>
                      {item.label}
                    </Link>
                  </motion.div>
                );
              })}

              {/* Mobile Special Action */}
              <motion.div variants={itemVariants} className="pt-4 border-t">
                <motion.button
                  className="w-full bg-gradient-to-r from-blue-400 via-blue-300 to-blue-200 text-white px-6 py-4 rounded-2xl font-bold shadow-lg flex items-center justify-center"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setIsOpen(false)}
                >
                  <MapPin size={20} className="mr-2" /> Find Our Sweet Truck 🚚
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;

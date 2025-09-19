import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Heart,
  Instagram,
  Facebook,
  Twitter,
  Star,
  Truck,
} from "lucide-react";

const Footer = () => {
  const bubbleVariants = {
    animate: {
      y: [0, -20, 0],
      scale: [0.8, 1.2, 0.8],
      opacity: [0.3, 0.6, 0.3],
      transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
    },
  };

  const floatingVariants = {
    animate: {
      y: [0, -10, 0],
      rotate: [0, 5, -5, 0],
      transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
    },
  };

  const sparkleVariants = {
    animate: {
      rotate: 360,
      scale: [1, 1.5, 1],
      opacity: [0.4, 1, 0.4],
      transition: { duration: 2.5, repeat: Infinity, ease: "easeInOut" },
    },
  };

  const socialLinks = [
    {
      icon: Instagram,
      label: "Instagram",
      href: "#",
      color: "from-pink-400 to-purple-500",
    },
    {
      icon: Facebook,
      label: "Facebook",
      href: "#",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: "#",
      color: "from-sky-400 to-blue-500",
    },
  ];

  const quickLinks = [
    { label: "Our Story", href: "#" },
    { label: "Menu", href: "#" },
    { label: "Find Our Truck", href: "#" },
    { label: "Events", href: "#" },
    { label: "Contact Us", href: "#" },
    { label: "Catering", href: "#" },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-blue-50 via-white to-blue-100 overflow-hidden">
      {/* Top Wave */}
      <div className="relative">
        <svg
          className="w-full h-16 -mb-1"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            fill="white"
            animate={{
              d: [
                "M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z",
                "M0,0V36.29c47.79,32.2,103.59,42.17,158,38,70.36,4.63,136.33-23.31,206.8-27.5C438.64,42.43,512.34,63.67,583,82.05c69.27,28,138.3,34.88,209.4,23.08,36.15,4,69.85-7.84,104.45-19.34C989.49,35,1113,5.71,1200,62.47V0Z",
                "M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z",
              ],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>
      </div>

      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={`footer-bubble-${i}`}
            className="absolute rounded-full"
            style={{
              width: `${8 + Math.random() * 20}px`,
              height: `${8 + Math.random() * 20}px`,
              background:
                i % 3 === 0
                  ? "linear-gradient(45deg, #E0F2FE, #BAE6FD)"
                  : i % 3 === 1
                  ? "linear-gradient(45deg, #F0F9FF, #DBEAFE)"
                  : "linear-gradient(45deg, #EFF6FF, #BFDBFE)",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            variants={bubbleVariants}
            animate="animate"
            transition={{ delay: Math.random() * 4 }}
          />
        ))}

        {/* Floating Dessert Emojis */}
        {["🧁", "🍰", "🍦", "🍭", "🍩", "🎂"].map((emoji, i) => (
          <motion.div
            key={`footer-emoji-${i}`}
            className="absolute text-2xl opacity-20"
            style={{
              top: `${10 + Math.random() * 80}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -15, 0],
              rotate: [0, 360],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              delay: i * 0.8,
            }}
          >
            {emoji}
          </motion.div>
        ))}
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16">
          {/* Logo & Description */}
          <motion.div
            className="lg:col-span-1"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              className="flex items-center space-x-3 mb-6 group"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className="relative"
                variants={floatingVariants}
                animate="animate"
              >
                <motion.div
                  className="w-14 h-14 bg-gradient-to-br from-blue-400 via-blue-300 to-blue-200 rounded-2xl flex items-center justify-center shadow-lg"
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
                    className="text-3xl"
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    🧁
                  </motion.span>
                </motion.div>

                {/* Floating sparkles around logo */}
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={`logo-sparkle-${i}`}
                    className="absolute text-sm"
                    style={{
                      top: `${-5 + Math.random() * 10}px`,
                      left: `${50 + Math.random() * 20}px`,
                    }}
                    animate={{
                      y: [0, -12, 0],
                      opacity: [0, 1, 0],
                      scale: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 2 + Math.random(),
                      repeat: Infinity,
                      delay: i * 0.7,
                    }}
                  >
                    ✨
                  </motion.div>
                ))}
              </motion.div>

              <div>
                <motion.h3
                  className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 bg-clip-text text-transparent"
                  whileHover={{ scale: 1.05 }}
                >
                  Yummy Yako
                </motion.h3>
                <motion.p
                  className="text-sm text-blue-400 font-medium"
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Sweet Dreams Come True
                </motion.p>
              </div>
            </motion.div>

            <motion.p
              className="text-gray-600 leading-relaxed mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Bringing you the most delicious desserts on wheels! Made with love
              and the finest ingredients, we're your neighborhood sweet escape.
            </motion.p>

            {/* Social Links */}
            <motion.div
              className="flex space-x-3"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    className={`relative w-12 h-12 bg-gradient-to-br ${social.color} rounded-2xl flex items-center justify-center text-white shadow-lg group overflow-hidden`}
                    whileHover={{
                      scale: 1.1,
                      rotate: 5,
                      boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    animate={{
                      y: [0, -2, 0],
                    }}
                    transition={{
                      y: {
                        duration: 2.5,
                        repeat: Infinity,
                        delay: index * 0.3,
                      },
                    }}
                  >
                    <Icon size={20} />

                    {/* Hover effect overlay */}
                    <motion.div
                      className="absolute inset-0 bg-white/20 rounded-2xl"
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.a>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="lg:col-span-1"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.h4
              className="text-xl font-bold text-gray-800 mb-6 flex items-center"
              whileHover={{ x: 5 }}
            >
              <motion.span
                className="mr-2"
                animate={{ rotate: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                🍦
              </motion.span>
              Quick Links
            </motion.h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.label}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                >
                  <motion.a
                    href={link.href}
                    className="text-gray-600 hover:text-blue-500 transition-all duration-300 flex items-center group"
                    whileHover={{ x: 5, color: "#3b82f6" }}
                  >
                    <motion.span
                      className="w-2 h-2 bg-blue-300 rounded-full mr-3 group-hover:bg-blue-500 transition-colors"
                      whileHover={{ scale: 1.5 }}
                    />
                    {link.label}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="lg:col-span-1"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.h4
              className="text-xl font-bold text-gray-800 mb-6 flex items-center"
              whileHover={{ x: 5 }}
            >
              <motion.span
                className="mr-2"
                animate={{ rotate: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                📍
              </motion.span>
              Contact Us
            </motion.h4>

            <div className="space-y-4">
              <motion.div
                className="flex items-start space-x-3 group"
                whileHover={{ x: 5 }}
              >
                <motion.div
                  className="w-10 h-10 bg-blue-100 rounded-2xl flex items-center justify-center mt-1"
                  whileHover={{ scale: 1.1, backgroundColor: "#dbeafe" }}
                >
                  <MapPin size={18} className="text-blue-500" />
                </motion.div>
                <div>
                  <p className="text-gray-600">
                    Follow us on social media
                    <br />
                    for daily location updates!
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start space-x-3 group"
                whileHover={{ x: 5 }}
              >
                <motion.div
                  className="w-10 h-10 bg-blue-100 rounded-2xl flex items-center justify-center mt-1"
                  whileHover={{ scale: 1.1, backgroundColor: "#dbeafe" }}
                >
                  <Phone size={18} className="text-blue-500" />
                </motion.div>
                <div>
                  <p className="text-gray-600">(555) 123-YAKO</p>
                  <p className="text-sm text-gray-500">Call for catering!</p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start space-x-3 group"
                whileHover={{ x: 5 }}
              >
                <motion.div
                  className="w-10 h-10 bg-blue-100 rounded-2xl flex items-center justify-center mt-1"
                  whileHover={{ scale: 1.1, backgroundColor: "#dbeafe" }}
                >
                  <Mail size={18} className="text-blue-500" />
                </motion.div>
                <div>
                  <p className="text-gray-600">hello@yummyyako.com</p>
                  <p className="text-sm text-gray-500">
                    Sweet inquiries welcome
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Hours & Special */}
          <motion.div
            className="lg:col-span-1"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.h4
              className="text-xl font-bold text-gray-800 mb-6 flex items-center"
              whileHover={{ x: 5 }}
            >
              <motion.span
                className="mr-2"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                ⏰
              </motion.span>
              Sweet Hours
            </motion.h4>

            <div className="space-y-4 mb-6">
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 border border-blue-100">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-gray-700">Mon - Fri</span>
                  <span className="text-gray-600">11AM - 8PM</span>
                </div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-gray-700">Weekends</span>
                  <span className="text-gray-600">10AM - 9PM</span>
                </div>
                <motion.div
                  className="flex items-center text-blue-500 font-medium"
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Clock size={16} className="mr-2" />
                  Currently Open!
                </motion.div>
              </div>
            </div>

            {/* Special CTA */}
            <motion.div
              className="bg-gradient-to-br from-blue-400 via-blue-300 to-blue-200 rounded-2xl p-6 text-white text-center shadow-lg"
              whileHover={{
                scale: 1.02,
                boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)",
              }}
              animate={{
                boxShadow: [
                  "0 4px 20px rgba(59, 130, 246, 0.2)",
                  "0 8px 25px rgba(59, 130, 246, 0.3)",
                  "0 4px 20px rgba(59, 130, 246, 0.2)",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <motion.div
                className="flex items-center justify-center mb-3"
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Truck size={24} className="mr-2" />
                <span className="font-bold text-lg">Find Our Truck!</span>
              </motion.div>
              <p className="text-sm mb-4 opacity-90">
                Track our live location and never miss your favorite treats!
              </p>
              <motion.button
                className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-semibold py-2 px-4 rounded-xl transition-all"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Track Now 📍
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-blue-100 pt-8 pb-4"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            <motion.div
              className="flex items-center mb-4 md:mb-0"
              animate={{
                scale: [1, 1.02, 1],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <span className="text-gray-600">Made with</span>
              <motion.div
                className="mx-2"
                animate={{
                  scale: [1, 1.3, 1],
                  rotate: [0, 10, -10, 0],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Heart size={18} className="text-red-400 fill-current" />
              </motion.div>
              <span className="text-gray-600">in our mobile kitchen</span>
              <motion.span
                className="ml-2"
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                🚚
              </motion.span>
            </motion.div>

            <motion.div
              className="flex items-center space-x-6 text-gray-500 text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              <span>&copy; 2024 Yummy Yako. All rights reserved.</span>
              <motion.div
                className="flex items-center"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Star size={16} className="text-yellow-400 fill-current mr-1" />
                <span>5.0 Customer Rating</span>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import { motion } from "framer-motion";
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
  ChevronRight,
} from "lucide-react";

import Logo from "../assets/images/logos/logo-black.png";

const Footer = () => {
  const bounceVariants = {
    animate: {
      y: [0, -8, 0],
      transition: {
        duration: 2.5,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const floatVariants = {
    animate: {
      y: [0, -12, 0],
      x: [0, 3, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const socialLinks = [
    {
      icon: Instagram,
      label: "Instagram",
      href: "#",
      gradient: "from-pink-400 via-purple-400 to-indigo-400",
    },
    {
      icon: Facebook,
      label: "Facebook",
      href: "#",
      gradient: "from-blue-500 via-blue-400 to-cyan-400",
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: "#",
      gradient: "from-sky-400 via-cyan-400 to-teal-400",
    },
  ];

  const quickLinks = [
    { label: "Dessert Menu", href: "/menu" },
    { label: "Find Our Truck", href: "#location" },
    { label: "Sweet Events", href: "/event" },
    { label: "Contact Us", href: "/contact" },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-cyan-400 via-turquoise-400 to-teal-500 overflow-hidden ">
      {/* Floating Dessert Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Bubble decorations */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`bubble-${i}`}
            className="absolute rounded-full bg-gradient-to-br from-white/40 to-cyan-100/60 backdrop-blur-sm"
            style={{
              width: `${15 + Math.random() * 30}px`,
              height: `${15 + Math.random() * 30}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}

        {/* Floating dessert icons */}
        {["🧁", "🍰", "🍦"].map((emoji, i) => (
          <motion.div
            key={`float-${i}`}
            className="absolute text-3xl opacity-10"
            style={{
              top: `${20 + i * 30}%`,
              right: `${10 + i * 15}%`,
            }}
            variants={floatVariants}
            animate="animate"
            transition={{ delay: i * 1.2 }}
          >
            {emoji}
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-12 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <motion.div
            className="lg:col-span-1"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div className="flex items-center space-x-4 mb-8">
              <motion.div
                className="relative"
                variants={bounceVariants}
                animate="animate"
              >
                <div className="w-full h-auto  rounded-3xl flex items-center justify-center  relative overflow-hidden">
                  {/* Moving white shimmer */}
                  <motion.div
                    className="absolute inset-0 rounded-3xl"
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />

                  <img
                    src={Logo}
                    alt="Logo"
                    className="w-full auto relative z-10 object-contain"
                  />
                </div>
              </motion.div>
            </motion.div>

            <motion.p
              className="text-gray-600 leading-relaxed mb-3 text-x1l"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Premium desserts crafted with passion and served fresh from our
              mobile kitchen. Where every bite is a moment of pure joy.
            </motion.p>

            {/* Social Links */}
            <motion.div
              className="flex space-x-4"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    className={`relative w-14 h-14 bg-gradient-to-br ${social.gradient} rounded-2xl flex items-center justify-center text-white shadow-lg group overflow-hidden`}
                    whileHover={{
                      scale: 1.1,
                      rotate: -5,
                      y: -5,
                    }}
                    whileTap={{ scale: 0.9 }}
                    animate={{
                      y: [0, -3, 0],
                    }}
                    transition={{
                      y: {
                        duration: 3,
                        repeat: Infinity,
                        delay: index * 0.4,
                      },
                    }}
                  >
                    <Icon size={22} className="relative z-10" />
                    <motion.div
                      className="absolute inset-0 bg-white/20 rounded-2xl"
                      initial={{ scale: 0, opacity: 0 }}
                      whileHover={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.a>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.label}
                  initial={{ x: -30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <motion.a
                    href={link.href}
                    className="text-gray-600 hover:text-cyan-600 transition-all duration-300 flex items-center group font-medium"
                    whileHover={{ x: 8 }}
                  >
                    <motion.div
                      className="w-3 h-3 bg-gradient-to-r from-cyan-100 to-teal-100 rounded-full mr-4 group-hover:scale-125 transition-transform"
                      whileHover={{ scale: 1.3 }}
                    />
                    {link.label}
                    <motion.div
                      className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity"
                      whileHover={{ x: 3 }}
                    >
                      <ChevronRight size={16} />
                    </motion.div>
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="space-y-6">
              <motion.div
                className="flex items-start space-x-4 group"
                whileHover={{ x: 5 }}
              >
                <motion.div
                  className="w-12 h-12 bg-gradient-to-br from-cyan-100 to-teal-100 rounded-2xl flex items-center justify-center flex-shrink-0"
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: "#f0fdfa",
                    rotate: 10,
                  }}
                >
                  <MapPin size={20} className="text-cyan-600" />
                </motion.div>
                <div>
                  <p className="text-gray-800  mb-1">Location</p>
                  <p className="text-gray-600">
                    Cnr Cumberland Drive &, <br />
                    Kurrajong Rd, Carnes Hill NSW 2170, Australia
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start space-x-4 group"
                whileHover={{ x: 5 }}
              >
                <motion.div
                  className="w-12 h-12 bg-gradient-to-br from-cyan-100 to-teal-100 rounded-2xl flex items-center justify-center flex-shrink-0"
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: "#f0fdfa",
                    rotate: -10,
                  }}
                >
                  <Phone size={20} className="text-cyan-600" />
                </motion.div>
                <div>
                  <p className="text-gray-800  mb-1">Call Us</p>
                  <p className="text-gray-600 font-mono text-lg">
                    (555) 123-YAKO
                  </p>
                  <p className="text-sm text-gray-500">
                    Perfect for catering orders
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start space-x-4 group"
                whileHover={{ x: 5 }}
              >
                <motion.div
                  className="w-12 h-12 bg-gradient-to-br from-cyan-100 to-teal-100 rounded-2xl flex items-center justify-center flex-shrink-0"
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: "#f0fdfa",
                    rotate: 10,
                  }}
                >
                  <Mail size={20} className="text-cyan-600" />
                </motion.div>
                <div>
                  <p className="text-gray-800  mb-1">Email Us</p>
                  <p className="text-gray-600">hello@yummyyako.com</p>
                  <p className="text-sm text-gray-500">
                    Sweet inquiries welcome
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Hours & CTA */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.div
              className="bg-white/80 backdrop-blur-lg rounded-3xl p-6 shadow-lg border border-cyan-100/50 mb-8"
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-gray-800">Monday</span>
                  <span className="text-gray-600 font-mono">Closed</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-gray-800">Tuesday</span>
                  <span className="text-gray-600 font-mono">Closed</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-gray-800">Wednesday</span>
                  <span className="text-gray-600 font-mono">2PM – 11PM</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-gray-800">Thursday</span>
                  <span className="text-gray-600 font-mono">2PM – 11PM</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-gray-800">Friday</span>
                  <span className="text-gray-600 font-mono">2PM – 11PM</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-gray-800">Saturday</span>
                  <span className="text-gray-600 font-mono">2PM – 11PM</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-gray-800">Sunday</span>
                  <span className="text-gray-600 font-mono">2PM – 11PM</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="border-t border-cyan-100/50 "
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
            <motion.div
              className="flex items-center text-gray-600 my-2"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <span>Crafted with</span>
              <motion.div
                className="mx-2"
                animate={{
                  scale: [1, 1.3, 1],
                  rotate: [0, 15, -15, 0],
                }}
                transition={{ duration: 2.5, repeat: Infinity }}
              >
                <Heart size={20} className="text-red-400 fill-current" />
              </motion.div>
              <span>
                in{" "}
                <a
                  href="https://www.nextgenwebsites.info/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold hover:underline"
                >
                  NextGen Websites
                </a>
              </span>
            </motion.div>

            <div className="flex items-center space-x-8 text-gray-500">
              <span className="font-medium">
                &copy; 2025 Yummy Yako. All rights reserved.
              </span>
              <motion.div
                className="flex items-center space-x-2"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{
                        rotate: [0, 360],
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.2,
                      }}
                    >
                      <Star
                        size={16}
                        className="text-yellow-400 fill-current"
                      />
                    </motion.div>
                  ))}
                </div>
                <span className="font-semibold">5.0 Rating</span>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Dripping Effect */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          className="w-full h-8"
          viewBox="0 0 1200 32"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M0,32 L0,20 C200,10 400,25 600,15 C800,5 1000,20 1200,12 L1200,32 Z"
            fill="#f0fdfa"
            animate={{
              d: [
                "M0,32 L0,20 C200,10 400,25 600,15 C800,5 1000,20 1200,12 L1200,32 Z",
                "M0,32 L0,15 C200,25 400,10 600,20 C800,15 1000,5 1200,18 L1200,32 Z",
                "M0,32 L0,20 C200,10 400,25 600,15 C800,5 1000,20 1200,12 L1200,32 Z",
              ],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>
      </div>
    </footer>
  );
};

export default Footer;

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

const Footer = () => {
  const dripVariants = {
    animate: {
      scaleY: [1, 1.1, 1],
      transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
    },
  };
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
    { label: "Our Sweet Story", href: "#" },
    { label: "Dessert Menu", href: "#" },
    { label: "Find Our Truck", href: "#" },
    { label: "Sweet Events", href: "#" },
    { label: "Contact Us", href: "#" },
    { label: "Catering Services", href: "#" },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-cyan-400 via-turquoise-400 to-teal-500 overflow-hidden py-8">
      {/* White Dripping Cream Pattern */}
      <div className="absolute top-0 left-0 w-full">
        <svg
          className="w-full h-24"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M0,0 C150,80 250,40 400,60 C550,80 650,40 800,50 C950,60 1050,80 1200,40 L1200,0 Z"
            fill="white"
            variants={dripVariants}
            animate="animate"
          />
          {/* Additional drip layers */}
          <motion.path
            d="M0,20 C100,70 200,30 350,50 C500,70 600,30 750,40 C900,50 1000,70 1200,30 L1200,0 Z"
            fill="rgba(255,255,255,0.8)"
            variants={dripVariants}
            animate="animate"
            transition={{ delay: 0.5 }}
          />
          <motion.path
            d="M0,40 C80,60 180,50 300,55 C420,60 520,50 640,52 C760,54 860,58 1200,45 L1200,0 Z"
            fill="rgba(255,255,255,0.6)"
            variants={dripVariants}
            animate="animate"
            transition={{ delay: 1 }}
          />
        </svg>
      </div>

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
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 via-teal-300 to-cyan-200 rounded-3xl flex items-center justify-center shadow-xl relative overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-white/20 rounded-3xl"
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                  <span className="text-3xl relative z-10">🧁</span>
                </div>

                {/* Sparkle effects */}
                <motion.div
                  className="absolute -top-2 -right-2 text-yellow-400"
                  animate={{
                    rotate: [0, 360],
                    scale: [0.8, 1.2, 0.8],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  ✨
                </motion.div>
              </motion.div>

              <div>
                <motion.h3
                  className="text-3xl font-black bg-gradient-to-r from-cyan-600 via-teal-500 to-cyan-500 bg-clip-text text-transparent"
                  variants={pulseVariants}
                  animate="animate"
                >
                  Yummy Yako
                </motion.h3>
                <motion.p
                  className="text-cyan-500 font-semibold text-sm tracking-wide"
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                >
                  SWEET DREAMS ON WHEELS
                </motion.p>
              </div>
            </motion.div>

            <motion.p
              className="text-gray-600 leading-relaxed mb-8 text-lg"
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
            <motion.h4
              className="text-2xl font-bold text-gray-800 mb-8 flex items-center"
              whileHover={{ x: 5 }}
            >
              <motion.span
                className="mr-3 text-2xl"
                animate={{ rotate: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                🍦
              </motion.span>
              Quick Links
            </motion.h4>
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
                      className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-full mr-4 group-hover:scale-125 transition-transform"
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
            <motion.h4
              className="text-2xl font-bold text-gray-800 mb-8 flex items-center"
              whileHover={{ x: 5 }}
            >
              <motion.span
                className="mr-3 text-2xl"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                📞
              </motion.span>
              Get In Touch
            </motion.h4>

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
                  <p className="text-gray-800 font-semibold mb-1">Location</p>
                  <p className="text-gray-600">
                    Follow our social media for
                    <br />
                    real-time location updates!
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
                  <p className="text-gray-800 font-semibold mb-1">Call Us</p>
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
                  <p className="text-gray-800 font-semibold mb-1">Email Us</p>
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
            <motion.h4
              className="text-2xl font-bold text-gray-800 mb-8 flex items-center"
              whileHover={{ x: 5 }}
            >
              <motion.span
                className="mr-3 text-2xl"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                ⏰
              </motion.span>
              Sweet Hours
            </motion.h4>

            <motion.div
              className="bg-white/80 backdrop-blur-lg rounded-3xl p-6 shadow-lg border border-cyan-100/50 mb-8"
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-gray-800">
                    Monday - Friday
                  </span>
                  <span className="text-gray-600 font-mono">11AM - 8PM</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-gray-800">Weekends</span>
                  <span className="text-gray-600 font-mono">10AM - 9PM</span>
                </div>
                <motion.div
                  className="flex items-center justify-center text-green-600 font-bold bg-green-50 rounded-2xl py-2"
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Clock size={18} className="mr-2" />
                  Currently Open!
                </motion.div>
              </div>
            </motion.div>

            {/* Track Truck CTA */}
            <motion.div
              className="bg-gradient-to-br from-cyan-400 via-teal-300 to-cyan-300 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden"
              whileHover={{
                scale: 1.05,
                y: -5,
              }}
              animate={{
                boxShadow: [
                  "0 10px 30px rgba(6, 182, 212, 0.2)",
                  "0 15px 40px rgba(6, 182, 212, 0.3)",
                  "0 10px 30px rgba(6, 182, 212, 0.2)",
                ],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <motion.div
                className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />

              <motion.div
                className="flex items-center justify-center mb-4"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2.5, repeat: Infinity }}
              >
                <Truck size={28} className="mr-3" />
                <span className="font-black text-xl tracking-wide">
                  FIND OUR TRUCK
                </span>
              </motion.div>

              <p className="text-center mb-6 text-white/90 font-medium">
                Never miss your favorite treats! Track our live location and get
                notified when we're in your neighborhood.
              </p>

              <motion.button
                className="w-full bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-bold py-4 px-6 rounded-2xl transition-all border border-white/20"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                animate={{
                  boxShadow: [
                    "0 0 0 rgba(255,255,255,0.3)",
                    "0 0 20px rgba(255,255,255,0.2)",
                    "0 0 0 rgba(255,255,255,0.3)",
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                🚚 TRACK NOW
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="border-t border-cyan-100/50 pt-8"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
            <motion.div
              className="flex items-center text-gray-600"
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
              <span>and premium ingredients</span>
              <motion.span
                className="ml-3 text-xl"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                👨‍🍳
              </motion.span>
            </motion.div>

            <div className="flex items-center space-x-8 text-gray-500">
              <span className="font-medium">
                &copy; 2024 Yummy Yako. All rights reserved.
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

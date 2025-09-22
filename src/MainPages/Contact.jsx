import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  User,
  MessageSquare,
  ShoppingCart,
} from "lucide-react";
import Background from "../assets/images/back.png";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    orderType: "",
    items: "",
    specialRequests: "",
    preferredDate: "",
    preferredTime: "",
    message: "",
  });

  const menuItems = [
    "Nutella Knafeh Fried Ice Cream - $14.00",
    "Biscoff Knafeh Fried Ice Cream - $14.00",
    "Pistachio Knafeh Fried Ice Cream - $16.50",
    "Yummys Knafeh Fried Ice Cream - $15.00",
    "Dutch Pancakes (Choice of Sauce) - $10.00",
    "Pistachio Dutch Pancakes - $12.00",
    "Traditional Knafeh - $11.00",
    "Strawberry Cup - $17.00",
    "Custom Order - Contact for pricing",
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert(
      "Thank you for your order! We will contact you soon to confirm details."
    );

    setFormData({
      name: "",
      email: "",
      phone: "",
      orderType: "",
      items: "",
      specialRequests: "",
      preferredDate: "",
      preferredTime: "",
      message: "",
    });
  };

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

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Section with Image */}
      <div className="absolute inset-0">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center min-h-screen"
          style={{
            backgroundImage: `url('${Background}')`,
          }}
        ></div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-400/10 via-cyan-500/40 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      </div>

      {/* Floating background elements */}
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
          transition: { duration: 1.2, ease: "easeOut", delay: 0.3 },
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
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
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
              className="text-4xl sm:text-5xl lg:text-7xl font-bold text-[#80f7fb] mb-6"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              Contact Yako
            </motion.h1>
          </motion.div>

          {/* Contact Info Cards */}

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 ">
            {/* Map Section */}
            <motion.div
              className=" rounded-3xl p-8  bg-white/65 backdrop-blur-lg shadow-xl border border-white/50"
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              whileHover={{
                scale: 1.02,
                boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
              }}
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <MapPin className="w-6 h-6 text-cyan-600 mr-2" />
                Our Service Area
              </h2>
              <div className="relative h-80 rounded-2xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4124.7167962321055!2d150.8446697!3d-33.9381045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12933b6de6cde1%3A0x64b4e543bd717b53!2sYummy%20Yako!5e0!3m2!1sen!2slk!4v1758354258262!5m2!1sen!2slk"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Yako Service Area - Negombo"
                ></iframe>
              </div>
              <p className="text-gray-600 mt-4 text-center text-2xl">
                We deliver fresh desserts in surrounding areas.
              </p>
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-12 mt-15"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {[
                  {
                    icon: MapPin,
                    title: "Location",
                    info: "Mobile Service",
                    details: "Negombo & Surrounding Areas",
                  },
                  {
                    icon: Phone,
                    title: "Phone",
                    info: "+94 XX XXX XXXX",
                    details: "Call or WhatsApp",
                  },
                  {
                    icon: Mail,
                    title: "Email",
                    info: "hello@yako.lk",
                    details: "Quick response guaranteed",
                  },
                  {
                    icon: Clock,
                    title: "Hours",
                    info: "9 AM - 9 PM",
                    details: "7 days a week",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="bg-white/95 backdrop-blur-lg rounded-2xl p-6 text-center shadow-xl border border-white/50"
                    variants={itemVariants}
                    whileHover={{
                      scale: 1.05,
                      y: -5,
                      boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                    }}
                  >
                    <motion.div
                      className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white rounded-full mb-4"
                      variants={floatingVariants}
                      animate="animate"
                    >
                      <item.icon className="w-6 h-6" />
                    </motion.div>
                    <h3 className="font-bold text-gray-800 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-cyan-600 font-semibold mb-1">
                      {item.info}
                    </p>
                    <p className="text-gray-600 text-sm">{item.details}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Order Form */}
            <motion.div
              className="bg-white/95 backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-white/50"
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              whileHover={{
                scale: 1.02,
                boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
              }}
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <ShoppingCart className="w-6 h-6 text-cyan-600 mr-2" />
                Place Your Order
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      <User className="w-4 h-4 inline mr-1" />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 transition-all duration-200"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      <Phone className="w-4 h-4 inline mr-1" />
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 transition-all duration-200"
                      placeholder="+94 XX XXX XXXX"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <Mail className="w-4 h-4 inline mr-1" />
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 transition-all duration-200"
                    placeholder="your.email@example.com"
                  />
                </div>

                {/* Order Type */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Order Type *
                  </label>
                  <select
                    name="orderType"
                    value={formData.orderType}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 transition-all duration-200"
                  >
                    <option value="">Select order type</option>
                    <option value="delivery">Delivery</option>
                    <option value="pickup">Pickup</option>
                    <option value="event">Event Catering</option>
                    <option value="custom">Custom Order</option>
                  </select>
                </div>

                {/* Menu Items */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Select Items *
                  </label>
                  <select
                    name="items"
                    value={formData.items}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 transition-all duration-200"
                  >
                    <option value="">Choose from our menu</option>
                    {menuItems.map((item, index) => (
                      <option key={index} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Date and Time */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleInputChange}
                      min={new Date().toISOString().split("T")[0]}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 transition-all duration-200"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Preferred Time
                    </label>
                    <input
                      type="time"
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 transition-all duration-200"
                    />
                  </div>
                </div>

                {/* Special Requests */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Special Requests
                  </label>
                  <textarea
                    name="specialRequests"
                    value={formData.specialRequests}
                    onChange={handleInputChange}
                    rows="3"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 transition-all duration-200"
                    placeholder="Any special dietary requirements, customizations, or requests..."
                  ></textarea>
                </div>

                {/* Additional Message */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <MessageSquare className="w-4 h-4 inline mr-1" />
                    Additional Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="4"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 transition-all duration-200"
                    placeholder="Tell us more about your order, delivery address, or any questions you have..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan-500 to-cyan-600 text-white font-bold py-4 px-6 rounded-xl shadow-lg flex items-center justify-center"
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 15px 35px rgba(6,182,212,0.4)",
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Order Request
                </motion.button>
              </form>
            </motion.div>
          </div>

          {/* Additional Info Section */}
          <motion.div
            className="text-center mt-16"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <motion.div
              className="bg-white/80 backdrop-blur-md rounded-3xl p-8 max-w-4xl mx-auto"
              whileHover={{
                scale: 1.02,
                boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
              }}
            >
              <h3 className="text-2xl font-bold text-cyan-600 mb-4">
                Why Choose Yummy Yako ?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-cyan-700">
                <div>
                  <h4 className="font-semibold mb-2">🚚 Fresh Delivery</h4>
                  <p className="text-sm">
                    Made fresh and delivered warm to your doorstep
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">🎂 Custom Orders</h4>
                  <p className="text-sm">
                    Personalized desserts for your special occasions
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">⭐ Quality Guaranteed</h4>
                  <p className="text-sm">
                    Premium ingredients and exceptional taste every time
                  </p>
                </div>
              </div>
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
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>
      </div>
    </div>
  );
};

export default Contact;

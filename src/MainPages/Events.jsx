import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { EMAILJS_CONFIG, createEmailParams } from "../config/emailjs";
import {
  Calendar,
  Users,
  MapPin,
  Star,
  ArrowRight,
  Heart,
  Coffee,
  Gift,
  Sparkles,
  Building,
  Home,
  PartyPopper,
  Camera,
  User,
  Phone,
  Mail,
  Clock,
  Send,
  FileText,
  MessageSquare,
  CheckCircle,
  ChevronDown,
} from "lucide-react";
import Background from "../assets/images/back.png";
import Truck from "../assets/images/others/truck.png";
import Dessert from "../assets/images/others/food3.png";
import Chefs from "../assets/images/others/chefs.png";

const Events = () => {
  const [selectedPost, setSelectedPost] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', null
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    eventType: "",
    eventDate: "",
    eventLocation: "",
    guestCount: "",
    itemCount: "",
    dietaryRequirements: "",
    additionalRequirements: "",
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const cateringOptions = [
    {
      id: 1,
      title: "Festivals & Markets",
      description:
        "Bring the sweet energy to any festival or market! Our mobile dessert truck creates buzz and excitement wherever we park. Perfect for music festivals, food truck rallies, farmers markets, and community celebrations.",
      image:
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=800&h=600&fit=crop",
      icon: PartyPopper,
      color: "from-orange-400 to-red-500",
    },
    {
      id: 2,
      title: "Parties",
      description:
        "Make your private party unforgettable! Birthday celebrations, anniversaries, graduations - we bring the party atmosphere and create instant photo opportunities for your guests.",
      image:
        "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=700&h=500&fit=crop",
      icon: Gift,
      color: "from-purple-400 to-pink-500",
    },
    {
      id: 3,
      title: "Weddings",
      description:
        "Add a magical touch to your special day! Our dessert truck provides the perfect sweet ending to your wedding celebration, creating unforgettable moments and stunning photo opportunities.",
      image:
        "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop",
      icon: Heart,
      color: "from-rose-400 to-pink-500",
    },
    {
      id: 4,
      title: "Corporate Events",
      description:
        "Boost team morale and create memorable experiences for your corporate events. From office celebrations to company picnics, we bring joy and energy to any business gathering.",
      image:
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=500&fit=crop",
      icon: Building,
      color: "from-blue-400 to-cyan-500",
    },
    {
      id: 5,
      title: "School Events",
      description:
        "Make school events extra special! Fundraisers, graduations, sports events - we support educational communities with delicious treats that bring everyone together.",
      image:
        "https://images.unsplash.com/photo-1565299585323-38174c5e0952?w=800&h=600&fit=crop",
      icon: Home,
      color: "from-green-400 to-teal-500",
    },
    {
      id: 6,
      title: "Anything Else!",
      description:
        "Have a unique event idea? We're always excited to try something new! Send us your creative vision and we'll work together to make it absolutely amazing.",
      image:
        "https://images.unsplash.com/photo-1571506165871-ee72a35bbc9d?w=800&h=500&fit=crop",
      icon: Sparkles,
      color: "from-yellow-400 to-orange-500",
    },
  ];

  const galleryImages = [
    "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=700&h=500&fit=crop",
    "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=500&fit=crop",
    "https://images.unsplash.com/photo-1565299585323-38174c5e0952?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1571506165871-ee72a35bbc9d?w=800&h=500&fit=crop",
    "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1536431311719-398b6704d4cc?w=500&h=300&fit=crop",
  ];

  const teamMembers = [
    {
      name: "Chef Marcus",
      role: "Head Chef",
      image:
        "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=400&fit=crop",
    },
    {
      name: "Chef Sarah",
      role: "Dessert Specialist",
      image:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop",
    },
    {
      name: "Chef David",
      role: "Pastry Chef",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Prepare template parameters using the universal configuration
      const templateParams = createEmailParams("event_booking", formData);

      // Send email using EmailJS
      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      setSubmitStatus("success");

      // Reset form after successful submission
      setFormData({
        fullName: "",
        phoneNumber: "",
        email: "",
        eventType: "",
        eventDate: "",
        eventLocation: "",
        guestCount: "",
        itemCount: "",
        dietaryRequirements: "",
        additionalRequirements: "",
      });

      // Auto-hide success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } catch (error) {
      console.error("Error sending event inquiry:", error);
      setSubmitStatus("error");

      // Auto-hide error message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-cyan-50 to-teal-50 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          initial={{ scale: 0, x: 100, y: 100 }}
          animate={{
            scale: [1, 1.2, 1],
            x: [100, 120, 100],
            y: [100, 80, 100],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-br from-teal-300/30 to-cyan-300/30 rounded-full blur-sm"
        />

        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 0.6, 0],
              y: [0, -100, -200],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.8,
              ease: "easeOut",
            }}
            className="absolute bg-gradient-to-br from-cyan-400/40 to-teal-400/40 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              bottom: "-50px",
              width: `${20 + Math.random() * 20}px`,
              height: `${20 + Math.random() * 20}px`,
            }}
          />
        ))}
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-7xl mx-auto px-6 py-16"
      >
        {/* SECTION 1: Header and Catering Options */}
        <motion.div
          variants={itemVariants}
          className="text-center mb-20 relative"
        >
          <motion.h1
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.3 }}
            className="text-6xl md:text-8xl mt-8 font-black text-gray-800 mb-8 tracking-tight relative z-10"
            style={{ fontFamily: "SourGummy-Regular" }}
          >
            Event
            <br />
            <span className="bg-gradient-to-r from-cyan-500 to-teal-500 bg-clip-text text-transparent">
              Catering
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 leading-relaxed font-medium mb-8 max-w-4xl mx-auto"
            style={{ fontFamily: "SourGummy-Regular" }}
          >
            Bring the sweetness to your special event! Our mobile dessert truck
            creates unforgettable experiences for any celebration.
          </motion.p>

          {/* Quick Action Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <Link to="/menu">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-bold py-3 px-8 rounded-2xl shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
              >
                <Coffee className="w-5 h-5" />
                View Our Menu
              </motion.button>
            </Link>

            <a href="tel:+1234567890">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-cyan-600 font-bold py-3 px-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border-2 border-cyan-500 flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call Us Now
              </motion.button>
            </a>
          </motion.div>
        </motion.div>

        {/* Catering Options Grid */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        >
          {cateringOptions.map((option, index) => {
            const IconComponent = option.icon;
            const isLastOption = option.id === 6;
            return (
              <motion.article
                key={option.id}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-cyan-100 relative"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={option.image}
                    alt={option.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                  <div
                    className={`absolute top-6 left-6 px-4 py-2 rounded-full bg-gradient-to-r ${option.color} text-white font-bold text-sm flex items-center gap-2`}
                  >
                    <IconComponent className="w-4 h-4" />
                    {option.title}
                  </div>
                </div>

                <div className="p-8">
                  <p
                    className="text-gray-600 leading-relaxed mb-6"
                    style={{ fontFamily: "SourGummy-Regular" }}
                  >
                    {option.description}
                  </p>

                  <div className="flex gap-3">
                    {!isLastOption && (
                      <Link to="/menu" className="flex-1">
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="w-full bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 font-bold py-3 px-6 rounded-2xl hover:shadow-lg transition-all flex items-center justify-center gap-2"
                        >
                          <Coffee className="w-4 h-4" />
                          Menu
                        </motion.button>
                      </Link>
                    )}

                    {isLastOption ? (
                      <Link to="/contact" className="flex-1">
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="w-full bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-bold py-4 px-8 rounded-2xl hover:shadow-lg transition-all flex items-center justify-center gap-2"
                        >
                          Contact Us
                          <ArrowRight className="w-5 h-5" />
                        </motion.button>
                      </Link>
                    ) : (
                      <Link to="/contact" className="flex-1">
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="w-full bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-bold py-3 px-6 rounded-2xl hover:shadow-lg transition-all flex items-center justify-center gap-2"
                        >
                          Book Now
                          <ArrowRight className="w-4 h-4" />
                        </motion.button>
                      </Link>
                    )}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        {/* SECTION 2: Gallery */}
        <motion.div variants={itemVariants} className="mb-20">
          <div className="text-center mb-12">
            <h2
              className="text-5xl font-black text-gray-800 mb-4"
              style={{ fontFamily: "SourGummy-Regular" }}
            >
              Our Work
            </h2>
            <p
              className="text-xl text-gray-600"
              style={{ fontFamily: "SourGummy-Regular" }}
            >
              See the magic we've created at events across the region
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="aspect-square rounded-2xl overflow-hidden shadow-lg"
              >
                <img
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </motion.div>
            ))}
          </div>

          {/* Video placeholder */}
          <div className="relative bg-gradient-to-br from-cyan-100 to-teal-100 rounded-3xl overflow-hidden shadow-xl">
            <div className="aspect-video flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Camera className="w-10 h-10 text-white" />
                </div>
                <p
                  className="text-xl font-semibold text-gray-700"
                  style={{ fontFamily: "SourGummy-Regular" }}
                >
                  Video Coming Soon
                </p>
                <p
                  className="text-gray-600"
                  style={{ fontFamily: "SourGummy-Regular" }}
                >
                  Watch our truck in action!
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* SECTION 3: Team */}
        <motion.div variants={itemVariants} className="mb-20">
          <div className="text-center mb-12">
            <h2
              className="text-5xl font-black text-gray-800 mb-4"
              style={{ fontFamily: "SourGummy-Regular" }}
            >
              Meet Our Team
            </h2>
            <p
              className="text-xl text-gray-600"
              style={{ fontFamily: "SourGummy-Regular" }}
            >
              The talented chefs behind every sweet creation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -8 }}
                className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-cyan-100 text-center"
              >
                <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden shadow-lg">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3
                  className="text-2xl font-black text-gray-800 mb-2"
                  style={{ fontFamily: "SourGummy-Regular" }}
                >
                  {member.name}
                </h3>
                <p
                  className="text-cyan-600 font-semibold"
                  style={{ fontFamily: "SourGummy-Regular" }}
                >
                  {member.role}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* SECTION 4: Contact Form */}
        <motion.div
          variants={itemVariants}
          className="bg-white rounded-3xl p-12 shadow-xl border border-cyan-100"
        >
          <div className="text-center mb-12">
            <h2
              className="text-5xl font-black text-gray-800 mb-4"
              style={{ fontFamily: "SourGummy-Regular" }}
            >
              Book Your Event
            </h2>
            <p
              className="text-xl text-gray-600"
              style={{ fontFamily: "SourGummy-Regular" }}
            >
              Tell us about your event and we'll make it sweet!
            </p>
          </div>

          <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label
                  className="block text-gray-700 font-semibold mb-2"
                  style={{ fontFamily: "SourGummy-Regular" }}
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-cyan-200 rounded-2xl focus:outline-none focus:border-cyan-500 transition-colors"
                  style={{ fontFamily: "SourGummy-Regular" }}
                />
              </div>

              <div>
                <label
                  className="block text-gray-700 font-semibold mb-2"
                  style={{ fontFamily: "SourGummy-Regular" }}
                >
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-cyan-200 rounded-2xl focus:outline-none focus:border-cyan-500 transition-colors"
                  style={{ fontFamily: "SourGummy-Regular" }}
                />
              </div>

              <div>
                <label
                  className="block text-gray-700 font-semibold mb-2"
                  style={{ fontFamily: "SourGummy-Regular" }}
                >
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-cyan-200 rounded-2xl focus:outline-none focus:border-cyan-500 transition-colors"
                  style={{ fontFamily: "SourGummy-Regular" }}
                />
              </div>

              <div>
                <label
                  className="block text-gray-700 font-semibold mb-2"
                  style={{ fontFamily: "SourGummy-Regular" }}
                >
                  Event Type *
                </label>
                <select
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-cyan-200 rounded-2xl focus:outline-none focus:border-cyan-500 transition-colors"
                  style={{ fontFamily: "SourGummy-Regular" }}
                >
                  <option value="">Select Event Type</option>
                  <option value="festival">Festival & Markets</option>
                  <option value="party">Private Party</option>
                  <option value="wedding">Wedding</option>
                  <option value="corporate">Corporate Event</option>
                  <option value="school">School Event</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label
                  className="block text-gray-700 font-semibold mb-2"
                  style={{ fontFamily: "SourGummy-Regular" }}
                >
                  Event Date *
                </label>
                <input
                  type="date"
                  name="eventDate"
                  value={formData.eventDate}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-cyan-200 rounded-2xl focus:outline-none focus:border-cyan-500 transition-colors"
                  style={{ fontFamily: "SourGummy-Regular" }}
                />
              </div>

              <div>
                <label
                  className="block text-gray-700 font-semibold mb-2"
                  style={{ fontFamily: "SourGummy-Regular" }}
                >
                  Event Location *
                </label>
                <input
                  type="text"
                  name="eventLocation"
                  value={formData.eventLocation}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-cyan-200 rounded-2xl focus:outline-none focus:border-cyan-500 transition-colors"
                  style={{ fontFamily: "SourGummy-Regular" }}
                />
              </div>

              <div>
                <label
                  className="block text-gray-700 font-semibold mb-2"
                  style={{ fontFamily: "SourGummy-Regular" }}
                >
                  How Many Guests *
                </label>
                <input
                  type="number"
                  name="guestCount"
                  value={formData.guestCount}
                  onChange={handleInputChange}
                  required
                  min="1"
                  className="w-full px-4 py-3 border border-cyan-200 rounded-2xl focus:outline-none focus:border-cyan-500 transition-colors"
                  style={{ fontFamily: "SourGummy-Regular" }}
                />
              </div>

              <div>
                <label
                  className="block text-gray-700 font-semibold mb-2"
                  style={{ fontFamily: "SourGummy-Regular" }}
                >
                  How Many Items *
                </label>
                <input
                  type="number"
                  name="itemCount"
                  value={formData.itemCount}
                  onChange={handleInputChange}
                  required
                  min="1"
                  className="w-full px-4 py-3 border border-cyan-200 rounded-2xl focus:outline-none focus:border-cyan-500 transition-colors"
                  style={{ fontFamily: "SourGummy-Regular" }}
                />
              </div>
            </div>

            <div className="mb-6">
              <label
                className="block text-gray-700 font-semibold mb-2"
                style={{ fontFamily: "SourGummy-Regular" }}
              >
                Dietary Requirements
              </label>
              <textarea
                name="dietaryRequirements"
                value={formData.dietaryRequirements}
                onChange={handleInputChange}
                rows="3"
                placeholder="Please let us know about any dietary restrictions or allergies..."
                className="w-full px-4 py-3 border border-cyan-200 rounded-2xl focus:outline-none focus:border-cyan-500 transition-colors"
                style={{ fontFamily: "SourGummy-Regular" }}
              />
            </div>

            <div className="mb-8">
              <label
                className="block text-gray-700 font-semibold mb-2"
                style={{ fontFamily: "SourGummy-Regular" }}
              >
                Additional Requirements
              </label>
              <textarea
                name="additionalRequirements"
                value={formData.additionalRequirements}
                onChange={handleInputChange}
                rows="4"
                placeholder="Tell us anything else we should know about your event..."
                className="w-full px-4 py-3 border border-cyan-200 rounded-2xl focus:outline-none focus:border-cyan-500 transition-colors"
                style={{ fontFamily: "SourGummy-Regular" }}
              />
            </div>

            {/* Status Messages */}
            {submitStatus === "success" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-green-100 border border-green-300 rounded-2xl text-green-800 text-center"
                style={{ fontFamily: "SourGummy-Regular" }}
              >
                <CheckCircle className="w-6 h-6 mx-auto mb-2" />
                <p className="font-semibold">Thank you for your inquiry!</p>
                <p>We'll contact you soon to discuss your event details.</p>
              </motion.div>
            )}

            {submitStatus === "error" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-red-100 border border-red-300 rounded-2xl text-red-800 text-center"
                style={{ fontFamily: "SourGummy-Regular" }}
              >
                <p className="font-semibold">Oops! Something went wrong.</p>
                <p>Please try again or contact us directly.</p>
              </motion.div>
            )}

            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={!isSubmitting ? { scale: 1.02 } : {}}
              whileTap={!isSubmitting ? { scale: 0.98 } : {}}
              className={`w-full font-bold py-4 px-8 rounded-2xl transition-all flex items-center justify-center gap-2 ${
                isSubmitting
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-gradient-to-r from-cyan-500 to-teal-500 hover:shadow-lg"
              } text-white`}
              style={{ fontFamily: "SourGummy-Regular" }}
            >
              {isSubmitting ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                  />
                  Sending Inquiry...
                </>
              ) : (
                <>
                  Send Event Inquiry
                  <Send className="w-5 h-5" />
                </>
              )}
            </motion.button>
          </form>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Events;

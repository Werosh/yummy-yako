import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Background from "../assets/images/back.png";

import {
  User,
  Phone,
  Mail,
  Clock,
  Send,
  Briefcase,
  MessageSquare,
  FileText,
  Award,
  Users,
} from "lucide-react";

const Career = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    availability: "",
    portfolio: "",
    resume: "",
    coverLetter: "",
    skills: "",
    message: "",
  });

  const positions = [
    "Pastry Chef - Full Time",
    "Assistant Chef - Part Time",
    "Delivery Driver - Flexible Hours",
    "Customer Service Representative - Part Time",
    "Social Media Manager - Remote/Part Time",
    "Kitchen Assistant - Part Time",
    "Event Coordinator - Project Based",
    "Quality Control Specialist - Full Time",
    "Internship - Various Departments",
    "Other - Please specify in message",
  ];

  const experienceLevels = [
    "No Experience - Willing to Learn",
    "0-1 Years Experience",
    "1-3 Years Experience",
    "3-5 Years Experience",
    "5+ Years Experience",
    "Senior Level (10+ Years)",
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
    // Here you would typically send the form data to your backend
    console.log("Career application submitted:", formData);
    alert(
      "Thank you for your application! We will review your information and contact you soon."
    );

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      position: "",
      experience: "",
      availability: "",
      portfolio: "",
      resume: "",
      coverLetter: "",
      skills: "",
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

      {/* Professional floating background elements */}
      {/* You can add floating elements here if needed, or remove this comment if not used */}

      {/* Top cream drip */}
      <motion.div
        className="absolute top-0 left-0 right-0 z-20"
        initial={{ scaleY: 0, transformOrigin: "top" }}
        animate={{
          scaleY: 1,
          transition: {
            duration: 1.2,
            ease: "easeOut",
            delay: 0.3,
          },
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
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
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
              animate={{
                scale: [1, 1.02, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              Join Our Team
            </motion.h1>
          </motion.div>

          {/* Why Join Us Cards */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {[
              {
                icon: Users,
                title: "Great Team",
                info: "Friendly Environment",
                details: "Work with passionate people",
              },
              {
                icon: Award,
                title: "Growth",
                info: "Career Development",
                details: "Learn and advance with us",
              },
              {
                icon: Clock,
                title: "Flexibility",
                info: "Work-Life Balance",
                details: "Flexible scheduling options",
              },
              {
                icon: Briefcase,
                title: "Benefits",
                info: "Competitive Package",
                details: "Great perks and benefits",
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
                <h3 className="font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-cyan-600 font-semibold mb-1">{item.info}</p>
                <p className="text-gray-600 text-sm">{item.details}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Company Info Section */}
            <motion.div
              className="bg-white/95 backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-white/50 max-h-[700px]"
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              whileHover={{
                scale: 1.02,
                boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
              }}
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <Briefcase className="w-6 h-6 text-cyan-600 mr-2" />
                Why Work With Yako?
              </h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-cyan-600 font-bold text-sm">🎯</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">
                      Our Mission
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Creating delightful dessert experiences that bring joy to
                      every customer's day.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-cyan-600 font-bold text-sm">💡</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">
                      Innovation
                    </h3>
                    <p className="text-gray-600 text-sm">
                      We're always exploring new flavors and creative
                      presentations to surprise our customers.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-cyan-600 font-bold text-sm">🌟</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">
                      Quality First
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Premium ingredients and exceptional standards in
                      everything we create.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-cyan-600 font-bold text-sm">🤝</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">
                      Team Culture
                    </h3>
                    <p className="text-gray-600 text-sm">
                      A supportive, inclusive environment where everyone's ideas
                      and contributions are valued.
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-cyan-50 to-cyan-100 p-4 rounded-xl mt-6">
                  <h4 className="font-semibold text-cyan-800 mb-2">
                    Current Openings
                  </h4>
                  <p className="text-cyan-700 text-sm mb-2">
                    We're actively recruiting for various positions including:
                  </p>
                  <ul className="text-cyan-700 text-sm space-y-1">
                    <li>• Pastry Chef & Kitchen Staff</li>
                    <li>• Customer Service Representatives</li>
                    <li>• Delivery Team Members</li>
                    <li>• Marketing & Social Media</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Application Form */}
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
                <FileText className="w-6 h-6 text-cyan-600 mr-2" />
                Apply Now
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
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 transition-all duration-200"
                    placeholder="your.email@example.com"
                  />
                </div>

                {/* Position and Experience */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Position of Interest *
                    </label>
                    <select
                      name="position"
                      value={formData.position}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 transition-all duration-200"
                    >
                      <option value="">Select position</option>
                      {positions.map((position, index) => (
                        <option key={index} value={position}>
                          {position}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Experience Level *
                    </label>
                    <select
                      name="experience"
                      value={formData.experience}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 transition-all duration-200"
                    >
                      <option value="">Select experience level</option>
                      {experienceLevels.map((level, index) => (
                        <option key={index} value={level}>
                          {level}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Availability */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <Clock className="w-4 h-4 inline mr-1" />
                    Availability *
                  </label>
                  <select
                    name="availability"
                    value={formData.availability}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 transition-all duration-200"
                  >
                    <option value="">Select availability</option>
                    <option value="immediate">Available Immediately</option>
                    <option value="1week">Available in 1 week</option>
                    <option value="2weeks">Available in 2 weeks</option>
                    <option value="1month">Available in 1 month</option>
                    <option value="flexible">Flexible start date</option>
                  </select>
                </div>

                {/* Skills */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Relevant Skills & Qualifications
                  </label>
                  <textarea
                    name="skills"
                    value={formData.skills}
                    onChange={handleInputChange}
                    rows="3"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 transition-all duration-200"
                    placeholder="List your relevant skills, certifications, and qualifications..."
                  ></textarea>
                </div>

                {/* Resume and Portfolio Links */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Resume/CV Link
                    </label>
                    <input
                      type="url"
                      name="resume"
                      value={formData.resume}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 transition-all duration-200"
                      placeholder="https://drive.google.com/..."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Portfolio Link (if applicable)
                    </label>
                    <input
                      type="url"
                      name="portfolio"
                      value={formData.portfolio}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 transition-all duration-200"
                      placeholder="https://yourportfolio.com"
                    />
                  </div>
                </div>

                {/* Cover Letter */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Cover Letter / Why You Want to Join Us *
                  </label>
                  <textarea
                    name="coverLetter"
                    value={formData.coverLetter}
                    onChange={handleInputChange}
                    required
                    rows="4"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 transition-all duration-200"
                    placeholder="Tell us why you're interested in working with Yako and what you can bring to our team..."
                  ></textarea>
                </div>

                {/* Additional Message */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <MessageSquare className="w-4 h-4 inline mr-1" />
                    Additional Information
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="3"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 transition-all duration-200"
                    placeholder="Any additional information you'd like to share..."
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
                  Submit Application
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
                What We Offer Our Team
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-cyan-700">
                <div>
                  <h4 className="font-semibold mb-2">
                    📚 Training & Development
                  </h4>
                  <p className="text-sm">
                    Comprehensive training programs and skill development
                    opportunities
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">🎉 Team Events</h4>
                  <p className="text-sm">
                    Regular team building activities and celebration events
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">🚀 Growth Path</h4>
                  <p className="text-sm">
                    Clear career progression and leadership opportunities
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
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </svg>
      </div>
    </div>
  );
};

export default Career;

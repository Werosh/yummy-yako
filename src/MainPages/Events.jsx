import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Play,
  Calendar,
  Users,
  MapPin,
  Star,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState(0);
  const [activeCategory, setActiveCategory] = useState("all");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
      },
    },
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
  };

  const showcaseEvents = [
    {
      id: 1,
      title: "Corporate Summer Gala",
      category: "corporate",
      client: "Tech Innovations Inc.",
      guests: 200,
      date: "August 2024",
      image: "/api/placeholder/800/500",
      video: true,
      description:
        "A sophisticated corporate event featuring our premium dessert selection with branded presentations",
      highlights: [
        "Custom branded desserts",
        "Live dessert station",
        "200+ guests served",
        "Premium presentation",
      ],
    },
    {
      id: 2,
      title: "Elegant Wedding Reception",
      category: "wedding",
      client: "Sarah & Michael",
      guests: 150,
      date: "September 2024",
      image: "/api/placeholder/800/500",
      video: false,
      description:
        "Romantic wedding dessert service with artisanal treats and elegant presentation",
      highlights: [
        "Artisanal wedding cake alternatives",
        "Romantic ambiance lighting",
        "Personalized service",
        "Guest favorite selections",
      ],
    },
    {
      id: 3,
      title: "Community Festival Activation",
      category: "festival",
      client: "Downtown Arts Festival",
      guests: 500,
      date: "July 2024",
      image: "/api/placeholder/800/500",
      video: true,
      description:
        "High-volume festival service with crowd-pleasing favorites and efficient operations",
      highlights: [
        "500+ guests served",
        "Festival atmosphere",
        "Quick service model",
        "Popular crowd favorites",
      ],
    },
    {
      id: 4,
      title: "Birthday Celebration Deluxe",
      category: "private",
      client: "The Johnson Family",
      guests: 50,
      date: "June 2024",
      image: "/api/placeholder/800/500",
      video: false,
      description:
        "Intimate birthday celebration with customized dessert experience and personal touch",
      highlights: [
        "Custom theme integration",
        "Interactive dessert bar",
        "Personal chef service",
        "Family-style presentation",
      ],
    },
  ];

  const categories = [
    { id: "all", label: "All Events", count: showcaseEvents.length },
    {
      id: "wedding",
      label: "Weddings",
      count: showcaseEvents.filter((e) => e.category === "wedding").length,
    },
    {
      id: "corporate",
      label: "Corporate",
      count: showcaseEvents.filter((e) => e.category === "corporate").length,
    },
    {
      id: "private",
      label: "Private Events",
      count: showcaseEvents.filter((e) => e.category === "private").length,
    },
    {
      id: "festival",
      label: "Festivals",
      count: showcaseEvents.filter((e) => e.category === "festival").length,
    },
  ];

  const filteredEvents =
    activeCategory === "all"
      ? showcaseEvents
      : showcaseEvents.filter((event) => event.category === activeCategory);

  const nextEvent = () => {
    setSelectedEvent((prev) => (prev + 1) % filteredEvents.length);
  };

  const prevEvent = () => {
    setSelectedEvent(
      (prev) => (prev - 1 + filteredEvents.length) % filteredEvents.length
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-cyan-900 to-teal-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-teal-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 rounded-full blur-3xl"
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-7xl mx-auto px-4 py-20"
      >
        {/* Hero Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.5 }}
            className="inline-block mb-6"
          >
            <span className="bg-gradient-to-r from-cyan-400 to-teal-400 text-black font-bold px-6 py-2 rounded-full text-sm uppercase tracking-wider">
              Our Events Showcase
            </span>
          </motion.div>

          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.7 }}
            className="text-6xl md:text-7xl font-bold text-white mb-8 tracking-tight"
          >
            Sweet Success
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
              Stories
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl text-cyan-100 max-w-2xl mx-auto leading-relaxed"
          >
            Witness the magic we create at every event - from intimate
            celebrations to grand corporate gatherings
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setActiveCategory(category.id);
                setSelectedEvent(0);
              }}
              className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-gradient-to-r from-cyan-500 to-teal-500 text-white shadow-lg shadow-cyan-500/25"
                  : "bg-white/10 text-cyan-100 hover:bg-white/20 backdrop-blur-sm"
              }`}
            >
              {category.label}
              <span className="ml-2 text-sm opacity-75">
                ({category.count})
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Main Showcase */}
        <motion.div variants={itemVariants} className="relative mb-20">
          <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl">
            <AnimatePresence mode="wait" custom={selectedEvent}>
              <motion.div
                key={filteredEvents[selectedEvent]?.id}
                custom={selectedEvent}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="absolute inset-0"
              >
                {/* Hero Image/Video */}
                <div className="relative h-full">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent z-10" />
                  <img
                    src={
                      filteredEvents[selectedEvent]?.image ||
                      "/api/placeholder/800/500"
                    }
                    alt={filteredEvents[selectedEvent]?.title}
                    className="w-full h-full object-cover"
                  />

                  {filteredEvents[selectedEvent]?.video && (
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="absolute inset-0 flex items-center justify-center z-20 cursor-pointer"
                    >
                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-6 border border-white/30">
                        <Play className="w-12 h-12 text-white ml-1" />
                      </div>
                    </motion.div>
                  )}

                  {/* Event Info Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 z-20 text-white">
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between">
                      <div className="mb-4 md:mb-0">
                        <motion.span
                          initial={{ x: -20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          className="inline-block bg-gradient-to-r from-cyan-500 to-teal-500 px-4 py-1 rounded-full text-sm font-semibold mb-3"
                        >
                          {filteredEvents[
                            selectedEvent
                          ]?.category.toUpperCase()}
                        </motion.span>

                        <motion.h2
                          initial={{ x: -30, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 0.1 }}
                          className="text-4xl md:text-5xl font-bold mb-2"
                        >
                          {filteredEvents[selectedEvent]?.title}
                        </motion.h2>

                        <motion.p
                          initial={{ x: -40, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 0.2 }}
                          className="text-xl text-cyan-100 mb-4"
                        >
                          {filteredEvents[selectedEvent]?.description}
                        </motion.p>

                        <motion.div
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.3 }}
                          className="flex items-center gap-6 text-cyan-200"
                        >
                          <div className="flex items-center gap-2">
                            <Users className="w-5 h-5" />
                            <span>
                              {filteredEvents[selectedEvent]?.guests} Guests
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="w-5 h-5" />
                            <span>{filteredEvents[selectedEvent]?.date}</span>
                          </div>
                        </motion.div>
                      </div>

                      {/* Navigation Controls */}
                      <div className="flex items-center gap-4">
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={prevEvent}
                          className="bg-white/20 backdrop-blur-sm rounded-full p-3 border border-white/30 hover:bg-white/30 transition-all"
                        >
                          <ChevronLeft className="w-6 h-6" />
                        </motion.button>

                        <span className="text-sm font-semibold px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full">
                          {selectedEvent + 1} / {filteredEvents.length}
                        </span>

                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={nextEvent}
                          className="bg-white/20 backdrop-blur-sm rounded-full p-3 border border-white/30 hover:bg-white/30 transition-all"
                        >
                          <ChevronRight className="w-6 h-6" />
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Event Highlights */}
        <motion.div variants={itemVariants} className="mb-20">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Event Highlights
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {filteredEvents[selectedEvent]?.highlights.map(
              (highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20"
                >
                  <div className="text-cyan-400 text-3xl mb-3">✨</div>
                  <p className="text-white font-semibold">{highlight}</p>
                </motion.div>
              )
            )}
          </div>
        </motion.div>

        {/* Event Grid Thumbnails */}
        <motion.div variants={itemVariants} className="mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {filteredEvents.map((event, index) => (
              <motion.div
                key={event.id}
                whileHover={{ scale: 1.05, y: -10 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedEvent(index)}
                className={`relative h-40 rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 ${
                  index === selectedEvent
                    ? "ring-4 ring-cyan-400 shadow-lg shadow-cyan-400/25"
                    : "ring-2 ring-white/20 hover:ring-white/40"
                }`}
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <p className="text-white font-semibold text-sm truncate">
                    {event.title}
                  </p>
                  <p className="text-cyan-200 text-xs">{event.client}</p>
                </div>
                {event.video && (
                  <div className="absolute top-2 right-2">
                    <Play className="w-5 h-5 text-white" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          variants={itemVariants}
          className="text-center bg-gradient-to-r from-cyan-600/20 to-teal-600/20 backdrop-blur-sm rounded-3xl p-12 border border-white/20"
        >
          <motion.h2
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="text-4xl font-bold text-white mb-6"
          >
            Ready to Create Your Own Success Story?
          </motion.h2>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto"
          >
            Let's make your event unforgettable with our premium mobile dessert
            experience
          </motion.p>

          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(34, 197, 197, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-bold px-10 py-4 rounded-2xl shadow-lg flex items-center gap-3 mx-auto text-lg"
          >
            Contact Us for Your Event
            <ArrowRight className="w-6 h-6" />
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Events;

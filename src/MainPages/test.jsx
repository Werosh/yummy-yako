import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Play,
  Pause,
  Calendar,
  Users,
  MapPin,
  Star,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Volume2,
  VolumeX,
  Maximize,
  Image as ImageIcon,
} from "lucide-react";

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState(0);
  const [activeCategory, setActiveCategory] = useState("all");
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [showGallery, setShowGallery] = useState(false);
  const [selectedGalleryImage, setSelectedGalleryImage] = useState(0);
  const videoRef = useRef(null);

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

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  const showcaseEvents = [
    {
      id: 1,
      title: "Downtown Food Truck Festival",
      category: "festival",
      client: "City Food Festival",
      guests: 800,
      date: "August 2024",
      video:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      images: [
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=800&fit=crop",
        "https://images.unsplash.com/photo-1574126154517-d1e0d89ef734?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1563379091339-03246963d273?w=500&h=400&fit=crop",
      ],
      description:
        "Sweet treats on wheels! Our mobile dessert truck served artisanal ice cream, gourmet cookies, and fresh pastries to festival crowds",
      highlights: [
        "800+ desserts served",
        "Live ice cream making",
        "Festival favorite spot",
        "Quick service from truck",
      ],
    },
    {
      id: 2,
      title: "Beach Wedding Dessert Truck",
      category: "wedding",
      client: "Emma & David's Wedding",
      guests: 120,
      date: "September 2024",
      video: null,
      images: [
        "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=400&h=600&fit=crop",
        "https://images.unsplash.com/photo-1536431311719-398b6704d4cc?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=300&h=400&fit=crop",
        "https://images.unsplash.com/photo-1587691592099-24045742c181?w=500&h=300&fit=crop",
      ],
      description:
        "Mobile dessert station at beachside wedding featuring custom ice cream flavors, mini pies, and signature wedding cookies",
      highlights: [
        "Custom wedding flavors",
        "Beachside mobile service",
        "Late-night sweet treats",
        "Instagram-worthy presentation",
      ],
    },
    {
      id: 3,
      title: "Corporate Office Park Visit",
      category: "corporate",
      client: "TechStart Solutions",
      guests: 200,
      date: "July 2024",
      video:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      images: [
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=500&fit=crop",
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop",
        "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=600&h=400&fit=crop",
      ],
      description:
        "Lunch break dessert surprise! Our food truck brought gourmet treats directly to the office complex parking lot",
      highlights: [
        "Office complex service",
        "Quick lunch desserts",
        "Employee favorite visit",
        "Convenient truck location",
      ],
    },
    {
      id: 4,
      title: "Birthday Party Food Truck",
      category: "private",
      client: "Sophia's 10th Birthday",
      guests: 35,
      date: "June 2024",
      video: null,
      images: [
        "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=700&h=500&fit=crop",
        "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=400&h=600&fit=crop",
        "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=500&h=400&fit=crop",
        "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=300&h=300&fit=crop",
      ],
      description:
        "Mobile birthday party magic! Custom decorated cookies, build-your-own sundae bar, and birthday cake ice cream served right from our truck",
      highlights: [
        "Custom birthday cookies",
        "DIY sundae bar on wheels",
        "Truck decorated for party",
        "Kid-friendly service",
      ],
    },
    {
      id: 5,
      title: "Neighborhood Block Party",
      category: "community",
      client: "Maple Street Community",
      guests: 150,
      date: "May 2024",
      video:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      images: [
        "https://images.unsplash.com/photo-1565299585323-38174c5e0952?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=500&h=700&fit=crop",
        "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?w=400&h=400&fit=crop",
      ],
      description:
        "Community gathering sweetened by our mobile dessert truck featuring local favorite flavors and family-friendly treats",
      highlights: [
        "Community favorite visit",
        "Family-friendly options",
        "Local flavor specialties",
        "Neighborhood regular stop",
      ],
    },
    {
      id: 6,
      title: "School Fundraiser Event",
      category: "fundraiser",
      client: "Riverside Elementary PTA",
      guests: 300,
      date: "April 2024",
      video: null,
      images: [
        "https://images.unsplash.com/photo-1548907040-4baa42d10919?w=800&h=500&fit=crop",
        "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=600&fit=crop",
        "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=350&h=450&fit=crop",
        "https://images.unsplash.com/photo-1571506165871-ee72a35bbc9d?w=450&h=350&fit=crop",
      ],
      description:
        "Supporting education with sweet treats! Our food truck helped raise funds while serving delicious desserts to families and students",
      highlights: [
        "Fundraising partnership",
        "Kid-approved treats",
        "Community support",
        "Educational cause",
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
      label: "Private Parties",
      count: showcaseEvents.filter((e) => e.category === "private").length,
    },
    {
      id: "festival",
      label: "Festivals",
      count: showcaseEvents.filter((e) => e.category === "festival").length,
    },
    {
      id: "community",
      label: "Community",
      count: showcaseEvents.filter((e) => e.category === "community").length,
    },
    {
      id: "fundraiser",
      label: "Fundraisers",
      count: showcaseEvents.filter((e) => e.category === "fundraiser").length,
    },
  ];

  const filteredEvents =
    activeCategory === "all"
      ? showcaseEvents
      : showcaseEvents.filter((event) => event.category === activeCategory);

  const currentEvent = filteredEvents[selectedEvent];

  const nextEvent = () => {
    setSelectedEvent((prev) => (prev + 1) % filteredEvents.length);
    setIsPlaying(false);
  };

  const prevEvent = () => {
    setSelectedEvent(
      (prev) => (prev - 1 + filteredEvents.length) % filteredEvents.length
    );
    setIsPlaying(false);
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const openGallery = (imageIndex = 0) => {
    setSelectedGalleryImage(imageIndex);
    setShowGallery(true);
  };

  // Create masonry-style layout for images
  const createImageGrid = (images) => {
    const sizes = [
      { width: "col-span-2", height: "row-span-2" }, // Large
      { width: "col-span-1", height: "row-span-2" }, // Tall
      { width: "col-span-2", height: "row-span-1" }, // Wide
      { width: "col-span-1", height: "row-span-1" }, // Small
      { width: "col-span-1", height: "row-span-1" }, // Small
    ];

    return images.map((image, index) => {
      const size = sizes[index % sizes.length];
      return { ...size, src: image, index };
    });
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
        {/* Hero Header */}
        <motion.div
          variants={itemVariants}
          className="text-center mb-20 relative"
        >
          <div className="absolute inset-0 flex justify-center items-start pointer-events-none">
            <svg
              width="400"
              height="200"
              viewBox="0 0 400 200"
              className="text-cyan-300/20"
            >
              <path
                d="M50 20 C100 10, 150 10, 200 20 C250 10, 300 10, 350 20 L350 40 C340 50, 330 55, 320 50 L310 60 C300 70, 280 65, 275 55 L265 65 C255 75, 235 70, 230 60 L220 70 C210 80, 190 75, 185 65 L175 75 C165 85, 145 80, 140 70 L130 80 C120 90, 100 85, 95 75 L85 85 C75 95, 55 90, 50 80 Z"
                fill="currentColor"
              />
            </svg>
          </div>

          <motion.h1
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.3 }}
            className="text-6xl md:text-8xl mt-8 font-black text-gray-800 mb-8 tracking-tight relative z-10"
          >
            Food Truck
            <br />
            <span className="bg-gradient-to-r from-cyan-500 to-teal-500 bg-clip-text text-transparent">
              Adventures
            </span>
          </motion.h1>

          <motion.div
            variants={itemVariants}
            className="relative max-w-3xl mx-auto"
          >
            <p className="text-xl text-gray-600 leading-relaxed font-medium">
              Mobile dessert experiences that bring sweet joy directly to your
              location - from festivals to private parties, our truck goes where
              the celebration is!
            </p>

            <motion.div
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-2 h-8 bg-gradient-to-b from-cyan-300 to-transparent rounded-full"
            />
          </motion.div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-4 mb-20"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setActiveCategory(category.id);
                setSelectedEvent(0);
                setIsPlaying(false);
              }}
              className={`px-8 py-4 rounded-full font-bold transition-all duration-300 shadow-lg ${
                activeCategory === category.id
                  ? "bg-gradient-to-r from-cyan-500 to-teal-500 text-white shadow-cyan-500/30"
                  : "bg-white text-gray-700 hover:bg-cyan-50 border border-cyan-200 hover:border-cyan-300"
              }`}
            >
              {category.label}
              <span
                className={`ml-2 text-sm ${
                  activeCategory === category.id
                    ? "text-cyan-100"
                    : "text-gray-500"
                }`}
              >
                ({category.count})
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Main Showcase */}
        <motion.div variants={itemVariants} className="relative mb-24">
          <div className="relative h-[700px] rounded-3xl overflow-hidden shadow-2xl bg-white">
            <AnimatePresence mode="wait" custom={selectedEvent}>
              <motion.div
                key={currentEvent?.id}
                custom={selectedEvent}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.3 },
                }}
                className="absolute inset-0"
              >
                <div className="relative h-full">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />

                  {currentEvent?.video ? (
                    <video
                      ref={videoRef}
                      src={currentEvent.video}
                      className="w-full h-full object-cover"
                      muted={isMuted}
                      loop
                      onPlay={() => setIsPlaying(true)}
                      onPause={() => setIsPlaying(false)}
                    />
                  ) : (
                    <img
                      src={currentEvent?.images[0]}
                      alt={currentEvent?.title}
                      className="w-full h-full object-cover"
                    />
                  )}

                  {/* Video Controls */}
                  {currentEvent?.video && (
                    <div className="absolute top-6 right-6 z-30 flex gap-3">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={togglePlay}
                        className="bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg"
                      >
                        {isPlaying ? (
                          <Pause className="w-5 h-5 text-gray-700" />
                        ) : (
                          <Play className="w-5 h-5 text-gray-700 ml-0.5" />
                        )}
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={toggleMute}
                        className="bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg"
                      >
                        {isMuted ? (
                          <VolumeX className="w-5 h-5 text-gray-700" />
                        ) : (
                          <Volume2 className="w-5 h-5 text-gray-700" />
                        )}
                      </motion.button>
                    </div>
                  )}

                  {/* Gallery Button */}
                  {currentEvent?.images && (
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => openGallery(0)}
                      className="absolute top-6 left-6 z-30 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg"
                    >
                      <ImageIcon className="w-5 h-5 text-gray-700" />
                    </motion.button>
                  )}

                  {/* Event Info Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-10 z-20 text-white">
                    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between">
                      <div className="mb-6 lg:mb-0 flex-1">
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.2 }}
                          className="inline-block bg-gradient-to-r from-cyan-500 to-teal-500 px-6 py-2 rounded-full text-sm font-bold mb-4"
                        >
                          {currentEvent?.category.toUpperCase()}
                        </motion.div>

                        <motion.h2
                          initial={{ x: -30, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 0.1 }}
                          className="text-5xl lg:text-6xl font-black mb-4"
                        >
                          {currentEvent?.title}
                        </motion.h2>

                        <motion.p
                          initial={{ x: -40, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 0.2 }}
                          className="text-xl text-cyan-100 mb-6 max-w-2xl"
                        >
                          {currentEvent?.description}
                        </motion.p>

                        <motion.div
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.3 }}
                          className="flex flex-wrap items-center gap-8 text-cyan-200"
                        >
                          <div className="flex items-center gap-3">
                            <div className="bg-white/20 rounded-full p-2">
                              <Users className="w-5 h-5" />
                            </div>
                            <span className="font-semibold">
                              {currentEvent?.guests} Served
                            </span>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="bg-white/20 rounded-full p-2">
                              <Calendar className="w-5 h-5" />
                            </div>
                            <span className="font-semibold">
                              {currentEvent?.date}
                            </span>
                          </div>
                        </motion.div>
                      </div>

                      {/* Navigation Controls */}
                      <div className="flex items-center gap-4">
                        <motion.button
                          whileHover={{ scale: 1.1, y: -2 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={prevEvent}
                          className="bg-white/90 text-gray-700 rounded-full p-4 shadow-lg hover:bg-white transition-all"
                        >
                          <ChevronLeft className="w-6 h-6" />
                        </motion.button>

                        <div className="text-sm font-bold px-6 py-3 bg-white/90 text-gray-700 rounded-full shadow-lg">
                          {selectedEvent + 1} / {filteredEvents.length}
                        </div>

                        <motion.button
                          whileHover={{ scale: 1.1, y: -2 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={nextEvent}
                          className="bg-white/90 text-gray-700 rounded-full p-4 shadow-lg hover:bg-white transition-all"
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

        {/* Event Gallery Grid - Dynamic Sizing */}
        {currentEvent?.images && (
          <motion.div variants={itemVariants} className="mb-24">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-4xl font-black text-gray-800">
                Event Gallery
              </h3>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => openGallery(0)}
                className="bg-cyan-500 text-white px-6 py-3 rounded-full font-bold hover:bg-cyan-600 transition-colors"
              >
                View All Photos
              </motion.button>
            </div>

            <div className="grid grid-cols-4 grid-rows-4 gap-4 h-96">
              {createImageGrid(currentEvent.images).map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, zIndex: 10 }}
                  onClick={() => openGallery(item.index)}
                  className={`${item.width} ${item.height} cursor-pointer rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all`}
                >
                  <img
                    src={item.src}
                    alt={`Event photo ${item.index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Event Highlights */}
        <motion.div variants={itemVariants} className="mb-24">
          <h3 className="text-4xl font-black text-gray-800 mb-12 text-center">
            Event Highlights
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {currentEvent?.highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 150,
                  damping: 12,
                }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white rounded-3xl p-8 text-center shadow-lg border border-cyan-100 hover:border-cyan-300 transition-all"
              >
                <motion.div
                  initial={{ rotate: -10 }}
                  animate={{ rotate: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  className="text-cyan-500 text-4xl mb-4"
                >
                  🚚
                </motion.div>
                <p className="text-gray-700 font-bold text-lg">{highlight}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Event Grid Thumbnails */}
        <motion.div variants={itemVariants} className="mb-24">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {filteredEvents.map((event, index) => (
              <motion.div
                key={event.id}
                whileHover={{ scale: 1.03, y: -8 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => {
                  setSelectedEvent(index);
                  setIsPlaying(false);
                }}
                className={`relative h-48 rounded-3xl overflow-hidden cursor-pointer transition-all duration-300 shadow-lg ${
                  index === selectedEvent
                    ? "ring-4 ring-cyan-400 shadow-cyan-400/30"
                    : "ring-2 ring-cyan-100 hover:ring-cyan-300"
                }`}
              >
                <img
                  src={event.images[0]}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-cyan-200 text-xs">{event.client}</p>
                </div>
                {event.video && (
                  <div className="absolute top-3 right-3">
                    <div className="bg-white/90 rounded-full p-2">
                      <Play className="w-4 h-4 text-cyan-500" />
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          variants={itemVariants}
          className="text-center bg-white rounded-3xl p-16 shadow-xl border border-cyan-100 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-cyan-100/50 to-transparent"></div>

          <motion.h2
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="text-5xl md:text-6xl font-black text-gray-800 mb-8"
          >
            Ready to Roll with Sweet Success?
          </motion.h2>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto font-medium leading-relaxed"
          >
            Book our mobile dessert truck for your next event! We'll bring the
            sweetness directly to your location with fresh treats and
            unforgettable experiences
          </motion.p>

          <motion.button
            whileHover={{
              scale: 1.05,
              y: -3,
              boxShadow: "0 20px 40px rgba(6, 182, 212, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-black px-12 py-5 rounded-full shadow-xl flex items-center gap-4 mx-auto text-lg hover:shadow-2xl transition-all"
          >
            Book Our Dessert Truck
            <ArrowRight className="w-6 h-6" />
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Full-Screen Gallery Modal */}
      <AnimatePresence>
        {showGallery && currentEvent?.images && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setShowGallery(false)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-4xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setShowGallery(false)}
                className="absolute -top-12 right-0 text-white text-2xl hover:text-cyan-400 transition-colors z-10"
              >
                ✕
              </button>

              {/* Main Image */}
              <div className="relative">
                <img
                  src={currentEvent.images[selectedGalleryImage]}
                  alt={`Gallery image ${selectedGalleryImage + 1}`}
                  className="w-full h-auto max-h-[70vh] object-contain rounded-2xl"
                />

                {/* Navigation */}
                {currentEvent.images.length > 1 && (
                  <>
                    <button
                      onClick={() =>
                        setSelectedGalleryImage(
                          (prev) =>
                            (prev - 1 + currentEvent.images.length) %
                            currentEvent.images.length
                        )
                      }
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full p-3 text-white hover:bg-white/30 transition-colors"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                      onClick={() =>
                        setSelectedGalleryImage(
                          (prev) => (prev + 1) % currentEvent.images.length
                        )
                      }
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full p-3 text-white hover:bg-white/30 transition-colors"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </>
                )}

                {/* Image Counter */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-sm rounded-full px-4 py-2 text-white text-sm">
                  {selectedGalleryImage + 1} / {currentEvent.images.length}
                </div>
              </div>

              {/* Thumbnail Strip */}
              <div className="flex gap-2 mt-4 justify-center overflow-x-auto pb-2">
                {currentEvent.images.map((image, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.1 }}
                    onClick={() => setSelectedGalleryImage(index)}
                    className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                      index === selectedGalleryImage
                        ? "border-cyan-400"
                        : "border-transparent opacity-70 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Events;

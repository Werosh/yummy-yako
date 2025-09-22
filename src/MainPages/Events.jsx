import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
} from "lucide-react";

const EventsBlog = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedPost, setSelectedPost] = useState(null);

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

  const blogPosts = [
    {
      id: 1,
      title: "Making Wedding Dreams Come True on Wheels",
      subtitle: "Sweet Endings for Your Perfect Day",
      excerpt:
        "There's something magical about ending your wedding celebration with a sweet surprise that guests will never forget. Our dessert truck brings that perfect touch of whimsy and indulgence to your special day.",
      content: `Your wedding day deserves every perfect detail, including a sweet finale that matches the joy of your celebration. Our mobile dessert station transforms any wedding venue into a delightful wonderland of treats.

      We've had the honor of serving couples who want something uniquely memorable for their guests. From beachside ceremonies where our truck parked right on the sand, to elegant garden parties where we became part of the scenic backdrop, each wedding tells its own sweet story.

      Our signature wedding services include custom flavor creation that reflects the couple's love story, beautifully decorated serving areas that complement your wedding theme, and late-night treats that keep the celebration going strong. Many couples choose our "Build Your Own Sundae Bar" for an interactive experience that gets guests mingling and laughing together.

      The best part? Your guests can enjoy fresh, artisanal desserts while you focus on what matters most - celebrating your love story.`,
      images: [
        "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1536431311719-398b6704d4cc?w=500&h=300&fit=crop",
        "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=400&h=500&fit=crop",
      ],
      icon: Heart,
      color: "from-rose-400 to-pink-500",
      stats: { events: "50+", guests: "6000+", satisfaction: "100%" },
    },
    {
      id: 2,
      title: "Sweetening the Corporate Experience",
      subtitle: "Team Building Through Shared Treats",
      excerpt:
        "Nothing brings colleagues together quite like unexpected sweetness during the workday. Our corporate catering brings joy and energy to offices, conferences, and company events.",
      content: `Corporate events don't have to be all business and no pleasure. We've discovered that the simple act of sharing delicious desserts can transform workplace dynamics, boost morale, and create lasting memories among team members.

      From tech startup celebrations to Fortune 500 company picnics, our truck has become a favorite addition to corporate events. We've served everything from quick afternoon pick-me-ups in office parking lots to elaborate dessert stations at annual company retreats.

      Our corporate services are designed with busy professionals in mind. Quick service, premium ingredients, and presentation that matches your company's standards. We've even created custom flavors for product launches and branded packaging for special corporate milestones.

      The feedback is always the same: employees love the unexpected treat, productivity gets a sweet boost, and everyone's talking about "that amazing dessert truck" long after the event ends.`,
      images: [
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=500&fit=crop",
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=500&h=300&fit=crop",
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=600&fit=crop",
      ],
      icon: Building,
      color: "from-blue-400 to-cyan-500",
      stats: { events: "80+", guests: "12000+", satisfaction: "98%" },
    },
    {
      id: 3,
      title: "Private Parties Made Extraordinary",
      subtitle: "Celebrating Life's Special Moments",
      excerpt:
        "Birthday parties, anniversaries, graduations - life's milestone moments deserve something special. Our truck brings the party atmosphere and creates instant photo opportunities for your guests.",
      content: `Private celebrations are where we truly shine. There's something about a colorfully decorated dessert truck that instantly elevates any gathering from ordinary to extraordinary.

      We've celebrated everything from intimate backyard birthday parties to grand anniversary celebrations. Each event is unique, but they all share that moment when guests first see our truck - the excitement, the photos, the immediate buzz of anticipation.

      For children's parties, we become part of the entertainment. Kids love choosing their own toppings, watching us create custom sundaes, and of course, the Instagram-worthy photos their parents can't resist taking. Adult celebrations appreciate our gourmet approach - artisanal ice creams, unique flavor combinations, and sophisticated presentation.

      Our private party packages can be customized to match any theme, dietary restriction, or guest count. We've done everything from elegant wine-and-dessert pairings to wild carnival-themed extravaganzas.`,
      images: [
        "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=700&h=500&fit=crop",
        "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=500&h=300&fit=crop",
        "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=600&fit=crop",
      ],
      icon: Gift,
      color: "from-purple-400 to-pink-500",
      stats: { events: "120+", guests: "8500+", satisfaction: "100%" },
    },
    {
      id: 4,
      title: "Festival Favorites and Street Food Magic",
      subtitle: "Where Food Trucks Belong",
      excerpt:
        "Festivals are where food truck culture was born, and we're proud to be part of that vibrant tradition. From music festivals to food truck rallies, we bring our A-game to every street-side adventure.",
      content: `There's nothing quite like the energy of a festival - the music, the crowds, the sense of community and celebration. Food trucks are an integral part of this culture, and we absolutely love being part of these dynamic events.

      Festival service is our bread and butter. We've served thousands of festival-goers across the region, from intimate community gatherings to massive multi-day music festivals. Each event teaches us something new about efficiency, crowd management, and creating memorable experiences even in high-volume situations.

      Our festival menu is designed for variety and speed. We offer everything from quick grab-and-go treats for people rushing between stages, to elaborate sundaes for groups settling in to enjoy the atmosphere. Our signature festival creation is the "Festival Flurry" - a towering sundae that's become an Instagram sensation.

      The festival community has embraced us as family. Regular festival-goers seek us out, remember their favorite orders from previous events, and bring their friends to try "that amazing dessert truck."`,
      images: [
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1574126154517-d1e0d89ef734?w=500&h=300&fit=crop",
        "https://images.unsplash.com/photo-1563379091339-03246963d273?w=400&h=500&fit=crop",
      ],
      icon: PartyPopper,
      color: "from-orange-400 to-red-500",
      stats: { events: "95+", guests: "25000+", satisfaction: "97%" },
    },
    {
      id: 5,
      title: "Building Community One Scoop at a Time",
      subtitle: "Neighborhood Connections and Local Love",
      excerpt:
        "Community events are the heart of what we do. From school fundraisers to neighborhood block parties, we're proud to support the local causes and celebrations that make our community strong.",
      content: `Community events hold a special place in our hearts. These are the gatherings that bring neighbors together, support local causes, and strengthen the bonds that make neighborhoods feel like home.

      We've been part of school fundraisers where every purchase helps support music programs, library improvements, and playground equipment. We've served at charity runs where our proceeds went directly to local food banks. We've been the sweet finale to neighborhood clean-up days and the reward for volunteer appreciation events.

      What makes community events unique is the sense of purpose everyone shares. It's not just about the dessert - it's about supporting something bigger than ourselves. Parents proud to contribute to their children's school, neighbors working together to make their streets better, volunteers celebrating the difference they've made.

      Our community event pricing reflects our commitment to these causes. We offer special rates for fundraisers and often donate a portion of our proceeds back to the organizing cause.`,
      images: [
        "https://images.unsplash.com/photo-1565299585323-38174c5e0952?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?w=500&h=300&fit=crop",
        "https://images.unsplash.com/photo-1548907040-4baa42d10919?w=400&h=500&fit=crop",
      ],
      icon: Home,
      color: "from-green-400 to-teal-500",
      stats: { events: "200+", guests: "15000+", satisfaction: "99%" },
    },
    {
      id: 6,
      title: "Seasonal Celebrations and Holiday Magic",
      subtitle: "Sweet Traditions for Every Season",
      excerpt:
        "Every season brings its own flavors and celebrations. From summer ice cream socials to winter holiday markets, we adapt our offerings to match the magic of each time of year.",
      content: `Seasonal events are where we get to showcase our creativity and connect with the natural rhythm of celebrations throughout the year. Each season brings unique opportunities to create memorable experiences.

      Spring brings Easter egg hunts and Mother's Day celebrations, where we serve fresh, light flavors that complement the season's renewal. Summer is our busiest season - beach parties, graduation celebrations, and endless birthday parties where our cold treats provide perfect relief from the heat.

      Fall introduces our autumn spice flavors and Halloween-themed treats. We love decorating our truck for harvest festivals and serving warm desserts that complement the crisp weather. Winter holidays are magical - from serving hot chocolate and warm cookies at Christmas markets to creating Valentine's Day specials that celebrate love and sweetness.

      Our seasonal menu changes reflect these natural celebrations. Pumpkin spice in fall, peppermint bark in winter, fresh berry flavors in spring, and tropical combinations in summer. Regular customers look forward to these seasonal rotations as much as we enjoy creating them.`,
      images: [
        "https://images.unsplash.com/photo-1571506165871-ee72a35bbc9d?w=800&h=500&fit=crop",
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=500&h=600&fit=crop",
        "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=300&fit=crop",
      ],
      icon: Sparkles,
      color: "from-yellow-400 to-orange-500",
      stats: { events: "150+", guests: "18000+", satisfaction: "98%" },
    },
  ];

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
            Sweet
            <br />
            <span className="bg-gradient-to-r from-cyan-500 to-teal-500 bg-clip-text text-transparent">
              Stories
            </span>
          </motion.h1>

          <motion.div
            variants={itemVariants}
            className="relative max-w-4xl mx-auto"
          >
            <p className="text-xl text-gray-600 leading-relaxed font-medium mb-8">
              Discover the stories behind our mobile dessert adventures. From
              intimate weddings to bustling festivals, every event tells a
              unique tale of sweetness, community, and unforgettable moments.
            </p>

            <motion.div
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-2 h-8 bg-gradient-to-b from-cyan-300 to-transparent rounded-full"
            />
          </motion.div>
        </motion.div>

        {/* Blog Posts Grid */}
        <motion.div variants={containerVariants} className="space-y-16 mb-20">
          {blogPosts.map((post, index) => {
            const IconComponent = post.icon;
            const isEven = index % 2 === 0;
            return (
              <motion.article
                key={post.id}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-cyan-100"
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 ${
                    isEven ? "" : "lg:grid-flow-col-dense"
                  }`}
                >
                  {/* Image Section */}
                  <div
                    className={`relative h-80 lg:h-96 overflow-hidden ${
                      isEven ? "" : "lg:col-start-2"
                    }`}
                  >
                    <img
                      src={post.images[0]}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                    {/* Category Badge */}
                    <div
                      className={`absolute top-6 left-6 px-4 py-2 rounded-full bg-gradient-to-r ${post.color} text-white font-bold text-sm flex items-center gap-2`}
                    >
                      <IconComponent className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Content Section */}
                  <div
                    className={`p-8 lg:p-12 flex flex-col justify-center ${
                      isEven ? "" : "lg:col-start-1"
                    }`}
                  >
                    <h2 className="text-3xl lg:text-4xl font-black text-gray-800 mb-4">
                      {post.title}
                    </h2>

                    <p className="text-lg font-semibold text-cyan-600 mb-6">
                      {post.subtitle}
                    </p>

                    <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                      {post.excerpt}
                    </p>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setSelectedPost(post)}
                      className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-bold py-4 px-8 rounded-2xl hover:shadow-lg transition-all flex items-center justify-center gap-2 self-start"
                    >
                      Read Full Story
                      <ArrowRight className="w-5 h-5" />
                    </motion.button>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        {/* Quick Stats Section */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-24"
        >
          {[
            { label: "Events Served", value: "695+", icon: Calendar },
            { label: "Happy Guests", value: "84,500+", icon: Users },
            { label: "Satisfaction Rate", value: "98.6%", icon: Star },
            { label: "Years Rolling", value: "5+", icon: Coffee },
          ].map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 150,
                }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white rounded-3xl p-8 text-center shadow-lg border border-cyan-100 hover:border-cyan-300 transition-all"
              >
                <div className="text-cyan-500 text-4xl mb-4 flex justify-center">
                  <IconComponent className="w-12 h-12" />
                </div>
                <div className="text-3xl font-black text-gray-800 mb-2">
                  {stat.value}
                </div>
                <p className="text-gray-600 font-semibold">{stat.label}</p>
              </motion.div>
            );
          })}
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
          <a href="tel:+">
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
          </a>
        </motion.div>
      </motion.div>

      {/* Full Post Modal */}
      <AnimatePresence>
        {selectedPost && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 overflow-y-auto"
            onClick={() => setSelectedPost(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto my-8"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header Image */}
              <div className="relative h-80">
                <img
                  src={selectedPost.images[0]}
                  alt={selectedPost.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                <button
                  onClick={() => setSelectedPost(null)}
                  className="absolute top-6 right-6 bg-white/90 rounded-full p-3 text-gray-700 hover:bg-white transition-colors"
                >
                  ✕
                </button>

                <div className="absolute bottom-6 left-6">
                  <div
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${selectedPost.color} text-white font-bold mb-4`}
                  >
                    <selectedPost.icon className="w-4 h-4" />
                  </div>
                  <h1 className="text-4xl font-black text-white mb-2">
                    {selectedPost.title}
                  </h1>
                  <p className="text-xl text-cyan-100 font-semibold">
                    {selectedPost.subtitle}
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="p-12">
                <div className="prose prose-lg max-w-none">
                  {selectedPost.content
                    .split("\n\n")
                    .map((paragraph, index) => (
                      <p
                        key={index}
                        className="text-gray-700 leading-relaxed mb-6"
                      >
                        {paragraph.trim()}
                      </p>
                    ))}
                </div>

                {/* Image Gallery */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-12">
                  {selectedPost.images.map((image, index) => (
                    <div
                      key={index}
                      className="aspect-square rounded-2xl overflow-hidden"
                    >
                      <img
                        src={image}
                        alt={`${selectedPost.title} ${index + 1}`}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-6 mt-12 p-8 bg-gradient-to-br from-cyan-50 to-teal-50 rounded-2xl">
                  <div className="text-center">
                    <div className="text-3xl font-black text-cyan-600 mb-2">
                      {selectedPost.stats.events}
                    </div>
                    <p className="text-gray-600 font-semibold">Events Served</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-black text-cyan-600 mb-2">
                      {selectedPost.stats.guests}
                    </div>
                    <p className="text-gray-600 font-semibold">Guests Served</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-black text-cyan-600 mb-2">
                      {selectedPost.stats.satisfaction}
                    </div>
                    <p className="text-gray-600 font-semibold">Satisfaction</p>
                  </div>
                </div>

                {/* CTA */}
                {/* CTA Section */}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default EventsBlog;

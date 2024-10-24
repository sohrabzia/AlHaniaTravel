import React from 'react';
import { motion } from 'framer-motion';
import { Plane, MapPin, Award, Users, LockKeyholeOpen, ScrollText } from 'lucide-react';
const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const features = [
    {
      icon: <Plane className="w-6 h-6" />,
      title: "Air Tickets",
      description: "Premium flight booking services with access to global airlines and exclusive deals"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Expert Planning",
      description: "Customized travel itineraries crafted by experienced travel consultants"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Excellence",
      description: "Fresh and dedicated service, built on passion for helping you travel hassle-free"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Customer Focus",
      description: "24/7 dedicated support team committed to your travel success"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-sky-950 to-sky-900  overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,165,0,0.1),transparent_50%)]" />
      
      <motion.div 
        className="container mx-auto px-4 md:px-6"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Header Section */}
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-20"
          variants={itemVariants}
        >
         
          
         <div className="text-center mb-16 space-y-4">
                    <div className="flex items-center justify-center gap-2">
                    <LockKeyholeOpen className="w-6 h-6 text-orange-600"/>             
                   <span className="text-teal-500 text-sm font-medium tracking-widest uppercase">
                  
                        Unlock Your Travel Dreams with
                        </span>
                    </div>
              
  
          <h2 className="text-4xl md:text-5xl font-bold mt-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
          Al Hania Travel</h2>



          </div>
          <p className="text-lg text-white mb-8">
            As a leading travel agency in Ajman, UAE, we've been crafting unforgettable 
            journeys for years with passion and expertise.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
  {features.map((feature, index) => (
    <motion.div
      key={index}
      variants={itemVariants}
      whileHover={{ 
        scale: 1.03,
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)"
      }}
      className="relative isolate overflow-hidden rounded-xl p-8 group"
    >
      {/* Background layer with blur and gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-xl"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-sky-950/50 to-transparent"></div>
      </div>
      
      {/* Subtle border glow */}
      <div className="absolute inset-px rounded-xl bg-gradient-to-br from-white/5 to-white/0 -z-10"></div>
      
      {/* Content */}
      <div className="relative z-10">
        <div className="w-14 h-14 bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl flex items-center justify-center mb-6 transform transition-all duration-300 group-hover:scale-110 group-hover:from-teal-100 group-hover:to-teal-200">
          <div className="text-orange-600 group-hover:text-teal-600 transition-colors duration-300">
            {feature.icon}
          </div>
        </div>
        <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent">
          {feature.title}
        </h3>
        <p className="text-gray-100 leading-relaxed">{feature.description}</p>
      </div>
    </motion.div>
  ))}
</div>
      
      
      </motion.div>
    </section>
  );
};

export default About;
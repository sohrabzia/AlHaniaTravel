import React from 'react';
import { motion } from 'framer-motion';
import { Plane, MapPin, Award, Users, ScrollText } from 'lucide-react';

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
    <section id="about" className="py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden relative">
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
          <motion.div
            className="inline-block mb-4 px-4 py-1 rounded-full bg-orange-100 text-orange-600 text-sm font-medium"
            whileHover={{ scale: 1.05 }}
          >
            Welcome to Al Hania Travel
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Unlock Your Travel Dreams with{" "} <br />
            <span className="bg-gradient-to-r from-orange-600 to-teal-600 bg-clip-text text-transparent hover:from-teal-600 hover:to-orange-600 transition-all duration-500">
              Al Hania Travel
            </span>
          </h2>
          
          <p className="text-lg text-gray-600 mb-8">
            As a leading travel agency in Ajman, UAE, we've been crafting unforgettable 
            journeys for years with passion and expertise.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.03,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)"
              }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl flex items-center justify-center mb-6 group-hover:from-teal-100 group-hover:to-teal-200 transition-colors duration-300">
                <div className="text-orange-600 group-hover:text-teal-600 transition-colors duration-300">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Content Box */}
        <motion.div 
          className="bg-white rounded-3xl shadow-xl p-10 md:p-14 max-w-4xl mx-auto relative overflow-hidden"
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {/* Decorative background element */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-100 to-transparent rounded-full -mr-16 -mt-16 opacity-50" />
          
          <div className="relative space-y-8">
            <div className="flex items-start space-x-4">
              <ScrollText className="w-6 h-6 text-orange-500 mt-1 flex-shrink-0" />
              <p className="text-gray-700 text-lg leading-relaxed">
                Our expertise lies in delivering exceptional air ticket services and 
                comprehensive travel solutions tailored to your unique needs.
              </p>
            </div>
            
            <div className="flex items-start space-x-4">
              <Award className="w-6 h-6 text-orange-500 mt-1 flex-shrink-0" />
              <p className="text-gray-700 text-lg leading-relaxed">
                With a relentless pursuit of excellence and customer satisfaction, 
                we've earned a reputation as a trusted partner in the travel industry. 
                Let us guide you in turning your travel aspirations into unforgettable experiences.
              </p>
            </div>

           
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
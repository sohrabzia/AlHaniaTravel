
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plane, Menu, X, PhoneCall, MapPin,TicketsPlane, Clock } from 'lucide-react';
import alhaniaLogo from '../assets/alhaniaLogo.svg';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { id: 'home', label: 'Home', icon: Plane },
    { id: 'about', label: 'About', icon: TicketsPlane },
    { id: 'contact', label: 'Contact', icon: PhoneCall },
  ];
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: 'smooth',
      });
      setIsOpen(false);
    }
  };

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="bg-sky-950/90 sticky top-0 backdrop-blur-md z-50 border-b border-teal-500/20"
    >
      <div className="container mx-auto px-4">
        <nav className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <img src={alhaniaLogo} alt="Alhania Logo" className="h-16" />
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map(({ id, label, icon: Icon }) => (
              <motion.button
                key={id}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 text-white hover:text-orange-600 transition-colors duration-300"
                onClick={() => scrollToSection(id)}
              >
                <Icon className="w-4 h-4" />
                <span className="font-poppins">{label}</span>
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="md:hidden text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </nav>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{ height: isOpen ? 'auto' : 0 }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-4 space-y-4">
            {menuItems.map(({ id, label, icon: Icon }) => (
              <motion.button
                key={id}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-3 w-full px-4 py-2 text-white hover:bg-teal-500/10 rounded-lg transition-colors duration-300"
                onClick={() => scrollToSection(id)}
              >
                <Icon className="w-5 h-5" />
                <span className="font-poppins">{label}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Animated Gradient Line */}
      <motion.div 
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        className="h-0.5 bg-gradient-to-r from-orange-600 via-teal-500 to-orange-600"
      />
    </motion.header>
  );
};

export default Header;
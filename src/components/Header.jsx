import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Plane, Menu, X, PhoneCall, TicketsPlane } from 'lucide-react';
import alhaniaLogo from '../assets/alhaniaLogo.svg';
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { id: 'home', label: 'Home', icon: Plane },
    { id: 'about', label: 'About', icon: TicketsPlane },
    { id: 'contact', label: 'Contact', icon: PhoneCall },
  ];

  const scrollToSection = (id) => {
    // Close menu first
    setIsOpen(false);

    // Small delay to allow menu close animation to complete
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        const headerHeight = window.innerWidth >= 768 ? 80 : 64; // Different offset for mobile
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = window.scrollY + elementPosition - headerHeight;

        // Additional mobile offset to account for the sticky header
        const mobileOffset = window.innerWidth < 768 ? 16 : 0; // 16px is top-4 in Tailwind

        window.scrollTo({
          top: offsetPosition - mobileOffset,
          behavior: 'smooth'
        });
      } else {
        console.warn(`Element with id "${id}" not found`);
      }
    }, 100); // 100ms delay for menu close animation
  };

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-4 z-50 mx-4"
    >
      <div className="rounded-xl bg-sky-950/90 backdrop-blur-lg shadow-lg border border-sky-900/50">
        <div className="container mx-auto px-4">
          <nav className="flex justify-between md:justify-center items-center h-16 relative">
            {/* Logo - Always visible on mobile */}
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex md:hidden items-center"
            >
              <img 
src={alhaniaLogo} 
                alt="Logo" 
                className={`h-12 transition-all duration-300 ${
                  isScrolled ? 'opacity-100' : 'opacity-90'
                }`}
              />
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center justify-center space-x-12">
              {menuItems.map(({ id, label, icon: Icon }) => (
                <motion.button
                  key={id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group flex items-center space-x-2 text-white/90 hover:text-orange-600 transition-all duration-300"
                  onClick={() => scrollToSection(id)}
                >
                  <div className="relative p-2 rounded-lg bg-gradient-to-b from-sky-900/50 to-transparent group-hover:from-orange-600/20 transition-all duration-300">
                    <Icon className="w-4 h-4" />
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <span className="font-medium tracking-wide">{label}</span>
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
            animate={{ 
              height: isOpen ? 'auto' : 0,
              opacity: isOpen ? 1 : 0
            }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden"
          >
            <div className="py-4 space-y-2">
              {menuItems.map(({ id, label, icon: Icon }) => (
                <motion.button
                  key={id}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-3 w-full px-4 py-2 text-white/90 hover:bg-gradient-to-r hover:from-orange-600/20 hover:to-transparent rounded-lg transition-all duration-300"
                  onClick={() => scrollToSection(id)}
                >
                  <Icon className="w-5 h-5" />
                  <span>{label}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Glossy Effect Overlay */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />
      </div>
    </motion.header>
  );
};

export default Header;
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plane, Menu, X, PhoneCall, TicketsPlane } from 'lucide-react';
import alhaniaLogo from '../assets/alhaniaLogo.svg';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const menuItems = [
    { id: 'home', label: 'Home', icon: Plane },
    { id: 'about', label: 'About', icon: TicketsPlane },
    { id: 'contact', label: 'Contact', icon: PhoneCall },
  ];

  const scrollToSection = (id) => {
    setIsOpen(false);
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        const headerHeight = window.innerWidth >= 768 ? 88 : 72;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = window.scrollY + elementPosition - headerHeight;
        const mobileOffset = window.innerWidth < 768 ? 16 : 0;

        window.scrollTo({
          top: offsetPosition - mobileOffset,
          behavior: 'smooth'
        });
      }
    }, 100);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 font-poppins transition-all duration-500 ${
          isScrolled ? 'py-2' : 'py-4'
        }`}
      >
        <div className="mx-4">
          <div className={`relative rounded-2xl transition-all duration-500 ${
            isScrolled || isOpen
              ? 'bg-sky-950/10 backdrop-blur-lg shadow-lg' 
              : 'bg-transparent'
          }`}>
            <div className="container mx-auto px-4">
              <nav className="flex items-center justify-between h-16 relative">
                {/* Logo */}
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center"
                >
                  {(isScrolled || isOpen) && <img 
                    src={alhaniaLogo} 
                    className="h-12 w-auto"
                  />}
                </motion.div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                  {menuItems.map(({ id, label, icon: Icon }) => (
                    <motion.button
                      key={id}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="group relative px-4 py-2"
                      onClick={() => scrollToSection(id)}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 to-teal-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300" />
                      <div className="relative flex items-center space-x-2">
                        <div className="p-2 rounded-lg bg-sky-950/30 group-hover:bg-sky-950/50 transition-colors duration-300">
                          <Icon className="w-4 h-4 text-orange-600 group-hover:text-teal-500 transition-colors duration-300" />
                        </div>
                        <span className="font-medium tracking-wide text-white/90 group-hover:text-white transition-colors duration-300">
                          {label}
                        </span>
                      </div>
                    </motion.button>
                  ))}
                </div>

                {/* Mobile Menu Button */}
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  className="md:hidden relative z-50 p-2 text-white"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <AnimatePresence mode="wait">
                    {isOpen ? (
                      <motion.div
                        key="close"
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <X className="w-6 h-6" />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="menu"
                        initial={{ rotate: 90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: -90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Menu className="w-6 h-6" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>
              </nav>
            </div>

            {/* Gradient Border Effect */}
            <div className="absolute inset-0 rounded-2xl p-[1px] pointer-events-none">
              <div className={`absolute inset-0 rounded-2xl transition-opacity duration-500 ${
                isScrolled || isOpen ? 'opacity-100' : 'opacity-0'
              }`}>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-600/20 via-teal-500/20 to-orange-600/20" />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/10 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-sky-950/90 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />

            {/* Menu Content */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="absolute right-0 top-0 bottom-0 w-full bg-sky-950/95 backdrop-blur-lg shadow-xl pt-24 px-4"
            >
              <div className="space-y-2">
                {menuItems.map(({ id, label, icon: Icon }) => (
                  <motion.button
                    key={id}
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center space-x-3 w-full px-4 py-3 text-white/90 hover:text-white rounded-xl hover:bg-gradient-to-r from-orange-600/20 via-teal-500/10 to-transparent transition-all duration-300"
                    onClick={() => scrollToSection(id)}
                  >
                    <div className="p-2 rounded-lg bg-sky-950/50">
                      <Icon className="w-5 h-5 text-orange-600" />
                    </div>
                    <span className="font-medium">{label}</span>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
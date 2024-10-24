import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Plane, Calendar, MapPin, ArrowRight, ArrowLeftRight } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import * as THREE from 'three';
import alhaniaLogo from '../assets/alhaniaLogo.svg';
const Hero = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        from: '',
        to: '',
        departDate: '',
        returnDate: '',
        tripType: 'oneWay',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const message = `New booking request:%0A
        Full Name: ${formData.fullName}%0A
        From: ${formData.from}%0A
        To: ${formData.to}%0A
        Departure: ${formData.departDate}%0A
        ${formData.tripType === 'roundTrip' ? 'Return: ' + formData.returnDate : ''}%0A
        Trip Type: ${formData.tripType}`;
        const whatsappUrl = `https://wa.me/+971551341387?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    useEffect(() => {
        const container = document.getElementById('globe-container');
        const renderer = new THREE.WebGLRenderer({ 
            alpha: true,
            antialias: true 
        });
        
        // Set size to match container
        renderer.setSize(window.innerWidth, 500); // Fixed height for the globe section
        container.appendChild(renderer.domElement);
        renderer.setClearColor(0x000000, 0); // Transparent background

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / 500, 0.1, 1000);

        // Move camera position for better view
        camera.position.z = 250;
        // Create globe
        const geometry = new THREE.SphereGeometry(150, 32, 32);
        const material = new THREE.MeshBasicMaterial({
            transparent: true,
            opacity: 0.8,
        });
        const globe = new THREE.Mesh(geometry, material);
        
        // Position globe slightly to the right and rotate it
        globe.position.set(0, 0, 0);
        globe.rotation.x = 0;
        scene.add(globe);

        // Load texture
        const textureLoader = new THREE.TextureLoader();
        textureLoader.load(
            'https://i.ibb.co/gZRRfzN/globe-map.png',
            (texture) => {
                texture.anisotropy = renderer.capabilities.getMaxAnisotropy();
                texture.generateMipmaps = false;
                texture.minFilter = THREE.LinearFilter;
                texture.magFilter = THREE.LinearFilter;
                globe.material.map = texture;
                globe.material.needsUpdate = true;
            }
        );

        // Handle window resize
        const handleResize = () => {
            renderer.setSize(window.innerWidth, 500);
            camera.aspect = window.innerWidth / 500;
            camera.updateProjectionMatrix();
        };
        window.addEventListener('resize', handleResize);

        // Animation loop
        function animate() {
            requestAnimationFrame(animate);
            globe.rotation.y += 0.002;
            renderer.render(scene, camera);
        }
        animate();

        // Cleanup
        return () => {
            container.removeChild(renderer.domElement);
            window.removeEventListener('resize', handleResize);
            renderer.dispose();
        };
    }, []);

    const formContainerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    const titleVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    return (
        <section id="home" className="relative bg-gradient-to-b from-sky-950 to-sky-900 text-white">
            {/* Globe Container */}
            <div id="globe-container" className="absolute top-0 left-0 w-full h-[500px] overflow-hidden opacity-70" />
            
            {/* Content Container */}
            <div className="relative pt-20 pb-16 px-4">
                <div className="container mx-auto">
            
            <img src={alhaniaLogo} alt="Alhania Logo" className="h-28 mb-10 mx-auto" />
      
          
                    <motion.div 
                        className="text-center mb-12 space-y-4 relative z-10"
                        initial="hidden"
                        animate="visible"
                        variants={titleVariants}
                    >  <motion.div
                    className="inline-block mb-4 px-4 py-1 rounded-full bg-orange-100 text-orange-600 text-sm font-medium"
                    whileHover={{ scale: 1.05 }}
                  >
                    Welcome to Al Hania Travel
                  </motion.div>
                    
                        <motion.p 
                            className="text-xl md:text-2xl text-gray-300"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            Book with <span className="text-orange-500 font-bold">Al Hania Travel</span> for 
                            <span className="text-teal-500"> hassle-free</span> changes and cancellations
                        </motion.p>
                    </motion.div>

                    <motion.div
                        variants={formContainerVariants}
                        initial="hidden"
                        animate="visible"
                        className="max-w-4xl mx-auto relative z-10"
                    >
                        <div className="backdrop-blur-lg bg-white/10 rounded-xl shadow-2xl p-8 border border-white/20">
                            <div className="flex items-center justify-center gap-2 mb-6">
                                <Plane className="w-6 h-6 text-orange-500" />
                                <p className="text-lg">Quick Inquiry Form</p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <motion.div 
                                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.3 }}
                                >
                                    <div className="relative">
                                        <input
                                            type="text"
                                            id="fullName"
                                            name="fullName"
                                            value={formData.fullName}
                                            onChange={handleChange}
                                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all duration-300"
                                            placeholder="Full Name"
                                            required
                                        />
                                    </div>

                                    <div className="flex gap-4">
                                        <motion.label 
                                            className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg cursor-pointer transition-all duration-300 ${formData.tripType === 'oneWay' ? 'bg-orange-600' : 'bg-white/5'}`}
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            <input
                                                type="radio"
                                                name="tripType"
                                                value="oneWay"
                                                checked={formData.tripType === 'oneWay'}
                                                onChange={handleChange}
                                                className="hidden"
                                            />
                                            <ArrowRight className="w-4 h-4" />
                                            One Way
                                        </motion.label>

                                        <motion.label 
                                            className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg cursor-pointer transition-all duration-300 ${formData.tripType === 'roundTrip' ? 'bg-orange-600' : 'bg-white/5'}`}
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            <input
                                                type="radio"
                                                name="tripType"
                                                value="roundTrip"
                                                checked={formData.tripType === 'roundTrip'}
                                                onChange={handleChange}
                                                className="hidden"
                                            />
                                            <ArrowLeftRight className="w-4 h-4" />
                                            Round Trip
                                        </motion.label>
                                    </div>
                                </motion.div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="relative">
                                        <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                        <input
                                            type="text"
                                            name="from"
                                            value={formData.from}
                                            onChange={handleChange}
                                            className="w-full bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all duration-300"
                                            placeholder="From"
                                            required
                                        />
                                    </div>

                                    <div className="relative">
                                        <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                        <input
                                            type="text"
                                            name="to"
                                            value={formData.to}
                                            onChange={handleChange}
                                            className="w-full bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all duration-300"
                                            placeholder="To"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
    <div className="relative w-full">
        <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-teal-500 transition-colors duration-300" />
        <input
            type="date"
            name="departDate"
            value={formData.departDate}
            onChange={handleChange}
            className="w-full min-w-[100%] bg-white/5 border border-white/20 rounded-xl pl-10 pr-4 py-3.5 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all duration-300 [&::-webkit-calendar-picker-indicator]:filter [&::-webkit-calendar-picker-indicator]:invert appearance-none"
            required
        />
    </div>

    {formData.tripType === 'roundTrip' && (
        <div className="relative w-full">
            <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-teal-500 transition-colors duration-300" />
            <input
                type="date"
                name="returnDate"
                value={formData.returnDate}
                onChange={handleChange}
                className="w-full min-w-[100%] bg-white/5 border border-white/20 rounded-xl pl-10 pr-4 py-3.5 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all duration-300 [&::-webkit-calendar-picker-indicator]:filter [&::-webkit-calendar-picker-indicator]:invert appearance-none"
                required
            />
        </div>
    )}
</div>

                                <motion.button
                                    type="submit"
                                    className="mx-auto bg-gradient-to-r from-orange-600 to-orange-500 text-white font-bold py-2 px-4 rounded-lg shadow-lg hover:from-teal-500 hover:to-teal-400 transition-all duration-300 flex items-center justify-center gap-2"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <FontAwesomeIcon icon={faWhatsapp} className="text-lg" />
                                    Send Inquiry via WhatsApp
                                </motion.button>
                            </form>

                            <motion.p 
                                className="text-center mt-6 text-sm text-gray-300"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                            >
                                Direct Contact: <a href="https://wa.me/+971551341387" className="text-teal-500 hover:text-teal-400">+971 55 134 1387</a>
                            </motion.p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
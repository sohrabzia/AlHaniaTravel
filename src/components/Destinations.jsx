import React from 'react';
import { motion } from 'framer-motion';

const Destinations = () => {
    const destinations = [
        {
            name: "Dubai",
            image: "https://images.unsplash.com/flagged/photo-1559717865-a99cac1c95d8?q=80&w=3200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            description: "Experience luxury in the heart of UAE"
        },
        {
            name: "Maldives",
            image: "https://images.unsplash.com/photo-1643856555886-76dca68e5322?q=80&w=3350&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            description: "Paradise on Earth with crystal clear waters"
        },
        {
            name: "Mumbai",
            image: "https://images.unsplash.com/photo-1580063952955-9319880b5f74?q=80&w=3432&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            description: "The city that never sleeps"
        },
        {
            name: "Islamabad",
            image: "https://images.unsplash.com/photo-1640774328301-cb95cdc3a8d6?q=80&w=3364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            description: "The green capital of Pakistan"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const cardVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 12
            }
        }
    };

    return (
        <section id="destinations" className="py-20 bg-gray-50">
            <motion.div 
                className="container mx-auto px-4 md:px-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={containerVariants}
            >
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <motion.span 
                        className="text-blue-600 text-sm font-semibold tracking-wider uppercase"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        Explore The World
                    </motion.span>
                    <motion.h2 
                        className="text-4xl md:text-5xl font-bold text-gray-900 mt-2"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        Popular Destinations
                    </motion.h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {destinations.map((destination, index) => (
                        <motion.div
                            key={destination.name}
                            variants={cardVariants}
                            whileHover={{ y: -10 }}
                            className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer"
                        >
                            <motion.div 
                                className="h-64 w-full overflow-hidden"
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.3 }}
                            >
                                <img 
                                    src={destination.image} 
                                    alt={destination.name}
                                    className="w-full h-full object-cover transition-transform duration-300"
                                />
                            </motion.div>
                            
                            <motion.div 
                                className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-6 flex flex-col justify-end"
                                initial={{ opacity: 0.8 }}
                                whileHover={{ opacity: 1 }}
                            >
                                <motion.h3 
                                    className="text-white text-2xl font-bold mb-2"
                                    initial={{ y: 20, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.1 * index }}
                                >
                                    {destination.name}
                                </motion.h3>
                                
                                <motion.p
                                    className="text-gray-200 text-sm opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
                                >
                                    {destination.description}
                                </motion.p>
                                
                             
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Destinations;
import React from 'react';
import { Plane, MapPin, ArrowRight } from 'lucide-react';
import dxbImage from '../assets/places/dxb.jpg'; // Importing images
import malImage from '../assets/places/mal.avif';
import mumImage from '../assets/places/mum.jpeg';
import isbImage from '../assets/places/isb.webp';

const Destinations = () => {
    const destinations = [
        {
            name: "Dubai",
            image: dxbImage, // Using imported images
            description: "Experience luxury in the heart of UAE"
        },
        {
            name: "Maldives",
            image: malImage,
            description: "Paradise on Earth with crystal clear waters"
        },
        {
            name: "Mumbai",
            image: mumImage,
            description: "The city that never sleeps"
        },
        {
            name: "Islamabad",
            image: isbImage,
            description: "The green capital of Pakistan"
        }
    ];


    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3
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
                damping: 15
            }
        }
    };

    return (
        <section className="py-20 bg-gradient-to-b from-sky-950 to-sky-900">
            <div 
                className="container mx-auto px-4 md:px-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={containerVariants}
            >
                <div className="text-center mb-16 space-y-4">
                    <div className="flex items-center justify-center gap-2">
                        <Plane className="w-6 h-6 text-orange-600" />
                        <span className="text-teal-500 text-sm font-medium tracking-widest uppercase">
                            Discover New Horizons
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold mt-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">Trending Destinations</h2>


                
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Explore our handpicked destinations that combine luxury, adventure, and unforgettable experiences
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {destinations.map((destination, index) => (
                        <div
                            key={destination.name}
                            className="group relative bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/10 hover:border-orange-600/50 transition-all duration-500"
                        >
                            <div className="h-72 w-full overflow-hidden">
                                <img 
                                    src={destination.image} 
                                    alt={destination.name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            </div>
                            
                            <div className="p-6 space-y-4">
                                <div className="flex justify-between items-start">
                                    <h3 className="text-2xl font-bold text-white font-poppins">
                                        {destination.name}
                                    </h3>
                                    <MapPin className="w-5 h-5 text-teal-500" />
                                </div>
                                
                                <p className="text-gray-300 text-sm">
                                    {destination.description}
                                </p>
                                
                                
                                
                            
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Destinations;


  

    import React from 'react';
import { Plane, MapPin, ArrowRight } from 'lucide-react';

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
        <section className="py-24 bg-gradient-to-b from-sky-950 via-sky-950/95 to-sky-950/90">
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
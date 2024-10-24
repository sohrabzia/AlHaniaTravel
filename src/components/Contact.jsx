import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { PhoneCall } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const message = `New contact request:%0A
        Name: ${formData.name}%0A
        Email: ${formData.email}%0A
        Message: ${formData.message}`;
        const whatsappUrl = `https://wa.me/+971551341387?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.6,
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100
            }
        }
    };

    return (
        <section id="contact" className="py-20 bg-gradient-to-b from-sky-950 to-sky-900 text-white relative overflow-hidden">
            {/* Background Animation */}
            <motion.div 
                className="absolute inset-0 opacity-10"
                animate={{ 
                    backgroundPosition: ["0% 0%", "100% 100%"],
                }}
                transition={{ 
                    duration: 20,
                    repeat: Infinity,
                    repeatType: "reverse"
                }}
                style={{
                    backgroundImage: "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"
                }}
            />

            <motion.div 
                className="container mx-auto px-6 relative z-1"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={containerVariants}
            >
                <motion.div 
                    className="text-center mb-16"
                    variants={itemVariants}
                >
                   

                        <div className="flex items-center justify-center gap-2">
                    <PhoneCall className="w-6 h-6 text-orange-600"/>             
                   <span className="text-teal-500 text-sm font-medium tracking-widest uppercase">
                  
                   Contact Us                        </span>
                    </div>


                    <h2 className="text-4xl md:text-5xl font-bold mt-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">Get in Touch</h2>
                </motion.div>

                <div className="flex flex-col md:flex-row justify-between items-start gap-12">
                    <motion.div 
                        className="w-full md:w-1/2"
                        variants={itemVariants}
                    >
                        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-xl">
                            <h3 className="text-2xl font-bold mb-6">Location</h3>
                            <motion.div 
                                className="overflow-hidden rounded-xl"
                                whileHover={{ scale: 1.02 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <iframe 
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3946.253334471656!2d55.43682347564599!3d25.41441512286783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5dff8a658f5b%3A0x594835fba3e1c615!2sAl%20Hania%20travel!5e1!3m2!1sen!2skw!4v1729412916984!5m2!1sen!2skw" 
                                    width="100%" 
                                    height="300" 
                                    style={{ border: 0 }} 
                                    allowFullScreen 
                                    loading="lazy" 
                                    referrerPolicy="no-referrer-when-downgrade" 
                                    className="w-full"
                                ></iframe>
                            </motion.div>
                            
                            <motion.div 
                                className="mt-6 p-4 "
                                whileHover={{ scale: 1.01 }}
                            >
                                <p className="text-lg flex items-center gap-2 mb-2">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12,2C7.589,2,4,5.589,4,9.995C3.971,16.44,11.696,21.784,12,22c0,0,8.029-5.56,8-12C20,5.589,16.411,2,12,2z M12,14 c-2.21,0-4-1.79-4-4s1.79-4,4-4s4,1.79,4,4S14.21,14,12,14z"/>
                                    </svg>
                                    Omar Bin Khattab Street, Ajman, UAE
                                </p>
                                
                                <motion.a 
                                    href="https://wa.me/+971551341387" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-lg font-semibold hover:text-green-400 transition-colors"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-3.825 3.113-6.937 6.937-6.937 1.856.001 3.598.723 4.907 2.034 1.31 1.311 2.031 3.054 2.03 4.908-.001 3.825-3.113 6.938-6.937 6.938z"/>
                                    </svg>
                                    +971551341387
                                </motion.a>
                            </motion.div>
                        </div>
                    </motion.div>

                    <motion.div 
                        className="w-full md:w-1/2"
                        variants={itemVariants}
                    >
                        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-xl">
                            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <motion.div
                                    whileHover={{ scale: 1.01 }}
                                    className="space-y-4"
                                >
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Your Name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 placeholder-white/50"
                                        required
                                    />
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Your Email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 placeholder-white/50"
                                        required
                                    />
                                    <textarea
                                        name="message"
                                        placeholder="Your Message"
                                        rows="4"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 placeholder-white/50"
                                        required
                                    ></textarea>
                                </motion.div>

                                <motion.button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-orange-600 to-orange-500 text-white font-bold py-3 px-6 rounded-lg hover:from-orange-500 hover:to-orange-400 transition duration-300 flex items-center justify-center gap-2 shadow-lg"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                     <FontAwesomeIcon icon={faWhatsapp} className="text-xl" />
                                    Send Message
                                </motion.button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default Contact;
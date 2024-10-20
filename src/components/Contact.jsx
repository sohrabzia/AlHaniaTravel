import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

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

    return (
        <section id="contact" className="py-20 bg-sky-950">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center text-white mb-8">Contact</h2>
                <div className="flex flex-col md:flex-row justify-between items-start">
                    <div className="w-full md:w-1/2 text-left">
                    <h3 className="text-xl font-bold text-white mt-4">Location</h3>
                        <p className="text-lg text-gray-200">Omar Bin Khattab Street, Ajman, UAE</p>
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3946.253334471656!2d55.43682347564599!3d25.41441512286783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5dff8a658f5b%3A0x594835fba3e1c615!2sAl%20Hania%20travel!5e1!3m2!1sen!2skw!4v1729412916984!5m2!1sen!2skw" 
                            width="100%" 
                            height="350" 
                            style={{ border: 0 }} 
                            allowFullScreen 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade" 
                            className="mt-2"
                        ></iframe>
                    </div>
                    <div className="w-full md:w-1/2 mt-8 md:mt-0">
                        <div className="max-w-md mx-auto">
                        <h3 className="text-xl font-bold text-white mt-4 mb-3">Send us a message!</h3>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    required
                                />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Your Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    required
                                />
                                <textarea
                                    name="message"
                                    placeholder="Your Message"
                                    rows="4"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    required
                                ></textarea>
                                <button
                                    type="submit"
                                    className="w-full bg-orange-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-teal-500 transition duration-300 flex items-center justify-center"
                                >
                                    <FontAwesomeIcon icon={faWhatsapp} className="mr-2" />
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;

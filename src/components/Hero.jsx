// src/components/Hero.jsx
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import * as THREE from 'three';

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
        const container = document.getElementById('canvas-container');
        const renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        container.appendChild(renderer.domElement);

        // Set background color
        renderer.setClearColor(0x0092f49); // Set the canvas background color

        const scene = new THREE.Scene();

        // Configuration object with camera settings
        const config = {
            globe: {
                radius: 250,
                rotationSpeed: 0.005,
                textureUrl: 'https://i.ibb.co/gZRRfzN/globe-map.png', // Updated image URL
                width: window.innerWidth,
                height: window.innerHeight,
            },
            camera: {
                fov: 75, // Field of view
                aspect: window.innerWidth / window.innerHeight, // Aspect ratio
                near: 0.1, // Near clipping plane
                far: 1000, // Far clipping plane
                position: {
                    x: 0,
                    y: 0,
                    z: 600, // Camera distance from the globe
                },
            },
        };

        // Create the camera using settings from config
        const camera = new THREE.PerspectiveCamera(
            config.camera.fov,
            config.camera.aspect,
            config.camera.near,
            config.camera.far
        );

        // Set the initial camera position from the config
        camera.position.set(config.camera.position.x + 200, config.camera.position.y, config.camera.position.z); // {{ edit_1 }}

        // Create sphere geometry and material
        const geometry = new THREE.SphereGeometry(config.globe.radius, 32, 16);
        const material = new THREE.MeshBasicMaterial({
            transparent: true,
            opacity: 0.99,
        });
        const globe = new THREE.Mesh(geometry, material);
        globe.position.set(200, 0, 0); // {{ edit_2 }} - Move the globe to the right
        scene.add(globe);

        // Load texture
        const textureLoader = new THREE.TextureLoader();
        let texture = null;

        textureLoader.load(
            config.globe.textureUrl,
            tex => {
                texture = tex;

                // Apply anisotropy for sharper textures when viewed from an angle
                const maxAnisotropy = renderer.capabilities.getMaxAnisotropy();
                texture.anisotropy = maxAnisotropy;

                // Disable mipmaps for sharper look at the cost of performance
                texture.generateMipmaps = false;
                texture.minFilter = THREE.LinearFilter;
                texture.magFilter = THREE.LinearFilter;

                globe.material.map = texture;
                globe.material.needsUpdate = true;
            },
            undefined,
            error => {
                console.error('An error has occurred:', error);
            }
        );

        // Resize event listener
        function onWindowResize() {
            const width = window.innerWidth;
            const height = window.innerHeight;

            // Update renderer size
            renderer.setSize(width, height);

            // Update camera settings on resize
            camera.aspect = width / height;
            camera.updateProjectionMatrix();

            // Update config dimensions
            config.globe.width = width;
            config.globe.height = height;
        }
        window.addEventListener('resize', onWindowResize);

        // Animation loop
        function animate() {
            requestAnimationFrame(animate);
            if (texture) {
                globe.rotation.y += config.globe.rotationSpeed; // Rotate the globe using config
            }
            renderer.render(scene, camera);
        }

        animate();

        // Cleanup on component unmount
        return () => {
            container.removeChild(renderer.domElement);
            window.removeEventListener('resize', onWindowResize);
            renderer.dispose();
        };
    }, []);

    return (
        <section id="home" className="bg-sky-950 text-white py-20 relative">
            <div id="canvas-container" className="absolute top-[-50px] md:top-[-100px] inset-0 z-0 h- overflow-hidden" /> 
            <br />
            <br />
   
            <div className="container mx-auto px-6 relative z-1">
                <h1 className="text-5xl font-bold mb-4 text-center">Your Gateway to the World</h1>
                <p className="text-xl mb-8 text-center">Book your flight with Al Hania Travel</p>
                <div className="max-w-4xl mx-auto bg-sky-950/50 rounded-lg p-6 shadow-lg backdrop-blur-md bg-opacity-10 border-2 border-sky-900">
                    <p className="text-white mb-4 text-center">Your inquiry will be sent to WhatsApp, and our agent will respond shortly.</p>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="fullName" className="block text-white mb-2">Full Name</label>
                            <input type="text" id="fullName" name="fullName" placeholder="Enter your full name" value={formData.fullName} onChange={handleChange} className="w-full px-4 py-2 rounded-lg border text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400" required />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="from" className="block text-white mb-2">From</label>
                                <input type="text" id="from" name="from" placeholder="Departure City" value={formData.from} onChange={handleChange} className="w-full px-4 py-2 rounded-lg border text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400" required />
                            </div>
                            <div>
                                <label htmlFor="to" className="block text-white mb-2">To</label>
                                <input type="text" id="to" name="to" placeholder="Destination City" value={formData.to} onChange={handleChange} className="w-full px-4 py-2 rounded-lg border text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400" required />
                            </div>
                        </div>
                        <div className="flex space-x-4 text-white">
                            <label className="flex items-center">
                                <input type="radio" name="tripType" value="oneWay" checked={formData.tripType === 'oneWay'} onChange={handleChange} className="mr-2" />
                                One Way
                            </label>
                            <label className="flex items-center">
                                <input type="radio" name="tripType" value="roundTrip" checked={formData.tripType === 'roundTrip'} onChange={handleChange} className="mr-2" />
                                Round Trip
                            </label>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="departDate" className="block text-white mb-2">Departure Date</label>
                                <input type="date" id="departDate" name="departDate" value={formData.departDate} onChange={handleChange} className="w-full px-4 py-2 rounded-lg border text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400" required />
                            </div>
                            {formData.tripType === 'roundTrip' && (
                                <div>
                                    <label htmlFor="returnDate" className="block text-white mb-2">Return Date</label>
                                    <input type="date" id="returnDate" name="returnDate" value={formData.returnDate} onChange={handleChange} className="w-full px-4 py-2 rounded-lg border text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400" required />
                                </div>
                            )}
                        </div>
                        <div className="flex justify-center">
                            <button type="submit" className="w-1/2 bg-orange-600 text-white font-bold mt-4 py-3 px-4 rounded-lg hover:bg-teal-500 transition duration-300">
                            <FontAwesomeIcon icon={faWhatsapp} className="mr-2" /> Send Inquiry
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Hero;

// src/components/Header.jsx
import React from 'react';
import alhaniaLogo from '../assets/alhaniaLogo.svg';

const Header = () => {
    return (
        <header class="bg-sky-950 z-10 sticky top-0 backdrop-blur-md bg-opacity-80">
        <nav class="container mx-auto px-6 py-3 flex justify-between items-center">
            <div class="text-2xl font-bold text-orange-600">
            <img src={alhaniaLogo} alt="Alhania Logo" class="h-20" /> 

            </div>
            <div class=" md:flex space-x-4">
                <a href="#home" class="text-white hover:text-orange-600">Home</a>
                <a href="#about" class="text-white hover:text-orange-600">About</a>
                <a href="#contact" class="text-white hover:text-orange-600">Contact</a>
            </div>
        </nav>
    </header>

    );
};

export default Header;

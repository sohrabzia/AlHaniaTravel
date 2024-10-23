// src/components/Header.jsx
import React from 'react';
import alhaniaLogo from '../assets/alhaniaLogo.svg';

const Header = () => {
    return (
        <header className="bg-sky-950 z-10 sticky top-0 backdrop-blur-md bg-opacity-80">
        <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
            <div className="text-2xl font-bold text-orange-600">
            <img src={alhaniaLogo} alt="Alhania Logo" className="h-20" /> 

            </div>
            <div className=" md:flex space-x-4">
                <a href="#home" className="text-white hover:text-orange-600" onClick={(e) => {
                    e.preventDefault();
                    window.scrollTo({
                        top: document.getElementById('home').offsetTop,
                        behavior: 'smooth',
                    });
                }}>Home</a>
                <a href="#about" className="text-white hover:text-orange-600" onClick={(e) => {
                    e.preventDefault();
                    window.scrollTo({
                        top: document.getElementById('about').offsetTop,
                        behavior: 'smooth',
                    });
                }}>About</a>
                <a href="#contact" className="text-white hover:text-orange-600" onClick={(e) => {
                    e.preventDefault();
                    window.scrollTo({
                        top: document.getElementById('contact').offsetTop,
                        behavior: 'smooth',
                    });
                }}>Contact</a>
            </div>
        </nav>
    </header>

    );
};

export default Header;

// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-sky-900 text-white p-4 text-center">
            <p>&copy; {new Date().getFullYear()} Al Hania Travel. All rights reserved.</p>
        </footer>
    );
};

export default Footer;

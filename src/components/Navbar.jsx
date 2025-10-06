import React from "react";
import { Link } from 'react-router-dom';
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';
import { logoSvg } from '../assets';

export default function Navbar({ darkMode, toggleDarkMode, resetToSystemTheme }) {
    return (
        <header className="sticky top-0 bg-background shadow-md z-50">
            <div className='container mx-auto px-4 py-4 flex justify-between items-center'>
                {/* Logo and Name */}
                <div className="flex items-center">
                    <img src={logoSvg} alt="Logo" className="h-8" />
                    <h1 className="hidden md:block text-2xl font-outfit font-bold ml-4">Abhi Ramachandran</h1>
                </div>

                {/* Navigation Links - moved inside the flex container */}
                <nav className="hidden md:flex space-x-6">
                    <Link to="/about" className="text-primary hover:text-secondary transition-colors font-geist-mono">About</Link>
                    <Link to="/projects" className="text-primary hover:text-secondary transition-colors font-geist-mono">Projects</Link>
                    <Link to="/work" className="text-primary hover:text-secondary transition-colors font-geist-mono">Work</Link>
                    <Link to="/contact" className="text-primary hover:text-secondary transition-colors font-geist-mono">Contact</Link>
                </nav>

                {/* Theme Controls */}
                <div className="flex items-center space-x-2">
                    <button 
                        onClick={toggleDarkMode}
                        className="text-content px-4 py-2 rounded hover:bg-content hover:text-background transition-colors duration-300"
                        title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
                    >
                        {darkMode ? (
                            <SunIcon className="w-5 h-5" />
                        ) : (
                            <MoonIcon className="w-5 h-5" />
                        )}
                    </button>
                    
                </div>
            </div> {/* This closing div was in the wrong place before */}
        </header>
    );
}
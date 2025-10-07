import React, { useEffect } from "react";
import { NavLink } from 'react-router-dom';
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';
import { logoSvg } from '../assets';

export default function Navbar({ darkMode, toggleDarkMode, resetToSystemTheme }) {
    const [isScrolled, setIsScrolled] = React.useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsScrolled(scrollTop > 0); // Appears after scrolling 50px
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

     const navLinkClasses = "relative text-primary hover:text-secondary font-geist-mono transition-colors duration-300 " +
                          "after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] " +
                          "after:bg-secondary after:transition-all after:duration-300 hover:after:w-full";

    return (
        <header className={`sticky top-0 bg-background z-50 transition-shadow duration-300 ${isScrolled ? 'shadow-md dark:shadow-gray-700/50' : ''}`}>
            <div className='w-full px-6 py-4 flex justify-between items-center'>
                {/* Logo and Name */}
                <div className="flex items-center">
                    <NavLink to="/">
                        <img src={logoSvg} alt="Logo" className="h-8" />
                    </NavLink>
                    <h1 className="hidden md:block text-2xl font-outfit font-bold ml-4">Abhi Ramachandran</h1>
                </div>

                {/* Navigation Links - moved inside the flex container */}
                <nav className="hidden md:flex space-x-6">
                    <NavLink to="/about" className={navLinkClasses}>About</NavLink>
                    <NavLink to="/projects" className={navLinkClasses}>Projects</NavLink>
                    <NavLink to="/work" className={navLinkClasses}>Work</NavLink>
                    <NavLink to="/contact" className={navLinkClasses}>Contact</NavLink>
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
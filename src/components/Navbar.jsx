import React, { useEffect } from "react";
import { NavLink } from 'react-router-dom';
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';  // Removed unused imports
import { logoSvg } from '../assets';

export default function Navbar({ darkMode, toggleDarkMode, resetToSystemTheme }) {
    const [isScrolled, setIsScrolled] = React.useState(false);
    const [isOpen, setIsOpen] = React.useState(false);  // State for hamburger menu

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsScrolled(scrollTop > 0);
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
                    <NavLink to="/" onClick={(e) => { e.stopPropagation(); setIsOpen(false); }}>  {/* Close menu on link click */}
                        <img src={logoSvg} alt="Logo" className="h-8" />
                    </NavLink>
                    <h1 className="hidden md:block text-2xl font-outfit font-bold ml-4">Abhi Ramachandran</h1>
                </div>

                {/* Navigation Links and Theme Toggle */}
                <div className="flex items-center space-x-2">
                    {/* Navigation Links */}
                    <nav className={`flex flex-col md:flex-row absolute md:relative top-full md:top-auto left-0 md:left-auto w-full md:w-auto bg-background md:bg-transparent shadow-md md:shadow-none space-y-4 md:space-y-0 md:space-x-6 p-4 md:p-0 transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none md:pointer-events-auto md:opacity-100 md:translate-y-0'}`}>
                        <NavLink to="/about" className={navLinkClasses} onClick={(e) => { e.stopPropagation(); setIsOpen(false); }}>About</NavLink>
                        <NavLink to="/projects" className={navLinkClasses} onClick={(e) => { e.stopPropagation(); setIsOpen(false); }}>Projects</NavLink>
                        <NavLink to="/work" className={navLinkClasses} onClick={(e) => { e.stopPropagation(); setIsOpen(false); }}>Work</NavLink>
                        <NavLink to="/contact" className={navLinkClasses} onClick={(e) => { e.stopPropagation(); setIsOpen(false); }}>Contact</NavLink>
                    </nav>

                    {/* Theme Toggle Button */}
                    <button 
                        onClick={(e) => { e.stopPropagation(); toggleDarkMode(); }}
                        className="text-black dark:text-white px-4 py-2 rounded hover:bg-muted hover:text-surface transition-all duration-300"
                        title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
                    >
                        {darkMode ? (
                            <SunIcon className="w-5 h-5 transition-transform duration-300 rotate-0 hover:rotate-12" />
                        ) : (
                            <MoonIcon className="w-5 h-5 transition-transform duration-300 rotate-0 hover:rotate-12" />
                        )}
                    </button>

                    {/* Hamburger Menu Button */}
                    <button 
                        onClick={(e) => { e.stopPropagation(); setIsOpen(!isOpen); }}
                        className="md:hidden text-black dark:text-white px-1 py-2 rounded transition-all duration-300 hover:scale-110"
                        title="Toggle menu"
                        type="button"
                    >
                        <div className={`hamburger ${isOpen ? 'open' : ''}`}>
                            <span></span>
                            <span></span>
                        </div>
                    </button>
                </div>
            </div>
        </header>
    );
}
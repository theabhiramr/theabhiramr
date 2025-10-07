import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './pages/About';
import Projects from './pages/Projects';
import Work from './pages/Work';
import Contact from './pages/Contact';
import { profileJpeg } from './assets';

// Home component
const Home = () => {
    return (
        <main className="container mx-auto px-4 py-8">
            <section id="about" className="text-center mb-16">
                <img 
                    src={profileJpeg}
                    alt="Abhiram Ramachandran"
                    className="w-48 h-48 rounded-full mx-auto mb-6 object-cover"
                />
                <h2 className="text-4xl font-outfit font-bold mb-4">Hello! I'm Abhi</h2>
                <p className="text-lg font-geist-mono max-w-2xl mx-auto leading-relaxed">
                    I'm an Honors student at Drexel studying Computer Science with concentrations in AI/ML and 
                    Systems Architecture. I'm also minoring in Business Analytics. Most of my work experiences are in Software 
                    Development and AI/ML Engineering.
                </p>
            </section>
            {/* Rest of your existing content */}
        </main>
    );
};

function App() {
    // Initialize with system preference, then check localStorage for manual override
    const [darkMode, setDarkMode] = useState(() => {
        const savedMode = localStorage.getItem('darkMode');
        if (savedMode !== null) {
            return JSON.parse(savedMode);
        }
        return window.matchMedia('(prefers-color-scheme: dark)').matches;
    });

    // Track if user has manually set a preference
    const [hasManualPreference, setHasManualPreference] = useState(() => {
        return localStorage.getItem('darkMode') !== null;
    });

    // Listen for system theme changes
    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        
        const handleSystemThemeChange = (e) => {
            // Only update if user hasn't manually set a preference
            if (!hasManualPreference) {
                setDarkMode(e.matches);
            }
        };

        mediaQuery.addEventListener('change', handleSystemThemeChange);
        return () => mediaQuery.removeEventListener('change', handleSystemThemeChange);
    }, [hasManualPreference]);

    const toggleDarkMode = () => {
        const newDarkMode = !darkMode;
        setDarkMode(newDarkMode);
        setHasManualPreference(true);
        localStorage.setItem('darkMode', JSON.stringify(newDarkMode));
    };

    return (
        <Router>
            <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
                <div className="bg-background text-content min-h-screen transition-colors duration-300">
                    <Navbar 
                        darkMode={darkMode}
                        toggleDarkMode={toggleDarkMode}
                    />

                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/work" element={<Work />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
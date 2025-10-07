import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './pages/About';
import Projects from './pages/Projects';
import Work from './pages/Work';
import Contact from './pages/Contact';
import { profileJpeg } from './assets';
import { useTypewriter } from './hooks';

// Home component
const Home = () => {
  const bioText = "I'm an honors CS student at Drexel University studying concentrations in AI/ML and Systems Architecture. I'm also minoring in Business Analytics. Most of my work experiences are in Software Development and Artificial Intelligence.";
  const { displayText, isTyping, isComplete } = useTypewriter(bioText);

    return (
        <main className="w-full">
            {/* Hero Section - Full Width with Padding */}
            <section className="w-full px-20 md:px-16 lg:px-32 py-16">
                <div className="max-w-6xl flex flex-col md:flex-row items-start gap-8">
                    {/* Profile Image */}
                    <img 
                        src={profileJpeg}
                        alt="Abhiram Ramachandran"
                        className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover flex-shrink-0"
                    />
                    
                    {/* Text Content */}
                    <div className="flex-1">
                        <h2 className="text-4xl font-outfit font-bold mb-4">Hello! I'm Abhi</h2>
                        <p className="text-lg font-geist-mono leading-relaxed min-h-[120px]">
                            {displayText}
                            <span className={`typing-cursor ${isTyping ? 'typing-pause' : 'typing-blink'}`}></span>
                        </p>
                    </div>
                </div>
            </section>

            {/* Other sections can follow the same pattern */}
            <section className="w-full px-4 md:px-8 lg:px-12 py-8">
                <div className="max-w-6xl">
                    {/* Future content sections */}
                </div>
            </section>
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
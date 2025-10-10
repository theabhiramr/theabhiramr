import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar, Footer } from './components';
import About from './pages/About';
import Projects from './pages/Projects';
import Work from './pages/Work';
import Contact from './pages/Contact';
import { profileJpeg } from './assets';
import { useTypewriter } from './hooks/useTypewriter';

// Home component
const Home = () => {
    const bioText = `I'm an honors CS student at <a href="https://www.drexel.edu/cs/" target="_blank" rel="noopener noreferrer" class="text-secondary hover:text-primary active:text-primary">Drexel University</a> 
    studying concentrations in <span class="text-secondary">AI/ML</span> and 
    <span class="text-secondary">Systems Architecture</span>. I'm also minoring in 
    <span class="text-secondary">Business Analytics</span>. Most of my work experiences are in 
    <span class="text-secondary">Software Development</span> and <span class="text-secondary">Artificial Intelligence</span>`;
    
    const { displayText, isTyping, isComplete } = useTypewriter(bioText, 50, 1000);

    return (
        <main className="w-full" onClick={() => setSkipped(true)}>
            {/* Hero Section - Full Width with Padding */}
            <section className="w-full px-20 md:px-4 lg:px-32 py-16">
                <div className="max-w-6xl flex flex-col md:flex-row items-start gap-8">
                    {/* Profile Image */}
                    <img 
                        src={profileJpeg}
                        alt="Abhiram Ramachandran"
                        className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover flex-shrink-0"
                    />
                    
                    {/* Text Content */}
                    <div className="flex-1" >
                        <h2 className="text-4xl font-outfit font-bold mb-4">
                            <span className="text-primary">Hello!</span> I'm Abhi
                        </h2>
                        <p className="text-lg font-geist-mono leading-relaxed min-h-[120px]">
                            <span dangerouslySetInnerHTML={{ __html: displayText }} />
                            <span className={`typing-cursor ${isTyping ? 'typing-pause' : 'typing-blink'}`}></span>
                        </p>
                    </div>
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
                <div className="bg-background text-content min-h-screen transition-colors duration-300 flex flex-col">
                    <Navbar 
                        darkMode={darkMode}
                        toggleDarkMode={toggleDarkMode}
                    />

                    <main className="flex-1">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/projects" element={<Projects />} />
                            <Route path="/work" element={<Work />} />
                            <Route path="/contact" element={<Contact />} />
                        </Routes>
                    </main>

                    <Footer />
                </div>
            </div>
        </Router>
    );
}

export default App;
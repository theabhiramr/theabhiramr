import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { Navbar, Footer, Carousel } from './components';
import { IoArrowForwardCircleOutline, IoArrowForwardCircle } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import About from './pages/About';
import Projects from './pages/Projects';
import WorkExperience from './pages/WorkExperience';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import { profileJpeg } from './assets';
import { evbuddyJpeg } from './assets';
import { epiqsolutionsJpeg } from './assets';
import { useTypewriter } from './hooks/useTypewriter';

// Home component
const Home = () => {
    const navigate = useNavigate();
    const bioText = `I'm an honors CS student at <a href="https://www.drexel.edu/cs/" target="_blank" rel="noopener noreferrer" class="text-secondary hover:text-primary active:text-primary">Drexel University</a> 
    studying concentrations in <span class="text-secondary">AI/ML</span> and 
    <span class="text-secondary">Systems Architecture</span>. I'm also minoring in 
    <span class="text-secondary">Business Analytics</span>. Most of my work experiences are in 
    <span class="text-secondary">Software Development</span> and <span class="text-secondary">Artificial Intelligence</span>`;
    
    const { displayText, isTyping, isComplete } = useTypewriter(bioText, 25, 1000);
    
    const [skipped, setSkipped] = useState(() => {
        const saved = sessionStorage.getItem('homeSkipped');
        return saved ? JSON.parse(saved) : false;
    });
    const [carouselVisible, setCarouselVisible] = useState(() => {
        const saved = sessionStorage.getItem('homeCarouselVisible');
        return saved ? JSON.parse(saved) : false;
    });
    // control per-carousel sequential reveal
    const [projectsVisibleLocal, setProjectsVisibleLocal] = useState(false);
    const [workVisibleLocal, setWorkVisibleLocal] = useState(false);
    const [isTouch, setIsTouch] = useState(false);
    
        useEffect(() => {
            const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
            setIsTouch(isMobile);
        }, []);
        const [arrowHovered, setArrowHovered] = useState(false);

    
    const finalText = skipped ? bioText : displayText;
    const finalIsComplete = skipped || isComplete;
    
    // Handle Enter key to skip animation
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Enter' && !skipped) {
                setSkipped(true);
            }
        };
        
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [skipped]);
    
    // Show carousel container after animation or skip (existing behaviour)
    useEffect(() => {
        if (finalIsComplete) {
            setCarouselVisible(true);
        }
    }, [finalIsComplete]);
    
    // When the main carousel container is shown, reveal the two carousels in succession
    useEffect(() => {
        if (!carouselVisible) return;
        setProjectsVisibleLocal(true); // show projects immediately
        const t = setTimeout(() => setWorkVisibleLocal(true), 350); // stagger (350ms)
        return () => clearTimeout(t);
    }, [carouselVisible]);
    
    // Save state to sessionStorage
    useEffect(() => {
        sessionStorage.setItem('homeSkipped', JSON.stringify(skipped));
    }, [skipped]);
    
    useEffect(() => {
        sessionStorage.setItem('homeCarouselVisible', JSON.stringify(carouselVisible));
    }, [carouselVisible]);
    
    return (
        <main className="w-full" onClick={() => setSkipped(true)}>
            {/* Hero Section - Full Width with Padding */}
            <section className="w-full px-16 md:px-16 lg:px-32 py-8">
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
                            <span dangerouslySetInnerHTML={{ __html: finalText }} />
                            <span className={`typing-cursor ${isTyping && !skipped ? 'typing-pause' : 'typing-blink'}`}></span>
                        </p>
                    </div>
                </div>
            </section>
            {/* Projects Carousel Section - Fades in and slides up */}
            <div className={`transition-all duration-1000 ${projectsVisibleLocal ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <div className="px-6 lg:px-32">
                <h3 className="flex items-center text-3xl font-outfit font-bold mb-4 text-left">
                    My Projects
                    <button
                        onClick={(e)=>{e.stopPropagation(); navigate('/projects')}}
                        className="group relative ml-2 text-primary hover:text-secondary transition-colors duration-300"
                        aria-label="Learn more about my projects"
                    >
                        <IoArrowForwardCircleOutline className="w-7 h-7 transition-opacity duration-200 group-hover:opacity-0" />
                        <IoArrowForwardCircle className="w-7 h-7 absolute inset-0 transition-opacity duration-200 opacity-0 group-hover:opacity-100" />
                    </button>
                </h3>
                </div>
                <Carousel 
                    items={[
                        {
                            title: "NFL Prediction Model",
                            dates: "Oct 2025 - Present",
                            description: "Stay tuned for updates!"
                        },
                        { 
                            title: "Project Janata", description: "A web and social platform to connect the youth of Chinmaya Mission.",
                            dates: "Aug 2025 - Present",
                            link: "https://chinmayajanata.org",
                            technologies: [
                                "JavaScript",
                                "React",
                                "ExpressJS",
                                "Expo",
                                "NodeJS",
                                "Vercel",
                                "Tamagui"
                            ],
                            githubLink: "https://github.com/Project-Janatha/Project-Janatha"
                        },
                        { 
                            title: "Portfolio Website", 
                            dates: "Apr 2025 - Present",
                            description: "The website you're seeing right now!",
                            link: void(0),
                            technologies: [
                                "JavaScript",
                                "React",
                                "Tailwind CSS", 
                                "Vite",
                                "Firebase"
                            ],
                            githubLink: "https://github.com/theabhiramr/theabhiramr"
                        },
                        { 
                            title: "Dragon Learn",
                            dates: "Apr 2025 - Present",
                            link: void(0),
                            technologies: [
                                "TypeScript",
                                "React",
                                "NextJS",
                                "Tailwind CSS",
                                "Vercel",
                                "OpenAI API",
                                "LangChain",
                                "Manim",
                            ],
                            description: "A website that can convert syllabi into interactive modules using LLMs.",
                            githubLink: "https://github.com/drexelai/dragon-learn"
                        },
                        { 
                            title: "CrashMath", 
                            description: "A gamified learning platform for college students to make math concepts approachable and fun.",
                            dates: "Jan 2023 - Jun 2023",
                            link: "https://crashmath-16dc6.web.app/",
                            technologies: [
                                "JavaScript",
                                "CSS",
                                "HTML",
                                "Firebase",
                                "OpenAI API"
                            ],
                        }
                    ]}
                    startAutoplay={finalIsComplete}  // Start autoplay after animation or skip
                />
            </div>
            {/* Work Experience Carousel Section - Fades in and slides up */}
            <div className={`transition-all duration-1000 ${workVisibleLocal ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <div className="px-6 lg:px-32">
                <h3 className="flex items-center text-3xl font-outfit font-bold mb-4 text-left">
                    My Work Experience
                    <button
                        onClick={(e)=>{e.stopPropagation(); navigate('/work-experience')}}
                        className="group relative ml-2 text-primary hover:text-secondary transition-colors duration-300"
                        aria-label="Learn more about my work experience"
                    >
                        <IoArrowForwardCircleOutline className="w-7 h-7 transition-opacity duration-200 group-hover:opacity-0" />
                        <IoArrowForwardCircle className="w-7 h-7 absolute inset-0 transition-opacity duration-200 opacity-0 group-hover:opacity-100" />
                    </button>
                </h3>
                </div>
                <Carousel 
                    items={[
                        {
                            title: "Software Development Engineering Co-op",
                            company: "Epiq Solutions",
                            imageSrc: epiqsolutionsJpeg,
                            description: "Programmed internal tools to streamline production testing processes, enhancing efficiency and accuracy of SDR devices.",
                            dates: "Apr 2024 - Sep 2024",
                            link: "https://epiqsolutions.com",
                        },
                        {
                            title: "Software Development Intern",
                            imageSrc: evbuddyJpeg,
                            company: "EV Buddy, Inc.",
                            dates: "Jun 2023 - Sep 2023",
                            description: "Developed a community platform for EV owners featuring a unique, Vehicle-to-Vehicle (V2V) charging system.",
                            link: "https://evbuddy.net",
                        }
                    ]}
                    startAutoplay={finalIsComplete}  // Start autoplay after animation or skip
                />
            </div>
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
        <>
        <Helmet>
            <title>Abhi Ramachandran</title>
            <meta name="description" content="Portfolio of Abhiram Ramachandran, Computer Science student at Drexel University." />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
            <meta property="og:title" content="Abhi Ramachandran" />
            <meta property="og:description" content="Portfolio of Abhiram Ramachandran, Computer Science student at Drexel University." />
            <meta property="og:image" content="https://theabhiramr.com/assets/profile.jpeg" />
            <meta property="og:url" content="https://theabhiramr.com/" />
            <meta name="twitter:card" content="summary_large_image" />
        </Helmet>
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
                            <Route path="/work-experience" element={<WorkExperience />} />
                            <Route path="/contact" element={<Contact />} />
                            <Route path="*" element={<NotFound />} />
                        </Routes>
                    </main>

                    <Footer />
                </div>
            </div>
        </Router>
        </>
    );
}

export default App;
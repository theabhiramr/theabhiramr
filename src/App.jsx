import { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useTypewriter } from './hooks/useTypewriter';
import { motion, useInView } from 'framer-motion';
import { Navbar, Footer, Carousel } from './components';
import About from './pages/About';
import Projects from './pages/Projects';
import WorkExperience from './pages/WorkExperience';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Secret from './pages/Secret';
import { profileJpeg, evbuddyJpeg, epiqsolutionsJpeg } from './assets';
import { IoArrowForwardCircleOutline, IoArrowForwardCircle } from 'react-icons/io5';

const parentStagger = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2
        }
    }
};

const fadeUp = {
    hidden: { opacity: 0, y: -8 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
};

const Home = () => {
    useEffect(() => {
        document.title = "Abhi Ramachandran";
        window.scrollTo(0, 0);
      }, []);
    const navigate = useNavigate();
    const bioText = `I'm an honors CS student at <a href="https://www.drexel.edu/cs/" target="_blank" rel="noopener noreferrer" class="text-secondary hover:text-primary active:text-primary">Drexel University</a> 
    studying concentrations in <span class="text-secondary">AI/ML</span> and 
    <span class="text-secondary">Systems Architecture</span>. I'm also minoring in 
    <span class="text-secondary">Business Analytics</span>. Most of my work experiences are in 
    <span class="text-secondary">Software Development</span> and <span class="text-secondary">Artificial Intelligence</span>`;

    const { displayText, isTyping, isComplete } = useTypewriter(bioText, 50, 500);

    const [skipped, setSkipped] = useState(() => {
        const saved = sessionStorage.getItem('homeSkipped');
        return saved ? JSON.parse(saved) : false;
    });

    useEffect(() => {
        sessionStorage.setItem('homeSkipped', JSON.stringify(skipped));
    }, [skipped]);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Enter' && !skipped) {
                setSkipped(true);
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [skipped]);

    const finalText = skipped ? bioText : displayText;
    const finalIsComplete = skipped || isComplete;

    // InView refs for parent sections
    const projectsSectionRef = useRef(null);
    const workSectionRef = useRef(null);

    // Use inView for parent sections
    const projectsSectionInView = useInView(projectsSectionRef, { once: true, amount: 0.1 });
    const workSectionInView = useInView(workSectionRef, { once: true, amount: 0.1 });

    return (
        <main className="w-full " onClick={() => {
            if (!skipped) setSkipped(true);
        }}>
            {/* Hero Section */}
            <section className="w-full px-16 md:px-16 lg:px-32 py-8">
                <div className="max-w-6xl flex flex-col md:flex-row items-start gap-8">
                    <img 
                        src={profileJpeg}
                        alt="Abhiram Ramachandran"
                        className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover flex-shrink-0"
                    />
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
            {/* Projects Carousel Section */}
            <div className="px-6 lg:px-32">
                <motion.div
                    ref={projectsSectionRef}
                    initial="hidden"
                    animate={finalIsComplete && projectsSectionInView ? "visible" : "hidden"}
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
                    }}
                >
                    <h3 className="flex items-center text-3xl font-outfit font-bold mb-8 text-left">
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
                    <div>
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
                                        "Firebase",
                                        "Cloudflare"
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
                            startAutoplay={finalIsComplete}
                        />
                    </div>
                </motion.div>
            </div>
            {/* Work Experience Carousel Section */}
            <div className="px-6 lg:px-32 py-16">
                <motion.div
                    ref={workSectionRef}
                    initial="hidden"
                    animate={finalIsComplete && workSectionInView ? "visible" : "hidden"}
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
                    }}
                >
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
                    <div>
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
                            startAutoplay={finalIsComplete}
                        />
                    </div>
                </motion.div>
            </div>
        </main>
    );
};

function App() {
    const [darkMode, setDarkMode] = useState(() => {
        const savedMode = localStorage.getItem('darkMode');
        if (savedMode !== null) {
            return JSON.parse(savedMode);
        }
        return window.matchMedia('(prefers-color-scheme: dark)').matches;
    });

    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleSystemThemeChange = (e) => {
            setDarkMode(e.matches);
        };
        mediaQuery.addEventListener('change', handleSystemThemeChange);
        return () => mediaQuery.removeEventListener('change', handleSystemThemeChange);
    }, []);

    const toggleDarkMode = () => {
        const newDarkMode = !darkMode;
        setDarkMode(newDarkMode);
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
            <meta property="og:image" content="https://theabhiramr.com/og-image.jpg" />
            <meta property="og:url" content="https://theabhiramr.com/" />
            <meta name="twitter:card" content="summary_large_image" />
        </Helmet>
        <Router>
            <div className={`min-h-screen overflow-x-hidden ${darkMode ? 'dark' : ''}`}>
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
                            <Route path="/cs164" element={<Secret />} />
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
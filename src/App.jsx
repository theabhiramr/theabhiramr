import { useState, useEffect, useRef } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import { Helmet } from "react-helmet";
import { useTypewriter } from "./hooks/useTypewriter";
import { motion, useInView } from "framer-motion";
import { Navbar, Footer, Carousel } from "./components";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import WorkExperience from "./pages/WorkExperience";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Secret from "./pages/Secret";
import { profileJpeg, evbuddyJpeg, epiqsolutionsJpeg } from "./assets";
import { IoChevronForwardCircle, IoChevronForward } from "react-icons/io5";
import Sidebar from "./components/Sidebar";

const fadeUp = {
  hidden: { opacity: 0, y: -8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

// const Home = () => {
//   useEffect(() => {
//     document.title = "Abhi Ramachandran";
//     window.scrollTo(0, 0);
//   }, []);

//   const navigate = useNavigate();
//   const bioText = `I'm an honors CS student at <a href="https://www.drexel.edu/cs/" target="_blank" rel="noopener noreferrer">Drexel University</a>
//     studying concentrations in AI/ML and Systems Architecture. I'm also minoring in Business Analytics. Most of my work experiences are in Software Development and Artificial Intelligence`;

//   const { displayText, isTyping, isComplete } = useTypewriter(bioText, 50, 500);

//   const [skipped, setSkipped] = useState(() => {
//     const saved = sessionStorage.getItem("homeSkipped");
//     return saved ? JSON.parse(saved) : false;
//   });

//   useEffect(() => {
//     sessionStorage.setItem("homeSkipped", JSON.stringify(skipped));
//   }, [skipped]);

//   useEffect(() => {
//     const handleKeyDown = (e) => {
//       if (e.key === "Enter" && !skipped) {
//         setSkipped(true);
//       }
//     };
//     window.addEventListener("keydown", handleKeyDown);
//     return () => window.removeEventListener("keydown", handleKeyDown);
//   }, [skipped]);

//   const finalText = skipped ? bioText : displayText;
//   const finalIsComplete = skipped || isComplete;

//   const projectsSectionRef = useRef(null);
//   const workSectionRef = useRef(null);

//   const projectsSectionInView = useInView(projectsSectionRef, {
//     once: true,
//     amount: 0.1,
//   });
//   const workSectionInView = useInView(workSectionRef, {
//     once: true,
//     amount: 0.1,
//   });

//   return (
//     <main
//       className="w-full"
//       onClick={() => {
//         if (!skipped) setSkipped(true);
//       }}
//     >
//       {/* Hero Section */}
//       <section className="w-full px-6 py-12">
//         <div className="mx-auto max-w-7xl">
//           <div className="flex flex-col items-start gap-8 md:flex-row">
//             <img
//               src={profileJpeg}
//               alt="Abhiram Ramachandran"
//               className="h-32 w-32 flex-shrink-0 rounded-full object-cover md:h-40 md:w-40"
//             />
//             <div className="flex-1">
//               <h2 className="font-geist mb-4 text-4xl font-bold">
//                 <span className="text-accent">Hello!</span> I'm Abhi
//               </h2>
//               <p className="font-inter min-h-[120px] text-lg leading-relaxed">
//                 <span dangerouslySetInnerHTML={{ __html: finalText }} />
//                 <span
//                   className={`typing-cursor ${isTyping && !skipped ? "typing-pause" : "typing-blink"}`}
//                 ></span>
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Projects Carousel Section */}
//       <section className="px-6 py-12">
//         <div className="mx-auto max-w-7xl">
//           <motion.div
//             ref={projectsSectionRef}
//             initial="hidden"
//             animate={
//               finalIsComplete && projectsSectionInView ? "visible" : "hidden"
//             }
//             variants={{
//               hidden: { opacity: 0, y: 20 },
//               visible: {
//                 opacity: 1,
//                 y: 0,
//                 transition: { duration: 0.6, ease: "easeOut" },
//               },
//             }}
//           >
//             {/* Projects */}
//             <div className="mb-8 flex items-center gap-2">
//               <span className="font-outfit text-3xl font-bold">
//                 My Projects
//               </span>
//               <button
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   navigate("/projects");
//                 }}
//                 aria-label="Learn more about my projects"
//                 className="group relative flex h-6 w-6 items-center justify-center"
//               >
//                 <IoChevronForward className="text-primary absolute h-8 w-8 translate-y-0.5 scale-70 transition-opacity duration-200 group-hover:opacity-0" />
//                 <IoChevronForwardCircle className="text-secondary absolute h-8 w-8 translate-y-0.5 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
//               </button>
//             </div>
//             <Carousel
//               items={[
//                 {
//                   title: "NFL Prediction Model",
//                   dates: "Oct 2025 - Present",
//                   description:
//                     "An NFL prediction model that predicts team performance",
//                   link: void 0,
//                   technologies: [
//                     "Jupyter",
//                     "Python",
//                     "Pandas",
//                     "PyTorch",
//                     "Scikit-learn",
//                     "NextJS",
//                     "Tailwind CSS",
//                     "BeautifulSoup",
//                     "XGBoost",
//                   ],
//                   githubLink:
//                     "https://github.com/drexelai/nfl-prediction-team-1",
//                 },
//                 {
//                   title: "Project Janata",
//                   description:
//                     "A web and social platform to connect the youth of Chinmaya Mission.",
//                   dates: "Aug 2025 - Present",
//                   link: "https://chinmayajanata.org",
//                   technologies: [
//                     "JavaScript",
//                     "React",
//                     "ExpressJS",
//                     "Expo",
//                     "NodeJS",
//                     "Vercel",
//                     "Nativewind",
//                   ],
//                   githubLink:
//                     "https://github.com/Project-Janatha/Project-Janatha",
//                 },
//                 {
//                   title: "Portfolio Website",
//                   dates: "Apr 2025 - Present",
//                   description: "The website you're seeing right now!",
//                   link: void 0,
//                   technologies: [
//                     "JavaScript",
//                     "React",
//                     "Tailwind CSS",
//                     "Vite",
//                     "Firebase",
//                     "Cloudflare",
//                   ],
//                   githubLink: "https://github.com/theabhiramr/theabhiramr",
//                 },
//                 {
//                   title: "Dragon Learn",
//                   dates: "Apr 2025 - Present",
//                   link: void 0,
//                   technologies: [
//                     "TypeScript",
//                     "React",
//                     "NextJS",
//                     "Tailwind CSS",
//                     "Vercel",
//                     "OpenAI API",
//                     "LangChain",
//                     "Manim",
//                   ],
//                   description:
//                     "A website that can convert syllabi into interactive modules using LLMs.",
//                   githubLink: "https://github.com/drexelai/dragon-learn",
//                 },
//                 {
//                   title: "CrashMath",
//                   description:
//                     "A gamified learning platform for college students to make math concepts approachable and fun.",
//                   dates: "Jan 2023 - Jun 2023",
//                   link: "https://crashmath-16dc6.web.app/",
//                   technologies: [
//                     "JavaScript",
//                     "CSS",
//                     "HTML",
//                     "Firebase",
//                     "OpenAI API",
//                   ],
//                 },
//               ]}
//               startAutoplay={finalIsComplete}
//             />
//           </motion.div>
//         </div>
//       </section>

//       {/* Work Experience Carousel Section */}
//       <section className="px-6 py-12">
//         <div className="mx-auto max-w-7xl">
//           <motion.div
//             ref={workSectionRef}
//             initial="hidden"
//             animate={
//               finalIsComplete && workSectionInView ? "visible" : "hidden"
//             }
//             variants={{
//               hidden: { opacity: 0, y: 20 },
//               visible: {
//                 opacity: 1,
//                 y: 0,
//                 transition: { duration: 0.6, ease: "easeOut" },
//               },
//             }}
//           >
//             {/* Work Experience */}
//             <div className="mb-8 flex items-center gap-2">
//               <span className="font-outfit text-3xl font-bold">
//                 My Work Experience
//               </span>
//               <button
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   navigate("/work-experience");
//                 }}
//                 aria-label="Learn more about my work experience"
//                 className="group relative flex h-6 w-6 items-center justify-center"
//               >
//                 <IoChevronForward className="text-primary absolute h-8 w-8 translate-y-0.5 scale-70 transition-opacity duration-200 group-hover:opacity-0" />
//                 <IoChevronForwardCircle className="text-secondary absolute h-8 w-8 translate-y-0.5 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
//               </button>
//             </div>
//             <Carousel
//               items={[
//                 {
//                   title: "Software Development Engineering Co-op",
//                   company: "Epiq Solutions",
//                   imageSrc: epiqsolutionsJpeg,
//                   description:
//                     "Programmed internal tools to streamline production testing processes, enhancing efficiency and accuracy of SDR devices.",
//                   dates: "Apr 2024 - Sep 2024",
//                   link: "https://epiqsolutions.com",
//                 },
//                 {
//                   title: "Software Development Intern",
//                   imageSrc: evbuddyJpeg,
//                   company: "EV Buddy, Inc.",
//                   dates: "Jun 2023 - Sep 2023",
//                   description:
//                     "Developed a community platform for EV owners featuring a unique, Vehicle-to-Vehicle (V2V) charging system.",
//                   link: "https://evbuddy.net",
//                 },
//               ]}
//               startAutoplay={finalIsComplete}
//             />
//           </motion.div>
//         </div>
//       </section>
//     </main>
//   );
// };
function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode !== null) {
      return JSON.parse(savedMode);
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleSystemThemeChange = (e) => {
      setDarkMode(e.matches);
    };
    mediaQuery.addEventListener("change", handleSystemThemeChange);
    return () =>
      mediaQuery.removeEventListener("change", handleSystemThemeChange);
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem("darkMode", JSON.stringify(newDarkMode));
  };

  return (
    <>
      <Helmet>
        <title>Abhi Ramachandran</title>
        <meta
          name="description"
          content="Portfolio of Abhiram Ramachandran, Computer Science student at Drexel University."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Abhi Ramachandran" />
        <meta
          property="og:description"
          content="Portfolio of Abhiram Ramachandran, Computer Science student at Drexel University."
        />
        <meta
          property="og:image"
          content="https://theabhiramr.com/og-image.jpg"
        />
        <meta property="og:url" content="https://theabhiramr.com/" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <Router>
        <div className={`min-h-screen ${darkMode ? "dark" : ""} relative`}>
          <div className="bg-background text-content flex min-h-screen flex-col transition-colors duration-300">
            {/*<Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />*/}
            <Sidebar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            <main className="flex-1 overflow-x-hidden">
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

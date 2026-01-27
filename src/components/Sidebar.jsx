import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiSun,
  FiMoon,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMenu,
  FiX,
} from "react-icons/fi";
import { logoSvg } from "../assets"; // Keeping your logo asset

const navItems = [
  { name: "About", path: "/about" },
  { name: "Work", path: "/work-experience" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

export default function Sidebar({ activeSection, darkMode, toggleDarkMode }) {
  const [isOpen, setIsOpen] = useState(false);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => window.innerWidth >= 1024 && setIsOpen(false);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const SidebarContent = () => (
    <div className="flex h-full flex-col justify-between p-8 lg:p-16">
      {/* Top Section: Branding */}
      <div className="space-y-12">
        <header className="space-y-4">
          <div className="flex items-center gap-4">
            <img
              src={logoSvg}
              alt="Logo"
              className="h-8 w-8 transition-transform hover:rotate-12"
            />
            <h1 className="text-content font-geist text-2xl font-bold tracking-tight">
              Abhi Ramachandran
            </h1>
          </div>
          <div className="space-y-2">
            <h2 className="text-content text-lg font-medium">
              Full Stack Developer
            </h2>
            <p className="text-muted max-w-xs text-sm leading-relaxed">
              Crafting high-performance, accessible digital experiences with a
              focus on precision and user intent.
            </p>
          </div>
        </header>

        {/* Navigation: Linear/Brittany Chiang Style */}
        <nav className="hidden lg:block">
          <ul className="space-y-6">
            {navItems.map((item) => {
              const isActive = activeSection === item.name.toLowerCase();
              return (
                <li key={item.name}>
                  <a
                    href={item.path}
                    className="group flex items-center py-1 transition-all"
                  >
                    <span
                      className={`mr-4 h-px transition-all duration-500 ease-out ${
                        isActive
                          ? "bg-content w-16"
                          : "bg-muted group-hover:bg-content w-8 group-hover:w-16"
                      }`}
                    />
                    <span
                      className={`text-[11px] font-bold tracking-[0.2em] uppercase transition-colors ${
                        isActive
                          ? "text-content"
                          : "text-muted group-hover:text-content"
                      }`}
                    >
                      {item.name}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile Top Header (replaces the Navbar) */}
      <div className="bg-background/80 border-border/50 fixed top-0 left-0 z-50 flex w-full items-center justify-between border-b px-6 py-4 backdrop-blur-md lg:hidden">
        <div className="flex items-center gap-3">
          <img src={logoSvg} alt="Logo" className="h-6" />
          <span className="font-geist text-content text-sm font-bold tracking-wider uppercase">
            Abhi Ramachandran
          </span>
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-content p-2"
          aria-label="Toggle Menu"
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.aside
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="bg-background fixed inset-0 z-40 lg:hidden"
          >
            <div className="h-full pt-20">
              <div className="flex flex-col space-y-8 p-8">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.path}
                    onClick={() => setIsOpen(false)}
                    className="text-content hover:text-accent text-3xl font-bold tracking-tighter transition-colors"
                  >
                    {item.name}
                  </a>
                ))}
                <div className="border-border/50 border-t pt-8">
                  <SidebarContent />
                </div>
              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Desktop Sidebar */}
      <aside className="border-border/10 fixed inset-y-0 left-0 hidden w-[45%] flex-col border-r lg:flex xl:w-[40%]">
        <SidebarContent />
      </aside>
    </>
  );
}

const SocialLink = ({ href, icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-muted hover:text-content transition-all hover:-translate-y-1"
  >
    {icon}
  </a>
);

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { logoLight, logoDark } from "../assets";
import HamburgerMenu from "./HamburgerMenu";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { name: "About", section: "about", path: "/" },
  { name: "Work", section: "work", path: "/work" },
  { name: "Projects", section: "projects", path: "/projects" },
  { name: "Resume", section: "resume", path: "/resume" },
  { name: "Contact", section: "contact", path: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { theme } = useTheme();

  const handleNavClick = (path) => {
    navigate(path);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleResize = () => window.innerWidth >= 1024 && setIsOpen(false);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* Mobile Top Header */}
      <div className="bg-background/80 border-border/50 fixed top-0 left-0 z-[60] flex w-full items-center justify-between border-b px-6 py-4 backdrop-blur-md lg:hidden">
        <div className="flex items-center gap-3">
          <img
            src={theme === "dark" || theme === "system" ? logoDark : logoLight}
            alt="Logo"
            className="h-6"
          />
        </div>
        <HamburgerMenu isOpen={isOpen} toggle={() => setIsOpen(!isOpen)} />
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.aside
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "tween", ease: "easeInOut", duration: 0.4 }}
            className="bg-background fixed inset-0 z-50 overflow-y-auto lg:hidden"
            style={{ pointerEvents: "auto" }}
          >
            <div className="flex h-full flex-col justify-between p-8 pt-20">
              <nav className="space-y-8">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.path)}
                    onTouchEnd={(e) => {
                      e.preventDefault();
                      handleNavClick(item.path);
                    }}
                    className="text-content hover:text-accent block w-full text-left text-3xl font-bold tracking-tighter transition-colors touch-manipulation"
                    style={{ WebkitTapHighlightColor: "transparent" }}
                  >
                    {item.name}
                  </button>
                ))}
              </nav>
              <div className="border-border/50 flex border-t pt-8">
                <ThemeToggle />
              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}

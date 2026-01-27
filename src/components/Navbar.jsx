import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logoSvg from "../assets/logo.svg";
import HamburgerMenu from "./HamburgerMenu";

const navItems = [
  { name: "Home", section: "home", path: "/" },
  { name: "Work", section: "work", path: "/work" },
  { name: "Projects", section: "projects", path: "/projects" },
  { name: "Contact", section: "contact", path: "/contact" },
];

const SidebarContent = ({ includeLogo = true }) => (
  <div className="flex h-full flex-col justify-between p-8 lg:p-16">
    {/* Top Section: Branding */}
    <div className="space-y-12">
      <header className="space-y-4">
        {includeLogo && (
          <div className="flex items-center gap-4">
            <img
              src={logoSvg}
              alt="Logo"
              className="h-8 w-8 transition-transform hover:rotate-12"
            />
          </div>
        )}
      </header>
    </div>
  </div>
);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavClick = (path) => {
    navigate(path);
    setIsOpen(false);
  };

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => window.innerWidth >= 1024 && setIsOpen(false);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* Mobile Top Header */}
      <div className="bg-background/80 border-border/50 fixed top-0 left-0 z-50 flex w-full items-center justify-between border-b px-6 py-4 backdrop-blur-md lg:hidden">
        <div className="flex items-center gap-3">
          <img src={logoSvg} alt="Logo" className="h-6" />
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
            className="bg-background fixed inset-0 z-40 overflow-y-auto lg:hidden"
          >
            <div className="h-full pt-20">
              <div className="flex flex-col space-y-8 p-8">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.path)}
                    className="text-content hover:text-accent text-left text-3xl font-bold tracking-tighter transition-colors"
                  >
                    {item.name}
                  </button>
                ))}
                <div className="border-border/50 border-t pt-8">
                  <SidebarContent includeLogo={false} />
                </div>
              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}

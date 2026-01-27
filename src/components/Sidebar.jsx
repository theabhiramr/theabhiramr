import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logoSvg from "../assets/logo.svg";

const navItems = [
  { name: "Home", section: "home", path: "/" },
  { name: "Work", section: "work", path: "/work" },
  { name: "Projects", section: "projects", path: "/projects" },
  { name: "Contact", section: "contact", path: "/contact" },
];

export default function Sidebar({ activeSection }) {
  const navigate = useNavigate();

  const handleNavClick = (path) => {
    navigate(path);
  };

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

        {/* Navigation: Linear/Brittany Chiang Style */}
        <nav className="hidden lg:block">
          <ul className="space-y-6">
            {navItems.map((item) => {
              const isActive = activeSection === item.section;
              return (
                <li key={item.name}>
                  <button
                    onClick={() => handleNavClick(item.path)}
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
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );

  return (
    <aside className="hidden lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-1/3 lg:flex-col lg:justify-between lg:p-16">
      <SidebarContent />
    </aside>
  );
}

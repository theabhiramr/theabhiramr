import React, { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Home from "./Home";
import WorkExperience from "./WorkExperience";
import Projects from "./Projects";
import Contact from "./Contact";

const pathToSection = {
  "/": "home",
  "/work": "work",
  "/projects": "projects",
  "/contact": "contact",
};

const sectionToPath = {
  home: "/",
  work: "/work",
  projects: "/projects",
  contact: "/contact",
};

export default function LandingPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const isScrollingRef = useRef(false);
  const lastUserNavigationRef = useRef(location.pathname);

  useEffect(() => {
    // Only scroll if this is a user navigation (not from scroll listener)
    if (location.state?.fromScroll || lastUserNavigationRef.current === location.pathname) {
      return;
    }

    lastUserNavigationRef.current = location.pathname;
    const sectionId = pathToSection[location.pathname] || "home";
    const section = document.getElementById(sectionId);

    if (section) {
      isScrollingRef.current = true;
      // Small delay to ensure DOM is ready
      setTimeout(() => {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
        // Reset flag after scroll completes
        setTimeout(() => {
          isScrollingRef.current = false;
        }, 1000);
      }, 100);
    }
  }, [location.pathname]);

  // Update URL based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (isScrollingRef.current) return;

      const sections = ["home", "work", "projects", "contact"];
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          if (
            scrollPosition >= section.offsetTop &&
            scrollPosition < section.offsetTop + section.offsetHeight
          ) {
            const newPath = sectionToPath[sectionId];
            if (newPath && location.pathname !== newPath) {
              navigate(newPath, { replace: true, state: { fromScroll: true } });
            }
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname, navigate]);

  return (
    <div className="px-6 lg:px-12">
      <div id="home">
        <Home />
      </div>
      <div id="work">
        <WorkExperience />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}

import React, { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Home from "./About";
import WorkExperience from "./WorkExperience";
import Projects from "./Projects";
import Resume from "./Resume";
import Contact from "./Contact";

const pathToSection = {
  "/": "about",
  "/work": "work",
  "/projects": "projects",
  "/resume": "resume",
  "/contact": "contact",
};

const sectionToPath = {
  about: "/",
  work: "/work",
  projects: "/projects",
  resume: "/resume",
  contact: "/contact",
};

export default function LandingPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const isScrollingRef = useRef(false);

  // Disable browser scroll restoration
  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
  }, []);

  useEffect(() => {
    // Skip if this is from the scroll listener
    if (location.state?.fromScroll) {
      return;
    }

    const sectionId = pathToSection[location.pathname] || "about";
    const section = document.getElementById(sectionId);

    if (section) {
      isScrollingRef.current = true;

      const scrollToSection = () => {
        const isMobile = window.innerWidth < 1024;
        const navbarHeight = isMobile ? 64 : 0;
        const targetY = section.offsetTop - navbarHeight;

        window.scrollTo({
          top: targetY,
          behavior: "auto",
        });

        setTimeout(() => {
          isScrollingRef.current = false;
        }, 300);
      };

      setTimeout(scrollToSection, 50);
    }
  }, [location.pathname, location.state]);

  // Update URL based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (isScrollingRef.current) return;

      const sections = ["about", "work", "projects", "resume", "contact"];
      const scrollY = window.scrollY;
      const viewportMid = scrollY + window.innerHeight / 2;

      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;

          if (viewportMid >= sectionTop && viewportMid < sectionBottom) {
            const newPath = sectionToPath[sectionId];
            if (newPath && location.pathname !== newPath) {
              isScrollingRef.current = true;
              navigate(newPath, { replace: true, state: { fromScroll: true } });
              setTimeout(() => {
                isScrollingRef.current = false;
              }, 100);
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
      <div id="about">
        <Home />
      </div>
      <div id="work">
        <WorkExperience />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="resume">
        <Resume />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}

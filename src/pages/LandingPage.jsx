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
  const hasInitializedRef = useRef(false);

  useEffect(() => {
    // Skip if this is from the scroll listener
    if (location.state?.fromScroll) {
      return;
    }

    const sectionId = pathToSection[location.pathname] || "about";
    const section = document.getElementById(sectionId);

    if (section) {
      isScrollingRef.current = true;
      // Small delay to ensure DOM is ready
      setTimeout(() => {
        // On mobile, account for navbar height (64px = h-16)
        const isMobile = window.innerWidth < 1024;
        const scrollOptions = {
          behavior: "smooth",
          block: isMobile ? "start" : "start",
        };

        if (isMobile) {
          // Get navbar height and scroll with offset
          const navbarHeight = 64; // pt-16 = 4rem = 64px
          const elementPosition =
            section.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = elementPosition - navbarHeight;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        } else {
          section.scrollIntoView(scrollOptions);
        }

        // Reset flag after scroll completes
        setTimeout(() => {
          isScrollingRef.current = false;
          hasInitializedRef.current = true;
        }, 1000);
      }, 100);
    }
  }, [location.pathname, location.state]);

  // Update URL based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (isScrollingRef.current) return;

      const sections = ["about", "work", "projects", "resume", "contact"];
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

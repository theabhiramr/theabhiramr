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
        try {
          // On mobile, account for navbar height (64px = h-16)
          const isMobile = window.innerWidth < 1024;

          if (isMobile) {
            // Get navbar height and scroll with offset
            const navbarHeight = 64; // pt-16 = 4rem = 64px
            const elementPosition =
              section.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - navbarHeight;

            // iOS-friendly scroll - use instant on Firefox iOS to prevent crashes
            const isFirefox = navigator.userAgent
              .toLowerCase()
              .includes("firefox");
            window.scrollTo({
              top: offsetPosition,
              behavior: isFirefox ? "auto" : "smooth",
            });
          } else {
            // Use scrollIntoView for desktop
            section.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }
        } catch (e) {
          // Fallback for Firefox iOS
          try {
            section.scrollIntoView();
          } catch (err) {
            // Ignore if all scroll methods fail
          }
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
      
      // Firefox iOS needs different scroll detection
      const isFirefox = navigator.userAgent.toLowerCase().includes("firefox");
      const offset = isFirefox ? window.innerHeight * 0.5 : window.innerHeight / 3;
      const scrollPosition = window.scrollY + offset;
      
      // Add a minimum scroll threshold to prevent false triggers
      const minScrollThreshold = 50;
      if (window.scrollY < minScrollThreshold && location.pathname === "/") {
        return; // Don't update if we're already on home and barely scrolled
      }

      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            const newPath = sectionToPath[sectionId];
            if (newPath && location.pathname !== newPath) {
              navigate(newPath, { replace: true, state: { fromScroll: true } });
            }
            break;
          }
        }
      }
    };

    // Use passive listeners for better iOS performance
    window.addEventListener("scroll", handleScroll, { passive: true });
    // Also listen to touchmove for iOS momentum scrolling
    window.addEventListener("touchmove", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("touchmove", handleScroll);
    };
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

import React, { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Home from "./About";
import WorkExperience from "./WorkExperience";
import Projects from "./Projects";
import Resume from "./Resume";
import Contact from "./Contact";

// Define sections configuration for easier management
const SECTIONS = [
  { id: "about", path: "/" },
  { id: "work", path: "/work" },
  { id: "projects", path: "/projects" },
  { id: "resume", path: "/resume" },
  { id: "contact", path: "/contact" },
];

export default function LandingPage() {
  const location = useLocation();
  const navigate = useNavigate();
  // Ref to track if we are currently performing an automated scroll
  const isAutoScrolling = useRef(false);

  // 1. Handle browser scroll restoration
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  // 2. Handle Scroll-to-Section logic when URL changes (e.g. Navigation clicked)
  useEffect(() => {
    // If the navigation came from our own scroll observer, don't auto-scroll back
    if (location.state?.fromScroll) return;

    const activeSection = SECTIONS.find((s) => s.path === location.pathname);
    const targetId = activeSection ? activeSection.id : "about";
    const element = document.getElementById(targetId);

    if (element) {
      // Calculate position
      const isMobile = window.innerWidth < 1024;
      const navbarOffset = isMobile ? 80 : 0;
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      const targetPosition = elementPosition - navbarOffset;

      // Avoid "micro-adjustments" if we are already close enough (prevents jitter)
      if (Math.abs(window.scrollY - targetPosition) < 50) return;

      isAutoScrolling.current = true;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth", // Smooth scroll looks better and is standard
      });

      // Unlock the observer after the scroll animation roughly finishes
      const timeout = setTimeout(() => {
        isAutoScrolling.current = false;
      }, 800);

      return () => clearTimeout(timeout);
    }
  }, [location.pathname, location.state]);

  // 3. Handle URL updates when User Scrolls (Intersection Observer)
  useEffect(() => {
    // We use a debounce timer to avoid rapid URL updates while scrolling quickly through sections
    let debounceTimer;

    // Options: Trigger when an element is in the middle-top part of the screen
    const observerOptions = {
      root: null,
      // "Margin" shrinks the viewport box that triggers the intersection.
      // -30% from top means the detection line starts 30% down the screen.
      // -50% from bottom means the detection line ends 50% from the bottom.
      // Roughly creates a detection zone in the upper-middle of the screen.
      rootMargin: "-30% 0px -50% 0px",
      threshold: 0,
    };

    const handleIntersect = (entries) => {
      // Do not update URL if we are running an auto-scroll animation
      if (isAutoScrolling.current) return;

      const intersectingEntry = entries.find((entry) => entry.isIntersecting);

      if (intersectingEntry) {
        const matched = SECTIONS.find(
          (s) => s.id === intersectingEntry.target.id,
        );
        if (matched && location.pathname !== matched.path) {
          // Clear any pending updates
          if (debounceTimer) clearTimeout(debounceTimer);

          // fast scrolling? wait a bit before committing the URL change.
          // This prevents history flooding and performance stutters.
          debounceTimer = setTimeout(() => {
            navigate(matched.path, {
              replace: true,
              state: { fromScroll: true },
            });
          }, 350); // 350ms delay
        }
      }
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
      if (debounceTimer) clearTimeout(debounceTimer);
    };
  }, [navigate, location.pathname]); // Add location.pathname back to dependencies to fix stale closure bug

  return (
    <div className="px-6 lg:px-12">
      <section id="about">
        <Home />
      </section>
      <section id="work">
        <WorkExperience />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="resume">
        <Resume />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

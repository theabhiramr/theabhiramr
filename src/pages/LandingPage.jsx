import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Home from "./About";
import WorkExperience from "./WorkExperience";
import Projects from "./Projects";
import Resume from "./Resume";
import Contact from "./Contact";

const SECTIONS = [
  { id: "about", path: "/" },
  { id: "work", path: "/work" },
  { id: "projects", path: "/projects" },
  { id: "resume", path: "/resume" },
  { id: "contact", path: "/contact" },
];

export default function LandingPage({ onSectionChange }) {
  const location = useLocation();

  // Disable browser scroll restoration so our scroll-to-section works correctly
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  // Scroll to the section matching the current URL on navigation
  useEffect(() => {
    const activeSection = SECTIONS.find((s) => s.path === location.pathname);
    const targetId = activeSection ? activeSection.id : "about";
    const element = document.getElementById(targetId);

    if (!element) return;

    const isMobile = window.innerWidth < 1024;
    const navbarOffset = isMobile ? 80 : 0;
    const targetPosition =
      element.getBoundingClientRect().top + window.scrollY - navbarOffset;

    if (Math.abs(window.scrollY - targetPosition) < 50) return;

    window.scrollTo({ top: targetPosition, behavior: "smooth" });
  }, [location.pathname]);

  // Update sidebar active state as the user scrolls
  useEffect(() => {
    let debounceTimer;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((e) => e.isIntersecting);
        if (!visible) return;

        const matched = SECTIONS.find((s) => s.id === visible.target.id);
        if (!matched) return;

        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
          onSectionChange(matched.id);
        }, 100);
      },
      { rootMargin: "-30% 0px -50% 0px", threshold: 0 },
    );

    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
      clearTimeout(debounceTimer);
    };
  }, [onSectionChange]);

  return (
    <div>
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

import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Footer, Navbar, Sidebar } from "./components";
import LandingPage from "./pages/LandingPage";
import Secret from "./pages/Secret";
import NotFound from "./pages/NotFound";
import { useMediaQuery } from "./hooks/useMediaQuery";

function App() {
  const location = useLocation();
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  const pathToSection = {
    "/": "about",
    "/work": "work",
    "/projects": "projects",
    "/resume": "resume",
    "/contact": "contact",
  };

  const activeSection = pathToSection[location.pathname] || "about";
  const isLandingPage = Object.keys(pathToSection).includes(location.pathname);

  return (
    <div
      className="bg-background text-content min-h-screen transition-colors duration-300"
      style={{ WebkitOverflowScrolling: "touch" }}
    >
      {/* Mobile Navbar: Fixed at top on small screens */}
      {isLandingPage && !isDesktop && <Navbar />}

      {/* LAYOUT WRAPPER:
          Matches Footer: mx-auto, max-w-7xl, px-8.
          This ensures the Sidebar + Content line up exactly with the Footer edges.
      */}
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="flex min-h-screen flex-col lg:flex-row">
          {/* Sidebar: Sits snugly on the left inside the 7xl container */}
          {isLandingPage && isDesktop && (
            <Sidebar activeSection={activeSection} />
          )}

          {/* Content Layer */}
          <div
            className={`w-full flex-1 ${
              !isDesktop && isLandingPage ? "pt-16" : ""
            }`}
          >
            {/* MAIN CONTENT:
                - lg:pl-12: This is the ONLY gap between sidebar and content. 
                - py-10: Vertical spacing.
            */}
            <main className="w-full py-10 lg:py-16 lg:pl-12">
              <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/work" element={<LandingPage />} />
                <Route path="/projects" element={<LandingPage />} />
                <Route path="/resume" element={<LandingPage />} />
                <Route path="/contact" element={<LandingPage />} />
                <Route path="/secret" element={<Secret />} />
                <Route path="/404" element={<NotFound />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
          </div>
        </div>
      </div>

      {isLandingPage && <Footer />}
    </div>
  );
}

export default App;

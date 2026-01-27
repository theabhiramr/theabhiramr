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
    <div className="bg-background text-content min-h-screen transition-colors duration-300">
      <div className="lg:flex">
        {isLandingPage &&
          (isDesktop ? <Sidebar activeSection={activeSection} /> : <Navbar />)}
        <div
          className={`w-full flex-1 ${!isDesktop && isLandingPage ? "pt-16" : ""}`}
        >
          <main className="flex-grow pr-4 lg:pr-8">
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
      {isLandingPage && <Footer />}
    </div>
  );
}

export default App;

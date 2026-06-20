import { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Footer, Navbar, Sidebar } from "./components";
import LandingPage from "./pages/LandingPage";
import Secret from "./pages/Secret";
import NotFound from "./pages/NotFound";
import { useMediaQuery } from "./hooks/useMediaQuery";

const pathToSection = {
  "/": "about",
  "/work": "work",
  "/projects": "projects",
  "/resume": "resume",
  "/contact": "contact",
};

function App() {
  const location = useLocation();
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  const [activeSection, setActiveSection] = useState(
    pathToSection[location.pathname] || "about",
  );

  const isLandingPage = Object.keys(pathToSection).includes(location.pathname);

  return (
    <div
      className="bg-background text-content min-h-screen transition-colors duration-300"
      style={{ WebkitOverflowScrolling: "touch" }}
    >
      {isLandingPage && !isDesktop && <Navbar />}

      <div className="mx-auto max-w-7xl px-8">
        <div className="flex min-h-screen flex-col lg:flex-row">
          {isLandingPage && isDesktop && (
            <Sidebar activeSection={activeSection} />
          )}

          <div
            className={`w-full flex-1 ${
              !isDesktop && isLandingPage ? "pt-16" : ""
            }`}
          >
            <main className="w-full py-6 md:py-10 lg:py-16 lg:pl-12">
              <Routes>
                <Route
                  path="/"
                  element={<LandingPage onSectionChange={setActiveSection} />}
                />
                <Route
                  path="/work"
                  element={<LandingPage onSectionChange={setActiveSection} />}
                />
                <Route
                  path="/projects"
                  element={<LandingPage onSectionChange={setActiveSection} />}
                />
                <Route
                  path="/resume"
                  element={<LandingPage onSectionChange={setActiveSection} />}
                />
                <Route
                  path="/contact"
                  element={<LandingPage onSectionChange={setActiveSection} />}
                />
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

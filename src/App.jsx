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

  if (!isLandingPage) {
    return (
      <Routes>
        <Route path="/secret" element={<Secret />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    );
  }

  return (
    <div
      className="bg-background text-content min-h-screen transition-colors duration-300"
      style={{ WebkitOverflowScrolling: "touch" }}
    >
      {!isDesktop && <Navbar />}

      <div className="mx-auto max-w-7xl px-8">
        <div className="flex min-h-screen flex-col lg:flex-row">
          {isDesktop && <Sidebar activeSection={activeSection} />}

          <div className={`w-full flex-1 ${!isDesktop ? "pt-16" : ""}`}>
            <main className="w-full py-6 md:py-10 lg:py-16 lg:pl-12">
              <Routes>
                {/* Layout route: LandingPage stays mounted across all section paths */}
                <Route element={<LandingPage onSectionChange={setActiveSection} />}>
                  <Route path="/" />
                  <Route path="/work" />
                  <Route path="/projects" />
                  <Route path="/resume" />
                  <Route path="/contact" />
                </Route>
              </Routes>
            </main>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;

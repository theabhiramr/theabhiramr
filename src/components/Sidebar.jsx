import { useNavigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { logoLight, logoDark } from "../assets";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { name: "About", section: "about", path: "/" },
  { name: "Work", section: "work", path: "/work" },
  { name: "Projects", section: "projects", path: "/projects" },
  { name: "Resume", section: "resume", path: "/resume" },
  { name: "Contact", section: "contact", path: "/contact" },
];

export default function Sidebar({ activeSection }) {
  const navigate = useNavigate();
  const { theme } = useTheme();

  const handleNavClick = (path) => {
    navigate(path);
  };

  const SidebarContent = ({ includeLogo = true }) => (
    <div className="flex h-full flex-col justify-between">
      {/* Top Section: Branding & Nav */}
      <div className="space-y-12">
        <header className="space-y-4">
          {includeLogo && (
            <div className="flex items-center gap-4">
              <img
                src={
                  theme === "dark" || theme === "system" ? logoDark : logoLight
                }
                alt="Logo"
                className="h-8 w-8"
              />
            </div>
          )}
        </header>

        {/* Navigation */}
        <nav className="hidden lg:block">
          <ul className="space-y-6">
            {navItems.map((item) => {
              const isActive = activeSection === item.section;
              return (
                <li key={item.name}>
                  <button
                    onClick={() => handleNavClick(item.path)}
                    className={`touch-manipulation text-left text-2xl font-bold tracking-tighter transition-colors ${
                      isActive
                        ? "text-content"
                        : "text-muted hover:text-content"
                    }`}
                    style={{
                      WebkitTapHighlightColor: "transparent",
                      touchAction: "manipulation",
                    }}
                  >
                    {item.name}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      {/* Bottom Section: Theme Toggle */}
      <div className="hidden lg:flex lg:items-center">
        <ThemeToggle />
      </div>
    </div>
  );

  return (
    <aside className="hidden lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-1/3 lg:flex-col lg:justify-between lg:p-16">
      <SidebarContent />
    </aside>
  );
}

import React from "react";
import { useTheme } from "../context/ThemeContext";
import { FiSun, FiMoon, FiMonitor } from "react-icons/fi";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const themes = [
    { value: "light", icon: FiSun },
    { value: "dark", icon: FiMoon },
    { value: "system", icon: FiMonitor },
  ];

  const activeIndex = themes.findIndex((t) => t.value === theme);

  return (
    <div className="bg-surface border-border relative flex items-center rounded-full border p-1">
      <div
        className="bg-content absolute h-8 w-8 rounded-full transition-transform duration-300 ease-in-out"
        style={{ transform: `translateX(${activeIndex * 100}%)` }}
      />
      {themes.map(({ value, icon: Icon }) => (
        <button
          key={value}
          onClick={() => setTheme(value)}
          className="relative z-10 rounded-full p-2 transition-colors"
          aria-label={`Set theme to ${value}`}
        >
          <Icon
            className={`h-4 w-4 transition-colors ${
              theme === value
                ? "text-background"
                : "text-muted hover:text-content"
            }`}
          />
        </button>
      ))}
    </div>
  );
};

export default ThemeToggle;

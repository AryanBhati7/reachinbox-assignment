import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(darkMode ? "light" : "dark");
    root.classList.add(darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <div className="flex items-center mr-3">
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="sr-only"
          checked={darkMode}
          onChange={() => setDarkMode(!darkMode)}
        />
        <div className="toggle-bg w-14 h-8 dark:bg-gray-800 bg-[#ECEFF3] rounded-full p-1 flex items-center">
          <div
            className={`toggle-circle w-6 h-6 rounded-full transition-transform ${
              darkMode
                ? "translate-x-6 bg-gray-400"
                : "translate-x-0 bg-gray-600"
            }`}
          />
          <FaSun className="text-yellow-500 ml-auto" />
        </div>
      </label>
    </div>
  );
}

export default ThemeToggle;


import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

function ThemeToggle() {
  const [dark, setDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    const root = document.documentElement;

    if (dark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <button
      type="button"
      onClick={() => setDark((previous) => !previous)}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      className="inline-flex items-center gap-2 rounded-xl border border-purple-200 bg-white px-4 py-2.5 font-semibold text-purple-700 shadow-sm transition hover:bg-purple-50 dark:border-purple-500 dark:bg-gray-900 dark:text-purple-200 dark:hover:bg-gray-800"
    >
      {dark ? (
        <>
          <Sun size={18} />
          Light Mode
        </>
      ) : (
        <>
          <Moon size={18} />
          Dark Mode
        </>
      )}
    </button>
  );
}

export default ThemeToggle;

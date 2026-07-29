import { useEffect, useState } from "react";

function ThemeToggle() {

  const [dark, setDark] = useState(true);

  useEffect(() => {

    if (dark) {

      document.documentElement.classList.add("dark");

    } else {

      document.documentElement.classList.remove("dark");

    }

  }, [dark]);

  return (

    <button
      onClick={() => setDark(!dark)}
      className="bg-cyan-500 px-4 py-2 rounded-lg text-white"
    >
      {dark ? "☀️ Light" : "🌙 Dark"}
    </button>

  );

}

export default ThemeToggle;
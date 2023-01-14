"use client";

import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

function DarkMode() {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const mode = theme === "system" ? systemTheme : theme;

  console.log({ systemTheme, theme, mode });
  return (
    <div>
      {mode === "dark" ? (
        <SunIcon
          onClick={() => setTheme("light")}
          className="icon cursor-pointer"
        />
      ) : (
        <MoonIcon
          onClick={() => setTheme("dark")}
          className="icon cursor-pointer"
        />
      )}
    </div>
  );
}

export default DarkMode;

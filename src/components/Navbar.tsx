"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export const Navbar = () => {
  const { setTheme, resolvedTheme } = useTheme(); // removed unused 'theme'
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <nav className="w-full px-6 py-4 flex items-center justify-between top-0 z-50">
      <Link href="/" className="text-xl font-bold tracking-tight hover:text-red-500">
        Suhail Khan
      </Link>

      <div className="flex items-center gap-4">
        <Link href="/#about" className="hover:text-red-500 transition-colors">About</Link>
        <Link href="/#projects" className="hover:text-red-500 transition-colors">Projects</Link>
        <Link href="/#contact" className="hover:text-red-500 transition-colors">Contact</Link>

        {/* Theme Toggle */}
        {mounted && (
          <button
            aria-label="Toggle Dark Mode"
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full hover:text-red-500 transition-colors duration-300"
          >
            {resolvedTheme === "dark" ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </button>
        )}
      </div>
    </nav>
  );
};

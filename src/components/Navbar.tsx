"use client";
import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import Image from "next/image";
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "light";
    setTheme(storedTheme);
    document.documentElement.classList.toggle("dark", storedTheme === "dark");
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky h-[90px] top-0 left-0 w-full z-50 transition-all  duration-300 ${
        isScrolled ? "bg-transparent backdrop-blur-md shadow-lg" : "bg-[#f9fbf9] dark:bg-gray-900"
      }`}
    >
      <div className="container h-[90px] mx-auto px-7  md:py-4 flex justify-between items-center">
        <div className="relative w-[12rem] h-[90px] md:w-[16rem] md:h-[120px]">
          <Image
            src="https://cdn.prod.website-files.com/66dab781497d9a528975cd7a/66daf9668236041a506e46d7_Logo.svg"
            alt="Dynamic Image"
            fill
            className="object-fill"
            priority
          />
        </div>

        <div className="hidden md:flex space-x-6 md:items-center">
          <a href="#services" className="text-md tracking-tight font-bold dark:text-white text-gray-500 hover:text-black">
            Unlisted Shares
          </a>
          <a href="#contact" className="text-md tracking-tight font-bold dark:text-white text-gray-500 hover:text-black">
            Contact Us
          </a>

          <div className="flex items-center">
            <button
              onClick={toggleTheme}
              aria-label="Toggle Dark Mode"
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100 hover:shadow-md transition"
            >
              {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button className="text-gray-700 hover:text-green-600">
            {/* Add a hamburger menu icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

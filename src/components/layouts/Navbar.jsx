import React, { useEffect, useState, useCallback } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

const navLinks = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Education", id: "education" },
  { name: "Contact", id: "contact" },
];

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;
    setScrolled(scrollY > 50);

    navLinks.forEach((link) => {
      const section = document.getElementById(link.id);
      if (section) {
        const top = section.offsetTop - 90;
        const bottom = top + section.offsetHeight;
        if (scrollY >= top && scrollY < bottom) setActive(link.id);
      }
    });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    const handleKey = (e) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", handleKey);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleKey);
    };
  }, [handleScroll]);

  const scrollToSection = useCallback((id) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth", block: "start" });
    setMenuOpen(false);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-900/95 backdrop-blur-md shadow-lg py-2"
          : "bg-slate-900 py-4"
      }`}
      aria-label="Main navigation"
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between transition-all duration-300">
        {/* Logo */}
        <div
          onClick={() => scrollToSection("home")}
          className="text-2xl sm:text-3xl font-bold cursor-pointer bg-clip-text text-transparent bg-gradient-to-r from-red-700 to-red-500 select-none transition-all duration-300"
        >
          Srikantha L
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`cursor-pointer font-medium relative transition-all duration-300 ${
                active === link.id
                  ? "text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-red-500 after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-red-700 after:to-red-500"
                  : "text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-red-500 hover:opacity-80"
              }`}
            >
              {link.name}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white text-2xl focus:outline-none"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: menuOpen ? 1 : 0, y: menuOpen ? 0 : -20 }}
        transition={{ duration: 0.3 }}
        className="md:hidden bg-slate-900/95 backdrop-blur-md flex flex-col items-center gap-6 py-6"
        style={{ display: menuOpen ? "flex" : "none" }}
      >
        {navLinks.map((link) => (
          <li
            key={link.id}
            onClick={() => scrollToSection(link.id)}
            className="cursor-pointer font-medium text-white hover:opacity-80 transition-opacity duration-300"
          >
            {link.name}
          </li>
        ))}
      </motion.div>
    </nav>
  );
};

export default Navbar;

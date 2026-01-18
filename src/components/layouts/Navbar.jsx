import React, { useEffect, useState, useCallback } from "react";
import { HiMenu, HiX } from "react-icons/hi";

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

  // Throttled scroll handler using requestAnimationFrame
  const handleScroll = useCallback(() => {
    let ticking = false;

    const update = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 50);

      navLinks.forEach((link) => {
        const section = document.getElementById(link.id);
        if (section) {
          const top = section.offsetTop - 100;
          const height = section.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            setActive(link.id);
          }
        }
      });
      ticking = false;
    };

    if (!ticking) {
      window.requestAnimationFrame(update);
      ticking = true;
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Close mobile menu on ESC key
    const handleKey = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", handleKey);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleKey);
    };
  }, [handleScroll]);

  const scrollToSection = useCallback((id) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-900/90 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
      aria-label="Main navigation"
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <div
          onClick={() => scrollToSection("home")}
          className="text-xl font-bold cursor-pointer text-blue-500 select-none"
        >
          Srikantha
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`cursor-pointer font-medium transition-colors duration-300 relative ${
                active === link.id
                  ? "text-blue-500 after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-blue-500"
                  : "text-slate-300 hover:text-blue-400"
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
            className="text-slate-300 hover:text-blue-400 text-2xl focus:outline-none"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden bg-slate-900/95 backdrop-blur-md flex flex-col items-center gap-6 py-6">
          {navLinks.map((link) => (
            <li
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`cursor-pointer font-medium transition-colors duration-300 ${
                active === link.id
                  ? "text-blue-500"
                  : "text-slate-300 hover:text-blue-400"
              }`}
            >
              {link.name}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;

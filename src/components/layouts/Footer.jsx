import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">

        {/* Left: Copyright */}
        <p className="text-slate-400 text-sm text-center md:text-left">
          © {new Date().getFullYear()}{" "}
          <span className="text-slate-200 font-medium">Srikantha</span>. All rights reserved.
        </p>

        {/* Right: Social Icons */}
        <div className="flex items-center gap-6 text-xl">
          <a
            href="https://github.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-slate-400 hover:text-blue-500 transition-colors duration-300"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/your-linkedin"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-slate-400 hover:text-blue-500 transition-colors duration-300"
          >
            <FaLinkedin />
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import ProfilePic from "../../assets/Profile.jpeg";

const textVariant = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const imageVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: "easeOut" } },
};

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 bg-slate-950">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <motion.div
          variants={textVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-white">
            Hi, I’m{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Srikantha
            </span>
          </h1>

          <h2 className="text-xl sm:text-2xl text-slate-400 font-medium">
            M.Tech Computer Science & Engineering
          </h2>

          <p className="text-slate-300 max-w-xl leading-relaxed">
            I am an M.Tech CSE 2nd Year student with hands-on experience in
            building scalable web applications using React, Tailwind CSS,
            FastAPI, and MongoDB. I enjoy solving real-world problems through
            clean and efficient code.
          </p>

          {/* Buttons and Social Links */}
          <div className="flex flex-wrap items-center gap-4 mt-6">
            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 transition-transform duration-300 font-medium text-white"
              whileHover={{ scale: 1.05 }}
            >
              Download Resume
            </motion.a>

            <div className="flex items-center gap-4 text-2xl text-slate-400">
              <a
                href="https://github.com/your-github"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="hover:text-blue-500 transition-colors duration-300"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com/in/your-linkedin"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:text-blue-500 transition-colors duration-300"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          variants={imageVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex justify-center relative"
        >
          {/* Floating Background Blob */}
          <motion.div
            className="absolute w-64 h-64 sm:w-72 sm:h-72 rounded-full bg-blue-500 opacity-30 blur-3xl"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          ></motion.div>

          <motion.img
            src={ProfilePic}
            alt="Srikantha Profile Picture"
            className="relative w-64 h-64 sm:w-72 sm:h-72 object-cover rounded-full border-4 border-blue-500 cursor-pointer"
            style={{ objectPosition: "center 29%" }}
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

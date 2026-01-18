import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGithub,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiFastapi,
  SiMysql,
  SiPython,
} from "react-icons/si";

const skillsData = [
  {
    category: "Frontend",
    skills: [
      { name: "React JS", icon: <FaReact /> },
      { name: "JavaScript", icon: <FaJs /> },
      { name: "HTML5", icon: <FaHtml5 /> },
      { name: "CSS3", icon: <FaCss3Alt /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "FastAPI", icon: <SiFastapi /> },
      { name: "Python", icon: <SiPython /> },
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "REST APIs", icon: <FaNodeJs /> },
    ],
  },
  {
    category: "Database",
    skills: [
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "MySQL", icon: <SiMysql /> },
    ],
  },
  {
    category: "Tools & Concepts",
    skills: [
      { name: "Git & GitHub", icon: <FaGithub /> },
      { name: "DBMS", icon: <FaNodeJs /> },
      { name: "System Design", icon: <FaReact /> },
      { name: "Data Structures", icon: <FaJs /> },
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative py-24 px-6 md:px-12 bg-slate-950 overflow-hidden"
    >
      {/* ---------------- Floating Glass Rectangles ---------------- */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-lg bg-white/5 border border-white/10 shadow-[0_0_25px_rgba(255,0,0,0.1)]"
          style={{
            width: `${60 + i * 15}px`,
            height: `${25 + i * 10}px`,
            top: `${(i * 18) % 90}%`,
            left: `${(i * 14) % 90}%`,
          }}
          animate={{
            x: [0, i % 2 === 0 ? 20 : -20, 0],
            y: [0, i % 2 === 0 ? -15 : 15, 0],
            rotate: [0, i % 2 === 0 ? 8 : -8, 0],
          }}
          transition={{
            duration: 12 + i,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="relative max-w-6xl mx-auto z-10">
        {/* ---------------- Section Header ---------------- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 text-center md:text-left"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Technical{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-800">
              Skills
            </span>
          </h2>
          <p className="mt-3 text-slate-400 text-lg md:text-base">
            Technologies and tools I work with
          </p>
        </motion.div>

        {/* ---------------- Skills Grid ---------------- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillsData.map((group, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-[0_0_30px_rgba(255,0,0,0.15)]"
            >
              <h3 className="text-xl md:text-2xl font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-800">
                {group.category}
              </h3>

              <div className="grid grid-cols-2 gap-4">
                {group.skills.map((skill, idx) => (
                  <motion.div
                    key={idx}
                    className="flex items-center gap-3 p-3 rounded-xl bg-slate-700/60 hover:bg-slate-700/40 transition-all duration-300 shadow-sm hover:shadow-lg cursor-pointer"
                    whileHover={{ scale: 1.08, translateY: -4 }}
                  >
                    <span className="text-3xl text-red-500">{skill.icon}</span>
                    <span className="text-slate-200 font-medium">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

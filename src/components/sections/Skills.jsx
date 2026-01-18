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
    <section id="skills" className="py-20 px-6 bg-slate-950">
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 text-center md:text-left"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Technical <span className="text-blue-500">Skills</span>
          </h2>
          <p className="mt-3 text-slate-400 text-lg md:text-base">
            Technologies and tools I work with
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillsData.map((group, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-slate-800 rounded-2xl p-6 shadow-lg"
            >
              <h3 className="text-xl md:text-2xl font-semibold mb-6 text-blue-400">
                {group.category}
              </h3>

              <div className="grid grid-cols-2 gap-4">
                {group.skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-3 rounded-xl bg-slate-700 hover:bg-slate-600 transition-colors duration-300"
                  >
                    <span className="text-3xl text-blue-500">{skill.icon}</span>
                    <span className="text-slate-200 font-medium">{skill.name}</span>
                  </div>
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

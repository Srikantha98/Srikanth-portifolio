import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projectsData = [
  {
    title: "SriHousing – House Management System",
    description:
      "A scalable house management system designed to manage multiple properties, units, tenants, water meters, deposits, and payments. Focused on clean database design, role-based access, and real-world rental workflows.",
    tech: ["React", "Tailwind CSS", "FastAPI", "MongoDB"],
    github: "https://github.com/your-username/srihousing",
    live: "",
  },
  {
    title: "SriHealth – Healthcare Management Backend",
    description:
      "Backend system for healthcare management including authentication, secure APIs, and structured data handling. Built with a focus on performance, security, and clean API architecture.",
    tech: ["FastAPI", "MongoDB", "JWT", "REST APIs"],
    github: "https://github.com/your-username/srihealth-backend",
    live: "",
  },
  {
    title: "Personal Portfolio Website",
    description:
      "A modern, responsive personal portfolio to showcase academic background, technical skills, and projects. Designed with clean UI, animations, and mobile-first responsiveness.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/your-username/portfolio",
    live: "",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative py-24 px-6 md:px-12 bg-slate-950 overflow-hidden"
    >
      {/* ---------------- Floating Glass Rectangles ---------------- */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-lg bg-white/5 border border-white/10 shadow-[0_0_25px_rgba(255,0,0,0.1)]"
          style={{
            width: `${60 + i * 20}px`,
            height: `${25 + i * 15}px`,
            top: `${(i * 17) % 90}%`,
            left: `${(i * 13) % 90}%`,
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
            Projects{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-800">
              Work
            </span>
          </h2>
          <p className="mt-3 text-slate-400 text-lg md:text-base">
            Selected academic and personal projects
          </p>
        </motion.div>

        {/* ---------------- Projects Grid ---------------- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="relative rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-6 shadow-[0_0_30px_rgba(255,0,0,0.15)] hover:shadow-[0_0_40px_rgba(255,0,0,0.3)] hover:-translate-y-1 transition-all duration-300"
            >
              <h3 className="text-xl md:text-2xl font-semibold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-800">
                {project.title}
              </h3>

              <p className="text-slate-300 mb-5 leading-relaxed md:text-base">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-sm px-3 py-1 rounded-full bg-slate-700/60 text-slate-200 backdrop-blur-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-300 hover:text-red-500 transition-colors duration-300"
                >
                  <FaGithub /> Code
                </a>

                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-slate-300 hover:text-red-500 transition-colors duration-300"
                  >
                    <FaExternalLinkAlt /> Live
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

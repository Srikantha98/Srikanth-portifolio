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
    <section id="projects" className="py-20 px-6 bg-slate-950">
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
            Projects <span className="text-blue-500">Work</span>
          </h2>
          <p className="mt-3 text-slate-400 text-lg md:text-base">
            Selected academic and personal projects
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl md:text-2xl font-semibold mb-3 text-blue-400">
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
                    className="text-sm px-3 py-1 rounded-full bg-slate-700 text-slate-200"
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
                  className="flex items-center gap-2 text-slate-300 hover:text-blue-500 transition-colors duration-300"
                >
                  <FaGithub /> Code
                </a>

                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-slate-300 hover:text-blue-500 transition-colors duration-300"
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

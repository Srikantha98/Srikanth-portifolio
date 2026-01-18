import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20 px-6 md:px-12 bg-slate-900">
      <div className="max-w-5xl mx-auto">

        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center md:text-left"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            About <span className="text-blue-500">Me</span>
          </h2>
          <p className="mt-3 text-slate-400 text-lg md:text-base">
            Who I am and what I work on
          </p>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-6 text-slate-300 leading-relaxed text-base md:text-lg"
        >
          <p>
            I am an <strong className="text-slate-100">M.Tech 2nd Year student in Computer Science and Engineering</strong>, with a strong interest in software development, system design, and scalable web applications. I focus on building clean, maintainable, and efficient solutions using modern technologies.
          </p>

          <p>
            My academic background has given me a solid foundation in <strong className="text-slate-100">Data Structures, Algorithms, DBMS, Operating Systems, and Computer Networks</strong>. Alongside academics, I actively work on real-world projects involving full-stack development and backend architecture.
          </p>

          <p>
            I have hands-on experience with technologies such as <strong className="text-slate-100">React JS, Tailwind CSS, FastAPI, MongoDB, and REST APIs</strong>. I enjoy converting complex requirements into simple, user-friendly applications with a focus on performance and scalability.
          </p>

          <p>
            I am currently seeking <strong className="text-slate-100">internship and full-time opportunities</strong> where I can contribute as a software engineer, learn from experienced professionals, and grow as a developer.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default About;

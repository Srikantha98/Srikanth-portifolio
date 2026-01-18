import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="relative py-24 px-6 md:px-12 bg-slate-950 overflow-hidden"
    >
      {/* ---------------- Background Glass Rectangles ---------------- */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-lg bg-white/5 border border-white/10 shadow-[0_0_20px_rgba(255,0,0,0.1)]"
          style={{
            width: `${60 + i * 10}px`,
            height: `${20 + i * 5}px`,
            top: `${(i * 15) % 90}%`,
            left: `${(i * 12) % 90}%`,
          }}
          animate={{
            x: [0, i % 2 === 0 ? 15 : -15, 0],
            y: [0, i % 2 === 0 ? -10 : 10, 0],
            rotate: [0, i % 2 === 0 ? 6 : -6, 0],
          }}
          transition={{
            duration: 12 + i,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* ---------------- Soft Background Glow ---------------- */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-red-500/10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 -right-40 w-96 h-96 bg-red-600/10 blur-3xl rounded-full" />

      <div className="relative max-w-5xl mx-auto z-10">
        {/* ---------------- Section Title ---------------- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center md:text-left"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            About{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-800">
              Me
            </span>
          </h2>
          <p className="mt-3 text-slate-400 text-lg md:text-base">
            Who I am and what I work on
          </p>
        </motion.div>

        {/* ---------------- Glass Card ---------------- */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_40px_rgba(255,0,0,0.15)] p-8 md:p-10 space-y-6 text-slate-300 leading-relaxed text-base md:text-lg"
        >
          <p>
            I am an{" "}
            <span className="text-white font-semibold">
              M.Tech 2nd Year student in Computer Science and Engineering
            </span>{" "}
            with a strong interest in software development, system design, and
            building scalable web applications. I focus on creating clean,
            maintainable, and efficient solutions using modern technologies.
          </p>

          <p>
            My academic foundation includes{" "}
            <span className="text-white font-semibold">
              Data Structures, Algorithms, DBMS, Operating Systems, and Computer
              Networks
            </span>
            . Alongside academics, I actively work on real-world projects that
            emphasize full-stack development and backend architecture.
          </p>

          <p>
            I have hands-on experience with{" "}
            <span className="text-white font-semibold">
              React JS, Tailwind CSS, FastAPI, MongoDB, and RESTful APIs
            </span>
            . I enjoy transforming complex requirements into simple,
            user-friendly applications while maintaining performance and
            scalability.
          </p>

          <p>
            Currently, I am seeking{" "}
            <span className="text-white font-semibold">
              internship and full-time opportunities
            </span>{" "}
            where I can contribute as a software engineer, collaborate with
            experienced professionals, and continue growing as a developer.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

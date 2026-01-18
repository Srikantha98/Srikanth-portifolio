import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative py-24 px-6 md:px-12 bg-slate-950 overflow-hidden"
    >
      {/* Floating Background Rectangles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-lg bg-white/5 border border-white/10 shadow-[0_0_25px_rgba(255,0,0,0.1)]"
          style={{
            width: `${80 + i * 15}px`,
            height: `${20 + i * 10}px`,
            top: `${(i * 18) % 90}%`,
            left: `${(i * 14) % 90}%`,
          }}
          animate={{
            x: [0, i % 2 === 0 ? 20 : -20, 0],
            y: [0, i % 2 === 0 ? -15 : 15, 0],
            rotate: [0, i % 2 === 0 ? 6 : -6, 0],
          }}
          transition={{
            duration: 12 + i,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="relative max-w-5xl mx-auto z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 text-center md:text-left"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Get In{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-800">
              Touch
            </span>
          </h2>
          <p className="mt-3 text-slate-400 text-lg md:text-base">
            Feel free to contact me for opportunities or collaboration
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left Info Card */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-8 shadow-[0_0_30px_rgba(255,0,0,0.15)] hover:shadow-[0_0_40px_rgba(255,0,0,0.25)] transition-all duration-300 space-y-6 text-slate-300"
          >
            <p className="leading-relaxed">
              I am currently open to{" "}
              <span className="text-slate-100 font-medium">
                internship and full-time roles
              </span>{" "}
              in software development. If you have an opportunity or would like
              to discuss a project, feel free to reach out.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <FaEnvelope className="text-2xl text-gradient bg-gradient-to-r from-red-600 to-red-800" />
                <a
                  href="mailto:your.email@example.com"
                  className="hover:text-red-600 transition-colors duration-300"
                >
                  your.email@example.com
                </a>
              </div>

              <div className="flex items-center gap-4">
                <FaGithub className="text-2xl text-gradient bg-gradient-to-r from-red-600 to-red-800" />
                <a
                  href="https://github.com/your-username"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-red-600 transition-colors duration-300"
                >
                  github.com/your-username
                </a>
              </div>

              <div className="flex items-center gap-4">
                <FaLinkedin className="text-2xl text-gradient bg-gradient-to-r from-red-600 to-red-800" />
                <a
                  href="https://linkedin.com/in/your-linkedin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-red-600 transition-colors duration-300"
                >
                  linkedin.com/in/your-linkedin
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="relative rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-8 shadow-[0_0_30px_rgba(255,0,0,0.15)] hover:shadow-[0_0_40px_rgba(255,0,0,0.25)] transition-all duration-300 flex flex-col justify-center items-start text-slate-300"
          >
            <h3 className="text-xl font-semibold mb-4 text-white">
              Let’s Work Together
            </h3>
            <p className="text-slate-300 mb-6 leading-relaxed">
              Whether you are a recruiter, hiring manager, or fellow developer,
              I would love to connect and discuss how I can contribute.
            </p>
            <a
              href="mailto:your.email@example.com"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-red-600 to-red-800 shadow-[0_0_25px_rgba(255,0,0,0.6)] text-white font-medium hover:scale-105 transition-transform duration-300"
            >
              Send Email
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

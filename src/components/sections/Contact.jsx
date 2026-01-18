import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-slate-900">
      <div className="max-w-5xl mx-auto">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 text-center md:text-left"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Get In <span className="text-blue-500">Touch</span>
          </h2>
          <p className="mt-3 text-slate-400 text-lg md:text-base">
            Feel free to contact me for opportunities or collaboration
          </p>
        </motion.div>

        {/* Contact Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
        >
          {/* Left Info */}
          <div className="space-y-6 text-slate-300">
            <p className="leading-relaxed">
              I am currently open to{" "}
              <strong className="text-slate-100">internship and full-time roles</strong>{" "}
              in software development. If you have an opportunity or would like
              to discuss a project, feel free to reach out.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <FaEnvelope className="text-2xl text-blue-500" />
                <a
                  href="mailto:your.email@example.com"
                  className="hover:text-blue-400 transition-colors duration-300"
                >
                  your.email@example.com
                </a>
              </div>

              <div className="flex items-center gap-4">
                <FaGithub className="text-2xl text-blue-500" />
                <a
                  href="https://github.com/your-username"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors duration-300"
                >
                  github.com/your-username
                </a>
              </div>

              <div className="flex items-center gap-4">
                <FaLinkedin className="text-2xl text-blue-500" />
                <a
                  href="https://linkedin.com/in/your-linkedin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors duration-300"
                >
                  linkedin.com/in/your-linkedin
                </a>
              </div>
            </div>
          </div>

          {/* Right CTA */}
          <div className="flex flex-col justify-center items-start bg-slate-800 rounded-2xl p-8">
            <h3 className="text-xl font-semibold mb-4 text-white">
              Let’s Work Together
            </h3>
            <p className="text-slate-300 mb-6 leading-relaxed">
              Whether you are a recruiter, hiring manager, or fellow developer,
              I would love to connect and discuss how I can contribute.
            </p>
            <a
              href="mailto:your.email@example.com"
              className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 transition-colors duration-300 font-medium text-white"
            >
              Send Email
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;

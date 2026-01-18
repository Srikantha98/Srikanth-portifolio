import React from "react";
import { motion } from "framer-motion";

const educationData = [
  {
    degree: "M.Tech in Computer Science and Engineering",
    institution: "Your University / College Name",
    duration: "2024 – Present",
    details: [
      "Currently pursuing 2nd Year M.Tech in Computer Science and Engineering",
      "Strong foundation in Data Structures, Algorithms, DBMS, OS, and Computer Networks",
      "Focused on full-stack development and scalable system design",
    ],
  },
  {
    degree: "B.Tech in Computer Science and Engineering",
    institution: "Your University / College Name",
    duration: "2020 – 2024",
    details: [
      "Completed undergraduate studies in Computer Science and Engineering",
      "Worked on academic and mini projects related to web and backend development",
      "Developed interest in software engineering and real-world problem solving",
    ],
  },
];

const Education = () => {
  return (
    <section id="education" className="py-20 px-6 bg-slate-950">
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
            Education <span className="text-blue-500">Background</span>
          </h2>
          <p className="mt-3 text-slate-400 text-lg md:text-base">
            Academic qualifications and focus areas
          </p>
        </motion.div>

        {/* Education Timeline */}
        <div className="space-y-10">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="relative pl-8 md:pl-10 border-l-2 border-blue-500"
            >
              {/* Timeline Dot */}
              <span className="absolute left-[-10px] top-2 w-4 h-4 rounded-full bg-blue-500"></span>

              <h3 className="text-xl md:text-2xl font-semibold text-white">
                {edu.degree}
              </h3>
              <p className="text-slate-400 mt-1 md:text-lg">
                {edu.institution} • {edu.duration}
              </p>

              <ul className="mt-4 list-disc list-inside text-slate-300 space-y-2 md:text-base">
                {edu.details.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Education;

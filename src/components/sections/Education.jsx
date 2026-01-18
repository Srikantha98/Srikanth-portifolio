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
    <section
      id="education"
      className="relative py-24 px-6 md:px-12 bg-slate-950 overflow-hidden"
    >
      {/* Floating Background Rectangles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-lg bg-white/5 border border-white/10 shadow-[0_0_25px_rgba(255,0,0,0.1)]"
          style={{
            width: `${80 + i * 20}px`,
            height: `${20 + i * 10}px`,
            top: `${(i * 15) % 90}%`,
            left: `${(i * 12) % 90}%`,
          }}
          animate={{
            x: [0, i % 2 === 0 ? 20 : -20, 0],
            y: [0, i % 2 === 0 ? -15 : 15, 0],
            rotate: [0, i % 2 === 0 ? 6 : -6, 0],
          }}
          transition={{
            duration: 14 + i,
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
          className="mb-16 text-center md:text-left"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Education{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-800">
              Timeline
            </span>
          </h2>
          <p className="mt-3 text-slate-400 text-lg md:text-base">
            Academic qualifications and focus areas
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative flex flex-col md:flex-col">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-red-600/40 h-full"></div>

          {/* Timeline Items */}
          {educationData.map((edu, index) => {
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isLeft ? -50 : 50, y: 0 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative flex justify-between items-start mb-16 md:mb-20"
              >
                {/* Empty div to push right side cards */}
                {isLeft && <div className="w-1/2"></div>}

                <div className="w-full md:w-1/2 relative px-4">
                  {/* Dot */}
                  <span className="absolute top-6 left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-red-600 shadow-lg z-20"></span>

                  {/* Card */}
                  <div
                    className={`relative rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-6 md:p-8 shadow-[0_0_30px_rgba(255,0,0,0.15)] hover:shadow-[0_0_45px_rgba(255,0,0,0.25)] hover:-translate-y-1 transition-all duration-300`}
                  >
                    <h3 className="text-xl md:text-2xl font-semibold text-white text-left">
                      {edu.degree}
                    </h3>
                    <p className="text-slate-400 mt-1 md:text-lg text-left">
                      {edu.institution} • {edu.duration}
                    </p>
                    <ul className="mt-4 list-disc list-inside text-slate-300 space-y-2 md:text-base text-left">
                      {edu.details.map((point, idx) => (
                        <li key={idx}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Empty div to push left side cards */}
                {!isLeft && <div className="w-1/2"></div>}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Education;

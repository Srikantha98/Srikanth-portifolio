import React from "react";
import { motion } from "framer-motion";

const SectionTitle = ({ title, highlight, subtitle }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="mb-12 text-center md:text-left"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-white">
        {title}{" "}
        <span className="text-blue-500">{highlight}</span>
      </h2>

      {subtitle && (
        <p className="mt-3 text-slate-400 text-lg md:text-base">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionTitle;

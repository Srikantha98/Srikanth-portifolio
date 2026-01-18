import React from "react";
import { motion } from "framer-motion";

const SectionTitle = ({ title, highlight, subtitle, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="mb-12 text-center md:text-left"
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
        {title}{" "}
        {highlight && (
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-pink-400">
            {highlight}
          </span>
        )}
      </h2>

      {subtitle && (
        <p className="mt-3 text-slate-400 text-lg md:text-base max-w-2xl">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionTitle;

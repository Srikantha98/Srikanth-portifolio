import React from "react";

const Card = ({ children, className = "" }) => {
  return (
    <div
      className={`bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
